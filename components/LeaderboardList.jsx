'use client'

import Link from "next/link"
import { colorFromClub } from "../libs/color"
import PlayerHead from "./PlayerHead"
import { formatNumber } from "@/libs/number"
import React, { useEffect, useState } from "react"
import { List } from "react-virtualized"

const LeaderboardList = ({ lb, headerHeight }) => {

    const list = lb.lb?.filter(user => user.uuid !== 'unknown')

    const [windowSize, setWindowSize] = useState({width: 0, height: 0})
    const [listWidth, setListWidth] = useState(0)

    const rowHeight = windowSize.width < 1024 ? 56 : 80

    useEffect(() => {
        if (typeof window !== 'undefined') {

            const style = window.getComputedStyle(document.getElementById("list"), null)
            setListWidth(Number(style.getPropertyValue("width").replace("px", '')))


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

    const renderRow = ({ index, key, style }) => {
        return (
            <div style={style}>
                <Link key={key} prefetch={false} href={`/players/${list[index].uuid}`}>
                    <div className={`w-full p-4 shadow-lg ${index % 2 == 0 ? "bg-[#404040]" : "bg-[#303030]"}`}>
                        <div className="flex w-full items-center justify-between">
                            <div className="flex items-center lg:space-x-10">
                                <p className={`w-14 lg:text-xl text-transparent bg-clip-text bg-gradient-to-r ${index == 0 ? "from-amber-300 to-yellow-500" : index == 1 ? "from-white to-gray-400" : index == 2 ? "from-amber-500 to-yellow-500" : "from-stone-300 to-stone-500"}`}>{`#${index + 1}`}</p>
                                <PlayerHead uuid={list[index].uuid} />
                                <p className={`lg:text-xl text-transparent bg-clip-text bg-gradient-to-r ${colorFromClub((list[index].club > 500) ? 500 : list[index].club - list[index].club % 50)}`}>{`[${((list[index].club > 500) ? 500 : list[index].club - list[index].club % 50)}+] ${list[index]?.name}`}</p>
                            </div>
                            <p className={`lg:text-xl text-transparent bg-clip-text bg-gradient-to-r ${index == 0 ? "from-amber-300 to-yellow-500" : index == 1 ? "from-white to-gray-400" : index == 2 ? "from-amber-500 to-yellow-500" : "from-stone-300 to-stone-500"}`}>{`${formatNumber(list[index].point)}`}</p>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }

    return (
        <div id="list" className="flex flex-col flex-wrap max-w-screen lg:mx-20">
            <List
                className="rounded-lg border-[#606060] border mb-20 scrollbar-hide"
                width={listWidth}
                height={windowSize.height - headerHeight - 20}
                rowHeight={rowHeight}
                rowRenderer={renderRow}
                rowCount={list.length} 
            />
        </div>
    )
}

export default LeaderboardList