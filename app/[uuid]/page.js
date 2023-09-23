import PlayerGraph from "@/components/PlayerGraph"

export default async function Home({params}) {
    const player = await getPlayer(params.uuid)

    return (
        <main className="flex flex-col justify-center items-center w-screen h-screen bg-neutral-950 p-10 pt-24">
            {player && <PlayerGraph player={player} />}
        </main>
    )
}

async function getPlayer(uuid) {
    try {
        const data = await fetch(`${process.env.HOST}user?token=${process.env.TOKEN}&uuid=${uuid}`, { cache: "no-store" })
        return await data.json()
    } catch {}

    return null
}
