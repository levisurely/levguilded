var live = false;

module.exports = {
  load() {
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
        "https://github.com/catgirIz/levguilded/releases/download/Stuff/Sky.s.Utilities.zip"
      );
      this.unload;
      //return false;
    }
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

  clone.addEventListener("mouseenter", function () {
    clone.style.backgroundColor = "rgba(255, 255, 255, 0.075)";
  });
  clone.addEventListener("mouseleave", function () {
    clone.style.backgroundColor = "";
  });
  clone.addEventListener("click", function () {
    var slide = document.querySelector(
      "#app > div > div.ReorderPortalContext-container > div.GameContext-container.GameContext-container-no-game.AppV2-game-context.AppV2-container-minimal-nav.AppV2-electron-windows > div.OverlayStackProvider-container > div.PortalTarget-container.OverlayStackProvider-portal-target > span > div.StatusContext-container.Overlay-status-context > div > div.StatusContext-container.ModalV2-modal-content.ModalV2-modal-content-scrollable > div > div > div > div.StatusContext-container.OptionsMenu-option-content.OptionsMenu-option-content-thick-scrollbar > div > div"
    );
    if (slide !== null) {
      slide.remove();
    }
    var editorContainer = document.querySelector(
      "#app > div > div.ReorderPortalContext-container > div.GameContext-container.GameContext-container-no-game.AppV2-game-context.AppV2-container-minimal-nav.AppV2-electron-windows > div.OverlayStackProvider-container > div.PortalTarget-container.OverlayStackProvider-portal-target > span > div.StatusContext-container.Overlay-status-context > div > div.StatusContext-container.ModalV2-modal-content.ModalV2-modal-content-scrollable > div > div > div > div.StatusContext-container.OptionsMenu-option-content.OptionsMenu-option-content-thick-scrollbar > div"
    );

    if (!document.getElementById("outputcss")) {
      var outputDiv = document.createElement("div");
      outputDiv.id = "outputcss";
      document.body.appendChild(outputDiv);
      if (localStorage.getItem("outputcss")) {
        outputDiv.innerHTML =
          "<style>" + localStorage.getItem("outputcss") + "</style>";
      }
    }

    // Create CSS textarea
    if (!document.getElementById("css-editor")) {
      var cssTextarea = document.createElement("textarea");
      cssTextarea.contenteditable = "true";
      cssTextarea.id = "css-editor";
      cssTextarea.placeholder = "Enter CSS code here...";
      cssTextarea.style.border = "1px solid white";
      cssTextarea.style.borderRadius = "5px";
      cssTextarea.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
      cssTextarea.style.color = "white";
      cssTextarea.style.resize = "both";
      cssTextarea.style.padding = "10px";
      cssTextarea.style.width = "1110px";
      cssTextarea.style.height = "603px";
      editorContainer.appendChild(cssTextarea);
    }

    // Create Apply CSS button
    if (!document.getElementById("apply")) {
      var applyButton = document.createElement("button");
      applyButton.id = "apply";
      applyButton.textContent = "Apply CSS";
      applyButton.style.color = "white";
      applyButton.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
      applyButton.style.borderRadius = "5px";
      applyButton.style.padding = "10px 20px";
      editorContainer.appendChild(applyButton);
    }

    // Create Clear CSS button
    if (!document.getElementById("Clear")) {
      var ClearButton = document.createElement("button");
      ClearButton.id = "Clear";
      ClearButton.textContent = "Clear CSS";
      ClearButton.style.color = "white";
      ClearButton.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
      ClearButton.style.borderRadius = "5px";
      ClearButton.style.padding = "10px 20px";
      editorContainer.appendChild(ClearButton);
    }

    // Create Live CSS button
    if (!document.getElementById("Live")) {
      var LiveButton = document.createElement("button");
      LiveButton.id = "Live";
      LiveButton.textContent = "Live: OFF";
      LiveButton.style.color = "white";
      LiveButton.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
      LiveButton.style.borderRadius = "5px";
      LiveButton.style.padding = "10px 20px";
      editorContainer.appendChild(LiveButton);
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
      cssTextarea.value =
        document.getElementById("outputcss").firstChild.innerHTML;
    }
  });
}
