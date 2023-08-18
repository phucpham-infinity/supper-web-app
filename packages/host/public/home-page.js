var HomePage = {
  components: {
    "header-bar": HeaderBar,
  },
  setup() {
    const items = Vue.ref([
      {
        label: "Options",
        items: [
          {
            label: "Profile",
            icon: "fa-light fa-user",
          },
          {
            label: "Setting",
            icon: "fa-light fa-gear",
          },
        ],
      },
      {
        separator: true,
      },
      {
        label: "Logout",
        icon: "fa-light fa-right-from-bracket",
      },
    ]);

    const menu = Vue.ref();

    const toggle = (event) => {
      menu.value.toggle(event);
    };

    const apps = Vue.ref([
      {
        name: "The New York Times",
        icon: "https://play-lh.googleusercontent.com/qq5__wITsoCx2kUK8TqVW2-8UDRuxET9kCzPzAPHad8umXiHRF2N0tZKuLezd0tiBQg=s256-rw",
        path: "/app/react-app-01",
        author: "base-team",
      },
      {
        name: "Learn career skills",
        icon: "https://play-lh.googleusercontent.com/swfNDX3jEjWj_jvAOyv-ifeggaySH1AViujt9XDQfWXxn1lFT8XRRCZ2bngYo_KmrA=s256-rw",
        path: "/app/react-app-02",
        author: "base-team",
      },
    ]);
    const router = VueRouter.useRouter();
    const enterApp = (path) => {
      router.push({ path });
    };

    return { items, toggle, menu, apps, enterApp };
  },
  template: /*html*/ `
  <div style="background-color:#f8f7fa;" class="w-screen h-screen">
  <header-bar></header-bar>
  <div style="inline-size: 100%;margin-inline: auto; max-inline-size: 1440px;" class="pt-6">
    <div style="flex-wrap: wrap" class="flex pa-3 flex-wrap gap-4">
      <div style="width:130px; max-width: 130px" class="cursor-pointer" @click="enterApp(item.path)" v-for="(item, index) in apps">
        <div>
          <img width="130" height="130" class="" style="border-radius: 20%;box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);" :src="item.icon" />
        </div>
        <div style="height:60px;overflow: hidden;">
          <div class="mt-2" style="font-size: .8rem;font-weight: 400;color: rgb(32,33,36);"> {{ item.name }}</div>
          <div style="font-size: .8rem;font-weight: 400;color: rgb(32 33 36 / 70%);"> {{ item.author }}</div>
        </div>
      </div>
    </div>
  </div>
</div>
  `,
};
