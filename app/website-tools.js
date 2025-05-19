// This script will populate the website tools section

document.addEventListener("DOMContentLoaded", () => {
  // Get the container where we'll add the tools
  const toolsContainer = document.getElementById("website-tools")

  if (toolsContainer) {
    // Clear any existing content (the example card)
    toolsContainer.innerHTML = ""

    // Array of tools
    const tools = [
      {
        name: "Server Scanner",
        description: "Scan and analyze Minecraft servers for performance issues and plugin compatibility.",
        icon: "search",
        url: "https://example.com/scanner",
      },
      {
        name: "Plugin Tester",
        description: "Test your plugins in a sandbox environment before deploying to your live server.",
        icon: "code",
        url: "https://example.com/tester",
      },
      {
        name: "MC Status",
        description: "Check the status of Minecraft servers and services in real-time.",
        icon: "activity",
        url: "https://example.com/status",
      },
      {
        name: "Config Generator",
        description: "Generate optimized configuration files for popular Minecraft plugins.",
        icon: "settings",
        url: "https://example.com/config-generator",
      },
      {
        name: "Permission Calculator",
        description: "Calculate and manage complex permission structures for your server.",
        icon: "lock",
        url: "https://example.com/permissions",
      },
      {
        name: "Server Optimizer",
        description: "Get recommendations to optimize your server's performance.",
        icon: "zap",
        url: "https://example.com/optimizer",
      },
    ]

    // Add each tool to the container
    tools.forEach((tool) => {
      const toolCard = document.createElement("div")
      toolCard.className =
        "bg-gray-900/60 rounded-xl border border-purple-500/30 hover:border-fuchsia-500/50 transition-all hover:shadow-lg hover:shadow-fuchsia-500/20 p-6"

      toolCard.innerHTML = `
        <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center mb-4">
          <span class="text-xl">🔧</span>
        </div>
        <h3 class="text-xl font-bold mb-2">${tool.name}</h3>
        <p class="text-gray-300 mb-4">
          ${tool.description}
        </p>
        <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="inline-block w-full px-4 py-2 text-center border border-purple-500 text-purple-100 hover:bg-purple-900/30 rounded-md transition">
          Open Tool
        </a>
      `

      toolsContainer.appendChild(toolCard)
    })
  }
})
