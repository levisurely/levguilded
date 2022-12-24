const ver = "0.0.1"

module.exports = {
  load() {
    this.Toa()
    if (!document.getElementById("servercounter")) {
      var servercounter = document.createElement("div");
      servercounter.setAttribute("class", "DraggableHandle-container NavV4SelectorRow-container NavV4TeamSelectorBottomOptionsList-row NavV4TeamSelectorBottomOptionsList-dms");
      servercounter.setAttribute("id", "servercounter");
      document.querySelector("#app > div > div.ReorderPortalContext-container > div.GameContext-container.GameContext-container-no-game.AppV2-game-context.AppV2-container-minimal-nav.AppV2-electron-windows > div.StatusContext-container.AppV2-container > div.NavV4Sidebar-container.WebAppV2-minimal-nav-sidebar.WebbAppV2-minimal-nav-sidebar-has-title-bar > div.NavV4TeamSelector-container.NavV4Sidebar-team-selector > div.NavV4TeamSelectorBottomOptionsList-container.NavV4TeamSelector-options-list").appendChild(servercounter);

      var AmtEle = document.querySelector("#app > div > div.ReorderPortalContext-container > div.GameContext-container.GameContext-container-no-game.AppV2-game-context.AppV2-container-minimal-nav.AppV2-electron-windows > div.StatusContext-container.AppV2-container > div.NavV4Sidebar-container.WebAppV2-minimal-nav-sidebar.WebbAppV2-minimal-nav-sidebar-has-title-bar > div.NavV4TeamSelector-container.NavV4Sidebar-team-selector > div.NavV4TeamSelector-top-section > div.NavV4TeamSelectorTeamList-container.NavV4TeamSelector-team-list");
      var Amt = AmtEle.children.length;

      var textcounter = document.createElement("div");
      textcounter.innerHTML = `${Amt} Servers`
      textcounter.setAttribute("class", "NavV4TeamSelectorBottomOptionsList-label");
      textcounter.setAttribute("id", "servercountertext");
      servercounter.appendChild(textcounter);

      setInterval(function () {
        AmtEle = document.querySelector("#app > div > div.ReorderPortalContext-container > div.GameContext-container.GameContext-container-no-game.AppV2-game-context.AppV2-container-minimal-nav.AppV2-electron-windows > div.StatusContext-container.AppV2-container > div.NavV4Sidebar-container.WebAppV2-minimal-nav-sidebar.WebbAppV2-minimal-nav-sidebar-has-title-bar > div.NavV4TeamSelector-container.NavV4Sidebar-team-selector > div.NavV4TeamSelector-top-section > div.NavV4TeamSelectorTeamList-container.NavV4TeamSelector-team-list");
        Amt = AmtEle.children.length;
        textcounter.innerHTML = `${Amt} Servers`;
      }, 1000);
    }
    Toastify({
      text: `Loaded Server Counter v${ver}!`,
      duration: 3000,
      destination: "https://www.guilded.gg/i/2yenj7K2",
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      }
    }).showToast();
  },
  init() { },
  unload() {
    if (document.getElementById("servercounter")) {
      document.getElementById("servercounter").remove();
    }
  },
  Toa() {
    if (!document.getElementById("toastifycss")) {
      const stylesheet = document.createElement("link");
      stylesheet.setAttribute(
        "href",
        "https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css"
      );
      stylesheet.setAttribute("rel", "stylesheet");
      stylesheet.setAttribute("type", "text/css");
      stylesheet.setAttribute("id", "toastifycss");
      document.head.appendChild(stylesheet);
    }
    if (!document.getElementById("toastifyscript")) {
      const script = document.createElement("script");
      script.setAttribute("src", "https://cdn.jsdelivr.net/npm/toastify-js");
      script.setAttribute("type", "text/javascript");
      script.setAttribute("async", "");
      script.setAttribute("id", "toastifyscript");
      script.onload = function handleScriptLoaded() {
        console.log("script has loaded: Server Counter");
      };
      script.onerror = function handleScriptError() {
        console.log("error loading script: Server Counter");
      };
      document.head.appendChild(script);
    }
  }
};
