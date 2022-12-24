const ver = "0.0.1"

module.exports = {
    load() {
      this.Toa()
      if (!document.getElementById("servercounter")) {
        const stylesheet = document.createElement("div");
        stylesheet.setAttribute(
          "href",
          "https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css"
        );
        stylesheet.setAttribute("class", "DraggableHandle-container NavV4SelectorRow-container NavV4TeamSelectorBottomOptionsList-row NavV4TeamSelectorBottomOptionsList-dms");
        stylesheet.setAttribute("id", "servercounter");
        document.head.appendChild(stylesheet);
      }else{}
      Toastify({
          text: `Loaded Server Counter v${ver}!`,
          duration: 3000,
          destination: "https://www.guilded.gg/i/2yenj7K2",
          style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
        }).showToast();
    },
    init() {},
    unload() {
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
          console.log("script has loaded");
        };
        script.onerror = function handleScriptError() {
          console.log("error loading script");
        };
        document.head.appendChild(script);
      }
    }
  };
  