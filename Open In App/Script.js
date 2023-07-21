const ver = "0.0.1";
var Toggle = false;

module.exports = {
  load() {
    Toggle = true;
    if (sessionStorage.getItem("previousUrl")) {
      //sessionStorage.removeItem("previousUrl");
    }
    if (document.getElementById("inappbtn")) {
      document.getElementById("inappbtn").remove();
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
