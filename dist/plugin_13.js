// plugin_13
// Experimental VRCX Quest-compatible plugin
class Plugin13Plugin extends CustomModule {
    constructor() {
        super({
            name: "plugin_13",
            description: "Safe experimental plugin for Quest",
            authors: [{ name: "usernamethatrun", userId: "usr_xxxxxxxx" }],
            tags: ["Experimental"],
        });
        this.loaded = false;
    }
    async load() {
        this.loaded = true;
        this.logger.log("plugin_13 loaded");
    }
}
window.customjs.__LAST_PLUGIN_CLASS__ = Plugin13Plugin;
