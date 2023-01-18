import Leaderboard from "@/components/Leaderboard"

export default async function Player() {
    const leaderboards = await getLeaderboards()

    return (
        <Leaderboard leaderboards={leaderboards} />
    )
}

async function getLeaderboards() {
    let lbs
    
    try {
        const data = await fetch(`http://185.171.202.24:20920/leaderboards?token=${process.env.TOKEN}`)
        lbs = await data.json()
    } catch {}
  
    return lbs
}