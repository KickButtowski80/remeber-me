<template>
  <button v-bind:type="type" v-bind:class="mode">
    <slot name='iconName'></slot>
    <slot></slot>
  </button>
</template>

<script>
export default { 
  props: ['type', 'mode']
};
</script>


<style scoped>
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #7302be;
  border: 1px solid #412b4f;
  color: white;
  cursor: pointer;
  border-radius: 25px; 

}

button:hover,
button:active {
  background-color: #3c0c5c;
  border-color: #270041;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #846187;
}
</style>