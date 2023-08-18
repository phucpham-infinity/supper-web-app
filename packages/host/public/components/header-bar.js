var HeaderBar = {
  template: /*html*/ `<div class="d-flex align-center gap-x-2 pa-3 elevation-1">
  <img
  src='/images/logo.svg'
  width='100'
  alt=""
/>
    
    <VSpacer />
    <user-avatar></user-avatar>
  </div>`,
  components: {
    "user-avatar": UserAvatar,
  },
};
