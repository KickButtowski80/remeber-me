<template>
  <base-card v-if="checkResourcesLength">
    <span>please add at least a resource</span>
    <template v-slot:icon>
      <open-empty-folder style="display: inline-block"></open-empty-folder>
    </template>
  </base-card>
  <ul>
    <learning-resource
      v-for="(res, index) in resources"
      :index="index"
      :key="res.id"
      :="{ ...res }"
    >
    </learning-resource>
  </ul>
</template>

<script>
import LearningResource from "./LearningResource.vue";
import OpenEmptyFolder from "../Icons/OpenEmptyFolder.vue";

export default {
  components: { LearningResource, OpenEmptyFolder },
  inject: ["resources"],
  computed: {
    checkResourcesLength() {
      return this.resources.length === 0;
    },
  },
};
</script>

<style  scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>