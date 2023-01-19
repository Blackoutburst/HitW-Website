import PlayerList from "@/components/PlayerList"

export default async function Player() {
    const users = await getUsers()

    return (
        <PlayerList users={users} />
    )
}

async function getUsers() {
    let users
    
    try {
        const data = await fetch(`${process.env.HOST}users?token=${process.env.TOKEN}`)
        users = await data.json()
    } catch {}
  
    return users?.users
}