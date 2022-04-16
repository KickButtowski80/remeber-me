<template>
  <form v-on:submit.prevent="submitData" v-bind:type="type">
    <div class="form-control">
      <label for="title">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        v-model="title"
        disabled="nonEditable"
      />
    </div>

    <div class="form-control">
      <label for="description">Description</label
      ><textarea
        name="description"
        id="description"
        cols="30"
        rows="3"
        :value="description"
        @input="description = $event.target.value"
      ></textarea>
    </div>
    <div class="form-control">
      <label for="link">Link</label>
      <input
        type="url"
        name="link"
        id="link"
        v-model="link"
        disabled="nonEditable"
      />
    </div>
    <div>
      <slot name="actions"> 
         <base-button @click="$emit('close')">Close</base-button>
      </slot>
    </div>
  </form>
</template>

<script>
export default {
  props: ["type"],
  computed: {
    nonEditable() {
      return this.type === "edit";
    },
  },
};
</script>