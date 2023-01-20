'use client'

import Image from "next/image"
import { useState } from "react"

import { colorFromClub } from "../libs/color"

const PlayerRender = ({user}) => {

    const [error, setError] = useState(false)

    const maxScore = user?.hypixel.stats.qualification > user?.hypixel.stats.finals ? user?.hypixel.stats.qualification : user?.hypixel.stats.finals
    const club = (maxScore > 500) ? 500 : maxScore - maxScore % 50

    return (
        <div className="flex flex-col items-center w-fit space-y-10 h-80">
            <p className={`text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r ${colorFromClub(club)}`}>{`[${club}+] ${user?.name}`}</p>
            <div className='relative w-40 h-40'>
                <Image
                    width={512}
                    height={512}
                    src={!error ? `https://visage.surgeplay.com/full/512/${user?.uuid}` : '/images/loading.png'}
                    placeholder='/images/loading.png'
                    onError={() => setError(true)}
                    alt="Player render"
                />
            </div>
        </div>
    )
}

export default PlayerRender