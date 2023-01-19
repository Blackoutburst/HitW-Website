import { formatNumber } from "../libs/number"

const CrossComparePosition = ({user}) => {

    const getArrow = (hypixel, practice) => {
        const diff = formatNumber(Math.abs(hypixel - practice))
        return hypixel > practice ? `(${diff})` : hypixel < practice ? `(${diff})` : `(${diff})`
    }

    const data = [
        {
            title: "Qualification",
            hypixel: user?.hypixel.positions.qualification,
            practice: user?.practice.positions.qualification
        },
        {
            title: "Finals",
            hypixel: user?.hypixel.positions.finals,
            practice: user?.practice.positions.finals
        },
        {
            title: "Total Score",
            hypixel: user?.hypixel.positions.total,
            practice: user?.practice.positions.total
        },
        {
            title: "Overall Rank",
            hypixel: user?.hypixel.positions.overallrank,
            practice: user?.practice.positions.overallrank
        },
    ]

    return (
        <div className="flex flex-col w-fit space-y-3 w-72">
            <p className='text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 text-center mb-2'>Position Comparison</p>
            {data.map(({title, hypixel, practice} = data, index) => (
                <div key={`cs-${index}`} className="flex flex-col">
                    <p className='text-center text-gray-300'>{title}</p>
                    <div className="flex justify-between">
                        <p className='text-xl text-start text-amber-400 w-24'>#{formatNumber(hypixel)}</p>
                        <p className='text-xl text-center text-white w-24'>{getArrow(hypixel, practice)}</p>
                        <p className='text-xl text-end text-green-400 w-24'>#{formatNumber(practice)}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CrossComparePosition