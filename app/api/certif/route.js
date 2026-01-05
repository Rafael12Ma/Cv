const certifications = [
    { title: "Next.js 15 & React", instructor: "Maximilian Schwarzmuller", from: "Udemy" },
    { title: "The Complete React Native Hooks Course", instructor: "Stephen Grider", from: "Udemy" },
    { title: "React - The Complete Guide 2024", instructor: "Maximilian Schwarzmuller", from: "Udemy" },
    { title: "Software Engineering 101", instructor: "Kurt Anderson", from: "Udemy" },
    { title: "Machine Learning A-Z", instructor: "SuperDataScience Team", from: "Udemy" },
    { title: "The Complete 2024 Web Development Bootcamp", instructor: "Dr. Angela Yu", from: "Udemy" },
    { title: "Responsive Web Design", instructor: "Quincy Larson", from: "FreeCodeCamp" },
    { title: "BSc Computer Science", instructor: "Democritus University in Thrace (DUTH)" },


]


export async function GET() {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return Response.json(certifications)
}
