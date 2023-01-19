'use client'

import Image from "next/image"
import { useState } from "react";

const PlayerHead = ({ uuid }) => {

    const [error, setError] = useState(false);

    return (
        <div className="w-10 lg:w-14">
            <div className="relate w-6 h-6 lg:w-12 lg:h-12">
                <img
                    src={!error ? `/heads/${uuid}.png` : '/images/missing_head.png'}
                    onError={() => setError(true)}
                    alt={"Player head"}
                />
            </div>
        </div>
    )
}

export default PlayerHead