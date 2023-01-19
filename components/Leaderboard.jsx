'use client'

import React, { useCallback, useEffect, useMemo, useState } from "react"
import LeaderboardList from "./LeaderboardList"

const MemoLB = React.memo(LeaderboardList)

const Leaderboard = ({ leaderboards }) => {

    const [lb, setLb] = useState({lb: leaderboards.hypixelwins, name: "Hypixel Wins", color: 'text-yellow-500'})
    const [modal, setModal] = useState(false)

    const escFunction = useCallback((event) => {
        if (event.key === "Escape") {
            setModal(false)
        }
    }, [])
    
    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);
    
        return () => {
            document.removeEventListener("keydown", escFunction, false);
        }
    }, [])

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
                <>
                    <div onClick={() => {setModal(false)}} className="z-50 top-0 left-0 fixed w-screen h-screen backdrop-blur-md flex justify-center items-center "/>
                    <div className="z-[60] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] fixed flex justify-center items-center flex-wrap max-w-max rounded-lg shadow-lg bg-[#202020] border border-[#404040] w-3/4 h-3/4 p-10 gap-10 overflow-y-auto">
                        <img onClick={() => {setModal(false)}} className="cursor-pointer absolute top-2 right-2 w-6 h-6 duration-500 hover:rotate-180 invert opacity-40" src={'/images/cross.png'} />
                        {lbs.map(({lb, name, color} = lb) => (
                            <div 
                                key={name}
                                className="cursor-pointer hover:scale-105 duration-200 bg-[#404040] w-fit h-fit p-4 rounded-lg shadow-lg border border-[#606060]"
                                onClick={() => {setLb({lb, name, color}), setModal(false)}}
                            >
                                <p className={`font-coda text-xl ${color}`}>{name}</p>
                            </div>
                        ))}
                    </div>
                </>
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
            <MemoLB lb={lb} />
        </>
    )
}

export default Leaderboard