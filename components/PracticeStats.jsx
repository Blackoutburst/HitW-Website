import { formatNumber } from "../libs/number"

const PracticeStats = ({user}) => {

    return (
        <div className="flex flex-col w-fit space-y-3 w-72">
            <p className='font-coda text-3xl text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-400 text-center'>Practice</p>
            <div className="flex justify-between">
                <p className='font-coda text-xl text-lime-400'>{`Qualification: ${formatNumber(user?.practice.stats.qualification)}`}</p>
                <p className='font-coda text-xl text-green-400'>{`(#${user?.practice.positions.qualification})`}</p>
            </div>
            <div className="flex justify-between">
                <p className='font-coda text-xl text-lime-400'>{`Finals: ${formatNumber(user?.practice.stats.finals)}`}</p>
                <p className='font-coda text-xl text-green-400'>{`(#${user?.practice.positions.finals})`}</p>
            </div>
            <div className="flex justify-between">
                <p className='font-coda text-xl text-lime-400'>{`Lobby: ${formatNumber(user?.practice.stats.lobby)}`}</p>
                <p className='font-coda text-xl text-green-400'>{`(#${user?.practice.positions.lobby})`}</p>
            </div>
            <div className="flex justify-between">
                <p className='font-coda text-xl text-lime-400'>{`Wide Qualification: ${formatNumber(user?.practice.stats.widequalification)}`}</p>
                <p className='font-coda text-xl text-green-400'>{`(#${user?.practice.positions.widequalification})`}</p>
            </div>
            <div className="flex justify-between">
                <p className='font-coda text-xl text-lime-400'>{`Wide Finals: ${formatNumber(user?.practice.stats.widefinals)}`}</p>
                <p className='font-coda text-xl text-green-400'>{`(#${user?.practice.positions.widefinals})`}</p>
            </div>
            <div className="flex justify-between">
                <p className='font-coda text-xl text-lime-400'>{`Total score: ${formatNumber(user?.practice.stats.total)}`}</p>
                <p className='font-coda text-xl text-green-400'>{`(#${user?.practice.positions.total})`}</p>
            </div>
            <div className="flex justify-between">
                <p className='font-coda text-xl text-lime-400'>{`Overall rank: ${formatNumber(user?.practice.stats.overallrank)}`}</p>
                <p className='font-coda text-xl text-green-400'>{`(#${user?.practice.positions.overallrank})`}</p>
            </div>
        </div>
    )
}

export default PracticeStats