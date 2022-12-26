const ver = "0.0.1"

module.exports = {
  load() {
    this.Toa()
    if (!document.getElementById("charcount")) {
      var charcounter = document.createElement("div");
      charcounter.setAttribute("class", "ReactionsControlV2-container SlateEditor-reactions-control-wrapper");
      charcounter.setAttribute("id", "charcount");
      document.querySelector("#app > div > div.ReorderPortalContext-container > div.GameContext-container.GameContext-container-no-game.AppV2-game-context.AppV2-container-minimal-nav.AppV2-electron-windows > div.StatusContext-container.AppV2-container > div.WebAppV2-container.WebAppV2-container-has-sidebar.WebAppV2-container-minimal.WebAppV2-container-electron.WebAppV2-container-electron-windows.WebAppV2-container-has-title-bar > div.LayerContext-container > div.LayerContext-layer-item-wrapper > div > div > div.LayerContext-container.LayeredPageContent-container.LayeredPageContent-container-desktop > div.LayerContext-layer-item-wrapper > div > div.ChannelWrapper-contents.ChannelWrapper-contents-sidebar-collapsed > div > div > div.ChatChannelInput-container > div.Editor-container.Editor-container-type-simple.ChatChannelInput-editor").appendChild(charcounter);

      function Upd() {
        var AmtEle = document.querySelector("#app > div > div.ReorderPortalContext-container > div.GameContext-container.GameContext-container-no-game.AppV2-game-context.AppV2-container-minimal-nav.AppV2-electron-windows > div.StatusContext-container.AppV2-container > div.WebAppV2-container.WebAppV2-container-has-sidebar.WebAppV2-container-minimal.WebAppV2-container-electron.WebAppV2-container-electron-windows.WebAppV2-container-has-title-bar > div.LayerContext-container > div.LayerContext-layer-item-wrapper > div > div > div.LayerContext-container.LayeredPageContent-container.LayeredPageContent-container-desktop > div.LayerContext-layer-item-wrapper > div > div.ChannelWrapper-contents.ChannelWrapper-contents-sidebar-collapsed > div > div > div.ChatChannelInput-container > div.Editor-container.Editor-container-type-simple.ChatChannelInput-editor > div.SlateEditorContext-container.SlateEditor-container.SlateEditor-container-type-simple.needsclick > div.needsclick.SlateEditor-editor.SlateEditor-editor-has-max-height > div > span > span > span")
        var Amt = AmtEle.textContent.length;
        var Check = AmtEle.firstChild.nodeType;
        if (Check == 1) { Amt = 0; } else { Amt = AmtEle.textContent.length };
        if (!document.getElementById("chartext")) {
          var textchar = document.createElement("div");
          textchar.innerHTML = `${Amt}`
          textchar.setAttribute("class", "ReactionsControlV2-container SlateEditor-reactions-control-wrapper");
          textchar.setAttribute("id", "chartext");
          charcounter.appendChild(textchar);
        } else { document.getElementById("chartext").innerHTML = `${Amt}` };
      };

      setInterval(function () {
        Upd();
      }, 100);
    }

    var waitfortoast = setInterval(function() {
      if( Toastify == "undefined" || Toastify == null){
      
      }else{
      clearInterval(waitfortoast);
      }
      }, 100);
      
    Toastify({
      text: `Loaded Server Counter v${ver}!`,
      duration: 3000,
      destination: "https://www.guilded.gg/i/2yenj7K2",
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      }
    }).showToast();
  },
  init() { this.Toa() },
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
        console.log("script has loaded: Character Counter");
      };
      script.onerror = function handleScriptError() {
        console.log("error loading script: Character Counter");
      };
      document.head.appendChild(script);
    }
  }
};
