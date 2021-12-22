import * as React from 'react'
import { useRouter } from "next/router";
import Link from 'next/link'
import Image from 'next/image'
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
        <div className='m-4 p-6 w-1/5 text-left rounded-md border-2 border-gray-300 cursor-pointer hover:border-blue-500 hover:text-blue-500' onClick={() => goDetail()}>
            <div className='flex justify-center items-center'>
                <Image src={`${character.image}`} alt={`characterbox-${character.id}`} width={100} height={100}/>
            </div>
            
            <div className='flex align-middle my-2'>
                <h3 className='w-1/3 my-auto mx-0'>ID</h3>
                <h4 className='w-2/3'>{character.id}</h4>
            </div>
            <div className='flex align-middle my-2'>
                <h3 className='w-1/3 my-auto mx-0'>이름</h3>
                <h4 className='w-2/3 overflow-hidden truncate'>{character.name}</h4>
            </div>
            <button 
            className='py-3 px-0 w-full border-2 border-gray bg-white text-black rounded-lg cursor-pointer hover:border-purple-500 hover:text-purple-800'
            onClick={(e) => {
                e.stopPropagation(); 
                console.log('click!')
            }}>Click!</button>
        </div>
    )
}

export default CharacterBox