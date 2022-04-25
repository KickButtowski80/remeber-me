<template>
  <li>
    <base-card>
      <h3>{{ title }}</h3>
      <header>
        <base-button v-on:click="deleteResource">
          <template v-slot:iconName>
            <h5>Delete</h5>
          </template>
          <delete-icon></delete-icon>
        </base-button>

        <base-button v-on:click="editResource">
          <template v-slot:iconName>
            <h5>Edit</h5>
          </template>
          <edit-icon></edit-icon>
        </base-button>
      </header>
      <p>{{ description }}</p>
      <nav>
        <a :href="link">View Resoruces</a>
      </nav>
    </base-card>
  </li>
</template>

<script>
export default {
  props: ["title", "description", "link", "index"],
  inject: ["removeResource", "reviseResource", "startEditResource"],
  methods: {
    deleteResource() {
      this.removeResource(this.title);
    },

    editResource() {
      const resource = {
        index: this.index,
        title: this.title,
        description: this.description,
        link: this.link,
      };
      this.startEditResource(resource, this.index);
    },
  },
};
</script>

<style  scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>