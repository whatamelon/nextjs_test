import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import Link from "next/Link"; 
import { useRouter } from 'next/router'; 
import { useEffect, useState } from 'react';
import Image from 'next/image'
import { CharacterModel } from "../../interface/character";

const CHARACTER_ID: NextPage = ({ character } : InferGetServerSidePropsType<typeof getServerSideProps>) => {
    let characterObj = new CharacterModel(character);
    useEffect(() => {
        console.log(window.history)
    },[])
    return (
        <>
            <div className='flex flex-1 flex-row justify-center items-start py-12 min-h-min'>
                <div className="w-1/3">
                    <div className='justify-center items-center text-center'>
                        <Image className="w-full h-auto" src={`${characterObj.image}`} alt={`characterbox-${characterObj.id}`} width={300} height={300}/>
                        
                    </div>
                </div>
                <div className="w-2/3">
                    <h4 className='text-3xl font-semibold'>Hi! 👋 This is <span className='text-blue-700 font-bold text-4xl'>{characterObj.name}</span></h4> 
                    <h4 className='text-3xl font-semibold'>My Species is <span className='text-blue-700 font-bold text-4xl'>{characterObj.species}</span></h4> 
                    <h4 className='text-3xl font-semibold'>And for now, my Status is <span className='text-blue-700 font-bold text-4xl'>{characterObj.status}</span></h4> 
                    <h4 className='mt-1 text-2xl font-semibold'>Origin is <span className='text-blue-700 font-bold text-3xl'>{characterObj.origin.name}</span></h4> 
                    <h4 className='mt-1 text-2xl font-semibold'>Location is <span className='text-blue-700 font-bold text-3xl'>{characterObj.location.name}</span></h4> 
                </div>
            </div>
            <div className="w-full px-40 pb-32">
                <h4 className='text-2xl font-semibold mt-8 mb-2'>Episodes which I appereard ⬇️</h4> 
                <div className='gap-6 columns-4'>
                {characterObj.episode.map((episode:string) => (
                        <h4 
                        key={episode} 
                        className="py-2 text-xl font-medium cursor-pointer hover:text-blue-600 hover:underline hover:font-semibold hover:text-2xl"
                        >Go episode {episode.split('episode/')[1]} &gt; </h4>
                    ))}
                </div>
            </div>
        </>
        
    ); 
}; 

export const getServerSideProps: GetServerSideProps = async (context) => {

    const { id } = context.query ?? '1';
    console.log(id)

    try{
        console.log('get detail data')
        const res = await fetch(`http://rickandmortyapi.com/api/character/${id}`);
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
