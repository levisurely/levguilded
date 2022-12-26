const ver = "0.0.2"

module.exports = {
  load() {
    document.body.contentEditable = 'true'; document.designMode = 'on';
  },
  unload() {
    document.body.contentEditable = 'false'; document.designMode = 'off';
  },
};
