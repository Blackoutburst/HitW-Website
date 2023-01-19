import { formatNumber } from "../libs/number"

const CrossCompareStats = ({user}) => {

    const getArrow = (hypixel, practice) => {
        const diff = formatNumber(Math.abs(hypixel - practice))
        return hypixel > practice ? `(${diff})` : hypixel < practice ? `(${diff})` : `(${diff})`
    }

    const data = [
        {
            title: "Qualification",
            hypixel: user?.hypixel.stats.qualification,
            practice: user?.practice.stats.qualification
        },
        {
            title: "Finals",
            hypixel: user?.hypixel.stats.finals,
            practice: user?.practice.stats.finals
        },
        {
            title: "Total Score",
            hypixel: user?.hypixel.stats.total,
            practice: (user?.practice.stats.qualification + user?.practice.stats.finals)
        },
        {
            title: "Overall Rank",
            hypixel: user?.hypixel.stats.overallrank,
            practice: user?.practice.stats.overallrank
        },
    ]

    return (
        <div className="flex flex-col w-fit space-y-3 w-72">
            <p className='text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 text-center mb-2'>Stats Comparison</p>
            {data.map(({title, hypixel, practice} = data, index) => (
                <div key={`cs-${index}`} className="flex flex-col">
                    <p className='text-center text-gray-300'>{title}</p>
                    <div className="flex justify-between">
                        <p className='text-xl text-start text-orange-400 w-24'>{formatNumber(hypixel)}</p>
                        <p className='text-xl text-center text-white w-24'>{getArrow(hypixel, practice)}</p>
                        <p className='text-xl text-end text-lime-400 w-24'>{formatNumber(practice)}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CrossCompareStats