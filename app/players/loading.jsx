export default function Loading() {

    const fakeData = [
        "[+000] kflmer",
        "[+000] frerrfrf",
        "[+000] ferlmf",
        "[+000] fkerlmfker",
        "[+000] fkerlfkerlfk",
        "[+000] frel",
        "[+000] fkrelfrelf",
        "[+000] freklf",
        "[+000] frekfle",
        "[+000] fkremlfkre",
        "[+000] fkerlferref",
        "[+000] ferkl",
        "[+000] frkjlf",
        "[+000] jrelkfgjerkl",
        "[+000] jflkreg",
        "[+000] hrtjglkrjfe",
        "[+000] ezfzef",
        "[+000] ffffffzfzef",
        "[+000] hytrfedzde",
    ]

    return (
        <div>
            <div className="h-32 lg:h-40">
                <div className={`flex justify-center items-center flex-col w-full h-24 lg:h-32`}>
                    <div className="blur-none outline-none text-transparent lg:text-xl w-[90%] lg:w-2/3 bg-gray-500 rounded-lg p-4 animate-pulse">w</div>
                </div>
            </div>
            <div className="flex flex-row flex-wrap max-w-screen justify-evenly gap-5 mx-5 lg:gap-10 lg:mx-20 mb-20">
                {[...fakeData, ...fakeData].map((txt, index) => (
                    <div key={`txt-${index}`} className="data-button-ske">
                        <p className="text-base lg:text-xl text-transparent">{txt}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}