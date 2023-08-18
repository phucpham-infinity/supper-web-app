var PageRender = {
  template: `<app-layout>
            <div v-if="isLoading" >Loading {{appName}}</div>
            <render-micro-app :mini-app-data="miniAppData" v-else > </render-micro-app>
        </app-layout>`,
  setup() {
    const isLoading = Vue.ref(false);
    const route = VueRouter.useRoute();
    const appName = route.params?.appName?.[0];
    const miniAppData = Vue.ref({
      appName,
    });
    return {
      isLoading,
      appName,
      miniAppData,
    };
  },
  components: {
    "render-micro-app": RenderMicroApp,
    "app-layout": AppLayout,
  },
};
