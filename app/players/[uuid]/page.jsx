import CrossComparePosition from "@/components/CrossComparePosition"
import CrossCompareStats from "@/components/CrossCompareStats"
import HypixelStats from "@/components/HypixelStats"
import PlayerRender from "@/components/PlayerRender"
import PracticeStats from "@/components/PracticeStats"

export default async function User({params}) {
    const user = await getUser(params.uuid)

    return (
        <div className="flex flex-col space-y-10 mb-20">
            <div>
                <p className="text-3xl lg:text-4xl text-white mt-10 text-center">Stats</p>
                <div className="flex flex-row flex-wrap max-w-screen mx-10 lg:mx-20 justify-evenly mt-10 lg:mt-20 gap-10 lg:mb-0">
                    <PlayerRender user={user} />
                    <HypixelStats user={user} />
                    <PracticeStats user={user} />
                </div>
            </div>
            <div>
                <p className="text-3xl lg:text-4xl text-white mt-10 text-center">Hypixel vs Practice</p>
                <div className="flex flex-row flex-wrap max-w-screen mx-10 lg:mx-20 justify-evenly mt-10 lg:mt-20 gap-10 lg:mb-0">
                    <CrossCompareStats user={user} />
                    <CrossComparePosition user={user} />
                </div>
            </div>
        </div>
    )
}

export async function getStaticPaths() {

    let users
    
    try {
        const data = await fetch(`${process.env.HOST}users?token=${process.env.TOKEN}`)
        users = await data.json()
    } catch {}

    const paths = []

    for (let i = 0; i < 1000; i++) {
        paths.push({ params: { uuid: users?.users[i].uuid } })
    }

    return {
        paths,
        fallback: true,
    }
}

async function getUser(uuid) {
    let user
    
    try {
        const data = await fetch(`${process.env.HOST}user?token=${process.env.TOKEN}&uuid=${uuid}`)
        user = await data.json()
    } catch {}
    await new Promise(r => setTimeout(r, 2000));
  
    return user
}