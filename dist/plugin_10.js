// better lookup
// Experimental VRCX Quest-compatible plugin with full enhanced user info (official + unofficial APIs)
class Plugin10Plugin extends CustomModule {
    constructor() {
        super({
            name: "betterL",
            description: "Safe experimental plugin for Quest with enhanced user info (official + unofficial APIs, full profile)",
            authors: [{ name: "usernamethatrun", userId: "usr_xxxxxxxx" }],
            tags: ["Experimental", "Enhanced Info", "Full Profile"],
        });

        this.loaded = false;
        this.loggerPrefix = "[Plugin10] ";
    }

    async load() {
        this.loaded = true;
        this.logger.log(this.loggerPrefix + "plugin_10 loaded");
        this.addUserMenuOption();
    }

    log(msg, ...optional) {
        console.log(this.loggerPrefix + msg, ...optional);
    }

    warn(msg, ...optional) {
        console.warn(this.loggerPrefix + msg, ...optional);
    }

    error(msg, ...optional) {
        console.error(this.loggerPrefix + msg, ...optional);
    }

    addUserMenuOption() {
        if (typeof window.VRCX?.addUserContextMenuItem === "function") {
            window.VRCX.addUserContextMenuItem("Enhanced User Info", async (userId) => {
                try {
                    this.log("Fetching enhanced user info for:", userId);
                    const info = await this.getFullUserProfile(userId);
                    this.displayUserInfo(info);
                } catch (err) {
                    this.error("Failed to fetch user info:", err);
                    alert("Failed to fetch user info: " + err.message);
                }
            });
        } else {
            this.warn("Unable to add context menu item: addUserContextMenuItem not found.");
        }
    }

    async getFullUserProfile(userId) {
        const enhancedInfo = {};

        // -----------------------------
        // 1. Official API
        // -----------------------------
        try {
            const officialResp = await fetch(`https://api.vrchat.cloud/api/1/users/${userId}`, {
                headers: { "Accept": "application/json" },
            });

            if (officialResp.ok) {
                const userInfo = await officialResp.json();
                Object.assign(enhancedInfo, {
                    displayName: userInfo.displayName,
                    username: userInfo.username,
                    bio: userInfo.bio || "No bio",
                    currentAvatar: userInfo.currentAvatarImageUrl || "No avatar info",
                    tags: userInfo.tags || [],
                    lastLogin: userInfo.last_login || "Unknown",
                    accountCreated: userInfo.account_created || "Unknown",
                    developerType: userInfo.developerType || "None",
                    status: userInfo.status || "Unknown",
                    friends: userInfo.friendIds || [],
                    badges: userInfo.badges || [],
                });
            } else {
                this.warn("Official API fetch failed for user:", userId);
            }
        } catch (err) {
            this.error("Official API error:", err);
            enhancedInfo.officialError = err.message;
        }

        // -----------------------------
        // 2. Unofficial Social Stats API
        // -----------------------------
        try {
            const socialResp = await fetch(`https://api.vrchat.social/v1/users/${userId}/stats`);
            if (socialResp.ok) {
                const socialData = await socialResp.json();
                Object.assign(enhancedInfo, {
                    friendsCount: socialData.friends_count || 0,
                    publicWorldVisits: socialData.world_visits || [],
                    publicFavorites: socialData.favorites || [],
                    trustLevel: socialData.trust_level || "Unknown",
                    platformInfo: socialData.platform || "Unknown",
                });
            }
        } catch (err) {
            this.warn("Social stats API failed:", err);
        }

        // -----------------------------
        // 3. Recent History API (avatars/worlds)
        // -----------------------------
        try {
            const historyResp = await fetch(`https://api.vrchat.social/v1/users/${userId}/history`);
            if (historyResp.ok) {
                const historyData = await historyResp.json();
                enhancedInfo.recentWorlds = historyData.worlds || [];
                enhancedInfo.recentAvatars = historyData.avatars || [];
            }
        } catch (err) {
            this.warn("History API failed:", err);
        }

        // -----------------------------
        // 4. Public VRChat Plus Info
        // -----------------------------
        try {
            const plusResp = await fetch(`https://api.vrchat.social/v1/users/${userId}/plus`);
            if (plusResp.ok) {
                const plusData = await plusResp.json();
                enhancedInfo.vrchatPlus = plusData || {};
            }
        } catch (err) {
            this.warn("VRChat Plus API failed:", err);
        }

        // -----------------------------
        // 5. Groups & Memberships
        // -----------------------------
        try {
            const groupsResp = await fetch(`https://api.vrchat.social/v1/users/${userId}/groups`);
            if (groupsResp.ok) {
                const groupData = await groupsResp.json();
                enhancedInfo.groups = groupData.groups || [];
            }
        } catch (err) {
            this.warn("Groups API failed:", err);
        }

        // -----------------------------
        // 6. Additional Computed Data
        // -----------------------------
        enhancedInfo.summary = `
Display Name: ${enhancedInfo.displayName || "Unknown"}
Username: ${enhancedInfo.username || "Unknown"}
Friends Count: ${enhancedInfo.friendsCount || 0}
Trust Level: ${enhancedInfo.trustLevel || "Unknown"}
Last Login: ${enhancedInfo.lastLogin || "Unknown"}
Account Created: ${enhancedInfo.accountCreated || "Unknown"}
Bio: ${enhancedInfo.bio || "No bio"}
Badges: ${enhancedInfo.badges?.join(", ") || "None"}
Groups: ${enhancedInfo.groups?.map(g => g.name).join(", ") || "None"}
Recent Worlds: ${enhancedInfo.recentWorlds?.map(w => w.name).join(", ") || "None"}
Recent Avatars: ${enhancedInfo.recentAvatars?.map(a => a.name).join(", ") || "None"}
`;

        return enhancedInfo;
    }

    displayUserInfo(info) {
        // Create a modal for nicer display
        const modal = document.createElement("div");
        modal.style = `
            position: fixed; top: 10%; left: 10%; width: 80%; height: 80%;
            background: #222; color: #eee; overflow: auto; padding: 20px;
            border: 2px solid #666; border-radius: 12px; z-index: 99999;
        `;

        const closeBtn = document.createElement("button");
        closeBtn.innerText = "Close";
        closeBtn.style = `
            position: absolute; top: 10px; right: 10px; padding: 5px 10px;
            background: #444; color: #fff; border: none; cursor: pointer;
        `;
        closeBtn.onclick = () => modal.remove();

        const pre = document.createElement("pre");
        pre.innerText = JSON.stringify(info, null, 2);
        pre.style = `white-space: pre-wrap; word-break: break-word;`;

        modal.appendChild(closeBtn);
        modal.appendChild(pre);
        document.body.appendChild(modal);
    }
}

window.customjs.__LAST_PLUGIN_CLASS__ = Plugin10Plugin;
