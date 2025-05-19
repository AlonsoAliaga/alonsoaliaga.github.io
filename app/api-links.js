// This script will be loaded in the client to dynamically update the navigation bar
// with links from the API

document.addEventListener("DOMContentLoaded", async () => {
  try {
    // Fetch the navigation links from the API
    const response = await fetch("/api/nav-links")
    const data = await response.json()

    // Get the container where we'll add the API links
    const apiLinksContainer = document.getElementById("api-links")

    if (apiLinksContainer && data.links) {
      // Clear any existing content
      apiLinksContainer.innerHTML = ""

      // Add each link to the container
      data.links.forEach((link) => {
        const linkElement = document.createElement("a")
        linkElement.href = link.url
        linkElement.className = "text-sm font-medium hover:text-fuchsia-400 transition flex items-center"
        linkElement.target = "_blank"
        linkElement.rel = "noopener noreferrer"

        // Create icon element (using a simple span for this example)
        const iconElement = document.createElement("span")
        iconElement.className = "mr-1 text-xs"
        iconElement.textContent = "🔗"

        linkElement.appendChild(iconElement)
        linkElement.appendChild(document.createTextNode(link.name))

        apiLinksContainer.appendChild(linkElement)
      })
    }
  } catch (error) {
    console.error("Failed to load API links:", error)
  }
})
