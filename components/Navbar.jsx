import Image from "next/image"
import Link from "next/link"

const Navbar = () => {

    return (
        <div className='fixed flex items-center top-0 w-screen h-20 bg-[#313131] shadow-lg z-40 space-x-20'>
            <Link href={'/'}>
                <div className='cursor-pointer h-16 w-16 relative m-2'>
                    <img
                        className="rounded-full"
                        src='/images/favicon.png'
                        alt='home'
                    />
                </div>
            </Link>
            <Link href={'/players'}>
                <div className="navbar-link">
                    <span>Players</span>
                </div>
            </Link>
            <Link href={'/leaderboards'}>
                <div className="navbar-link">
                    <span>Leaderboards</span>
                </div>
            </Link>
            <Link href={'https://www.blackoutburst.com/test.html'}>
                <div className="navbar-link">
                    <span>2D HitW</span>
                </div>
            </Link>
        </div>
    )
}

export default Navbar