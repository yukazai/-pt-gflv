// plugin_4
// Experimental VRCX Quest-compatible plugin
class Plugin4Plugin extends CustomModule {
    constructor() {
        super({
            name: "plugin_4",
            description: "Safe experimental plugin for Quest",
            authors: [{ name: "usernamethatrun", userId: "usr_xxxxxxxx" }],
            tags: ["Experimental"],
        });
        this.loaded = false;
    }
    async load() {
        this.loaded = true;
        this.logger.log("plugin_4 loaded");
    }
}
window.customjs.__LAST_PLUGIN_CLASS__ = Plugin4Plugin;
