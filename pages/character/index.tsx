import type { NextPage,GetServerSideProps,InferGetServerSidePropsType } from 'next'
import { useRouter } from "next/router";
import { CharacterModel } from '../../interface/character';
import CharacterBox from '../../components/feature/character/CharacterBox';
import Header from '../../components/global/Header';
import KeepAlive from 'react-activation'

const Characters: NextPage = ({ characters } : InferGetServerSidePropsType<typeof getServerSideProps>) => {
    console.log(characters)
    const characterlist = characters.map((character:CharacterModel) => new CharacterModel(character));
    const router = useRouter();
    let offset:string = router.query.page?.toString() ?? '1';

    const getMorePhotos = () => {
        router.replace("/character/index", `/character?page=${parseInt(offset)+1}`);
    };

    return (
        <div className='flex flex-1 flex-col justify-center items-center py-4 min-h-min'>
            <Header title='List!' key='head-list'></Header>
            {
                characterlist && characterlist.length == 0 ? 
                <h1 className='text-3xl font-bold my-7'>캐릭터가 없습니다.</h1> :
                <h1 className='text-3xl font-bold my-7'>캐릭터 리스트 { parseInt(offset) }페이지 </h1>
            }
            {
                characterlist && characterlist.length == 0 ? 
                <h3 className='text-xl font-semibold'>there is no character yet</h3> : 
                <KeepAlive>
                    <div className='flex justify-center items-center flex-wrap'>
                        {characterlist.map((character:CharacterModel) => (
                            <CharacterBox 
                            key={character.id} 
                            data={character}
                            ></CharacterBox>
                        ))}
                    </div>
                </KeepAlive>
            }
            {
                characterlist.length != 0 && 
                <div className='py-4 px-12 my-8 border border-2 rounded-md border-gray-400 cursor-pointer hover:border-blue-500 ' onClick={() => getMorePhotos()} >
                    다음페이지 =&gt; { parseInt(offset)+1 }
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
        const res:any = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
        const res2 = await res.json();
        const characters = res2.results;
        console.log(characters)
        return {
            props:{ 
                characters
            }
        }
    }catch(e) {
        console.log(e)
        let characters:Array<any> = [];
        return {
            props:{
                characters
            }
        }
    }
}

export default Characters;