const ver = "0.0.1";

module.exports = {
  load() {
    if (!document.getElementById("charcount")) {
      var charcounter = document.createElement("div");
      charcounter.setAttribute(
        "class",
        "ReactionsControlV2-container SlateEditor-reactions-control-wrapper"
      );
      charcounter.setAttribute("id", "charcount");
      document.getElementsByClassName("Editor-container Editor-container-type-simple ChatChannelInput-editor")[1]
        .appendChild(charcounter);

      function Upd() {
        var AmtEle = document.querySelector(
          "#app > div > div.ReorderPortalContext-container > div.GameContext-container.GameContext-container-no-game.AppV2-game-context.AppV2-container-minimal-nav.AppV2-electron-windows > div.StatusContext-container.AppV2-container > div.WebAppV2-container.WebAppV2-container-has-sidebar.WebAppV2-container-minimal.WebAppV2-container-electron.WebAppV2-container-electron-windows.WebAppV2-container-has-title-bar > div.LayerContext-container > div.LayerContext-layer-item-wrapper > div > div > div.LayerContext-container.LayeredPageContent-container.LayeredPageContent-container-desktop > div.LayerContext-layer-item-wrapper > div > div.ChannelWrapper-contents.ChannelWrapper-contents-sidebar-collapsed > div > div > div.ChatChannelInput-container > div.Editor-container.Editor-container-type-simple.ChatChannelInput-editor > div.SlateEditorContext-container.SlateEditor-container.SlateEditor-container-type-simple.needsclick > div.needsclick.SlateEditor-editor.SlateEditor-editor-has-max-height > div > span > span > span"
        );
        var Amt = AmtEle.textContent.length+1;
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
              console.log(window.location.href.indexOf("/chat"))
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
  },
  unload() {
    if (document.getElementById("servercounter")) {
      document.getElementById("servercounter").remove();
    }
  },
};
