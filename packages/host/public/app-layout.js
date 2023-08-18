var AppLayout = {
  setup() {
    const menu = Vue.ref([
      {
        header: "React Applications 01",
        hiddenOnCollapse: true,
      },
      {
        href: "/",
        title: "Apps",
        icon: "fa-light fa-folder-grid",
      },
      {
        href: "/app/react-app-01",
        title: "Home",
        icon: "fa-light fa-house-chimney",
        child: [
          {
            href: "/app/react-app-01/demo",
            title: "Demo page",
            icon: "fa-light fa-code",
            class: "pl-5",
          },
          {
            href: "/app/react-app-01/demo2",
            title: "Demo page2",
            icon: "fa-light fa-code",
            class: "pl-5",
          },
        ],
      },
    ]);
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

    const menu2 = Vue.ref();

    const toggle = (event) => {
      menu2.value.toggle(event);
    };

    return { menu, items, toggle, menu2 };
  },
  components: {
    "header-bar": HeaderBar,
  },
  template: /*html*/ `<div class='flex surface-100'>
  <header-bar></header-bar>
  <slot />
</div>`,
};
