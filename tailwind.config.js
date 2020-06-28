module.exports = {
  theme: {
    maxWidth: {
      container: "900px",
    },
    opacity: {
      "10": "0.1",
    },
    height: {
      full: "100%",
      line: "2px",
    },
    extend: {
      // colors: {
      //   primary: {
      //     default: "#1a2122",
      //   },
      //   secondary: {
      //     default: "#26979c",
      //     dark: "#165e62",
      //   },
      //   signalNoise: {
      //     default: "#cdff00",
      //   },
      //   teg: {
      //     default: "#fe0000",
      //   },
      //   grey: {
      //     default: "#edf2f6",
      //     text: "#646e6e",
      //   },
      //   black: {
      //     default: "#000",
      //     text: "#333a3a",
      //   },
      // },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        "main-text": "var(--text-main)",
        "secondary-text": "var(--text-secondary)",
        green: "var(--green)",
        "green-light": "var(--green-light)",
        "hover-signalNoise": "var(--hover-signalNoise)",
        "hover-teg": "var(--hover-teg)",
      },
    },
  },
}
