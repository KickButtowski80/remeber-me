<template>
  <base-card>
    <base-button
      v-for="tab in tabs"
      :key="tab"
      @click="selectCurrent(tab)"
      :mode="setMode(tab)"
    >
      {{ tab }}
    </base-button>
  </base-card>
  <keep-alive>
    <div>
      <base-dialog title="Error" v-if="disabledTab" @close="confirmError">
        <template v-slot:default>
          {{ message }}
        </template>
      </base-dialog>
      <component :is="currentTab"></component>
    </div>
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
      tempTabs: ["StoredResources", "AddResource"],
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
      message: "",
      disabledTab: false,
    };
  },
  computed: {
    tabStatus() {
      if (this.currentTab === "EditResource") return this.disabledTab;
      return "";
    },
  },
  methods: {
    confirmError() {
      this.disabledTab = false;
    },
    selectCurrent(attempedTab) {
      if (attempedTab === "EditResource" && this.currentTab !== "EditResource") {
        this.disabledTab = true;
        this.message =
          "you cannot edit by clicking on tab." +
          "try any item edit button in the stored resources tab";
          this.currentTab = "StoredResources";
        return;
      }
      this.currentTab = attempedTab;
    },
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
      this.storedResources[currentRes.index].description = changedDes;
      this.storedResources = [...this.storedResources];

      this.currentTab = "StoredResources";
    },
  },
};
</script>
