import { formatNumber } from "../libs/number"

const PracticeStats = ({user}) => {

    const data = [
        {
            points: `Qualification: ${formatNumber(user?.practice.stats.qualification)}`,
            position: `(#${user?.practice.positions.qualification})`
        },
        {
            points: `Finals: ${formatNumber(user?.practice.stats.finals)}`,
            position: `(#${user?.practice.positions.finals})`
        },
        {
            points: `Lobby: ${formatNumber(user?.practice.stats.lobby)}`,
            position: `(#${user?.practice.positions.lobby})`
        },
        {
            points: `Wide Qualification: ${formatNumber(user?.practice.stats.widequalification)}`,
            position: `(#${user?.practice.positions.widequalification})`
        },
        {
            points: `Wide Finals: ${formatNumber(user?.practice.stats.widefinals)}`,
            position: `(#${user?.practice.positions.widefinals})`
        },
        {
            points: `Total score: ${formatNumber(user?.practice.stats.total)}`,
            position: `(#${user?.practice.positions.total})`
        },
        {
            points: `Overall Rank: ${formatNumber(user?.practice.stats.overallrank)}`,
            position: `(#${user?.practice.positions.overallrank})`
        }
    ]

    return (
        <div className="flex flex-col space-y-3 w-72">
            <p className='text-3xl text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-400 text-center'>Practice</p>
            {data.map((data, index) => (
                <div key={`ps-${index}`} className="flex justify-between">
                    <p className='text-xl text-lime-400'>{data.points}</p>
                    <p className='text-xl text-green-400'>{data.position}</p>
                </div>
            ))}
        </div>
    )
}

export default PracticeStats