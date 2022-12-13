const ver = "0.0.2"

module.exports = {
    load() {
      this.Toa
      if (!document.getElementById("Asteroidsgame")) {
        const script = document.createElement("script");
        script.setAttribute("src", "https://gist.githubusercontent.com/catgirIz/329e875f1c783405019cdabfe08a9eaf/raw/b43fb7e701d02493241677aca174163b03691599/AT");
        script.setAttribute("type", "javascript");
        script.setAttribute("async", "");
        script.setAttribute("id", "Asteroidsgame");
        script.onload = function handleScriptLoaded() {
          console.log("script has loaded");
        };
        script.onerror = function handleScriptError() {
          console.log("error loading script");
        };
        document.head.appendChild(script);
      }
      Toastify({
          text: `Loaded Astroids Game v${ver}!`,
          duration: 3000,
          destination: "https://www.guilded.gg/i/2yenj7K2",
          style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
        }).showToast();
    },
    init() {this.Toa},
    unload() {
      if (document.getElementById("Asteroidsgame")) {document.getElementById("Asteroidsgame").remove()};
    },
    Toa() {
      if (!document.getElementById("toastifycss")) {
        const stylesheet = document.createElement("link");
        stylesheet.setAttribute(
          "href",
          "https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css"
        );
        stylesheet.setAttribute("rel", "stylesheet");
        stylesheet.setAttribute("type", "css");
        stylesheet.setAttribute("id", "toastifycss");
        document.head.appendChild(stylesheet);
      }
      if (!document.getElementById("toastifyscript")) {
        const script = document.createElement("script");
        script.setAttribute("src", "https://cdn.jsdelivr.net/npm/toastify-js");
        script.setAttribute("type", "javascript");
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
  