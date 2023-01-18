'use client'

import Link from "next/link"
import { useState } from "react"
import { colorFromClub } from "../libs/color"
import PlayerHead from "./PlayerHead"
import { formatNumber } from "@/libs/number"

const Leaderboard = ({ leaderboards }) => {

    const [lb, setLb] = useState({lb: leaderboards.hypixelwins, name: "Hypixel Wins", color: 'text-yellow-500'})
    const [modal, setModal] = useState(false)

    const lbs = [
        {
            lb: leaderboards.hypixelwins, 
            name: "Hypixel Wins", 
            color: 'text-yellow-500'
        },
        {
            lb: leaderboards.hypixelwall, 
            name: "Hypixel Walls", 
            color: 'text-orange-500'
        },
        {
            lb: leaderboards.hypixelqualification, 
            name: "Hypixel Qualification", 
            color: 'text-red-500'
        },
        {
            lb: leaderboards.hypixelfinals, 
            name: "Hypixel Finals", 
            color: 'text-fuchsia-500'
        },
        {
            lb: leaderboards.hypixeltotal, 
            name: "Hypixel Total Score", 
            color: 'text-purple-500'
        },
        {
            lb: leaderboards.hypixeltotalapi, 
            name: "Hypixel Total Score (API)", 
            color: 'text-blue-500'
        },
        {
            lb: leaderboards.hypixelchallenges, 
            name: "Hypixel Challenges", 
            color: 'text-cyan-500'
        },
        {
            lb: leaderboards.hypixeloverall, 
            name: "Hypixel Overall Rank", 
            color: 'text-green-500'
        },
        {
            lb: leaderboards.practicequalification, 
            name: "Practice Qualification", 
            color: 'text-yellow-500'
        },
        {
            lb: leaderboards.practicefinals, 
            name: "Practice Finals", 
            color: 'text-orange-500'
        },
        {
            lb: leaderboards.practicelobby, 
            name: "Practice Lobby", 
            color: 'text-red-500'
        },
        {
            lb: leaderboards.practicewidequalification, 
            name: "Practice Wide Qualification", 
            color: 'text-fuchsia-500'
        },
        {
            lb: leaderboards.practicewidefinals, 
            name: "Practice Wide Finals", 
            color: 'text-purple-500'
        },
        {
            lb: leaderboards.practicetotal, 
            name: "Practice Total Score", 
            color: 'text-blue-500'
        },
        {
            lb: leaderboards.practiceoverall, 
            name: "Practice Overall Rank", 
            color: 'text-green-500'
        },
    ]

    return (
        <>
            {modal &&
                <div className="z-50 top-0 left-0 absolute w-screen h-screen backdrop-blur-md flex justify-center items-center ">
                    <div className="flex justify-center items-center flex-wrap max-w-max rounded-lg shadow-lg bg-[#202020] border border-[#404040] w-3/4 h-3/4 p-10 gap-10">
                        {lbs.map(({lb, name, color} = lb) => (
                            <div 
                                className="cursor-pointer hover:scale-105 duration-200 bg-[#404040] w-fit h-fit p-4 rounded-lg shadow-lg border border-[#606060]"
                                onClick={() => {setLb({lb, name, color}), setModal(false)}}
                            >
                                <p className={`font-coda text-xl ${color}`}>{name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            }
            <div className='h-24'>
                <div 
                    className='cursor-pointer backdrop-blur-sm z-40 fixed flex justify-center items-center flex-col w-full bg-[#202020aa] duration-200 border-[#404040] border-b-2 shadow-lg h-20'
                    onClick={() => setModal(true)}
                >
                    <p className={`duration-200 font-coda text-3xl ${lb.color}`}>{lb.name}</p>
                    <p className='duration-200 font-coda text-lg text-white'>
                        (Click to change)</p>
                </div>
            </div>
            <div className="flex flex-col flex-wrap max-w-screen mx-20 mb-20">
                {lb.lb?.filter(user => user.uuid !== 'unknown').map((user, index) => (
                    <Link key={user.uuid} prefetch={false} href={`/players/${user.uuid}`}>
                        <div className={`w-full p-4 shadow-lg ${index == 0 ? "rounded-t-lg border-t border-x" : index == lb.lb?.filter(user => user.uuid !== 'unknown').length-1 ? "rounded-b-lg border-b border-x" : 'border-x' } ${index % 2 == 0 ? "bg-[#404040] border-[#606060]" : "bg-[#303030] border-[#505050]"}`}>
                            <div className="flex w-full items-center justify-between">
                                <div className="flex items-center space-x-10">
                                    <p className={`w-14 font-coda text-xl text-transparent bg-clip-text bg-gradient-to-r ${index == 0 ? "from-amber-300 to-yellow-500" : index == 1 ? "from-white to-gray-400" : index == 2 ? "from-amber-500 to-yellow-500" : "from-stone-300 to-stone-500"}`}>{`#${index + 1}`}</p>
                                    <PlayerHead uuid={user.uuid} />
                                    <p className={`font-coda text-xl text-transparent bg-clip-text bg-gradient-to-r ${colorFromClub((user.club > 500) ? 500 : user.club - user.club % 50)}`}>{`[${((user.club > 500) ? 500 : user.club - user.club % 50)}+] ${user?.name}`}</p>
                                </div>
                                <p className={`font-coda text-xl text-transparent bg-clip-text bg-gradient-to-r ${index == 0 ? "from-amber-300 to-yellow-500" : index == 1 ? "from-white to-gray-400" : index == 2 ? "from-amber-500 to-yellow-500" : "from-stone-300 to-stone-500"}`}>{`${formatNumber(user.point)}`}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default Leaderboard