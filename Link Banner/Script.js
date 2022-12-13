const ver = "0.0.2"

module.exports = {
    load() {
      console.log(this)
      this.Toa()
      document.addEventListener("click", this.link);
      Toastify({
          text: `Loaded Link Banner v${ver}!`,
          duration: 3000,
          destination: "https://www.guilded.gg/i/2yenj7K2",
          style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
        }).showToast();
    },
    init() {console.log(this); this.Toa()},
    unload() {
      console.log(this)
      document.removeEventListener("click", this.link);
    },
    link({ target }) {
      if (
        target.src &&
        target.classList &&
        target.classList.contains("UserProfileBackground-image")
      ) {
        let url = target.src;
        navigator.clipboard.writeText(url);
        Toastify({
          text: "Copied Link!",
          duration: 3000,
        }).showToast();
      }
      if (
        target.src &&
        target.classList &&
        target.classList.contains("UserProfilePictureControl-picture")
      ) {
        let url = target.src;
        navigator.clipboard.writeText(url);
        Toastify({
          text: "Copied Link!",
          duration: 3000,
        }).showToast();
      }
      if (
        target.src &&
        target.classList &&
        target.classList.contains("TeamPlaqueV2-profile-pic")
      ) {
        let url = target.src;
        navigator.clipboard.writeText(url);
        Toastify({
          text: "Copied Link!",
          duration: 3000,
        }).showToast();
      }
      if (
        target.src &&
        target.classList &&
        target.classList.contains("TeamOverviewBanner-banner")
      ) {
        let url = target.src;
        navigator.clipboard.writeText(url);
        Toastify({
          text: "Copied Link!",
          duration: 3000,
        }).showToast();
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
          console.log("script has loaded");
        };
        script.onerror = function handleScriptError() {
          console.log("error loading script");
        };
        document.head.appendChild(script);
      }
    }
  };
  