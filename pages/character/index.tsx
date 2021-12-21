import type { NextPage,GetServerSideProps,InferGetServerSidePropsType } from 'next'
import { useRouter } from "next/router";
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { useState,useEffect } from 'react';
import { withKeepAlive } from 'react-next-keep-alive';
import { CharacterModel } from '../interface/character';
import CharacterBox from '../../components/feature/CharacterBox';

const Characters: NextPage = ({ chracters } : InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const characterlist = chracters.map((character:CharacterModel) => new CharacterModel(character));
    const router = useRouter();
    let offset:string = router.query.page?.toString() ?? '1';

    const getMorePhotos = () => {
        router.replace("/character/index", `/character?page=${parseInt(offset)+1}`);
    };

    return (
        <div className={styles.main}>
            {
                characterlist.length == 0 ? 
                <h1>캐릭터가 없습니다.</h1> :
                <h1>캐릭터 리스트</h1>
            }
            {
                characterlist.length == 0 ? 
                <h3>there is no character yet</h3> : 
                <div className={styles.grid}>
                    {characterlist.map((character:CharacterModel) => (
                        <CharacterBox 
                        key={character.id} 
                        data={character}
                        ></CharacterBox>
                    ))}
                </div>
            }
            {
                characterlist.length != 0 && 
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
        const res = await fetch(`https://rickandmortyapi.com/api/character?pages=${page}`);
        const chracters = await res.json();
        return {
            props:{ 
                chracters
            }
        }
    }catch(e) {
        console.log(e)
        let chracters:Array<any> = [];
        return {
            props:{
                chracters
            }
        }
    }
}

export default Characters;