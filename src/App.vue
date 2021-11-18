<template>
  <v-app>
    <TopNav />
    
    <v-content>
      <v-container>
    <v-row>
      <v-col sm="3" offset-lg="1" v-if="$vuetify.breakpoint.smAndUp">
        <Sidebar />
      </v-col>
      <v-col sm="9" lg="7">
        <Product />
      </v-col>
    </v-row>
  </v-container>
    </v-content>
  </v-app>
</template>

<script>
import TopNav from './components/TopNav.vue'
import Sidebar from './components/Sidebar.vue'
import Product from './components/Products.vue'


export default {
  name: 'App',
  components: {
    TopNav,
    Sidebar,
    Product,
  },

  data: () => ({
    //
  }),
};
</script>
