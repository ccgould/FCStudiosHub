<template>
  <v-navigation-drawer v-model="toggle" fixed app>
    <v-toolbar text class="toolbar" elevation="2">
      <router-link :to="{ name: 'Login' }">
        <img src="" width="36px" />
      </router-link>
      <router-link :to="{ name: 'Login' }" class="text">
        FCstudiosHub
      </router-link>
    </v-toolbar>
    <v-divider />

    <v-list dense nav> </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    toggle: {
      type: Boolean,
      required: false,
      default: true
    }
  },

  data() {
    return {
      selectedIndex: 1,

      right: null
    };
  },
  methods: {
    changeRoute(routeName, selectedIndex) {
      const vm = this;

      vm.selectedIndex = selectedIndex;

      return vm.$router.push({ name: routeName });
    }
  }
};
</script>

<style>
.toolbar {
  font-weight: bold;
  font-size: 18px;
}

.toolbar .text {
  padding-left: 15px;
  color: rgb(0, 0, 0);
  text-decoration: none;
}

.item-title {
  font-size: 17px;
  font-weight: 500;
}
.item-sub-title {
  font-size: 15px;
  font-weight: 500;
}

.active {
  font-weight: bold;
}
</style>
