import PlayerList from "./PlayerList"

const PlayerListLoader = async () => {
    const users = await getUsers()

    return (
        <PlayerList users={users} />
    )
}

export default PlayerListLoader

async function getUsers() {
    let users
    
    try {
        const data = await fetch(`${process.env.HOST}users?token=${process.env.TOKEN}`)
        users = await data.json()
    } catch {}
  
    return users?.users
}