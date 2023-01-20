import { formatNumber } from "../libs/number"

const HypixelStats = ({user}) => {

    const data = [
        {
            points: `Wins: ${formatNumber(user?.hypixel.stats.wins)}`,
            position: `(#${user?.hypixel.positions.wins})`
        },
        {
            points: `Walls: ${formatNumber(user?.hypixel.stats.walls)}`,
            position: `(#${user?.hypixel.positions.walls})`
        },
        {
            points: `Qualification: ${formatNumber(user?.hypixel.stats.qualification)}`,
            position: `(#${user?.hypixel.positions.qualification})`
        },
        {
            points: `Finals: ${formatNumber(user?.hypixel.stats.finals)}`,
            position: `(#${user?.hypixel.positions.finals})`
        },
        {
            points: `Total score: ${formatNumber(user?.hypixel.stats.total)}`,
            position: `(#${user?.hypixel.positions.total})`
        },
        {
            points: `Total score (API): ${formatNumber(user?.hypixel.stats.totalapi)} ${user?.hypixel.stats.totalapi > user?.hypixel.stats.total ? '(Glitched)' : ''}`,
            position: `(#${user?.hypixel.positions.totalapi})`
        },
        {
            points: `Challenges: ${formatNumber(user?.hypixel.stats.challenges)}`,
            position: `(#${user?.hypixel.positions.challenges})`
        },
        {
            points: `Overall Rank: ${formatNumber(user?.hypixel.stats.overallrank)}`,
            position: `(#${user?.hypixel.positions.overallrank})`
        }
    ]

    return (
        <div className="flex flex-col space-y-3 w-72">
            <p className='text-3xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400 text-center mb-2'>Hypixel</p>
            {data.map((data, index) => (
                <div key={`hps-${index}`} className="flex justify-between">
                    <p className='text-xl text-orange-400'>{data.points}</p>
                    <p className='text-xl text-amber-400'>{data.position}</p>
                </div>
            ))}
        </div>
    )
}

export default HypixelStats