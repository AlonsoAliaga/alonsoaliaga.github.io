import { NextResponse } from "next/server"

// This is a mock API endpoint that would return navigation links
// In a real application, this would fetch data from a database or external API
export async function GET() {
  // Simulating a delay like a real API call
  await new Promise((resolve) => setTimeout(resolve, 300))

  // Mock data for the navigation links
  const links = [
    {
      id: 1,
      name: "Server Scanner",
      url: "https://example.com/scanner",
      icon: "search",
    },
    {
      id: 2,
      name: "Plugin Tester",
      url: "https://example.com/tester",
      icon: "code",
    },
    {
      id: 3,
      name: "MC Status",
      url: "https://example.com/status",
      icon: "activity",
    },
  ]

  return NextResponse.json({ links })
}
