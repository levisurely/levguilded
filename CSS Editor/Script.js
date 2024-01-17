var live = false;

var Alr = 5000;
module.exports = {
  load() {
    setTimeout(function () {
      Alr = 0;
      if (typeof Toastify !== "undefined") {
        if (!document.getElementById("outputcss")) {
          var outputDiv = document.createElement("div");
          outputDiv.id = "outputcss";
          document.body.appendChild(outputDiv);
          if (localStorage.getItem("outputcss")) {
            outputDiv.innerHTML =
              "<style>" + localStorage.getItem("outputcss") + "</style>";
          }
        }
        btn();
        var stnbtn = document.querySelector(
          "#app > div > div.ReorderPortalContext-container > div.GameContext-container.GameContext-container-no-game.AppV2-game-context.AppV2-container-minimal-nav.AppV2-electron-windows > div.StatusContext-container.AppV2-container > div.WebAppV2-container.WebAppV2-container-has-sidebar.WebAppV2-container-minimal.WebAppV2-container-electron.WebAppV2-container-electron-windows.WebAppV2-container-has-title-bar > div.WebAppSidebar-container.WebAppV2-sidebar > div.NavV4Footer-container.WebAppSidebar-footer > div > div > div.NavbarNavIcons-container.NavbarNavIcons-container-spacing-sm.NavV4Footer-nav-icons > div.NavbarNavIcons-user-settings"
        );
        stnbtn.addEventListener("click", function () {
          setTimeout(function () {
            btn();
          }, 1000);
        });

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
        });
      } else {
        Overlay(
          "Sky's Utilities Addon Is Required For This Addon To Run!",
          "https://github.com/skyallaround/levguilded/releases/download/Stuff/Sky.s.Utilities.zip"
        );
        this.unload;
        //return false;
      }
    }, Alr);
  },
  init() {
    if (!document.getElementById("outputcss")) {
      var outputDiv = document.createElement("div");
      outputDiv.id = "outputcss";
      document.body.appendChild(outputDiv);
      if (localStorage.getItem("outputcss")) {
        outputDiv.innerHTML =
          "<style>" + localStorage.getItem("outputcss") + "</style>";
      }
    }
  },
  unload() {
    if (document.getElementById("cssbtn")) {
      document.getElementById("cssbtn").remove();
    }
    if (document.getElementById("outputcss")) {
      document.getElementById("outputcss").remove();
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
    overlay.id = "Neededoverlay";
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

async function btn() {
  if (document.getElementById("cssbtn")) {
    document.getElementById("cssbtn").remove();
  }
  var cool = await document.querySelector(
    "#app > div > div.ReorderPortalContext-container > div.GameContext-container.GameContext-container-no-game.AppV2-game-context.AppV2-container-minimal-nav.AppV2-electron-windows > div.OverlayStackProvider-container > div.PortalTarget-container.OverlayStackProvider-portal-target > span > div.StatusContext-container.Overlay-status-context > div > div.StatusContext-container.ModalV2-modal-content.ModalV2-modal-content-scrollable > div > div > div > div.OptionsMenu-options-control > div.DesktopOptionsControl-container.OptionsMenu-desktop-options-control > div > div:nth-child(3) > div.PersistentActionMenuSection-sections-wrapper.PersistentActionMenu-menu-section.DesktopOptionsControl-persistent-action-menu-section > div:nth-child(3)"
  );
  var par = await document.querySelector(
    "#app > div > div.ReorderPortalContext-container > div.GameContext-container.GameContext-container-no-game.AppV2-game-context.AppV2-container-minimal-nav.AppV2-electron-windows > div.OverlayStackProvider-container > div.PortalTarget-container.OverlayStackProvider-portal-target > span > div.StatusContext-container.Overlay-status-context > div > div.StatusContext-container.ModalV2-modal-content.ModalV2-modal-content-scrollable > div > div > div > div.OptionsMenu-options-control > div.DesktopOptionsControl-container.OptionsMenu-desktop-options-control > div > div:nth-child(3) > div.PersistentActionMenuSection-sections-wrapper.PersistentActionMenu-menu-section.DesktopOptionsControl-persistent-action-menu-section"
  );

  const clone = cool.cloneNode(true);
  clone.id = "cssbtn";
  par.appendChild(clone);
  var newbtn = document.querySelector(
    "#app > div > div.ReorderPortalContext-container > div.GameContext-container.GameContext-container-no-game.AppV2-game-context.AppV2-container-minimal-nav.AppV2-electron-windows > div.OverlayStackProvider-container > div.PortalTarget-container.OverlayStackProvider-portal-target > span > div.StatusContext-container.Overlay-status-context > div > div.StatusContext-container.ModalV2-modal-content.ModalV2-modal-content-scrollable > div > div > div > div.OptionsMenu-options-control > div.DesktopOptionsControl-container.OptionsMenu-desktop-options-control > div > div:nth-child(3) > div.PersistentActionMenuSection-sections-wrapper.PersistentActionMenu-menu-section.DesktopOptionsControl-persistent-action-menu-section > div:nth-child(4) > span > div > div"
  );

  newbtn.parentNode.setAttribute("data-name", "lgcssbtn");
  newbtn.innerHTML = "CSS Editor";

  var inUse = false;

  clone.addEventListener("click", function () {

    inUse = true;

    clone.classList.add("DesktopOptionsControlItemTemplate-container-active");

    var slide = document.querySelector(
      "#app > div > div.ReorderPortalContext-container > div.GameContext-container.GameContext-container-no-game.AppV2-game-context.AppV2-container-minimal-nav.AppV2-electron-windows > div.OverlayStackProvider-container > div.PortalTarget-container.OverlayStackProvider-portal-target > span > div.StatusContext-container.Overlay-status-context > div > div.StatusContext-container.ModalV2-modal-content.ModalV2-modal-content-scrollable > div > div > div > div.StatusContext-container.OptionsMenu-option-content.OptionsMenu-option-content-thick-scrollbar > div > div"
    );
    if (slide !== null) {
      slide.style.display = "none";
    }

    var optionsGroupsList = document.getElementsByClassName("PersistentActionMenuItem-container")

    for (let i = 0; i < optionsGroupsList.length; i++) {
      if (optionsGroupsList[i].id == "cssbtn") {
        break;
      } else {
        optionsGroupsList[i].addEventListener("click", function () {
          clone.classList.remove("DesktopOptionsControlItemTemplate-container-active");
          slide.style.display = "block";
          newDiv.remove();
          this.children[0].children[0].classList.add("DesktopOptionsControlItemTemplate-container-active");
        });
      }
    }

    for (let i = 0; i < optionsGroupsList.length; i++) {
      if (optionsGroupsList[i].id == "cssbtn") {
        break;
      } else {
        optionsGroupsList[i].children[0].children[0].classList.remove("DesktopOptionsControlItemTemplate-container-active");
      }
    }

    const newDiv = document.createElement("div");
    newDiv.id = "fill"

    var editorContainer = document.querySelector(
      "#app > div > div.ReorderPortalContext-container > div.GameContext-container.GameContext-container-no-game.AppV2-game-context.AppV2-container-minimal-nav.AppV2-electron-windows > div.OverlayStackProvider-container > div.PortalTarget-container.OverlayStackProvider-portal-target > span > div.StatusContext-container.Overlay-status-context > div > div.StatusContext-container.ModalV2-modal-content.ModalV2-modal-content-scrollable > div > div > div > div.StatusContext-container.OptionsMenu-option-content.OptionsMenu-option-content-thick-scrollbar > div"
    ).appendChild(newDiv);

    if (!document.getElementById("outputcss")) {
      var outputDiv = document.createElement("div");
      outputDiv.id = "outputcss";
      document.body.appendChild(outputDiv);
      if (localStorage.getItem("outputcss")) {
        outputDiv.innerHTML =
          "<style>" + localStorage.getItem("outputcss") + "</style>";
      }
    }

    editorContainer.innerHTML = `<div class="Form-container Form-container-section-border">
  <div class="FormHeader-container Form-header" style="padding-left: 32px; padding-right: 32px; margin-bottom: 12px; font-size: 15px; line-height: 21px; color: #fff; font-weight: bold; user-select: none">CSS Editor</div>
    <div class="Form-content">
        <div class="FormSection-container FormSection-container-section-border Form-section">
            <div class="FormSection-row FormSection-row-margin-md" style="margin-left: 32px; padding-left: 0; padding-right: 32px; display: flex; flex-direction: row; flex: 0 0 auto; align-items: center; width: 100%; ">
                <textarea id="css-editor" placeholder="Enter CSS code here..." style="border: 1px solid white; border-radius: 5px; background-color: rgba(0, 0, 0, 0.5); color: white; resize: both; padding: 10px; width: 40vw; height: 60vh; overflow: auto"></textarea>
            </div>
            <div class="FormSection-row FormSection-row-margin-md" style="padding-top: 10px; margin-top: 16px; margin-left: 32px; padding-left: 0; padding-right: 32px; display: flex; flex-direction: row; flex: 0 0 auto; align-items: center; width: 100%; overflow: auto; border-bottom: 1px solid rgba(163,163,172,.2); padding-bottom: 24px; margin-bottom: 24px;">
                <button id="Save" class="FormConfirmButtonV2-container FormConfirmButtonV2-container-desktop FormConfirmButtonV2-container-hollow FormConfirmButtonV2-container-default FormConfirmButtonV2-container-size-md FormConfirmButtonV2-container-type-white" style="position: relative; border-color: #fff; border-radius: 4px; border: solid 1px #fff; background: none; box-shadow: none; padding: 7px 16px; display: inline-block; outline: inherit !important; flex-shrink: 0; transition: box-shadow 220ms ease-out, border-color 220ms ease-out, color 220ms ease-out, background-color 220ms ease-out, background-position 220ms ease-out; -webkit-user-select: none; user-select: none; font-family: inherit; font-size: inherit; line-height: inherit; -webkit-appearance: button; cursor: pointer; text-transform: none; overflow: visible; margin: 0px 6px 0px 0px; font: inherit">Save To File</button>
                <button id="Load" class="FormConfirmButtonV2-container FormConfirmButtonV2-container-desktop FormConfirmButtonV2-container-hollow FormConfirmButtonV2-container-default FormConfirmButtonV2-container-size-md FormConfirmButtonV2-container-type-white" style="position: relative; border-color: #fff; border-radius: 4px; border: solid 1px #fff; background: none; box-shadow: none; padding: 7px 16px; display: inline-block; outline: inherit !important; flex-shrink: 0; transition: box-shadow 220ms ease-out, border-color 220ms ease-out, color 220ms ease-out, background-color 220ms ease-out, background-position 220ms ease-out; -webkit-user-select: none; user-select: none; font-family: inherit; font-size: inherit; line-height: inherit; -webkit-appearance: button; cursor: pointer; text-transform: none; overflow: visible; margin: 0px 6px; font: inherit">Load File</button>
                <button id="apply" class="FormConfirmButtonV2-container FormConfirmButtonV2-container-desktop FormConfirmButtonV2-container-hollow FormConfirmButtonV2-container-default FormConfirmButtonV2-container-size-md FormConfirmButtonV2-container-type-white" style="position: relative; border-color: #fff; border-radius: 4px; border: solid 1px #fff; background: none; box-shadow: none; padding: 7px 16px; display: inline-block; outline: inherit !important; flex-shrink: 0; transition: box-shadow 220ms ease-out, border-color 220ms ease-out, color 220ms ease-out, background-color 220ms ease-out, background-position 220ms ease-out; -webkit-user-select: none; user-select: none; font-family: inherit; font-size: inherit; line-height: inherit; -webkit-appearance: button; cursor: pointer; text-transform: none; overflow: visible; margin: 0px 6px; font: inherit">Apply CSS</button>
                <button id="Clear" class="FormConfirmButtonV2-container FormConfirmButtonV2-container-desktop FormConfirmButtonV2-container-hollow FormConfirmButtonV2-container-default FormConfirmButtonV2-container-size-md FormConfirmButtonV2-container-type-white" style="position: relative; border-color: #fff; border-radius: 4px; border: solid 1px #fff; background: none; box-shadow: none; padding: 7px 16px; display: inline-block; outline: inherit !important; flex-shrink: 0; transition: box-shadow 220ms ease-out, border-color 220ms ease-out, color 220ms ease-out, background-color 220ms ease-out, background-position 220ms ease-out; -webkit-user-select: none; user-select: none; font-family: inherit; font-size: inherit; line-height: inherit; -webkit-appearance: button; cursor: pointer; text-transform: none; overflow: visible; margin: 0px 6px; font: inherit">Clear CSS</button>
                <button id="Live" class="FormConfirmButtonV2-container FormConfirmButtonV2-container-desktop FormConfirmButtonV2-container-hollow FormConfirmButtonV2-container-default FormConfirmButtonV2-container-size-md FormConfirmButtonV2-container-type-white" style="position: relative; border-color: #fff; border-radius: 4px; border: solid 1px #fff; background: none; box-shadow: none; padding: 7px 16px; display: inline-block; outline: inherit !important; flex-shrink: 0; transition: box-shadow 220ms ease-out, border-color 220ms ease-out, color 220ms ease-out, background-color 220ms ease-out, background-position 220ms ease-out; -webkit-user-select: none; user-select: none; font-family: inherit; font-size: inherit; line-height: inherit; -webkit-appearance: button; cursor: pointer; text-transform: none; overflow: visible; margin: 0px 0px 0px 6px; font: inherit; background-color: rgba(255, 0, 0, 0.5)">Live: OFF</button>
            </div>
            <div class="FormSection-section-header" style="font-size: 14px; line-height: 19px; color: #ececee; font-weight: bold; -webkit-user-select: none; user-select: none; color: #fff; margin-left: 32px; padding-left: 0; padding-right: 32px;">
                <span>Recently Opened:</span>
            </div>
            <div class="FormSection-row FormSection-row-margin-md" style="padding-top: 10px; margin-top: 16px; margin-left: 32px; padding-left: 0 ; padding-right: 32px; display: flex; flex-direction: row; flex: 0 0 auto; align-items: center; width: 100%; overflow: auto;">
                <ul id="recentFilesList" style="overflow-y: auto; max-height: 60vh;"></ul>
            </div>
        </div>
    </div>
</div>`;

    // Load recently opened files from localStorage
    const recentFiles = JSON.parse(localStorage.getItem("recentFiles")) || [];

    // Populate the recentFilesList with stored data
    const recentFilesList = document.getElementById("recentFilesList");
    recentFiles.forEach((fileName) => addRecentFile(fileName));

    document.getElementById("Save").addEventListener("click", function () {
      const cssContent = document.getElementById("css-editor").value;
      const blob = new Blob([cssContent], { type: "text/css" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      const fileName = "styles.css";
      link.download = fileName;
      link.click();
      //addRecentFile(fileName);
    });

    document.getElementById("Load").addEventListener("click", function () {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = ".css";
      input.onchange = (event) => {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            document.getElementById("css-editor").value = e.target.result;
            const fileName = file.name;
            addRecentFile(fileName);
            saveRecentFilesToLocalStorage();
          };
          reader.readAsText(file);
        }
      };
      input.click();
    });

    function addRecentFile(fileName) {
      const listItem = document.createElement("li");
      listItem.textContent = fileName;
      listItem.onclick = () => loadRecentFile(fileName);
      recentFilesList.appendChild(listItem);
    }

    function loadRecentFile(fileName) {
      // Implement logic to load the content of the selected recent file
      const storedContent = localStorage.getItem(fileName);
      if (storedContent) {
        document.getElementById("cssTextarea").value = storedContent;
      }
    }

    function saveRecentFilesToLocalStorage() {
      // Save recently opened files to localStorage
      localStorage.setItem(
        "recentFiles",
        JSON.stringify(
          Array.from(recentFilesList.children, (li) => li.textContent)
        )
      );
    }

    // LIVE CSS from the editor to the output div
    document.getElementById("Live").addEventListener("click", function () {
      if (live == true) {
        live = false;
        document.getElementById("Live").textContent = "Live: OFF";
        document.getElementById("Live").style.backgroundColor =
          "rgba(255, 0, 0, 0.5)";
      } else {
        live = true;
        document.getElementById("Live").textContent = "Live: ON";
        document.getElementById("Live").style.backgroundColor =
          "rgba(0, 128, 0, 0.5)";
      }
    });

    // Clear the CSS from the editor to the output div
    document.getElementById("Clear").addEventListener("click", function () {
      document.getElementById("css-editor").value = "";
      document.getElementById("outputcss").innerHTML = "<style></style>";
      localStorage.setItem("outputcss", "");
    });

    // Apply the CSS from the editor to the output div
    document.getElementById("apply").addEventListener("click", function () {
      localStorage.setItem(
        "outputcss",
        `${document.getElementById("css-editor").value}`
      );
      document.getElementById("outputcss").innerHTML =
        "<style>" + document.getElementById("css-editor").value + "</style>";
    });

    // Update the output div in real-time as the user types in the editor
    document
      .getElementById("css-editor")
      .addEventListener("input", function () {
        if (live == true) {
          localStorage.setItem(
            "outputcss",
            `${document.getElementById("css-editor").value}`
          );
          document.getElementById("outputcss").innerHTML =
            "<style>" +
            document.getElementById("css-editor").value +
            "</style>";
        }
      });
    if (
      document.getElementById("outputcss") &&
      document.getElementById("outputcss").firstChild &&
      document.getElementById("outputcss").firstChild.innerHTML
    ) {
      document.getElementById("css-editor").value =
        document.getElementById("outputcss").firstChild.innerHTML;
    }
  });
}