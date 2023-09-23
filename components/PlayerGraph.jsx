"use client"

import {
    CartesianGrid,
    Dot, Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts"
import { colorFromClub } from "@/libs/color"

const PlayerGraph = ({ player }) => {

    const CustomDot = ({ cx, cy, value, min, max, stroke }) => {
        const radius = value === min || value === max ? 6 : 1

        let outlineColor;
        if (value === min) {
            outlineColor = 'red';
        } else if (value === max) {
            outlineColor = 'green';
        } else {
            outlineColor = stroke;
        }

        return <Dot cx={cx} cy={cy} r={radius} fill={stroke} stroke={outlineColor} strokeWidth={2} />
    }

    const findMinMaxScores = (data, key) => {
        const scores = data.map(d => d[key]).filter(Boolean)
        return {
            min: Math.min(...scores),
            max: Math.max(...scores)
        }
    }

    const maxScore = Math.max(player.scores.qualification, player.scores.finals)
    const club = (maxScore > 500) ? 500 : maxScore - maxScore % 50

    const maxGames = 100
    const gameIndices = Array.from({ length: maxGames }, (_, index) => `Game ${index + 1}`)

    const data = gameIndices.map((name, index) => ({
        name,
        Qualification: player.qualification_history[index] || null,
        Finals: player.finals_history[index] || null,
        Lobby: player.lobby_history[index] || null,
        'Wide Qualification': player.wide_qualification_history[index] || null,
        'Wide Finals': player.wide_finals_history[index] || null
    }))

    const minMaxQualification = findMinMaxScores(data, 'Qualification')
    const minMaxFinals = findMinMaxScores(data, 'Finals')
    const minMaxLobby = findMinMaxScores(data, 'Lobby')
    const minMaxWideQualification = findMinMaxScores(data, 'Wide Qualification')
    const minMaxWideFinals = findMinMaxScores(data, 'Wide Finals')

    const allScores = data.flatMap(d => [
        d.Qualification,
        d.Finals,
        d.Lobby,
        d['Wide Qualification'],
        d['Wide Finals']
    ])

    const max = Math.max(...allScores) + 50
    const min = Math.min(...allScores) - 50 <= 0 ? 0 : Math.min(...allScores) - 50

    return (
        <main className="flex flex-col justify-center items-center w-screen h-screen bg-neutral-950 p-10">
            <span className={`text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r ${colorFromClub(club)}`}>{`[${club}+] ${player.name}`}</span>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <XAxis dataKey="name"/>
                    <YAxis domain={[min, max]} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone"
                          dataKey="Qualification"
                          stroke="#ebb434"
                          activeDot={{ r: 4 }}
                          dot={<CustomDot min={minMaxQualification.min} max={minMaxQualification.max} stroke="#ebb434" />}
                    />
                    <Line
                        type="monotone"
                        dataKey="Finals"
                        stroke="#eb8034"
                        activeDot={{ r: 4 }}
                        dot={<CustomDot min={minMaxFinals.min} max={minMaxFinals.max} />}
                    />
                    <Line
                        type="monotone"
                        dataKey="Lobby"
                        stroke="#ff0000"
                        activeDot={{ r: 4 }}
                        dot={<CustomDot min={minMaxLobby.min} max={minMaxLobby.max} stroke="#ff0000" />}
                    />
                    <Line
                        type="monotone"
                        dataKey="Wide Qualification"
                        stroke="#c934eb"
                        activeDot={{ r: 4 }}
                        dot={<CustomDot min={minMaxWideQualification.min} max={minMaxWideQualification.max} stroke="#c934eb" />}
                    />
                    <Line
                        type="monotone"
                        dataKey="Wide Finals"
                        stroke="#7134eb"
                        activeDot={{ r: 4 }}
                        dot={<CustomDot min={minMaxWideFinals.min} max={minMaxWideFinals.max} stroke="#7134eb" />}
                    />
                </LineChart>
            </ResponsiveContainer>
        </main>
    )
}

export default PlayerGraph