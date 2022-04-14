<template>
  <base-card>
    <base-button
      v-for="tab in tabs"
      :key="tab"
      @click="currentTab = tab"
      :mode="setMode(tab)"
    >
      {{ tab }}
    </base-button>
  </base-card>

  <keep-alive>
    <component :is="currentTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from "./StoredResources.vue";
import AddResource from "./AddResource.vue";
export default {
  components: { StoredResources, AddResource },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
    };
  },
  data() {
    return {
      currentTab: "StoredResources",
      tabs: ["StoredResources", "AddResource"],
      storedResources: [
        {
          id: "official-guide",
          title: "Official Guide",
          description: "The official vue.js documenation",
          link: "https://vuejs.org",
        },
        {
          id: "google",
          title: "Google",
          description: "Learn to Google...",
          link: "https://google.com",
        },
      ],
    };
  },
  methods: {
    setMode(tab) {
      return { button: this.currentTab === tab, flat: this.currentTab !== tab };
    },
    addResource(title, description, url) {
      let newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url,
      };
      this.storedResources.unshift(newResource);
      this.currentTab = "StoredResources";
    },
  },
};
</script>
