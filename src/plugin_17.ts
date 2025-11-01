// plugin_17
// Experimental VRCX Quest-compatible plugin
class Plugin17Plugin extends CustomModule {
    constructor() {
        super({
            name: "plugin_17",
            description: "Safe experimental plugin for Quest",
            authors: [{ name: "usernamethatrun", userId: "usr_xxxxxxxx" }],
            tags: ["Experimental"],
        });
        this.loaded = false;
    }
    async load() {
        this.loaded = true;
        this.logger.log("plugin_17 loaded");
    }
}
window.customjs.__LAST_PLUGIN_CLASS__ = Plugin17Plugin;
