<template>
  <base-card>
    <h1>Edit Resource</h1>
    <base-form
      :type="edit"
      :="currRes"
      v-on:set-new-description="gotNewDescription"
    >
      <template v-slot:actions>
        <base-button @click="finalaizedEdit">Edit Resource</base-button>
      </template>
    </base-form>
  </base-card>
</template>

<script>
export default {
  inject: ["reviseResource", "editCurrentResource"],
  data() {
    return {
      currRes: this.editCurrentResource,
      currDes: "",
    };
  },
  methods: {
    gotNewDescription(newDes) {
      this.currDes = newDes;
    },
    finalaizedEdit() {
      this.reviseResource(this.currRes, this.currDes);
    },
  },
};
</script>
