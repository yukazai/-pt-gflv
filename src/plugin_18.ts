// plugin_18
// Experimental VRCX Quest-compatible plugin
class Plugin18Plugin extends CustomModule {
    constructor() {
        super({
            name: "plugin_18",
            description: "Safe experimental plugin for Quest",
            authors: [{ name: "usernamethatrun", userId: "usr_xxxxxxxx" }],
            tags: ["Experimental"],
        });
        this.loaded = false;
    }
    async load() {
        this.loaded = true;
        this.logger.log("plugin_18 loaded");
    }
}
window.customjs.__LAST_PLUGIN_CLASS__ = Plugin18Plugin;
