const languages = [
    { id: 1, title: "Greek", level: "Native language" },
    { id: 2, title: "English", level: "B2" },
    { id: 3, title: "German", level: "B1" },
]



export async function GET() {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return Response.json(languages)
}


export async function POST(request) {
    const body = await request.json()
    const newLang = {
        id: Date.now(),
        title: body.title,
        level: body.level
    }
    languages.push(newLang)
    await new Promise((resolve) => setTimeout(resolve, 500))
    return Response.json(newLang)
}