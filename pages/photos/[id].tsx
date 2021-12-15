import Link from "next/Link"; 
import { useRouter } from 'next/router'; 
import { useEffect } from 'react';
import styles from '../../styles/Home.module.css'

const PHOTO_ID = () => { 
    const router = useRouter(); 
    const { id } = router.query; 
    useEffect(() => {
        console.log(window.history)
    },[])
    return ( 
        <div className={styles.main}>
            <div className={styles.container}>
                <h4 className={styles.title}> PHOTO_ID  :  {id} 페이지 </h4> 
            </div>
        </div>
        
    ); 
}; 

export default PHOTO_ID;
