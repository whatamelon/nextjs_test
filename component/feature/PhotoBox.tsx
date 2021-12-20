import * as React from 'react'
import { useRouter } from "next/router";
import Link from 'next/link'
import Image from 'next/image'
import { PhotoModel } from '../../pages/interface/photo'
import styles from '../../styles/Home.module.css'
import { useState,useEffect } from 'react';

const PhotoBox: React.FC<{data: PhotoModel}> = ({data}) => {

    const [photo] = useState(data);

    useEffect(() => {
        updateVal('change');
    });

    const updateVal = (val:string) => {
        photo.title = val;
    }

    const router = useRouter();

    const goDetail = () => {
        router.push("/photos/[id]", `/photos/${photo.id}`);
    };
    
    return (
        <div className={styles.card} onClick={() => goDetail()}>
            <Image src={`${photo.url}`} alt={`photobox-${photo.id}`} width={100} height={100}/>
            <h4>앨범 ID : {photo.albumId} / 사진 ID : {photo.id}</h4>
            <div className={styles.vflex}>
                <h3>제목</h3>
                <h4>{photo.title}</h4>
            </div>
            <button 
            className={styles.btnChg} 
            onClick={(e) => {
                e.stopPropagation(); 
                updateVal('val')
            }}>Click Button!</button>
        </div>
    )
}

export default PhotoBox