import HypixelStats from "@/components/HypixelStats"
import PlayerRender from "@/components/PlayerRender"
import PracticeStats from "@/components/PracticeStats"

import axios from "axios"
import fs from 'fs'

export default async function User({params}) {
    const user = await getUser(params.uuid)
    if (user)
        downloadFile(`https://visage.surgeplay.com/face/64/${user.uuid}`, `${user.uuid}.png`)

    return (
        <div>
            <p className="text-4xl text-white font-coda mt-32 text-center">Stats</p>
            <div className="flex flex-row flex-wrap max-w-screen mx-20 justify-evenly mt-20 gap-10">
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
        const data = await fetch(`http://185.171.202.24:20920/user?token=${process.env.TOKEN}&uuid=${uuid}`)
        user = await data.json()
    } catch {}
  
    return user
}

async function downloadFile (url, file) {
    axios({
        method: "get",
        url,
        responseType: "stream"
    }).then(function (response) {
        response.data.pipe(fs.createWriteStream(`/heads/${file}`));
    })
  }