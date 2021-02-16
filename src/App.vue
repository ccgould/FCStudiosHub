<template>
  <div>
    <template v-if="!$route.meta.allowAnonymous">
      <v-app id="inspire">
        <div class="app-container">
          <core-Toolbar @toggleNavigationBar="drawer = !drawer" />
          <core-NavigationDrawer :toggle="drawer" />
          <v-main>
            <!-- Provides the application the proper gutter -->
            <v-container fluid>
              <!-- If using vue-router -->
              <core-breadcrumbs />
              <router-view />
            </v-container>
            <v-footer app>
              <core-page-footer />
            </v-footer>
          </v-main>
        </div>
      </v-app>
    </template>

    <template v-else>
      <transition>
        <keep-alive>
          <router-view />
        </keep-alive>
      </transition>
    </template>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return { drawer: true };
  },
  mounted() {
    this.$router.push({ name: "Home" });
  }
};
</script>

<style>
.v-btn:hover:before {
  color: transparent !important;
}
</style>
