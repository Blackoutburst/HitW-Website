import PlayerListLoader from "@/components/PlayerListLoader"
import { Suspense } from "react"
import Loading from "./loading"

export default async function Player() {

    return (
        <Suspense fallback={<Loading />} >
            <PlayerListLoader />
        </Suspense>
    )
}