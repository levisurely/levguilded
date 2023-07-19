const ver = "0.0.1";
var Toggle = false;

module.exports = {
  load() {
    Toggle = true;
    //on
    if (Toggle == true) {
      // Which string to replace filename with.
      var REPLACE_WITH = Math.random(); //You may also replace the Math.random() part to any text you like if you want.
      // Set to "whitelist" to only affect files with selected extensions, "blacklist" to affect all files but those ones.
      const MODE = "blocklist";
      // E.g. ["mp4", "gif"] will make the script ignore these files in blacklist mode.
      const EXTENSIONS = [];

      const _getFilename = Object.getOwnPropertyDescriptor(
        File.prototype,
        "name"
      ).get;

      Object.defineProperty(File.prototype, "name", {
        get() {
          const filename = _getFilename.call(this);
          const extension = filename.split(".").slice(-1)[0];
          const isListed = EXTENSIONS.includes(extension);

          if (
            (MODE === "blacklist" && isListed) ||
            (MODE === "whitelist" && !isListed)
          ) {
            return filename;
          }

          return [REPLACE_WITH, extension].join(".");
        },
      });
    }
  },
  unload() {
    //off
    Toggle = false;
    document.body.contentEditable = "false";
    document.designMode = "off";
  },
};
