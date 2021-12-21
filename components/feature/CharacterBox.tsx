import * as React from 'react'
import { useRouter } from "next/router";
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { useState,useEffect } from 'react';
import { CharacterModel } from '../../pages/interface/character';

const CharacterBox: React.FC<{data: CharacterModel}> = ({data}) => {

    const [character] = useState(data);
 
    const router = useRouter();

    const goDetail = () => {
        router.push({
            pathname:'/character/[id]',
            query:{id:character.id}
        });
    };
    
    return (
        <div className='m-4 p-6 w-1/3 text-left rounded-md border border-gray-300 cursor-pointer hover:border-blue-500 hover:text-blue-500' onClick={() => goDetail()}>
            <Image src={`${character.image}`} alt={`characterbox-${character.id}`} width={100} height={100}/>
            <h4>앨범 ID : {character.id} / 사진 ID : {character.id}</h4>
            <div className='flex align-middle'>
                <h3 className='w-1/3 my-auto mx-0'>이름</h3>
                <h4 className='w-2/3'>{character.name}</h4>
            </div>
            <button 
            className='py-4 px-0 w-full border border-gray bg-white text-black rounded-lg cursor-pointer hover:border-yellow-500 hover:text-yellow-600'
            onClick={(e) => {
                e.stopPropagation(); 
                console.log('click!')
            }}>Click Button!</button>
        </div>
    )
}

export default CharacterBox