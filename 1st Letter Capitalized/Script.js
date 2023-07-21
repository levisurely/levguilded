const ver = "0.0.1";
var Toggle = false;

module.exports = {
  load() {
    Toggle = true;
  },
  unload() {
    Toggle = false;
    if (document.getElementById("overlayTextbox")) {
      document.getElementById("overlayTextbox").remove();
    }
  },
};

function capitalizeSentences(text) {
  //console.log(text, (text !== null && typeof text === "string"));
  if (text !== null && typeof text === "string") {
    var capitalizedText = text.replace(/(^|\.\s+)([a-z])/g, function (match) {
      return match.toUpperCase() || "";
    });
    return capitalizedText || "";
  } else {
    return "";
  }
}

async function make() {
  var element = await document.getElementsByClassName("ChatChannelContents-container")[0];
  var wrapper = document.createElement("div");
  wrapper.style.position = "relative";

  var overlayTextbox = document.createElement("div");
  overlayTextbox.setAttribute("id", "overlayTextbox");
  overlayTextbox.style.position = "absolute";
  overlayTextbox.style.top = "50%";
  overlayTextbox.style.left = "50%";
  overlayTextbox.contentEditable = true;
  overlayTextbox.style.transform = "translate(-50%, -50%)";
  overlayTextbox.style.background = "rgba(0, 0, 0, 0.5)";
  overlayTextbox.style.color = "white";
  overlayTextbox.style.width = "300px";
  overlayTextbox.style.height = "100px";
  overlayTextbox.style.boxSizing = "border-box";

  wrapper.appendChild(overlayTextbox);

  element.parentNode.insertBefore(wrapper, element);

  overlayTextbox.appendChild(element.parentNode);
}

async function track() {
  if (!document.getElementById("overlayTextbox")) {
    make();
  };
  var OLT = await document.getElementById("overlayTextbox");
  var uhh = await document.querySelectorAll('[data-slate-content="true"]')[0];
  if (Toggle == true && uhh !== null) {
    uhh.innerHTML = capitalizeSentences(OLT.innerHTML) || "";
  }
}

document.addEventListener("keydown", track);
document.addEventListener("mousemove", track);
document.addEventListener("keypress", track);
document.addEventListener("keyup", track);
document.addEventListener("focusout", track);
document.addEventListener("focus", track);
