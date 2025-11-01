// plugin_33
// Experimental VRCX Quest-compatible plugin
class Plugin33Plugin extends CustomModule {
    constructor() {
        super({
            name: "plugin_33",
            description: "Safe experimental plugin for Quest",
            authors: [{ name: "usernamethatrun", userId: "usr_xxxxxxxx" }],
            tags: ["Experimental"],
        });
        this.loaded = false;
    }
    async load() {
        this.loaded = true;
        this.logger.log("plugin_33 loaded");
    }
}
window.customjs.__LAST_PLUGIN_CLASS__ = Plugin33Plugin;
