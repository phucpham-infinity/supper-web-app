var LoginPage = {
  setup() {
    const email = Vue.ref("");
    const password = Vue.ref("");
    const remember_me = Vue.ref(false);

    const router = VueRouter.useRouter();
    const route = VueRouter.useRoute();

    // const maxApi = Vue.inject("maxApi");

    const login = () => {
      localStorage.setItem("LoggedUser", "1");
      // maxApi.loginWithEmailPassword(email.value, password.value);
      setTimeout(() => {
        if (route.query.replace) router.replace(route.query.replace);
        else router.replace("/");
      }, 1000);
    };
    return { email, login, password, remember_me };
  },
  template: /*html*/ `
  <div>
  <div class="auth-logo d-flex align-center gap-x-2">
    <div>
    <img
      src='/images/logo.svg'
      class="w-25"
      alt=""
    />
    </div>
  </div>
  <VRow
    no-gutters
    class="auth-wrapper"
  >
    <VCol
      md="8"
      class="d-none d-md-flex align-center justify-center position-relative"
    >
      <div class="d-flex align-center justify-center pa-10">
        <img
          src='/images/pages/auth-v2-login-illustration-light.png'
          class="auth-illustration w-100"
          alt="auth-illustration"
        >
      </div>
      <VImg
        src='/images/pages/auth-v2-login-mask-dark.png'
        class="d-none d-md-flex auth-footer-mask"
        alt="auth-mask"
      />
    </VCol>

    <VCol
      cols="12"
      md="4"
      class="auth-card-v2 d-flex align-center justify-center"
      style="background-color: rgb(var(--v-theme-surface));"
    >
      <VCard
        flat
        :max-width="500"
        class="mt-12 mt-sm-0 pa-4"
      >
        <VCardText>
          <h5 class="text-h5 font-weight-semibold mb-1">
            Welcome to   <img
            src='/images/logo.svg'
            class="w-25"
            alt=""
          />! 👋🏻
          </h5>
          <p class="mb-0">
            Please sign-in to your account and start the adventure
          </p>
        </VCardText>
        <VCardText>
          <VAlert
            color="primary"
            variant="tonal"
          >
            <p class="text-caption mb-2">
              Admin Email: <strong>admin@demo.com</strong> / Pass: <strong>admin</strong>
            </p>
            <p class="text-caption mb-0">
              Client Email: <strong>client@demo.com</strong> / Pass: <strong>client</strong>
            </p>
          </VAlert>
        </VCardText>
        <VCardText>
          <VForm
            ref="refVForm"
            @submit.prevent="() => {}"
          >
            <VRow>
              <!-- email -->
              <VCol cols="12">
                <VTextField
                  v-model="email"
                  label="Email"
                  type="email"
                  density="compact"
                />
              </VCol>

              <!-- password -->
              <VCol cols="12">
                <VTextField
                  v-model="password"
                  type="password"
                  label="Password"
                  density="compact"
                />

                <div class="d-flex align-center flex-wrap justify-space-between mt-1 mb-4">
                  <VCheckbox
                    v-model="remember_me"
                    label="Remember me"
                  />
                  <a
                    class="text-primary ms-2 mb-1"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>

                <VBtn
                  block
                  type="submit"
                  @click="login"
                >
                  Login
                </VBtn>
              </VCol>

              <!-- create account -->
              <VCol
                cols="12"
                class="text-base text-center"
              >
                <span>New on our platform?</span>
                <a
                  class="text-primary ms-2"
                  href="#"
                >
                  Create an account
                </a>
              </VCol>
              <VCol
                cols="12"
                class="d-flex align-center"
              >
                <VDivider />
                <span class="mx-4">or</span>
                <VDivider />
              </VCol>

              <!-- auth providers -->
              <VCol
                cols="12"
                class="text-center"
              >
               <div>Google - Facebook - Apple</div>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</div>
  `,
};
