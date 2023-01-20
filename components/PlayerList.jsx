'use client'

import Link from "next/link"
import { useEffect, useState } from "react"
import { colorFromClub } from "../libs/color"

const PlayerList = ({ users }) => {

    const [filter, setFilter] = useState('')
    const [scrollY, setScrollY] = useState(0)

    const list = users?.filter(user => user.name.toUpperCase().includes(filter.toUpperCase()) && user.uuid !== 'unknown')

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
            <div className="h-32 lg:h-40">
                <div className={`backdrop-blur-sm z-40 fixed flex justify-center items-center flex-col w-full bg-[#202020aa] duration-200 h-24 lg:h-32 border-[#404040] ${scrollY !== 0 && 'border-b-2 shadow-lg rounded-b-xl'}`}>
                    <input className="blur-none outline-none lg:text-xl w-[90%] lg:w-2/3 bg-[#404040] rounded-lg p-4 text-gray-200" 
                        placeholder="Search player" 
                        type="text" 
                        id="textfield"
                        onChange={(e) => setFilter(e.target.value)}
                    />
                </div>
            </div>
            <div className="flex flex-row flex-wrap max-w-screen justify-evenly gap-5 mx-5 lg:gap-10 lg:mx-20 mb-20">
                {list.map(user => (
                    <a key={user.uuid} href={`/players/${user.uuid}`}>
                        <div className="data-button">
                            <p className={`text-base lg:text-xl text-transparent bg-clip-text bg-gradient-to-r ${colorFromClub((user.club > 500) ? 500 : user.club - user.club % 50)}`}>{`[${((user.club > 500) ? 500 : user.club - user.club % 50)}+] ${user?.name}`}</p>
                        </div>
                    </a>
                ))}
            </div>
        </>
    )
}

export default PlayerList