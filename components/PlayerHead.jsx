'use client'

import Image from "next/image"
import { useState } from "react";

const PlayerHead = ({ uuid }) => {

    const [error, setError] = useState(false);

    return (
        <div className="w-14">
        <Image
            width={40}
            height={40}
            src={!error ? `/heads/${uuid}.png` : '/images/missing_head.png'}
            onError={() => setError(true)}
            alt={"Player head"}
        />
        </div>
    )
}

export default PlayerHead