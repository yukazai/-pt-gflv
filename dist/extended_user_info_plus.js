class ExtendedUserInfoPlus extends CustomModule {
  constructor() {
    super({
      name: "Extended User Info+",
      description: "Adds a 'More Info' button safely",
      authors:[{name:"usernamethatrun",userId:"usr_xxxxxxxx"}],
      tags:["Utility","Profile","Safe","UI"]
    });
    this.userCache={};
    this.queue=[];
    this.isProcessing=false;
  }

  async load(){
    this.logger.log("Extended User Info+ loaded");
    this.observeSearchResults();
    this.loaded=true;
  }

  observeSearchResults(){
    const container=document.querySelector("#search-container")||document.body;
    this.observer=new MutationObserver(()=>this.addMoreInfoButtons());
    this.observer.observe(container,{childList:true,subtree:true});
  }

  addMoreInfoButtons(){
    const cards=document.querySelectorAll(".vrcx-user-card");
    for(const card of cards){
      if(card.querySelector(".ext-info-btn")) continue;
      const btn=document.createElement("button");
      btn.innerText="More Info";
      btn.classList.add("ext-info-btn");
      btn.style="margin-left:8px;padding:4px 8px;background:#3a3a3a;color:#fff;border:none;border-radius:5px;cursor:pointer;";
      const userId=card.querySelector(".user-id")?.innerText;
      btn.onclick=()=>this.queueFetch(userId);
      card.appendChild(btn);
    }
  }

  async queueFetch(userId){
    if(!userId) return;
    if(this.userCache[userId]){
      this.showUserPanel(this.userCache[userId]);
      return;
    }
    this.queue.push(userId);
    if(!this.isProcessing) this.processQueue();
  }

  async processQueue(){
    this.isProcessing=true;
    while(this.queue.length>0){
      const userId=this.queue.shift();
      try{
        const res=await fetch(`https://api.vrchat.cloud/api/1/users/${userId}`);
        if(res.status===429){
          this.queue.unshift(userId);
          await new Promise(r=>setTimeout(r,5000));
          continue;
        }
        const data=await res.json();
        this.userCache[userId]=data;
        this.showUserPanel(data);
      }catch(e){
        this.logger.error(`Failed fetching ${userId}: ${e}`);
      }
      await new Promise(r=>setTimeout(r,1500));
    }
    this.isProcessing=false;
  }

  showUserPanel(user){
    alert(`User Info: ${user.displayName || user.username} (${user.id})`);
  }
}

window.customjs.__LAST_PLUGIN_CLASS__ = ExtendedUserInfoPlus;
