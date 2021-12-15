import Link from "next/Link"; 
import { useRouter } from 'next/router'; 

const USER_ID = () => { 
    const router = useRouter(); 
    const { id } = router.query; 
    console.log(router, id);
    return ( 
        <div> USER {id} 페이지 ! </div> 
    ); 
}; 

export default USER_ID;
