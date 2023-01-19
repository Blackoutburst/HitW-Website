'use client'

import Link from "next/link"
import { colorFromClub } from "../libs/color"
import PlayerHead from "./PlayerHead"
import { formatNumber } from "@/libs/number"
import React from "react"

const MemoHead = React.memo(PlayerHead)

const LeaderboardList = ({ lb }) => {

    return (
        <div className="flex flex-col flex-wrap max-w-screen mx-20 mb-20">
            {lb.lb?.filter(user => user.uuid !== 'unknown').map((user, index) => (
                <Link key={user.uuid} prefetch={false} href={`/players/${user.uuid}`}>
                    <div className={`w-full p-4 shadow-lg ${index == 0 ? "rounded-t-lg border-t border-x" : index == lb.lb?.filter(user => user.uuid !== 'unknown').length-1 ? "rounded-b-lg border-b border-x" : 'border-x' } ${index % 2 == 0 ? "bg-[#404040] border-[#606060]" : "bg-[#303030] border-[#505050]"}`}>
                        <div className="flex w-full items-center justify-between">
                            <div className="flex items-center space-x-10">
                                <p className={`w-14 font-coda text-xl text-transparent bg-clip-text bg-gradient-to-r ${index == 0 ? "from-amber-300 to-yellow-500" : index == 1 ? "from-white to-gray-400" : index == 2 ? "from-amber-500 to-yellow-500" : "from-stone-300 to-stone-500"}`}>{`#${index + 1}`}</p>
                                <MemoHead uuid={user.uuid} />
                                <p className={`font-coda text-xl text-transparent bg-clip-text bg-gradient-to-r ${colorFromClub((user.club > 500) ? 500 : user.club - user.club % 50)}`}>{`[${((user.club > 500) ? 500 : user.club - user.club % 50)}+] ${user?.name}`}</p>
                            </div>
                            <p className={`font-coda text-xl text-transparent bg-clip-text bg-gradient-to-r ${index == 0 ? "from-amber-300 to-yellow-500" : index == 1 ? "from-white to-gray-400" : index == 2 ? "from-amber-500 to-yellow-500" : "from-stone-300 to-stone-500"}`}>{`${formatNumber(user.point)}`}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default LeaderboardList