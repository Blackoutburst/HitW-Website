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

// async function downloadFile (url, file) {
//     axios({
//         method: "get",
//         url,
//         responseType: "stream"
//     }).then(function (response) {
//         response.data.pipe(fs.createWriteStream(`./public/heads/${file}`));
//     })
// }