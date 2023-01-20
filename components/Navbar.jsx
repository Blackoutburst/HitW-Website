'use client'

import Link from "next/link"
import { useEffect, useState } from "react"

const Navbar = () => {

    const [windowSize, setWindowSize] = useState({width: 0, height: 0})

    useEffect(() => {
        if (typeof window !== 'undefined') {

            function handleResize() {
                setWindowSize({width: window.innerWidth, height: window.innerHeight})
            }
        
            window.addEventListener("resize", handleResize)
            handleResize()

            return () => {
                window.removeEventListener("resize", handleResize)
            }
        }
    }, [windowSize.width])

    return (
        <div className='fixed flex justify-evenly lg:justify-start items-center bottom-0 translate-y-1 lg:translate-y-0 lg:top-0 w-screen h-16 lg:h-20 bg-[#313131] navbar shadow-lg z-40 space-x-2 lg:space-x-20'>
            <Link prefetch={false} href={'/'}>
                <div className='cursor-pointer w-12 h-12 lg:h-16 lg:w-16 relative lg:m-2'>
                    <img
                        className="lg:hover:shadow-lg duration-200 rounded-full"
                        src='/images/favicon.png'
                        alt='home'
                    />
                </div>
            </Link>
            <Link prefetch={false} href={'/players'}>
                <div className="space-x-2 group navbar-link">
                    <img
                        className="lg:group-hover:rotate-6 duration-200 w-12 h-12 lg:h-16 lg:w-16"
                        src='/images/players.png'
                        alt='home'
                    />
                    {windowSize.width >= 1024 && <span>Players</span>}
                </div>
            </Link>
            <Link prefetch={false} href={'/leaderboards'}>
                <div className="space-x-2 group navbar-link">
                    <img
                        className="lg:group-hover:rotate-6 duration-200 w-12 h-12 lg:h-16 lg:w-16"
                        src='/images/lbs.png'
                        alt='home'
                    />
                    {windowSize.width >= 1024 && <span>Leaderboards</span>}
                </div>
            </Link>
            <Link prefetch={false} href={'https://www.blackoutburst.com/test.html'}>
                <div className="space-x-2 group navbar-link">
                    <img
                        className="lg:group-hover:rotate-6 duration-200 w-12 h-12 lg:h-16 lg:w-16"
                        src='/images/wall.png'
                        alt='home'
                    />
                    {windowSize.width >= 1024 && <span>2D HitW</span>}
                </div>
            </Link>
        </div>
    )
}

export default Navbar