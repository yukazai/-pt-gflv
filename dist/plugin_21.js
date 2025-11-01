// plugin_21
// Experimental VRCX Quest-compatible plugin
class Plugin21Plugin extends CustomModule {
    constructor() {
        super({
            name: "plugin_21",
            description: "Safe experimental plugin for Quest",
            authors: [{ name: "usernamethatrun", userId: "usr_xxxxxxxx" }],
            tags: ["Experimental"],
        });
        this.loaded = false;
    }
    async load() {
        this.loaded = true;
        this.logger.log("plugin_21 loaded");
    }
}
window.customjs.__LAST_PLUGIN_CLASS__ = Plugin21Plugin;
