<template>
  <li>
    <base-card>
      <h3>{{ title }}</h3>
      <header>
        <base-button v-on:click="deleteResource">
          Delete
          <delete-icon></delete-icon>
        </base-button>

        <base-button>
          Edit
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
  props: ["title", "description", "link"],
  inject: ["removeResource"],
  methods: {
    deleteResource() {
      this.removeResource(this.title);
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