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
      <p>Please try again :)</p>
    </template>

    <template v-slot:actions>
      <base-button @click="confirmError">Okay</base-button>
    </template>
  </base-dialog>
  <base-card>
    <base-form
      type="add"
      v-on:set-new-title="gotNewTitle"
      v-on:set-new-description="gotNewDescription"
      v-on:set-new-link="gotNewLink"
    >
      <template v-slot:actions>
        <div>
          <base-button type="submit" @click="finalaizedAddition">
            Add Resource
          </base-button>
        </div>
      </template>
    </base-form>
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
    gotNewTitle(newTit) {
      this.title = newTit;
    },
    gotNewDescription(newDes) {
      this.description = newDes;
    },
    gotNewLink(newLink) {
      this.link = newLink;
    },
    finalaizedAddition() {
      const title = this.title;
      const description = this.description;
      const link = this.link;
      console.log(this.validateFields(title, description, link));
      if (this.validateFields(title, description, link)) {
        this.inputisInvalid = true;
        return;
      }
      this.addResource(title, description, link);
      this.clearFields();
    },
    validateFields(title, description, url) {
      // if all the fields are empty return true
      if (
        this.check4EmptyField(title) &&
        this.check4EmptyField(description) &&
        this.check4EmptyField(url)
      ) {
        return true;
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

<style>
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