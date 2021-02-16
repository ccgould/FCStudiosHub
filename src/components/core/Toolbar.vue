<template>
  <v-app-bar app>
    <v-toolbar-title>
      <v-app-bar-nav-icon @click="toggleNavigationBar" />
    </v-toolbar-title>
    <v-spacer />

    <v-snackbar v-model="showResult" :timeout="2000" top>
      {{ result }}
    </v-snackbar>
  </v-app-bar>
</template>
<script>
export default {
  data() {
    return {
      error: false,
      showResult: false,
      username: "",
      result: ""
    };
  },

  mounted() {
    if (!this.loggedIn) {
      this.$router.push("/login");
    }
  },
  methods: {
    toggleNavigationBar() {
      const vm = this;
      vm.$emit("toggleNavigationBar");
    }
  }
};
</script>
<style></style>
