const ver = "0.0.1";
var live = false;

module.exports = {
  load() {
    //console.log("LOAD");
    btn();
    var stnbtn = document.querySelector(
      "#app > div > div.ReorderPortalContext-container > div.GameContext-container.GameContext-container-no-game.AppV2-game-context.AppV2-container-minimal-nav.AppV2-electron-windows > div.StatusContext-container.AppV2-container > div.WebAppV2-container.WebAppV2-container-has-sidebar.WebAppV2-container-minimal.WebAppV2-container-electron.WebAppV2-container-electron-windows.WebAppV2-container-has-title-bar > div.WebAppSidebar-container.WebAppV2-sidebar > div.NavV4Footer-container.WebAppSidebar-footer > div > div > div.NavbarNavIcons-container.NavbarNavIcons-container-spacing-sm.NavV4Footer-nav-icons > div.NavbarNavIcons-user-settings"
    );
    stnbtn.addEventListener("click", function () {
      //console.log("SETTINGS");
      setTimeout(function () {
        btn();
      }, 2000);
    });
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

async function btn() {
  //console.log("BTN");
  if (document.getElementById("cssbtn")) {
    document.getElementById("cssbtn").remove();
  }
  if (document.getElementById("outputcss")) {
    document.getElementById("outputcss").remove();
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
  document.querySelector(
    "#app > div > div.ReorderPortalContext-container > div.GameContext-container.GameContext-container-no-game.AppV2-game-context.AppV2-container-minimal-nav.AppV2-electron-windows > div.OverlayStackProvider-container > div.PortalTarget-container.OverlayStackProvider-portal-target > span > div.StatusContext-container.Overlay-status-context > div > div.StatusContext-container.ModalV2-modal-content.ModalV2-modal-content-scrollable > div > div > div > div.OptionsMenu-options-control > div.DesktopOptionsControl-container.OptionsMenu-desktop-options-control > div > div:nth-child(3) > div.PersistentActionMenuSection-sections-wrapper.PersistentActionMenu-menu-section.DesktopOptionsControl-persistent-action-menu-section > div:nth-child(4) > span > div > div"
  ).innerHTML = "CSS Editor";

  clone.addEventListener("click", function () {
    var slide = document.querySelector(
      "#app > div > div.ReorderPortalContext-container > div.GameContext-container.GameContext-container-no-game.AppV2-game-context.AppV2-container-minimal-nav.AppV2-electron-windows > div.OverlayStackProvider-container > div.PortalTarget-container.OverlayStackProvider-portal-target > span > div.StatusContext-container.Overlay-status-context > div > div.StatusContext-container.ModalV2-modal-content.ModalV2-modal-content-scrollable > div > div > div > div.StatusContext-container.OptionsMenu-option-content.OptionsMenu-option-content-thick-scrollbar > div > div"
    );
    slide.remove();
    var editorContainer = document.querySelector(
      "#app > div > div.ReorderPortalContext-container > div.GameContext-container.GameContext-container-no-game.AppV2-game-context.AppV2-container-minimal-nav.AppV2-electron-windows > div.OverlayStackProvider-container > div.PortalTarget-container.OverlayStackProvider-portal-target > span > div.StatusContext-container.Overlay-status-context > div > div.StatusContext-container.ModalV2-modal-content.ModalV2-modal-content-scrollable > div > div > div > div.StatusContext-container.OptionsMenu-option-content.OptionsMenu-option-content-thick-scrollbar > div"
    );

    if (!document.getElementById("outputcss")) {
      var outputDiv = document.createElement("div");
      outputDiv.id = "outputcss";
      document.body.appendChild(outputDiv);
    }

    // Create CSS textarea
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

    // Create Apply CSS button
    var applyButton = document.createElement("button");
    applyButton.id = "apply";
    applyButton.textContent = "Apply CSS";
    applyButton.style.color = "white";
    applyButton.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    applyButton.style.borderRadius = "5px";
    applyButton.style.padding = "10px 20px";
    editorContainer.appendChild(applyButton);

    // Create Clear CSS button
    var ClearButton = document.createElement("button");
    ClearButton.id = "Clear";
    ClearButton.textContent = "Clear CSS";
    ClearButton.style.color = "white";
    ClearButton.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    ClearButton.style.borderRadius = "5px";
    ClearButton.style.padding = "10px 20px";
    editorContainer.appendChild(ClearButton);

    // Create Live CSS button
    var LiveButton = document.createElement("button");
    LiveButton.id = "Live";
    LiveButton.textContent = "Live: OFF";
    LiveButton.style.color = "white";
    LiveButton.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
    LiveButton.style.borderRadius = "5px";
    LiveButton.style.padding = "10px 20px";
    editorContainer.appendChild(LiveButton);

    // LIVE CSS from the editor to the output div
    LiveButton.addEventListener("click", function () {
      if (live == true) {
        live = false;
        LiveButton.textContent = "Live: OFF";
        LiveButton.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
      } else {
        live = true;
        LiveButton.textContent = "Live: ON";
        LiveButton.style.backgroundColor = "rgba(0, 128, 0, 0.5)";
      }
      console.log("LIVE", live);
    });

    // Clear the CSS from the editor to the output div
    ClearButton.addEventListener("click", function () {
      //console.log(cssTextarea.value);
      cssTextarea.value = "";
      document.getElementById("outputcss").innerHTML = "<style></style>";
      //console.log("CLEAR");
    });

    // Apply the CSS from the editor to the output div
    applyButton.addEventListener("click", function () {
      document.getElementById("outputcss").innerHTML =
        "<style>" + cssTextarea.value + "</style>";
      //console.log("APPLY");
    });

    // Update the output div in real-time as the user types in the editor
    cssTextarea.addEventListener("input", function () {
      if (live == true) {
        document.getElementById("outputcss").innerHTML =
          "<style>" + cssTextarea.value + "</style>";
        //console.log("CHANEGD!");
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
