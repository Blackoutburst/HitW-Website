import LeaderboardLoader from "@/components/LeaderboardLoader"
import { Suspense } from "react"
import Loading from "./loading"

export default async function Player() {
    return (
        <Suspense fallback={<Loading />} >
            <LeaderboardLoader />
        </Suspense>
    )
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