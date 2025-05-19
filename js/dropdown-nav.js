document.addEventListener("DOMContentLoaded", async () => {
  try {
    // Fetch resources from API
    const response = await fetch("https://api.example.com/resources")
    const data = await response.json()

    // Get dropdown containers
    const resourcesDropdown = document.getElementById("resources-dropdown")
    const mobileResourcesDropdown = document.getElementById("mobile-resources-dropdown")

    if (resourcesDropdown && mobileResourcesDropdown && data.resources) {
      // Clear loading message
      resourcesDropdown.innerHTML = ""
      mobileResourcesDropdown.innerHTML = ""

      // Add each resource to the dropdowns
      data.resources.forEach((resource) => {
        // Create desktop dropdown item
        const desktopItem = document.createElement("a")
        desktopItem.href = resource.url
        desktopItem.className = "dropdown-item"
        desktopItem.target = "_blank"
        desktopItem.rel = "noopener noreferrer"

        const desktopIcon = document.createElement("i")
        desktopIcon.setAttribute("data-lucide", resource.icon || "file-text")
        desktopIcon.className = "dropdown-item-icon"

        desktopItem.appendChild(desktopIcon)
        desktopItem.appendChild(document.createTextNode(resource.name))
        resourcesDropdown.appendChild(desktopItem)

        // Create mobile dropdown item (clone of desktop)
        const mobileItem = desktopItem.cloneNode(true)
        mobileResourcesDropdown.appendChild(mobileItem)
      })

      // Initialize Lucide icons for the newly added content
      if (typeof lucide !== "undefined") {
        lucide.createIcons()
      } else {
        console.warn("Lucide is not defined. Ensure it is properly imported.")
      }
    }
  } catch (error) {
    console.error("Failed to load resources:", error)

    // Fallback with mock data if API fails
    const resourcesDropdown = document.getElementById("resources-dropdown")
    const mobileResourcesDropdown = document.getElementById("mobile-resources-dropdown")

    if (resourcesDropdown && mobileResourcesDropdown) {
      const mockResources = [
        { name: "Documentation", url: "https://example.com/docs", icon: "book-open" },
        { name: "API Reference", url: "https://example.com/api", icon: "code" },
        { name: "Tutorials", url: "https://example.com/tutorials", icon: "graduation-cap" },
        { name: "Support", url: "https://example.com/support", icon: "help-circle" },
      ]

      // Clear loading message
      resourcesDropdown.innerHTML = ""
      mobileResourcesDropdown.innerHTML = ""

      // Add mock resources
      mockResources.forEach((resource) => {
        // Desktop dropdown
        resourcesDropdown.innerHTML += `
          <a href="${resource.url}" class="dropdown-item" target="_blank" rel="noopener noreferrer">
            <i data-lucide="${resource.icon}" class="dropdown-item-icon"></i>
            ${resource.name}
          </a>
        `

        // Mobile dropdown
        mobileResourcesDropdown.innerHTML += `
          <a href="${resource.url}" class="dropdown-item" target="_blank" rel="noopener noreferrer">
            <i data-lucide="${resource.icon}" class="dropdown-item-icon"></i>
            ${resource.name}
          </a>
        `
      })

      // Initialize Lucide icons for the newly added content
      if (typeof lucide !== "undefined") {
        lucide.createIcons()
      } else {
        console.warn("Lucide is not defined. Ensure it is properly imported.")
      }
    }
  }
})
