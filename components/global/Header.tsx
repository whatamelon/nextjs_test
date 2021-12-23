import { useRouter } from "next/router";
import * as React from 'react'

const Header: React.FC<{title:string}> = ({title}) => {

    const router = useRouter();

    const goBack = () => {
        router.back();
    }

    return (
        <div className="w-full flex static top-0 h-24 px-32 py-8">
            <h3 onClick={() => goBack()} className="text-3xl font-bold text-black pr-12 cursor-pointer">⬅️</h3>
            <h3 className="text-3xl font-bold text-black">{title}</h3>
        </div>
    )
}

export default Header