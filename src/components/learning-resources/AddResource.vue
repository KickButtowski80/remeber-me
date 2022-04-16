<template>
  <base-dialog
    v-if="inputisInvalid"
    title="invalid input"
    @close="confirmError"
  >
    <template v-slot:default>
      <p>Unfortunately, at least one input value is invalid</p>
      <p>
        Please check all inputs and be sure, you added a few charcters in each
        input field
      </p>
    </template>

    <template v-slot:actions>
      <base-button @click="confirmError">Okay</base-button>
    </template>
  </base-dialog>
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
      inputisInvalid: false,
    };
  },
  methods: {
    submitData() {
      const title = this.title;
      const description = this.description;
      const link = this.link;

      if (this.validateFields(title, description, link) === false) {
        this.inputisInvalid = true;
        return;
      }

      this.addResource(title, description, link);
      this.clearFields();
    },

    validateFields(title, description, url) {
      if (
        this.check4EmptyField(title) ||
        this.check4EmptyField(description) ||
        this.check4EmptyField(url)
      ) {
        return false;
      }
    },
    check4EmptyField(fieldName) {
      return fieldName.trim().length === 0;
    },
    clearFields() {
      this.title = "";
      this.description = "";
      this.link = "";
    },
    confirmError() {
      this.inputisInvalid = false;
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