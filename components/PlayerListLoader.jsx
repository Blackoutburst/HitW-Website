import PlayerList from "./PlayerList"

const PlayerListLoader = () => {
    const users = getUsers()

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