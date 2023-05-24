'use client'
import Link from 'next/link'
import Image from 'next/image'
import { getUserStateFromLocalStorage } from '@utils/localStorageUtil'
import { useEffect } from 'react'

const Logo = () => {
    return (
        <Link href='/' className='flex gap-2 flex-center'>
        <Image
            src='assets/images/dsabook.svg'
            alt='logo'
            width={40}
            height={40}
            className='object-contain'
        />
        </Link>
    )
}

const LoggedInUI = () => {
    return (<div className='flex gap-3 md:gap-5'>
        <Link href='/sign-in'><button type='button' className="outline_btn">
            Sign Out
        </button></Link>

        <Link href="/profile">
            <Image
                src='assets/images/profile.svg'
                alt='profile'
                width={37}
                height={37}
                className='rounded-full'
            />
        </Link>
    </div>)
}

const LoggedOutUI = () => {
    return (
        
            <div className='sm:flex hidden'>
                <Link href='/sign-in'><button type='button' className="outline_btn">
                    Sign in
                </button></Link>
            </div>
    )
}


const Nav: React.FC = () => {
    let isUserLoggedIn ;
    useEffect(()=>{
        isUserLoggedIn = getUserStateFromLocalStorage();
        console.log("inside use effect")
        console.log(isUserLoggedIn)
    },[isUserLoggedIn]) 
     
    return (
        <nav className='flex-between w-full mb-16 pt-3'>
            <Logo/>
            <div className='sm:flex hidden'>
                {!isUserLoggedIn && <h1>Pagol ?</h1>}
                {isUserLoggedIn ? <LoggedInUI /> : <LoggedOutUI/>}
            </div>
        </nav>
    );
}
export default Nav;