import Leaderboard from "./Leaderboard"

const LeaderboardLoader = async () => {
    const leaderboards = await getLeaderboards()

    return (
        <Leaderboard leaderboards={leaderboards} />
    )
}

export default LeaderboardLoader

async function getLeaderboards() {
    let lbs
    
    try {
        const data = await fetch(`${process.env.HOST}leaderboards?token=${process.env.TOKEN}`)
        lbs = await data.json()
    } catch {}

    return lbs
}