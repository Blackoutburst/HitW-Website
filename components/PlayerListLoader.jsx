import PlayerList from "./PlayerList"

const PlayerListLoader = () => {
    const users = getUsers()

    return (
        <PlayerList users={users} />
    )
}

export default PlayerListLoader

function getUsers() {
    let users
    
    try {
        const data = fetch(`${process.env.HOST}users?token=${process.env.TOKEN}`)
        users = data.json()
    } catch {}
  
    return users?.users
}