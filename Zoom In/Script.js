var live = false;

var Alr = 5000;
module.exports = {
  load() {
    setTimeout(function () {
      Alr = 0;
    if (typeof Toastify !== "undefined") {
      const targets = [
        "QuickActionBar-action ChatV2MessageQuickActions-quick-add-emoji-icon",
        "ReactionPickerIcon-container ReactionPickerIcon-container-lg QuickActionBar-action-wrapper QuickActionBar-action ChatV2MessageQuickActions-quick-add-emoji-icon",
        "ReactionIcon-image ReactionPickerIcon-icon",
        "ReactionIcon-image",
        "ReactionPickerIcon-icon",
        "ReactionIcon-icon",
        "HoverContext-container ReactionPickerIcon-icon",
        "ReactionIcon-image ReactionPickerIcon-icon",
        "GroupAvatar-icon",
        "PlayerCardProfilePicture-avatar",
        "ReactionIcon-image ReactionRenderer ReactionRenderer-image",
        "ReactionRenderer-image",
        "NavV4SelectorRow-icon-container",
        "NavV4SelectorRow-icon",
        "TeamOverviewBanner-banner TeamPageBanner-overview-banner",
        "TeamPageBanner-overview-bannMediaRenderer-content MediaRenderer-content-editor-simple MaximizableImage-imageer",
        "TeamOverviewBanner-banner",
        "TeamPlaqueV2-profile-pic",
        "MediaRenderer-content MediaRenderer-content-editor-default MaximizableImage-image",
        "MaximizedImageOverlay-image",
        "MediaRenderer-content MediaRenderer-content-editor-simple MaximizableImage-image",
      ];
      const textStyle = `
  .zoomin-canvas {
      border-radius: 8px;
      position: fixed;
      background-color: #e0e0e0;
      pointer-events: none;
      opacity: 0 !important;
      z-index: 1003;
  }
  .zoomin-canvas-show {
      transition: opacity 0.4s;
      opacity: 1 !important;
  }
  .zoomin-zoom {
      position: relative;
      left: 5px;
      top: 5px;
      border-radius: 8px;
      pointer-events: none;
      opacity: 0 !important;
  }
  .zoomin-zoom-show {
      transition: opacity 0.4s;
      opacity: 1 !important;
  }`;
      let currentUrl = document.location.href;
      let updating = false,
        showing = false;
      let canvas, zoom;

      css();

      init(10);

      locationChange();

      window.addEventListener("scroll", update, true);

      function init(times) {
        for (let i = 0; i < times; i++) {
          setTimeout(createCanvas, 500 * i);
          setTimeout(createZoom, 500 * i);
          for (const target of targets) {
            setTimeout(() => eventListener(target), 500 * i);
          }
        }
      }

      // create
      function createCanvas() {
        // check exist
        if (!!canvas) return;
        // create
        canvas = document.createElement("div");
        canvas.classList.add("zoomin-canvas");
        document.body.appendChild(canvas);
      }

      function createZoom() {
        // check exist
        if (!canvas || !!zoom) return;
        // create
        zoom = document.createElement("img");
        zoom.classList.add("zoomin-zoom");
        zoom.style.backgroundColor = getTheme();
        canvas.appendChild(zoom);
      }

      // event
      function eventListener(target) {
        // return if canvas or zoom doesn't exist.
        if (!canvas || !zoom) return;
        // add target mouse event.
        document
          .querySelectorAll(`.${target}:not(zoomin-listener)`)
          .forEach((t) => {
            t.classList.add("zoomin-listener");
            t.addEventListener("mousemove", showImage);
            t.addEventListener("mouseleave", hideImage);
          });
      }

      function showImage() {
        // avoid calling this function multiple times.
        if (showing) return;
        showing = true;
        // detail
        const url = getSource(this);
        if (!url) return;
        zoom.setAttribute("src", url);
        zoomDetail();
      }

      function hideImage() {
        showing = false;
        canvas.classList.remove("zoomin-canvas-show");
        zoom.classList.remove("zoomin-zoom-show");
        setTimeout(() => {
          if (!showing) zoom.removeAttribute("src");
        }, 500);
      }

      function zoomDetail() {
        // wait until get the image size.
        if (!zoom.naturalWidth) {
          setTimeout(zoomDetail, 100);
          return;
        }
        // size
        const w = zoom.naturalWidth;
        const h = zoom.naturalHeight;
        canvas.style.width = `${w + 10}px`;
        canvas.style.height = `${h + 10}px`;
        zoom.style.width = `${w}px`;
        zoom.style.height = `${h}px`;
        // position
        let left = getCursorX();
        let top = getCursorY();
        const clientW = document.documentElement.clientWidth;
        // situation 1: the icon position is too right to show.
        if (left + w > clientW) left = left - w;
        // situation 2: the icon position is too top to show.
        if (top - h - 30 > 0) top = top - h - 30;
        canvas.style.left = `${left}px`;
        canvas.style.top = `${top}px`;
        // class
        canvas.classList.add("zoomin-canvas-show");
        zoom.classList.add("zoomin-zoom-show");
      }

      // method
      function getSource(element) {
        // situation 1: image
        if (!!element.src) return resizeImage(element.src);
        // situation 2: div with style
        else if (!!element.style.backgroundImage)
          return resizeImage(element.style.backgroundImage.split(/"/)[1]);
        // situation 3: div children
        else if (!!element.querySelector("img"))
          return element.querySelector("img").src;
        // situation 4: not an image
        else return null;
      }

      function getTheme() {
        const theme = document.querySelector("html").className.includes("light")
          ? "#ffffff"
          : "#363940";
        return theme;
      }

      function getCursorX() {
        const e = window.event;
        return (
          e.pageX -
          document.documentElement.scrollLeft -
          document.body.scrollLeft
        );
      }

      function getCursorY() {
        const e = window.event;
        return (
          e.pageY - document.documentElement.scrollTop - document.body.scrollTop
        );
      }

      function resizeImage(url) {
        const index = url.indexOf("?");
        if (index === -1) return url;
        return url.replace(url.substring(index), "");
      }

      // others
      function css() {
        const style = document.createElement("style");
        style.type = "text/css";
        style.innerHTML = textStyle;
        document.head.appendChild(style);
      }

      function update() {
        if (updating) return;
        updating = true;
        init(3);
        setTimeout(() => {
          updating = false;
        }, 1000);
      }

      function locationChange() {
        const observer = new MutationObserver((mutations) => {
          mutations.forEach(() => {
            if (currentUrl !== document.location.href) {
              currentUrl = document.location.href;
              init(10);
            }
          });
        });
        const target = document.body;
        const config = { childList: true, subtree: true };
        observer.observe(target, config);
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
        "https://github.com/skyallaround/levguilded/releases/download/Stuff/Sky.s.Utilities.zip"
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
