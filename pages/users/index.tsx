import type { NextPage,GetServerSideProps,InferGetServerSidePropsType } from 'next'
import { useRouter } from "next/router";
import { UserModel } from '../interface/user';
import Head from 'next/head'

const Users: NextPage = ({ users } : InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const router = useRouter();

    const GoToUserDetail = (id:number) => {
        router.push("/users/[id]", `/users/${id}`);
    };

    let head;

    if(users.length == 0) {
        head = <h1>사용자가 없습니다.</h1>
    } else { 
        head = <h1>사용자 리스트</h1>
    }
    const userlist = users.map((user:UserModel) => new UserModel(user));
    
    userlist.map((user:UserModel) => {
        console.log('-------------------')
        console.log(user.id)
    });

    console.log(userlist)

    return (
        <div>
            {userlist.length == 0 ? <h1>사용자가 없습니다.</h1> : <h1>사용자 리스트</h1>}
            {
                userlist.length == 0 ? 
                <div>there is no users yet</div> : 
                <ul>
                    {userlist.map((user:UserModel) => (
                    <li key={user.id}>
                        <button onClick={() => GoToUserDetail(user.id)}>{user.name}</button>
                    </li>
                    ))}
                </ul>
            }
        </div>
    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {

    try{
        console.log('get datas')
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await res.json();
        return {
            props:{ 
                users
            }
        }
    }catch(e) {
        console.log(e)
        let users:Array<any> = [];
        return {
            props:{
                users
            }
        }
    }
}

export default Users