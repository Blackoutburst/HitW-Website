import Image from "next/image"
import Link from "next/link"

const Navbar = () => {

    return (
        <div className='fixed flex justify-evenly lg:justify-start items-center bottom-0 translate-y-1 lg:translate-y-0 lg:top-0 w-screen h-16 lg:h-20 bg-[#313131] navbar shadow-lg z-40 space-x-2 lg:space-x-20'>
            <Link href={'/'}>
                <div className='cursor-pointer w-12 h-12 lg:h-16 lg:w-16 relative lg:m-2'>
                    <img
                        className="lg:hover:shadow-lg duration-200 rounded-full"
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