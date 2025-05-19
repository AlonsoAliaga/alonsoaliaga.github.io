document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide icons
  const lucide = window.lucide
  lucide.createIcons()

  // Set current year in footer
  document.getElementById("current-year").textContent = new Date().getFullYear()

  // Mobile menu toggle
  const mobileMenuButton = document.querySelector(".mobile-menu-button")
  const mobileMenu = document.querySelector(".mobile-menu")

  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active")
    // Change icon based on menu state
    const icon = mobileMenuButton.querySelector("i")
    if (mobileMenu.classList.contains("active")) {
      icon.setAttribute("data-lucide", "x")
    } else {
      icon.setAttribute("data-lucide", "menu")
    }
    lucide.createIcons()
  })

  // Tabs functionality
  const tabButtons = document.querySelectorAll(".tab-button")
  const tabContents = document.querySelectorAll(".tab-content")

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons and contents
      tabButtons.forEach((btn) => btn.classList.remove("active"))
      tabContents.forEach((content) => content.classList.remove("active"))

      // Add active class to clicked button and corresponding content
      button.classList.add("active")
      const tabId = `tab-${button.dataset.tab}`
      document.getElementById(tabId).classList.add("active")
    })
  })

  // Accordion functionality
  const accordionHeaders = document.querySelectorAll(".accordion-header")

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const accordionItem = header.parentElement
      accordionItem.classList.toggle("active")
    })
  })

  // Dropdown functionality
  const dropdownToggle = document.querySelector(".dropdown-toggle")
  const dropdown = document.querySelector(".dropdown")

  dropdownToggle.addEventListener("click", (e) => {
    e.stopPropagation()
    dropdown.classList.toggle("active")
  })

  // Close dropdown when clicking outside
  document.addEventListener("click", () => {
    dropdown.classList.remove("active")
  })

  // Mobile dropdown functionality
  const mobileDropdownToggle = document.querySelector(".mobile-dropdown-toggle")
  const mobileDropdown = document.querySelector(".mobile-dropdown")

  mobileDropdownToggle.addEventListener("click", () => {
    mobileDropdown.classList.toggle("active")
  })
})
