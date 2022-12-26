const ver = "0.0.2"
var Toggle = false;

module.exports = {
  load() {
    Toggle=true;
    function Upd() {
      if (Toggle==true){
      var Other1 = document.querySelector("#app > div > div.ReorderPortalContext-container > div.GameContext-container.GameContext-container-no-game.AppV2-game-context.AppV2-electron-windows > div.StatusContext-container.AppV2-container > div.WebAppV2-container.WebAppV2-container-has-sidebar.WebAppV2-container-has-navbar.WebAppV2-container-electron.WebAppV2-container-electron-windows.WebAppV2-container-has-title-bar > div.Navbar-container > div.NavbarUserControls-container.Navbar-user-controls > div.NavbarNavIcons-container.NavbarNavIcons-container-spacing-md");
      var Other2 = document.querySelector("#app > div > div.ReorderPortalContext-container > div.GameContext-container.GameContext-container-no-game.AppV2-game-context.AppV2-container-minimal-nav.AppV2-electron-windows > div.StatusContext-container.AppV2-container > div.NavV4Sidebar-container.WebAppV2-minimal-nav-sidebar.WebbAppV2-minimal-nav-sidebar-has-title-bar > div.NavV4TeamSelector-container.NavV4Sidebar-team-selector > div.NavV4TeamSelectorBottomOptionsList-container.NavV4TeamSelector-options-list");
      if (!document.getElementById("servercounter")) {
        var servercounter = document.createElement("div");
        servercounter.setAttribute("class", "DraggableHandle-container NavV4SelectorRow-container NavV4TeamSelectorBottomOptionsList-row NavV4TeamSelectorBottomOptionsList-dms");
        servercounter.setAttribute("id", "servercounter");
        if (Other1 == null) { Other2.appendChild(servercounter); };
        if (Other2 == null) { Other1.appendChild(servercounter); };
      }

      var AmtEle = document.querySelector("#app > div > div.ReorderPortalContext-container > div.GameContext-container.GameContext-container-no-game.AppV2-game-context.AppV2-container-minimal-nav.AppV2-electron-windows > div.StatusContext-container.AppV2-container > div.NavV4Sidebar-container.WebAppV2-minimal-nav-sidebar.WebbAppV2-minimal-nav-sidebar-has-title-bar > div.NavV4TeamSelector-container.NavV4Sidebar-team-selector > div.NavV4TeamSelector-top-section > div.NavV4TeamSelectorTeamList-container.NavV4TeamSelector-team-list");
      if (AmtEle == null) { AmtEle = document.querySelector("#app > div > div.ReorderPortalContext-container > div.GameContext-container.GameContext-container-no-game.AppV2-game-context.AppV2-electron-windows > div.StatusContext-container.AppV2-container > div.WebAppV2-container.WebAppV2-container-has-sidebar.WebAppV2-container-has-navbar.WebAppV2-container-electron.WebAppV2-container-electron-windows.WebAppV2-container-has-title-bar > div.Navbar-container > div.Navbar-items > div.NavbarTeamSelector-container.Navbar-item-selector.Navbar-team-items > div.NavbarTeamSelector-teams"); };
      var Amt = AmtEle.children.length - 1;
      if (!document.getElementById("servercountertext")) {
        var textcounter = document.createElement("div");
        textcounter.innerHTML = `${Amt} Servers`
        textcounter.setAttribute("class", "NavV4TeamSelectorBottomOptionsList-label");
        textcounter.setAttribute("id", "servercountertext");
        servercounter.appendChild(textcounter);
      } else { document.getElementById("servercountertext").innerHTML = `${Amt} Servers` };
    }};

    setInterval(function () {
      Upd();
    }, 1000);
  },
  unload() {
    Toggle=false;
    if (document.getElementById("servercounter")) {
      document.getElementById("servercounter").remove();
    }
  },
};
