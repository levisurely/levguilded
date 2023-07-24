var Toggle = false;

module.exports = {
  load() {
    if (typeof Toastify !== "undefined") {
      const metadata = require(`./metadata.json`);
      metadata.then(function (result) {
        Toastify({
          text: `Loaded ${result.name} ${result.version}!`,
          duration: 3000,
          destination: "https://www.guilded.gg/i/2yenj7K2",
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
        }).showToast();
        Toggle = true;
        function Upd() {
          if (Toggle == true) {
            var Other1 = document.querySelector(
              "#app > div > div.ReorderPortalContext-container > div.GameContext-container.GameContext-container-no-game.AppV2-game-context.AppV2-electron-windows > div.StatusContext-container.AppV2-container > div.WebAppV2-container.WebAppV2-container-has-sidebar.WebAppV2-container-has-navbar.WebAppV2-container-electron.WebAppV2-container-electron-windows.WebAppV2-container-has-title-bar > div.Navbar-container > div.NavbarUserControls-container.Navbar-user-controls > div.NavbarNavIcons-container.NavbarNavIcons-container-spacing-md"
            );
            var Other2 = document.querySelector(
              "#app > div > div.ReorderPortalContext-container > div.GameContext-container.GameContext-container-no-game.AppV2-game-context.AppV2-container-minimal-nav.AppV2-electron-windows > div.StatusContext-container.AppV2-container > div.NavV4Sidebar-container.WebAppV2-minimal-nav-sidebar.WebbAppV2-minimal-nav-sidebar-has-title-bar > div.NavV4TeamSelector-container.NavV4Sidebar-team-selector > div.NavV4TeamSelectorBottomOptionsList-container.NavV4TeamSelector-options-list"
            );
            if (!document.getElementById("servercounter")) {
              var servercounter = document.createElement("div");
              servercounter.setAttribute(
                "class",
                "DraggableHandle-container NavV4SelectorRow-container NavV4TeamSelectorBottomOptionsList-row NavV4TeamSelectorBottomOptionsList-dms"
              );
              servercounter.setAttribute("id", "servercounter");
              if (Other1 == null) {
                Other2.appendChild(servercounter);
              }
              if (Other2 == null) {
                Other1.appendChild(servercounter);
              }
            }

            var AmtEle = document.querySelector(
              "#app > div > div.ReorderPortalContext-container > div.GameContext-container.GameContext-container-no-game.AppV2-game-context.AppV2-container-minimal-nav.AppV2-electron-windows > div.StatusContext-container.AppV2-container > div.NavV4Sidebar-container.WebAppV2-minimal-nav-sidebar.WebbAppV2-minimal-nav-sidebar-has-title-bar > div.NavV4TeamSelector-container.NavV4Sidebar-team-selector > div.NavV4TeamSelector-top-section > div.NavV4TeamSelectorTeamList-container.NavV4TeamSelector-team-list"
            );
            if (AmtEle == null) {
              AmtEle = document.querySelector(
                "#app > div > div.ReorderPortalContext-container > div.GameContext-container.GameContext-container-no-game.AppV2-game-context.AppV2-electron-windows > div.StatusContext-container.AppV2-container > div.WebAppV2-container.WebAppV2-container-has-sidebar.WebAppV2-container-has-navbar.WebAppV2-container-electron.WebAppV2-container-electron-windows.WebAppV2-container-has-title-bar > div.Navbar-container > div.Navbar-items > div.NavbarTeamSelector-container.Navbar-item-selector.Navbar-team-items > div.NavbarTeamSelector-teams"
              );
            }
            var Amt = AmtEle.children.length - 1;
            if (!document.getElementById("servercountertext")) {
              var textcounter = document.createElement("div");
              textcounter.innerHTML = `${Amt} Servers`;
              textcounter.setAttribute(
                "class",
                "NavV4TeamSelectorBottomOptionsList-label"
              );
              textcounter.setAttribute("id", "servercountertext");
              servercounter.appendChild(textcounter);
            } else {
              document.getElementById(
                "servercountertext"
              ).innerHTML = `${Amt} Servers`;
            }
          }
        }

        setInterval(function () {
          Upd();
        }, 1000);
      });
    } else {
      Overlay(
        "Sky's Utilities Addon Is Required For This Addon To Run!",
        "https://github.com/catgirIz/levguilded/releases/download/Stuff/Sky.s.Utilities.zip"
      );
      this.unload;
      //return false;
    }
  },
  unload() {
    Toggle = false;
    if (document.getElementById("servercounter")) {
      document.getElementById("servercounter").remove();
    }
    if (typeof Toastify !== "undefined") {
      const metadata = require(`./metadata.json`);
      metadata.then(function (result) {
        Toastify({
          text: `Unloaded ${result.name} ${result.version}!`,
          duration: 3000,
          destination: "https://www.guilded.gg/i/2yenj7K2",
          style: {
            background: "linear-gradient(to right, #ff3838, #ff9999)",
          },
        }).showToast();
      });
    }
  },
};

async function Overlay(Text, Link) {
  if (document.getElementById("Neededoverlay")) {
    document.getElementById("Neededoverlay").remove();
  }
  if (!document.getElementById("Neededoverlay")) {
    // Create the overlay element
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "50%";
    overlay.style.left = "50%";
    overlay.style.transform = "translate(-50%, -50%)";
    overlay.style.width = "400px";
    overlay.style.resize = "both";
    overlay.style.borderRadius = "10px";
    overlay.style.height = "300px";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    overlay.style.zIndex = "9999";

    // Create the close button element
    const closeButton = document.createElement("button");
    closeButton.style.position = "absolute";
    closeButton.style.top = "10px";
    closeButton.style.right = "10px";
    closeButton.style.padding = "5px";
    closeButton.style.backgroundColor = "transparent";
    closeButton.style.border = "none";
    closeButton.style.color = "white";
    closeButton.style.fontSize = "20px";
    closeButton.innerHTML = "&times;";

    // Add click event listener to the close button
    closeButton.addEventListener("click", () => {
      document.body.removeChild(overlay);
    });

    // Create the text element
    const text = document.createElement("p");
    text.style.color = "white";
    text.style.fontSize = "24px";
    text.style.textAlign = "center";
    text.style.position = "absolute";
    text.style.top = "50%";
    text.style.left = "50%";
    text.style.transform = "translate(-50%, -50%)";
    text.textContent = `${Text}`;

    if (Link !== null && Link !== "") {
      // Create the link element
      const link = document.createElement("a");
      link.style.color = "yellow";
      link.style.textAlign = "center";
      link.style.position = "absolute";
      link.style.top = "75%";
      link.style.left = "50%";
      link.style.transform = "translate(-50%, -50%)";
      link.style.textDecoration = "underline";
      link.href = `${Link}`;
      link.textContent = "Download Here";
      // Add click event listener to the link
      link.addEventListener("click", (event) => {
        event.preventDefault();
        window.open(link.href, "_blank");
      });

      // Append the link element to the text element
      overlay.appendChild(link);
    }
    overlay.appendChild(closeButton);
    // Append the text element to the overlay element
    overlay.appendChild(text);

    // Append the overlay element to the document body
    document.body.appendChild(overlay);
  }
}
