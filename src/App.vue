<template>
  <the-header>
    <template v-slot:header>
      <h1 style="color: white">Remeber Me</h1>
      <boy-avatar id="boy" />
    </template>
  </the-header>
  <the-resources></the-resources>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheResources from "./components/learning-resources/TheResources.vue";
import BoyAvatar from "./components/Icons/BoyAvatar.vue";
export default {
  components: { TheResources, TheHeader, BoyAvatar },
  data() {
    return {
      appTitle: "Remeber Me",
    };
  },
  provide() {
    return {
      resources: this.storedResources,
    };
  },
  computed: {
    currentProps() {
      if (this.currentTab === "StoredResources") {
        return [this.storedResources];
      }
      return ["sometnhing"];
    },
  },
};
</script>

<style >
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}

#boy:hover {
  width: 260px;
  height: 60px;
  transition: width 1s, height 2s;
}
</style>

