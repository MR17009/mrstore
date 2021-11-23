<template>
  <v-app>
    <TopNav />
    
    <v-content>
      <v-container>
    <v-row>
      <v-col sm="4" lg="3" v-if="$vuetify.breakpoint.mdAndUp">
        <Sidebar />
      </v-col>
      <v-col sm="8" lg="9">
        <Product />
      </v-col>
    </v-row>
  </v-container>
    </v-content>
  </v-app>
</template>

<script>
import TopNav from '../components/TopNav.vue'
import Sidebar from '../components/Sidebar.vue'
import Product from '../components/Products.vue'


export default {
  name: 'Home',
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
