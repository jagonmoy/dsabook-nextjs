'use client'
import Link from 'next/link'
import Image from 'next/image'
import { selectUserState } from '@redux/slices/userSlice'
import { useAppSelector } from '@redux/hooks'

interface Props {
}

const Nav: React.FC<Props> = () => {
    const isUserLoggedIn = useAppSelector(selectUserState)
    return (
        <nav className='flex-between w-full mb-16 pt-3'>
            <Link href='/' className='flex gap-2 flex-center'>
                <Image
                    src='assets/images/dsabook.svg'
                    alt='logo'
                    width={40}
                    height={40}
                    className='object-contain'
                />
            </Link>
            <div className='sm:flex hidden'>
            {isUserLoggedIn? (
                <div className = 'flex gap-3 md:gap-5'>
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
                </div>
            ):(
              <div className='sm:flex hidden'>
               <Link href='/sign-in'><button type='button' className="outline_btn">
                        Sign in
                </button></Link>
              </div>
            )}
        </div>
        </nav>
    );
}
export default Nav;