import CrossComparePosition from "@/components/CrossComparePosition"
import CrossCompareStats from "@/components/CrossCompareStats"
import HypixelStats from "@/components/HypixelStats"
import PlayerRender from "@/components/PlayerRender"
import PracticeStats from "@/components/PracticeStats"

export default async function User() {

    return (
        <div className="flex flex-col space-y-10 mb-20">
            <div>
                <div className="flex justify-center w-full">
                    <div className="w-24 h-12 bg-neutral-600 animate-pulse rounded-xl mt-10" />
                </div>
                <div className="flex flex-row flex-wrap max-w-screen mx-10 lg:mx-20 justify-evenly mt-10 lg:mt-20 gap-10 lg:mb-0">
                    <div className="w-72 h-72 bg-neutral-600 animate-pulse rounded-xl" />
                    <div className="w-72 h-80 bg-neutral-600 animate-pulse rounded-xl" />
                    <div className="w-72 h-64 bg-neutral-600 animate-pulse rounded-xl" />
                </div>
            </div>
            <div>
                <div className="flex justify-center w-full">
                    <div className="self-center w-56 h-12 bg-neutral-600 animate-pulse rounded-xl mt-10" />
                </div>
                <div className="flex flex-row flex-wrap max-w-screen mx-10 lg:mx-20 justify-evenly mt-10 lg:mt-20 gap-10 lg:mb-0">
                    <div className="w-72 h-72 bg-neutral-600 animate-pulse rounded-xl" />
                    <div className="w-72 h-72 bg-neutral-600 animate-pulse rounded-xl" />
                </div>
            </div>
        </div>
    )
}