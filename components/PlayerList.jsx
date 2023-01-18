'use client'

import Link from "next/link"
import { useEffect, useState } from "react"
import { colorFromClub } from "../libs/color"

const PlayerList = ({ users }) => {

    const [filter, setFilter] = useState('')
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleScroll = () => {
                setScrollY(window.pageYOffset)
            }
    
            handleScroll()
            window.addEventListener("scroll", handleScroll)

            return () => {
                window.removeEventListener("scroll", handleScroll)
            }
        }
    }, [])

    return (
        <>
            <div className="h-32">
                <div className={`z-40 fixed flex justify-center items-center flex-col w-full bg-[#202020] duration-200 h-32 border-[#404040] ${scrollY !== 0 && 'border-b-2 shadow-lg rounded-b-xl'}`}>
                    <input className="blur-none outline-none font-coda text-xl w-2/3 bg-[#404040] rounded-lg p-4 text-gray-200" 
                        placeholder="Search player" 
                        type="text" 
                        id="textfield"
                        onChange={(e) => setFilter(e.target.value)}
                    />
                </div>
            </div>
            <div className="flex flex-row flex-wrap max-w-screen justify-evenly gap-10 mx-20">
                {users?.filter(user => user.name.includes(filter)).map(user => (
                    <Link href={`/players/${user.uuid}`}>
                        <div className="hover:scale-105 duration-200 bg-[#404040] p-4 rounded-lg shadow-lg border border-[#606060]">
                            <p className={`font-coda text-xl text-transparent bg-clip-text bg-gradient-to-r ${colorFromClub((user.club > 500) ? 500 : user.club - user.club % 50)}`}>{`[${((user.club > 500) ? 500 : user.club - user.club % 50)}+] ${user?.name}`}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default PlayerList