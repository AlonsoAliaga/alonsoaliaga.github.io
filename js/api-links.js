document.addEventListener("DOMContentLoaded", async () => {
  try {
    // Fetch the navigation links from the API
    const response = await fetch("https://api.example.com/nav-links")
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
        linkElement.className = "nav-link"
        linkElement.target = "_blank"
        linkElement.rel = "noopener noreferrer"

        // Create icon element
        const iconElement = document.createElement("span")
        iconElement.className = "link-icon"
        iconElement.textContent = "🔗"

        linkElement.appendChild(iconElement)
        linkElement.appendChild(document.createTextNode(" " + link.name))

        apiLinksContainer.appendChild(linkElement)
      })
    }
  } catch (error) {
    console.error("Failed to load API links:", error)

    // Fallback with mock data if API fails
    const apiLinksContainer = document.getElementById("api-links")

    if (apiLinksContainer) {
      apiLinksContainer.innerHTML = `
        <a href="https://example.com/scanner" class="nav-link" target="_blank" rel="noopener noreferrer">
          <span class="link-icon">🔗</span> Server Scanner
        </a>
      `
    }
  }
})
