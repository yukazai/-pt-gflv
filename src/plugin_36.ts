// plugin_36
// Experimental VRCX Quest-compatible plugin
class Plugin36Plugin extends CustomModule {
    constructor() {
        super({
            name: "plugin_36",
            description: "Safe experimental plugin for Quest",
            authors: [{ name: "usernamethatrun", userId: "usr_xxxxxxxx" }],
            tags: ["Experimental"],
        });
        this.loaded = false;
    }
    async load() {
        this.loaded = true;
        this.logger.log("plugin_36 loaded");
    }
}
window.customjs.__LAST_PLUGIN_CLASS__ = Plugin36Plugin;
