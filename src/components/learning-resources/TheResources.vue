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
import EditResource from "./EditResource.vue";
export default {
  components: { StoredResources, AddResource, EditResource },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      removeResource: this.removeResource,
      startEditResource: this.startEditResource,
      reviseResource: this.reviseResource,
      editCurrentResource: this.editCurrentResource,
    };
  },
  data() {
    return {
      currentTab: "StoredResources",
      tabs: ["StoredResources", "AddResource", "EditResource"],
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
      editCurrentResource: {},
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
    removeResource(title) {
      const resIndex = this.storedResources.findIndex((r) => r.title === title);
      this.storedResources.splice(resIndex, 1);
    },
    startEditResource(resource) {
      Object.assign(this.editCurrentResource, resource);
      this.currentTab = "EditResource";
    },
    reviseResource(currentRes, changedDes) {
      currentRes.description = changedDes;
      const lookedupResIdx = this.storedResources.findIndex(
        (res) => res.title === currentRes.title
      );

      this.storedResources.splice(lookedupResIdx, 1);
      this.storedResources.splice(lookedupResIdx, 0, currentRes);

      this.currentTab = "StoredResources";
    },
  },
};
</script>
