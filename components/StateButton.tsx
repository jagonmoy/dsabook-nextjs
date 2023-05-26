import Link from 'next/link'
import Image from 'next/image'

const LoggedInUI : React.FC = () => {
    return (<div className='flex gap-3 md:gap-5'>
        <Link href='/sign-in'>
            <button type='button' className="outline_btn" 
            onClick={()=>
                localStorage.setItem('loggedIn','No')
                
            }>
            Sign Out
            </button>
        </Link>

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


const StateButton: React.FC = () => {
   
    return (
            <nav className='sm:flex hidden'>
                <LoggedInUI/> 
                {/* { loggedIn === 'No' && <LoggedOutUI/>} */}
            </nav> 
    );
}
export default StateButton;