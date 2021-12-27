import * as React from 'react'
import { useRouter } from "next/router";
import Image from 'next/image'
import { useState } from 'react';
import { CharacterModel } from '../../../interface/character';

const CharacterBox: React.FC<{data: CharacterModel}> = ({data}) => {

    const [name, changeName] = useState(data.name);
  
    const router = useRouter();

    const goDetail = () => {
        console.log('router!');
        router.push({
            pathname:'/character/[id]',
            query:{id:data.id}
        });
    };
    
    return (
        <div className={`m-4 p-6 w-1/5 flex text-left rounded-sm border-2 border-gray-300 cursor-pointer hover:border-blue-500 hover:text-blue-500`} onClick={() => goDetail()}>
            <div className='w-1/3 flex justify-center items-center mr-8'>
                <Image src={`${data.image}`} alt={`characterbox-${data.id}`} width={100} height={100}/>
            </div>
            <div className='w-2/3'>
                <h4 className='text-2xl font-bold'>#{data.id}</h4>
                <h4 className='w-full text-medium font-medium overflow-hidden truncate mb-4'>{name}</h4>
                <button 
                className='py-1 px-0 w-full border-2 border-gray bg-white text-black rounded-sm cursor-pointer hover:border-purple-500 hover:text-purple-800'
                onClick={(e) => {
                    e.stopPropagation(); 
                    changeName('change!');
                    console.log('click!')
                }}>Click!</button>
            </div>
            
        </div>
    )
}

export default CharacterBox