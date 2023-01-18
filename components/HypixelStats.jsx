import { formatNumber } from "../libs/number"

const HypixelStats = ({user}) => {

    return (
        <div className="flex flex-col w-fit space-y-3 w-64">
            <p className='font-coda text-3xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400 text-center mb-2'>Hypixel</p>
            <div className="flex justify-between">
                <p className='font-coda text-xl text-orange-400'>{`Wins: ${formatNumber(user?.hypixel.stats.wins)}`}</p>
                <p className='font-coda text-xl text-amber-400'>{`(#${user?.hypixel.positions.wins})`}</p>
            </div>
            <div className="flex justify-between">
                <p className='font-coda text-xl text-orange-400'>{`Walls: ${formatNumber(user?.hypixel.stats.walls)}`}</p>
                <p className='font-coda text-xl text-amber-400'>{`(#${user?.hypixel.positions.walls})`}</p>
            </div>
            <div className="flex justify-between">
                <p className='font-coda text-xl text-orange-400'>{`Qualification: ${formatNumber(user?.hypixel.stats.qualification)}`}</p>
                <p className='font-coda text-xl text-amber-400'>{`(#${user?.hypixel.positions.qualification})`}</p>
            </div>
            <div className="flex justify-between">
                <p className='font-coda text-xl text-orange-400'>{`Finals: ${formatNumber(user?.hypixel.stats.finals)}`}</p>
                <p className='font-coda text-xl text-amber-400'>{`(#${user?.hypixel.positions.finals})`}</p>
            </div>
            <div className="flex justify-between">
                <p className='font-coda text-xl text-orange-400'>{`Total score: ${formatNumber(user?.hypixel.stats.total)}`}</p>
                <p className='font-coda text-xl text-amber-400'>{`(#${user?.hypixel.positions.total})`}</p>
            </div>
            <div className="flex justify-between">
                <p className='font-coda text-xl text-orange-400'>{`Total score (API): ${formatNumber(user?.hypixel.stats.totalapi)} ${user?.hypixel.stats.totalapi > user?.hypixel.stats.total ? '(Glitched)' : ''}`}</p>
                <p className='font-coda text-xl text-amber-400'>{`(#${user?.hypixel.positions.totalapi})`}</p>
            </div>
            <div className="flex justify-between">
                <p className='font-coda text-xl text-orange-400'>{`Challenges: ${formatNumber(user?.hypixel.stats.challenges)}`}</p>
                <p className='font-coda text-xl text-amber-400'>{`(#${user?.hypixel.positions.challenges})`}</p>
            </div>
            <div className="flex justify-between">
                <p className='font-coda text-xl text-orange-400'>{`Overall rank: ${formatNumber(user?.hypixel.stats.overallrank)}`}</p>
                <p className='font-coda text-xl text-amber-400'>{`(#${user?.hypixel.positions.overallrank})`}</p>
            </div>
        </div>
    )
}

export default HypixelStats