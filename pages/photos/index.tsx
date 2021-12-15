import type { NextPage,GetServerSideProps,InferGetServerSidePropsType } from 'next'
import { useRouter } from "next/router";
import { PhotoModel } from '../interface/photo';
import PhotoBox from '../../component/feature/PhotoBox';
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { useEffect } from 'react';
import { withKeepAlive } from 'react-next-keep-alive';

const Photos: NextPage = ({ photos } : InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const photolist = photos.map((photo:PhotoModel) => new PhotoModel(photo));
    const router = useRouter();
    let offset:string = router.query.page?.toString() ?? '1';
    let limit:number = 10;

    useEffect(() => {
        console.log(window.history)
    },[])

    const getMorePhotos = () => {
        router.replace("/photos/index", `/photos?page=${parseInt(offset)+1}`);
    };

    return (
        <div className={styles.main}>
            {
                photolist.length == 0 ? 
                <h1>사진이 없습니다.</h1> :
                <h1>사진 리스트 {(parseInt(offset)-1)*10} ~ {((parseInt(offset)-1)*10)+10}</h1>
            }
            {
                photolist.length == 0 ? 
                <h3>there is no photos yet</h3> : 
                <div className={styles.grid}>
                    {photolist.map((photo:PhotoModel) => (
                        <PhotoBox key={photo.id} data={photo}></PhotoBox>
                        // <button key={photo.id} onClick={() => GoTophotoDetail(photo.id)}>{photo.title}</button>
                    ))}
                </div>
            }
            {
                photolist.length != 0 && 
                <div className={styles.btnMore} onClick={() => getMorePhotos()} >
                    다음페이지
                    {/* Now page {(offset/10)+1} / Go to {((offset+10)/10)+1} */}
                </div>
            }
        </div>
    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {

    const page:string = context.query.page?.toString() ?? '1';
    console.log(page)

    try{
        console.log('get datas')
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=${(parseInt(page)-1)*10}&_end=${((parseInt(page)-1)*10)+10}`);
        const photos = await res.json();
        return {
            props:{ 
                photos
            }
        }
    }catch(e) {
        console.log(e)
        let photos:Array<any> = [];
        return {
            props:{
                photos
            }
        }
    }
}

export default Photos;