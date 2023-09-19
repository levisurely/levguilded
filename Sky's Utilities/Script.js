module.exports = {
  load() {
    Toa();
    Upd();
    console.log("Sky's Utilities Loaded!");

    if (typeof Toastify !== "undefined") {
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
    }
  },
  init() {
    Toa();
    Upd();
    console.log("Sky's Utilities Init!");
    Toastify({
      text: `Injected ${result.name} ${result.version}!`,
      duration: 3000,
      destination: "https://www.guilded.gg/i/2yenj7K2",
      style: {
        background: "linear-gradient(to right, #bb4dff, #dda6ff)",
      },
    }).showToast();
  },
  unload() {
    console.log("Sky's Utilities Unloaded!");
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

async function Check4Upd(url) {
  try {
    const response = await fetch(url, { mode: "cors" });
    if (!response.ok) {
      throw new Error("Failed to fetch the Raw content");
    }
    const content = await response.text();
    return content;
  } catch (error) {
    console.error(error);
  }
}

var UpdLog = [];

async function Upd() {
  const strings = [
    "Sky's Utilities",
    "Server Counter",
    "Open In App",
    "Link Banner",
    "Edit Anywhere",
    "CSS Editor",
    "Conceal Filenames",
    "Character Counter",
    "1st Letter Capitalized",
  ];

  strings.forEach((string) => {
    //setTimeout(function () {
    const metadata = require(`../${string}/metadata.json`);

    metadata.then(function (result) {
      const url = new URL(`${result.repoUrl}`);
      const path = decodeURIComponent(url.pathname.split("/").pop());
      const thingy = `https://raw.githubusercontent.com/skyallaround/levguilded/main/${path}/metadata.json`;
      Check4Upd(thingy).then((rawContent) => {
        const RawVer = JSON.parse(rawContent).version;
        if (result.version !== RawVer) {
          UpdLog.push(`${string}`);
          console.log(
            `UPDATE NEEDED OF ${string}! [YOURS: ${result.version} -> CURRENT: ${RawVer}]`
          );
          Overlay(
            `UPDATE NEEDED OF ${string}! [YOURS: ${result.version} -> CURRENT: ${RawVer}]`,
            `https://github.com/skyallaround/levguilded/releases/tag/Stuff`
          );
        } else {
          console.log(
            `YOU'RE RUNNING THE NEWEST VERISON OF ${string}! [YOURS: ${result.version} -> CURRENT: ${RawVer}]`
          );
        }
      });
    });
    //}, 5000);
  });
}

async function Overlay(Text, Link) {
  if (document.getElementById("Updoverlay")) {
    document.getElementById("Updoverlay").remove();
  }
  if (!document.getElementById("Updoverlay")) {
    // Create the overlay element
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.id = "Updoverlay";
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

function Toa() {
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
      //console.log("script has loaded!");
    };
    script.onerror = function handleScriptError() {
      console.log("error loading Sky's Utilities");
    };
    document.head.appendChild(script);
  }
}
