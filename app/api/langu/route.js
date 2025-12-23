const languages = [
    { title: "Greek", level: "Native language" },
    { title: "English", level: "B2" },
    { title: "German", level: "B1" },
]



export async function GET() {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return Response.json(languages)
}
