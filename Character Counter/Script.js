var Alr = 5000;
module.exports = {
  load() {
    setTimeout(function () {
      Alr = 0;
    if (typeof Toastify !== "undefined") {
      if (!document.getElementById("charcount")) {
        var charcounter = document.createElement("div");
        charcounter.setAttribute(
          "class",
          "ReactionsControlV2-container SlateEditor-reactions-control-wrapper"
        );
        charcounter.setAttribute("id", "charcount");
        document
          .getElementsByClassName(
            "Editor-container Editor-container-type-simple ChatChannelInput-editor"
          )[1]
          .appendChild(charcounter);

        function Upd() {
          var AmtEle = document.querySelector(
            "#app > div > div.ReorderPortalContext-container > div.GameContext-container.GameContext-container-no-game.AppV2-game-context.AppV2-container-minimal-nav.AppV2-electron-windows > div.StatusContext-container.AppV2-container > div.WebAppV2-container.WebAppV2-container-has-sidebar.WebAppV2-container-minimal.WebAppV2-container-electron.WebAppV2-container-electron-windows.WebAppV2-container-has-title-bar > div.LayerContext-container > div.LayerContext-layer-item-wrapper > div > div > div.LayerContext-container.LayeredPageContent-container.LayeredPageContent-container-desktop > div.LayerContext-layer-item-wrapper > div > div.ChannelWrapper-contents.ChannelWrapper-contents-sidebar-collapsed > div > div > div.ChatChannelInput-container > div.Editor-container.Editor-container-type-simple.ChatChannelInput-editor > div.SlateEditorContext-container.SlateEditor-container.SlateEditor-container-type-simple.needsclick > div.needsclick.SlateEditor-editor.SlateEditor-editor-has-max-height > div > span > span > span"
          );
          var Amt = AmtEle.textContent.length + 1;
          var Check = AmtEle.firstChild.nodeType;
          if (Check == 1) {
            Amt = 0;
          } else {
            Amt = AmtEle.textContent.length;
          }
          if (!document.getElementById("chartext")) {
            var textchar = document.createElement("div");
            textchar.innerHTML = `${Amt}`;
            textchar.setAttribute(
              "class",
              "ReactionsControlV2-container SlateEditor-reactions-control-wrapper"
            );
            textchar.setAttribute("id", "chartext");
            charcounter.appendChild(textchar);
          } else {
            document.getElementById("chartext").innerHTML = `${Amt}`;
          }
        }

        const observeUrlChange = () => {
          const oldHref = document.location.href;
          const body = document.querySelector("body");
          const observer = new MutationObserver((mutations) => {
            mutations.forEach(() => {
              if (oldHref !== document.location.href) {
                oldHref = document.location.href;
                /* Changed! */
                console.log(window.location.href.indexOf("/chat"));
                if (window.location.href.indexOf("/chat")) {
                  Upd();
                  setInterval(function () {
                    Upd();
                  }, 1000);
                  window.onload = function () {
                    var popo = document.querySelector("#myDiv");

                    var observer = new MutationObserver(function (mutations) {
                      mutations.forEach(function (mutation) {
                        Upd();
                      });
                    });

                    var config = { characterData: true, subtree: true };
                    observer.observe(popo, config);
                    //observer.disconnect();
                  };
                }
              }
            });
          });
          observer.observe(body, { childList: true, subtree: true });
        };

        window.onload = observeUrlChange;
      }

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
  }, Alr);
  },
  unload() {
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
