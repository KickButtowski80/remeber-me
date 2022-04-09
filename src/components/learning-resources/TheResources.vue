<template>
  <base-card>
    <base-button
     v-for="tab in tabs" :key="tab" @click="currentTab = tab">
      {{ tab }}
    </base-button>
  </base-card>
  <base-card>
    <component :is="currentTab"></component>
  </base-card>
</template>

<script>
import StoredResources from "./StoredResources.vue";
import AddResource from "./AddResource.vue";
export default {
  components: { StoredResources, AddResource },
  provide() {
    return {
      resources: this.storedResources,
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
};
</script>