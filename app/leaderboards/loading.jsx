export default function Loading() {

    return (
        <div>
            <div className='h-24'>
                <div className='fixed flex justify-center items-center flex-col w-full duration-200 h-16 lg:h-20 gap-y-2 mt-2'>
                    <div className="bg-gray-500 w-56 h-56 rounded-xl animate-pulse"/>
                    <div className="bg-gray-500 w-48 h-32 rounded-xl animate-pulse"/>
                </div>
            </div>
            <div className="flex flex-col flex-wrap max-w-screen lg:mx-20">
            {[...Array(10).keys()].map((index) => (
                <div className={`w-full p-4 shadow-lg ${index == 0 ? "lg:rounded-t-lg border-t lg:border-x" : index == 9 ? "lg:rounded-b-lg border-b lg:border-x" : 'lg:border-x' } ${index % 2 == 0 ? "bg-[#404040] border-[#606060]" : "bg-[#303030] border-[#505050]"}`}>
                    <div className="flex w-full items-center justify-between">
                        <div className="flex items-center lg:space-x-10">
                        <div className="bg-gray-500 w-16 h-10 rounded-xl animate-pulse"/>
                            <div className="w-10 h-10 bg-gray-500 animate-pulse rounded-xl" />
                            <div className="bg-gray-500 w-48 h-10 rounded-xl animate-pulse"/>
                        </div>
                        <div className="bg-gray-500 w-24 h-10 rounded-xl animate-pulse"/>
                    </div>
                </div>
            ))}
        </div>
        </div>
    )
}