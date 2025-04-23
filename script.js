let times = 0;
function loadCounter() {
 let link = atob("aHR0cHM6Ly9hbG9uc29hbGlhZ2EtcGFnZS1jb3VudC5nbGl0Y2gubWUvY291bnRlcj9zaXRlPTxzaXRlPiZrZXk9PGtleT4=").replace(/<site>/g,"alonsoaliaga").replace(/<key>/g,"KEY-A");
 let counter = document.getElementById("visitor-counter");
 if(counter) {
   $.ajax({
     url: link,
     type: "GET", /* or type:"GET" or type:"PUT" */
     dataType: "json",
     data: {
     },
     success: function (result) {
       if(isNaN(result))
         document.getElementById("counter-amount").innerHTML = "Click to return!";
       else document.getElementById("counter-amount").innerHTML = `Visits: ${result}`;
     },
     error: function (e) {
       times++;
       document.getElementById("counter-amount").innerHTML = "Click to return!";
       if(times <= 1) {
        setTimeout(()=>{
          loadCounter();
        },1000*10);
       }
     }
   });
 }
}
function checkSite(window) {
  setTimeout(()=>{
    let href = window.location.href;
    console.log(href)
    if(!href.includes(atob("YWxvbnNvYWxpYWdhLmdpdGh1Yi5pbw==")) || href.startsWith("file:")) {
      try{document.title = `Page stolen from https://${atob("YWxvbnNvYWxpYWdhLmdpdGh1Yi5pbw==")}`;}catch(e){}
      window.location = `https://${atob("YWxvbnNvYWxpYWdhLmdpdGh1Yi5pbw==")}/`}
  },1000);
}
function loadTools() {
  let tools = document.getElementById("available-tools");
  fetch('https://api.github.com/repos/AlonsoAliaga/AlonsoAliagaAPI/contents/api/tools/tools-list.json?ref=main')
  .then(res => res.json())
  .then(content => {
    const decoded = atob(content.content);
    const parsed = JSON.parse(decoded);
    let toolsData = parsed;
    let toolsArray = []
    console.log(`Loading ${Object.keys(toolsData).length} tools..`);
    for(let toolData of toolsData) {
      toolsArray.push(`<li><a target="_blank" href="${toolData.link}">${toolData.name}</a></li>`);
    }
    tools.innerHTML = toolsArray.join(`
`);
  });
}
loadTools();