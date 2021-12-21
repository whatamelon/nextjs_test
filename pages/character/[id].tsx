import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import Link from "next/Link"; 
import { useRouter } from 'next/router'; 
import { useEffect, useState } from 'react';
import styles from '../../styles/Home.module.css'
import { CharacterModel } from "../interface/character";

const CHARACTER_ID: NextPage = ({ chracter } : InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const [character] = useState(chracter);
    useEffect(() => {
        console.log(window.history)
    },[])
    return (
        <div className='container mx-auto'>
            <h4 className=''> {character.name} 페이지 </h4> 
        </div>
        
    ); 
}; 

export const getServerSideProps: GetServerSideProps = async (context) => {

    const { id } = context.query ?? '1';
    console.log(id)

    try{
        console.log('get detail data')
        const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const character = await res.json();
        return {
            props:{ 
                character
            }
        }
    }catch(e) {
        console.log(e)
        let character:CharacterModel = new CharacterModel({});
        return {
            props:{
                character
            }
        }
    }
}


export default CHARACTER_ID;
