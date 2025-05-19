document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  //document.getElementById("current-year").textContent = new Date().getFullYear()

  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
  const mobileMenu = document.querySelector(".mobile-menu")
  const mobileMenuClose = document.querySelector(".mobile-menu-close")

  let toolsData = [
  ]
  if (mobileMenuToggle && mobileMenu && mobileMenuClose) {
    mobileMenuToggle.addEventListener("click", () => {
      mobileMenu.classList.add("active")
    })

    mobileMenuClose.addEventListener("click", () => {
      mobileMenu.classList.remove("active")
    })
  }

  // Mobile dropdown toggle
  const mobileDropdownToggle = document.querySelector(".mobile-dropdown-toggle")
  const mobileDropdown = document.querySelector(".mobile-dropdown")

  if (mobileDropdownToggle && mobileDropdown) {
    mobileDropdownToggle.addEventListener("click", () => {
      mobileDropdown.classList.toggle("active")
    })
  }

  // Tabs functionality
  const tabButtons = document.querySelectorAll(".tab-button")
  const tabContents = document.querySelectorAll(".tab-content")

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const tabId = button.getAttribute("data-tab")

      // Remove active class from all buttons and contents
      tabButtons.forEach((btn) => btn.classList.remove("active"))
      tabContents.forEach((content) => content.classList.remove("active"))

      // Add active class to clicked button and corresponding content
      button.classList.add("active")
      document.getElementById(`tab-${tabId}`).classList.add("active")

      // If tab content is empty, populate it
      populateTabContent(tabId)
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
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle")

  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", (e) => {
      e.stopPropagation()
      const dropdown = toggle.parentElement
      dropdown.classList.toggle("active")
    })
  })

  // Close dropdowns when clicking outside
  document.addEventListener("click", (e) => {
    const dropdowns = document.querySelectorAll(".dropdown")
    dropdowns.forEach((dropdown) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("active")
      }
    })
  })

  // Fetch API links and populate dropdown
  //fetchApiLinks()
  populateResourcesDropdown()
  loadTools()

  // Function to fetch API links
  function fetchApiLinks() {
    try {
      // Mock data since we can't make actual API calls in this example
      const mockLinks = [
        { name: "Server Scanner", url: "https://example.com/scanner", icon: "search" },
        { name: "Plugin Tester", url: "https://example.com/tester", icon: "code" },
        { name: "MC Status", url: "https://example.com/status", icon: "activity" },
      ]

      const apiLinksContainer = document.getElementById("api-links")

      if (apiLinksContainer) {
        apiLinksContainer.innerHTML = ""

        mockLinks.forEach((link) => {
          const linkElement = document.createElement("a")
          linkElement.href = link.url
          linkElement.className = "text-sm font-medium hover:text-fuchsia-400 transition flex items-center"
          linkElement.target = "_blank"
          linkElement.rel = "noopener noreferrer"

          linkElement.innerHTML = `<span class="mr-1 text-xs">🔗</span> ${link.name}`

          apiLinksContainer.appendChild(linkElement)
        })
      }
    } catch (error) {
      console.error("Failed to load API links:", error)
    }
  }

  // Function to populate resources dropdown
  function populateResourcesDropdown() {
    try {
      const resourcesDropdown = document.getElementById("resources-dropdown")
      const mobileResourcesDropdown = document.getElementById("mobile-resources-dropdown")

      if (resourcesDropdown) {
        resourcesDropdown.innerHTML = ""

        toolsData.forEach((tool) => {
          const item = document.createElement("a")
          item.href = tool.link
          item.className = "dropdown-item"
          item.target = "_blank"
          item.rel = "noopener noreferrer"

          item.innerHTML = `<i class="fas fa-${tool.icon || "wrench"}"></i> ${tool.name}`

          resourcesDropdown.appendChild(item)
        })
        
        const item = document.createElement("a")
        item.href = "https://alonsoaliaga.com/discord"
        item.className = "dropdown-item"
        item.target = "_blank"
        item.rel = "noopener noreferrer"

        item.innerHTML = `<i class="fa-brands fa-discord"></i> Support`

        resourcesDropdown.appendChild(item)
      }

      if (mobileResourcesDropdown) {
        mobileResourcesDropdown.innerHTML = ""

        toolsData.forEach((tool) => {
          const item = document.createElement("a")
          item.href = tool.link
          item.className = "dropdown-item"
          item.target = "_blank"
          item.rel = "noopener noreferrer"

          item.innerHTML = `<i class="fas fa-${tool.icon || "wrench"}"></i> ${tool.name}`

          mobileResourcesDropdown.appendChild(item)
        })
        const item = document.createElement("a")
        item.href = "https://alonsoaliaga.com/discord"
        item.className = "dropdown-item"
        item.target = "_blank"
        item.rel = "noopener noreferrer"

        item.innerHTML = `<i class="fa-brands fa-discord"></i> Support`

        mobileResourcesDropdown.appendChild(item)
      }
    } catch (error) {
      console.error("Failed to load resources:", error)
    }
  }

  async function loadTools() {
    fetch('https://api.github.com/repos/AlonsoAliaga/AlonsoAliagaAPI/contents/api/tools/tools-list.json?ref=main')
    .then(res => res.json())
    .then(content => {
      //console.log(content);
      const decoded = atob(content.content);
      const parsed = JSON.parse(decoded);
      //console.log(`Loading ${Object.keys(toolsData).length} tools..`);
      //console.log(parsed);
      toolsData = parsed;
      populateWebsiteTools()
      populateResourcesDropdown();
    });
  }
  // Function to populate website tools
  function populateWebsiteTools() {
    const toolsContainer = document.getElementById("website-tools")
    if (toolsContainer) {
      // Clear any existing content
      toolsContainer.innerHTML = ""
      // Add each tool to the container
      toolsData.forEach((tool) => {
        const toolCard = document.createElement("div")
        toolCard.className = "card"
        toolCard.innerHTML = `
          <div class="card-content">
            <div class="tool-icon">
              <i class="fas fa-${tool.icon || "wrench"}"></i>
            </div>
            <h3>${tool.name}</h3>
            ${tool.description ? `<p>${tool.description}</p>` : ""}
            <a href="${tool.link}" target="_blank" rel="noopener noreferrer" class="button outline full-width">
              Open Tool
            </a>
          </div>
        `
        toolsContainer.appendChild(toolCard)
      })
    }
  }

const fullPlugins = {
  alonsochat: {
    name: "AlonsoChat",
    description: "The free chat alternative for your server.",
    icon: "comment",
    badge: { text: "FREE", color: "green" },
    tags: ["free","alonso-series"],
    image: "./assets/plugins/alonsochat_logo.png",
    link: "https://alonsoaliaga.com/AlonsoChat",
    github: "https://github.com/AlonsoAliaga/AlonsoChat"
  },
  alonsojoin: {
    name: "AlonsoJoin",
    description: "Join message & quit message! Announce your players and staff members correctly.",
    icon: "right-to-bracket",
    badge: { text: "FREE", color: "green" },
    tags: ["free","alonso-series"],
    image: "./assets/plugins/alonsojoin_logo.png",
    link: "https://alonsoaliaga.com/AlonsoJoin",
    github: "https://github.com/AlonsoAliaga/AlonsoJoin"
  },
  alonsorunfromthebeast: {
    name: "AlonsoRunFromTheBeast",
    description: "Run, get to loot and kill the Beast!",
    icon: "paw-claws",
    badge: { text: "PREMIUM", color: "amber" },
    tags: ["premium","alonso-series"],
    image: "./assets/plugins/alonsorftb_logo.png",
    link: "https://alonsoaliaga.com/AlonsoRFTB",
    github: "https://github.com/AlonsoAliaga/AlonsoRFTB"
  },
  alonsogg: {
    name: "AlonsoGG",
    description: "Reward your players for being good players.",
    badge: { text: "FREE", color: "green" },
    tags: ["free","alonso-series"],
    image: "./assets/plugins/alonsogg_logo.png",
    link: "https://alonsoaliaga.com/AlonsoGG",
    github: "https://github.com/AlonsoAliaga/AlonsoGG"
  },
  betterrevive: {
    name: "BetterRevive",
    description: "Give your players a second chance to live.",
    badge: { text: "FREE", color: "green" },
    tags: ["free","better-series"],
    image: "./assets/plugins/betterrevive_logo.png",
    link: "https://alonsoaliaga.com/BetterRevive",
    github: "https://github.com/AlonsoAliaga/BetterRevive"
  },
  alonsotags: {
    name: "AlonsoTags",
    description: "A highly customizable tag plugin for your network.",
    badge: { text: "FREE", color: "green" },
    tags: ["free","alonso-series"],
    image: "./assets/plugins/alonsotags_logo.png",
    link: "https://alonsoaliaga.com/AlonsoTags",
    github: "https://github.com/AlonsoAliaga/AlonsoTags"
  },
  alonsotagspro: {
    name: "AlonsoTagsPro",
    description: "A highly customizable tag plugin for your network.",
    badge: { text: "PREMIUM", color: "amber" },
    tags: ["premium","alonso-series"],
    image: "./assets/plugins/alonsotagspro_logo.png",
    link: "https://alonsoaliaga.com/AlonsoTagsPro",
    github: "https://github.com/AlonsoAliaga/AlonsoTags"
  },
  alonsolevels: {
    name: "AlonsoLevels",
    description: "A highly customizable level system for your network that actually works.",
    badge: { text: "FREE", color: "green" },
    tags: ["free","alonso-series"],
    image: "./assets/plugins/alonsolevels_logo.png",
    link: "https://alonsoaliaga.com/AlonsoLevels",
    github: "https://github.com/AlonsoAliaga/AlonsoLevels"
  },
  alonsolevelspro: {
    name: "AlonsoLevelsPro",
    description: "A highly customizable level system for your network that actually works.",
    badge: { text: "PREMIUM", color: "amber" },
    tags: ["premium","alonso-series"],
    image: "./assets/plugins/alonsolevelspro_logo.png",
    link: "https://alonsoaliaga.com/AlonsoLevelsPro",
    github: "https://github.com/AlonsoAliaga/AlonsoLevels"
  },
  betterbackpacks: {
    name: "BetterBackpacks",
    description: "Backpacks with custom textures and unique features, skins and upgrades!",
    badge: { text: "FREE", color: "green" },
    tags: ["free","better-series"],
    image: "./assets/plugins/betterbackpacks_logo.png",
    link: "https://alonsoaliaga.com/BetterBackpacks",
    github: "https://github.com/AlonsoAliaga/BetterBackpacks"
  },
  betterbackpackspro: {
    name: "BetterBackpacksPro",
    description: "Backpacks with custom textures and unique features, skins and upgrades!",
    badge: { text: "PREMIUM", color: "amber" },
    tags: ["premium","better-series"],
    image: "./assets/plugins/betterbackpackspro_logo.png",
    link: "https://alonsoaliaga.com/BetterBackpacksPro",
    github: "https://github.com/AlonsoAliaga/BetterBackpacks"
  },
  alonsoplus: {
    name: "AlonsoPlus",
    description: "Create a ranking system for your players.",
    badge: { text: "PREMIUM", color: "amber" },
    tags: ["premium","alonso-series"],
    image: "./assets/plugins/alonsoplus_logo.png",
    link: "https://alonsoaliaga.com/AlonsoPlus",
    github: "https://github.com/AlonsoAliaga/AlonsoPlus"
  },
  alonsoleagues: {
    name: "AlonsoLeagues",
    description: "A highly customizable level system for your network that actually works.",
    badge: { text: "FREE", color: "green" },
    tags: ["free","alonso-series"],
    image: "./assets/plugins/alonsoleagues_logo.png",
    link: "https://alonsoaliaga.com/AlonsoLeagues",
    github: "https://github.com/AlonsoAliaga/AlonsoLeagues"
  },
  bettereggs: {
    name: "BetterEggs",
    description: "Make your players walk to hatch mystery eggs.",
    badge: { text: "FREE", color: "green" },
    tags: ["free","better-series"],
    image: "./assets/plugins/bettereggs_logo.png",
    link: "https://alonsoaliaga.com/BetterEggs",
    github: "https://github.com/AlonsoAliaga/BetterEggs"
  },
  betterheads: {
    name: "BetterHeads",
    description: "Give your players/builders access to amazing heads for a price.",
    badge: { text: "FREE", color: "green" },
    tags: ["free","alonso-series"],
    image: "./assets/plugins/betterheads_logo.png",
    link: "https://alonsoaliaga.com/BetterHeads",
    github: "https://github.com/AlonsoAliaga/BetterHeads"
  },
  alonsoleaderboards: {
    name: "AlonsoLeaderboards",
    description: "Highly customizable leaderboards plugin for your server.",
    badge: { text: "FREE", color: "green" },
    tags: ["free","alonso-series"],
    image: "./assets/plugins/alonsoleaderboards_logo.png",
    link: "https://alonsoaliaga.com/AlonsoLeaderboards",
    github: "https://github.com/AlonsoAliaga/AlonsoLeaderboards"
  },
  alonsopvp: {
    name: "AlonsoPvP",
    description: "Customizable and nice-looking FFA for your server.",
    badge: { text: "FREE", color: "green" },
    tags: ["free","alonso-series"],
    image: "./assets/plugins/alonsopvp_logo.png",
    link: "https://alonsoaliaga.com/AlonsoPvP",
    github: "https://github.com/AlonsoAliaga/AlonsoPvP"
  },
  betterballs: {
    name: "BetterBalls",
    description: "Balls with custom texture to take your pets everywhere.",
    badge: { text: "FREE", color: "green" },
    tags: ["free","better-series"],
    image: "./assets/plugins/betterballs_logo.png",
    link: "https://alonsoaliaga.com/BetterBalls",
    github: "https://github.com/AlonsoAliaga/BetterBalls"
  },
  betterbees: {
    name: "BetterBees",
    description: "Enhance experience with bees in your server.",
    badge: { text: "FREE", color: "green" },
    tags: ["free","better-series"],
    image: "./assets/plugins/betterbees_logo.png",
    link: "https://alonsoaliaga.com/BetterBees",
    github: "https://github.com/AlonsoAliaga/BetterBees"
  },
  bettercaptcha: {
    name: "BetterCaptcha",
    description: "A highly customizable captcha system for your server.",
    badge: { text: "FREE", color: "green" },
    tags: ["free","better-series"],
    image: "./assets/plugins/bettercaptcha_logo.png",
    link: "https://alonsoaliaga.com/BetterCaptcha",
    github: "https://github.com/AlonsoAliaga/BetterCaptcha"
  },
  bettereconomy: {
    name: "BetterEconomy",
    description: "Convert money to items you can store and viceversa! (RPG friendly)",
    badge: { text: "FREE", color: "green" },
    tags: ["free","better-series"],
    image: "./assets/plugins/bettereconomy_logo.png",
    link: "https://alonsoaliaga.com/BetterEconomy",
    github: "https://github.com/AlonsoAliaga/BetterEconomy"
  },
  betterpets: {
    name: "BetterPets",
    description: "Pets living in your inventory ready to help you!",
    badge: { text: "FREE", color: "green" },
    tags: ["free","better-series"],
    image: "./assets/plugins/betterpets_logo.png",
    link: "https://alonsoaliaga.com/BetterPets",
    github: "https://github.com/AlonsoAliaga/BetterPets"
  },
  betterprofiles: {
    name: "BetterProfiles",
    description: "An amazing way to display players profiles to others.",
    badge: { text: "FREE", color: "green" },
    tags: ["free","better-series"],
    image: "./assets/plugins/betterprofiles_logo.png",
    link: "https://alonsoaliaga.com/BetterProfiles",
    github: "https://github.com/AlonsoAliaga/BetterProfiles"
  },
  betterprofilespro: {
    name: "BetterProfiles",
    description: "An amazing way to display players profiles to others.",
    badge: { text: "PREMIUM", color: "amber" },
    tags: ["premium","better-series"],
    image: "./assets/plugins/betterprofilespro_logo.png",
    link: "https://alonsoaliaga.com/BetterProfilesPro",
    github: "https://github.com/AlonsoAliaga/BetterProfiles"
  },
  bettertalisman: {
    name: "BetterTalisman",
    description: "Create talismans with boosts for your players.",
    badge: { text: "FREE", color: "green" },
    tags: ["free","better-series"],
    image: "./assets/plugins/bettertalisman_logo.png",
    link: "https://alonsoaliaga.com/BetterTalisman",
    github: "https://github.com/AlonsoAliaga/BetterTalisman"
  },
  punchstaff: {
    name: "PunchStaff",
    description: 'Let your donors "thank" your staff members.',
    badge: { text: "FREE", color: "green" },
    tags: ["free","others"],
    image: "./assets/plugins/punchstaff_logo.png",
    link: "https://alonsoaliaga.com/PunchStaff",
    github: "https://github.com/AlonsoAliaga/PunchStaff"
  },
  betterwaypoints: {
    name: "BetterWaypoints",
    description: "Give your players a new way to save waypoints easily!",
    badge: { text: "FREE", color: "green" },
    tags: ["free","better-series"],
    image: "./assets/plugins/betterwaypoints_logo.png",
    link: "https://alonsoaliaga.com/BetterWaypoints",
    github: "https://github.com/AlonsoAliaga/BetterWaypoints"
  },
  bettersocial: {
    name: "BetterSocial",
    description: "Enhance your community by letting your players share their social media.",
    badge: { text: "FREE", color: "green" },
    tags: ["free","better-series"],
    image: "./assets/plugins/bettersocial_logo.png",
    link: "https://alonsoaliaga.com/BetterSocial",
    github: "https://github.com/AlonsoAliaga/BetterSocial"
  },
  TOEDIT: {
    name: "TOEDIT",
    description: "TOEDIT",
    badge: { text: "FREE", color: "green" },
    tags: ["free","alonso-series"],
    image: "./assets/plugins/TOEDIT.png",
    link: "https://alonsoaliaga.com/TOEDIT",
    github: "https://github.com/AlonsoAliaga/TOEDIT"
  },
  TOEDIT: {
    name: "TOEDIT",
    description: "TOEDIT",
    badge: { text: "FREE", color: "green" },
    tags: ["free","alonso-series"],
    image: "./assets/plugins/TOEDIT.png",
    link: "https://alonsoaliaga.com/TOEDIT",
    github: "https://github.com/AlonsoAliaga/TOEDIT"
  },
  TOEDIT: {
    name: "TOEDIT",
    description: "TOEDIT",
    badge: { text: "FREE", color: "green" },
    tags: ["free","alonso-series"],
    image: "./assets/plugins/TOEDIT.png",
    link: "https://alonsoaliaga.com/TOEDIT",
    github: "https://github.com/AlonsoAliaga/TOEDIT"
  },
  TOEDIT: {
    name: "TOEDIT",
    description: "TOEDIT",
    badge: { text: "FREE", color: "green" },
    tags: ["free","alonso-series"],
    image: "./assets/plugins/TOEDIT.png",
    link: "https://alonsoaliaga.com/TOEDIT",
    github: "https://github.com/AlonsoAliaga/TOEDIT"
  },
  /*
  "alonso-series": [
    {
      name: "AlonsoFactions",
      description: "Create and manage factions with custom permissions and territory control.",
      icon: "users",
      badge: { text: "ALONSO SERIES", color: "purple" },
    },
    {
      name: "AlonsoChat",
      description: "Advanced chat management with channels, formatting, and moderation tools.",
      icon: "box",
      badge: { text: "ALONSO SERIES", color: "purple" },
    },
  ],
  "better-series": [
    {
      name: "BetterQuests",
      description: "Dynamic quest system with custom rewards and progression tracking.",
      icon: "code",
      badge: { text: "BETTER SERIES", color: "blue" },
    },
  ],
  others: [
    {
      name: "ServerUtilities",
      description: "Essential utilities for server management and administration.",
      icon: "box",
      badge: { text: "OTHERS", color: "gray" },
    },
  ],
  */
}
const plugins = {
  all: []
}
function filterPlugins() {
  for(let id of Object.keys(fullPlugins)) {
    if(id == "TOEDIT") continue;
    let object = fullPlugins[id];
    for(let tag of object.tags) {
      if(typeof plugins[tag] == "undefined") {
        plugins[tag] = [object];
      }else{
        plugins[tag].push(object);
      }
    }
    plugins.all.push(object);
  }
}
filterPlugins();
  // Function to populate tab content
  function populateTabContent(tabId) {
    // Only populate if the tab content is empty
    const tabContent = document.getElementById(`tab-${tabId}`)
    if (tabContent && tabContent.children.length === 0) {
      // Define plugins by category

      // Create plugin grid
      const grid = document.createElement("div")
      grid.className = "plugin-grid"

      // Determine which plugins to show
      let pluginsToShow = []
      /*if (tabId === "all") {
        // Combine all categories
        Object.values(plugins).forEach((categoryPlugins) => {
          pluginsToShow = pluginsToShow.concat(categoryPlugins)
        })
      } else */if (plugins[tabId]) {
        pluginsToShow = plugins[tabId]
      }

      // Add plugins to the grid
      pluginsToShow.forEach((plugin) => {
        const card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `
          <div class="card-content">
            <div class="plugin-header">
              <div class="plugin-icon">
                <img src="${plugin.image}">
              </div>
              <div>
                <div class="plugin-title">
                  <h3>${plugin.name}</h3>
                  <span class="badge ${plugin.badge.color}">${plugin.badge.text}</span>
                </div>
                <p class="plugin-description">
                  ${plugin.description}
                </p>
                <div class="plugin-links">
                  <a href="${plugin.link}" class="plugin-link">
                    <i class="fas fa-globe"></i> ${plugin.tags.includes("premium") ? "Purchase" : "Download"}
                  </a>
                  <a href="${plugin.github}" class="plugin-link">
                    <i class="fab fa-github"></i> GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        `
        grid.appendChild(card)
      })

      tabContent.appendChild(grid)
    }
  }
  function checkSite(window) {
    setTimeout(()=>{
      let href = window.location.href;
      //console.log(href)
      if(!href.includes(atob("YWxvbnNvYWxpYWdhLmdpdGh1Yi5pbw==")) || href.startsWith("file:")) {
      try{document.title = `Page stolen from https://${atob("YWxvbnNvYWxpYWdhLmdpdGh1Yi5pbw==")}`;}catch(e){}
        window.location = `https://${atob("YWxvbnNvYWxpYWdhLmdpdGh1Yi5pbw==")}/`}
    },1000);
  }
  populateTabContent("all");
  checkSite(window)
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  function stars() {
    let starsElement = document.getElementById("stars-background");
    let list = []
    for(let i = 0; i < 30; i++) {
      let size = "";
      switch(getRandomIntInclusive(0,5)) {
        case 1: {
          size = "";break;
        }
        case 3: {
          size = " small";break;
        }
        default:{
          size = " tiny";break;
        }
      }
      list.push(`<div class="star${size}" style="top: ${5 * getRandomIntInclusive(1,19) + getRandomIntInclusive(1,20)}%; left: ${5 * getRandomIntInclusive(1,19) + getRandomIntInclusive(1,20)}%; animation-delay: ${5 * getRandomIntInclusive(0,20)/10}s;"></div>`)
    }
    starsElement.innerHTML = list.join(`
`)
  }
  stars();
  const reviews = [
    /*
    {
      stars: 5,
      content: "Nice plugins!",
      avatar: "./assets/logo.gif",
      network: "AlonsoCraft",
      rank: "CEO"
    },
    */
    {
      stars: 5,
      content: 'Do you have a network, use our plugins and want to let others know how great are our services?<br><br>Join us on <a target="_blank" rel="noopener noreferrer" href="https://alonsoaliaga.com/builtbybit">Discord</a>, open a ticket and have your review here!',
      avatar: "./assets/logo.gif",
      network: "AlonsoAliaga Development",
      rank: "C.E.O"
    },
  ]
  function loadReviews() {
    let list = [];
    for(let review of reviews) {
      list.push(`        <div class="card">
          <div class="card-content">
            <div class="review-stars">
              ${'<i class="fas fa-star"></i>'.repeat(review.stars)}
              <span>${review.stars}.0</span>
            </div>
            <p class="review-text">
              ${review.content}
            </p>
            <div class="reviewer">
              <div class="reviewer-image">
                <img src="${review.avatar}" alt="Reviewer">
              </div>
              <div class="reviewer-info">
                <h4>${review.network}</h4>
                <p>${review.rank}</p>
              </div>
            </div>
          </div>
        </div>`
      );
    }
    if(list.length > 0) {
      document.getElementById("reviews-section").innerHTML = list.join(`
`)
    }
  }
  loadReviews();
})