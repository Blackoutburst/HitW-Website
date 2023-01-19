export default async function Head({params}) {
    const user = await getUser(params.uuid)
    return (
        <>
            <title>{`HitW - ${user?.name}`}</title>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <meta name="description" content={`Look at ${user?.name} Hole in the Wall stats!`} />
            <link rel="icon" href="/images/favicon.png" />
        </>
    )
}

async function getUser(uuid) {
    const data = await fetch(`${process.env.HOST}user?token=${process.env.TOKEN}&uuid=${uuid}`)
    let user
    
    try {
        user = await data.json()
    } catch {}
  
    return user
}