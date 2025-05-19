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
      toolCard.className = "tool-card"

      toolCard.innerHTML = `
        <div class="tool-icon">
          <i data-lucide="${tool.icon}"></i>
        </div>
        <h3 class="tool-title">${tool.name}</h3>
        <p class="tool-description">
          ${tool.description}
        </p>
        <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="outline-button full-width">
          Open Tool
        </a>
      `

      toolsContainer.appendChild(toolCard)
    })

    // Initialize Lucide icons for the newly added content
    if (typeof lucide !== "undefined") {
      lucide.createIcons()
    } else {
      console.warn("Lucide is not defined. Ensure it is properly imported or included.")
    }
  }
})
