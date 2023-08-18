var CONFIGS = {
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        dark: false,
        colors: {
          primary: "#666CFF",
          "on-primary": "#fff",
          secondary: "#6D788D",
          "on-secondary": "#fff",
          success: "#72E128",
          "on-success": "#fff",
          info: "#26C6F9",
          "on-info": "#fff",
          warning: "#FDB528",
          "on-warning": "#fff",
          error: "#FF4D49",
          background: "#F7F7F9",
          "on-background": "#4c4e64",
          "on-surface": "#4c4e64",
          "perfect-scrollbar-thumb": "#DBDADE",
          "snackbar-background": "#212121",
          "tooltip-background": "#262732",
          "alert-background": "#F7F7F9",
          "grey-50": "#FAFAFA",
          "grey-100": "#F4F5FA",
          "grey-200": "#F5F5F7",
          "grey-300": "#E0E0E0",
          "grey-400": "#BDBDBD",
          "grey-500": "#9E9E9E",
          "grey-600": "#757575",
          "grey-700": "#616161",
          "grey-800": "#424242",
          "grey-900": "#212121",
        },
        variables: {
          "code-color": "#d400ff",
          "border-color": "#4c4e64",
          "hover-opacity": 0.05,
          "overlay-scrim-background": "#4C4E64",
          "overlay-scrim-opacity": 0.5,

          // Shadows
          "shadow-key-umbra-opacity": "rgba(var(--v-theme-on-surface), 0.08)",
          "shadow-key-penumbra-opacity":
            "rgba(var(--v-theme-on-surface), 0.05)",
          "shadow-key-ambient-opacity": "rgba(var(--v-theme-on-surface), 0.03)",
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: "#666CFF",
          "on-primary": "#fff",
          secondary: "#6D788D",
          "on-secondary": "#fff",
          success: "#72E128",
          "on-success": "#fff",
          info: "#26C6F9",
          "on-info": "#fff",
          warning: "#FDB528",
          "on-warning": "#fff",
          error: "#FF4D49",
          background: "#282A42",
          "on-background": "#eaeaff",
          surface: "#30334E",
          "on-surface": "#eaeaff",
          "perfect-scrollbar-thumb": "#4A5072",
          "snackbar-background": "#F5F5F5",
          "on-snackbar-background": "#30334E",
          "tooltip-background": "#464A65",
          "alert-background": "#282A42",
          "grey-50": "#2A2E42",
          "grey-100": "#41435c",
          "grey-200": "#3A3E5B",
          "grey-300": "#5E6692",
          "grey-400": "#7983BB",
          "grey-500": "#8692D0",
          "grey-600": "#AAB3DE",
          "grey-700": "#B6BEE3",
          "grey-800": "#CFD3EC",
          "grey-900": "#E7E9F6",
        },
        variables: {
          "code-color": "#d400ff",
          "border-color": "#eaeaff",
          "hover-opacity": 0.05,
          "overlay-scrim-background": "#101121",
          "overlay-scrim-opacity": 0.6,

          // Shadows
          "shadow-key-umbra-opacity": "rgba(20, 21, 33, 0.08)",
          "shadow-key-penumbra-opacity": "rgba(20, 21, 33, 0.05)",
          "shadow-key-ambient-opacity": "rgba(20, 21, 33, 0.03)",
        },
      },
    },
  },
  defaults: {
    IconBtn: {
      icon: true,
      size: "small",
      color: "default",
      variant: "text",
      VIcon: {
        size: 24,
      },
    },
    VAlert: {
      density: "comfortable",
      VBtn: {
        color: undefined,
      },
    },
    VAvatar: {
      // ℹ️ Remove after next release
      variant: "flat",
    },
    VBadge: {
      // set v-badge default color to primary
      color: "primary",
    },
    VBtn: {
      // set v-btn default color to primary
      color: "primary",
    },
    VChip: {
      elevation: 0,
    },
    VPagination: {
      activeColor: "primary",
      density: "comfortable",
      size: "32",
    },
    VTabs: {
      // set v-tabs default color to primary
      color: "primary",
      VSlideGroup: {
        showArrows: true,
      },
    },
    VTooltip: {
      // set v-tooltip default location to top
      location: "top",
    },
    VList: {
      VListItem: {
        activeColor: "primary",
      },
    },
    VCheckbox: {
      // set v-checkbox default color to primary
      color: "primary",
      density: "comfortable",
      hideDetails: "auto",
    },
    VRadioGroup: {
      color: "primary",
      hideDetails: "auto",
    },
    VRadio: {
      hideDetails: "auto",
    },
    VSelect: {
      variant: "outlined",
      color: "primary",
      hideDetails: "auto",
    },
    VRangeSlider: {
      // set v-range-slider default color to primary
      color: "primary",
      density: "comfortable",
      thumbLabel: true,
      hideDetails: "auto",
    },
    VRating: {
      // set v-rating default color to primary
      density: "compact",
      activeColor: "warning",
    },
    VProgressCircular: {
      // set v-progress-circular default color to primary
      color: "primary",
    },
    VSlider: {
      // set v-slider default color to primary
      color: "primary",
      hideDetails: "auto",
    },
    VTextField: {
      variant: "outlined",
      color: "primary",
      hideDetails: "auto",
    },
    VAutocomplete: {
      variant: "outlined",
      density: "comfortable",
      color: "primary",
      hideDetails: "auto",
    },
    VCombobox: {
      variant: "outlined",
      color: "primary",
      hideDetails: "auto",
    },
    VFileInput: {
      variant: "outlined",
      color: "primary",
      hideDetails: "auto",
    },
    VTextarea: {
      variant: "outlined",
      density: "comfortable",
      color: "primary",
      hideDetails: "auto",
    },
    VSwitch: {
      // set v-switch default color to primary
      color: "primary",
      hideDetails: "auto",
    },
  },
};
