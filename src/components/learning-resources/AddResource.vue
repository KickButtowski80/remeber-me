<template>
  <base-card>
    <form v-on:submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" name="title" id="title" v-model="title" />
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
        <input type="url" name="link" id="link" v-model="link" />
      </div>
      <div>
        <base-button type="submit"> Add Resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  inject: ["resources", "addResource"],
  data() {
    return {
      title: "",
      description: "",
      link: "",
    };
  },
  methods: {
    submitData() {
      const title = this.title;
      const description = this.description;
      const link = this.link;    
      this.addResource(title, description, link);
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>