import HypixelStats from "@/components/HypixelStats"
import PlayerRender from "@/components/PlayerRender"
import PracticeStats from "@/components/PracticeStats"

export default async function User({params}) {
    const user = await getUser(params.uuid)

    return (
        <div>
            <p className="text-3xl lg:text-4xl text-white font-coda mt-10 lg:mt-32 text-center">Stats</p>
            <div className="flex flex-row flex-wrap max-w-screen mx-10 lg:mx-20 justify-evenly mt-10 lg:mt-20 gap-10 lg:mb-0 mb-24">
                <PlayerRender user={user} />
                <HypixelStats user={user} />
                <PracticeStats user={user} />
            </div>
        </div>
    )
}

async function getUser(uuid) {
    let user
    
    try {
        const data = await fetch(`${process.env.HOST}user?token=${process.env.TOKEN}&uuid=${uuid}`)
        user = await data.json()
    } catch {}
  
    return user
}