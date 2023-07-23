var Toggle = false;

module.exports = {
  load() {
    if (typeof Toastify !== "undefined") {
      Toggle = true;
      if (sessionStorage.getItem("previousUrl")) {
        //sessionStorage.removeItem("previousUrl");
      }
      if (document.getElementById("inappbtn")) {
        document.getElementById("inappbtn").remove();
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
  },
  unload() {
    Toggle = false;
    if (sessionStorage.getItem("previousUrl")) {
      //sessionStorage.removeItem("previousUrl");
    }
    if (document.getElementById("inappbtn")) {
      document.getElementById("inappbtn").remove();
    }
    //window.location.href = "https://www.guilded.gg/";
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

document.addEventListener("DOMContentLoaded", function () {
  var backButton = document.createElement("button");
  backButton.id = "inappbtn";
  backButton.innerText = "Back";

  backButton.style.position = "fixed";
  backButton.style.top = "10px";
  backButton.style.left = "10px";
  backButton.style.background = "rgba(0, 0, 0, 0.5)";
  backButton.style.color = "white";
  backButton.style.border = "none";
  backButton.style.padding = "10px 20px";
  backButton.style.cursor = "pointer";

  document.body.appendChild(backButton);
  if (Toggle == true) {
    var links = document.links;
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function (event) {
        sessionStorage.setItem("previousUrl", window.location.href);
        event.preventDefault();

        var href = target.getAttribute("href");

        if (Toggle == true) {
          window.location.href = href;
        }
      });
    }

    if (sessionStorage.getItem("previousUrl")) {
      backButton.style.display = "block";
    }

    backButton.addEventListener("click", function () {
      var previousUrl = sessionStorage.getItem("previousUrl");

      window.location.href = previousUrl;
    });
  }
});

document.addEventListener("click", function (event) {
  var target = event.target;

  if (target.tagName.toLowerCase() === "a") {
    event.preventDefault();

    var href = target.getAttribute("href");

    if (Toggle == true) {
      window.location.href = href;
    }
  }
});
