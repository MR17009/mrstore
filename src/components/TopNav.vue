<template>
  <div>
    <v-app-bar color="red darken-3" dark>
      <v-toolbar-title class="hidden-sm-and-down">
        <v-icon>mdi-store</v-icon>Cellphone Store</v-toolbar-title
      >
      <span class="hidden-md-and-up">
        <v-btn @click.stop="drawer = !drawer" color="red darken-3"><v-icon>mdi-menu</v-icon></v-btn>
      </span>
      <v-spacer class="hidden-sm-and-up"></v-spacer>

      <v-text-field
        label="Search"
        v-model="cadena"
        solo-inverted
        hide-details
        class="pl-10 pr-10 ml-4"
        @keyup.capture="buscar"
      ></v-text-field> 
      <v-toolbar-items class="hidden-sm-and-down" >
        <v-btn to="/" text> Inicio </v-btn>
        <v-btn to="/" text>
          <v-icon left>mdi-chart-bar</v-icon>Estadisticas
        </v-btn>
        <v-btn to="/" text>
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-btn to="/" text>
          <v-icon>mdi-cart</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary right>
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>mdi-{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
import Buscar from "./Buscar.vue";
export default {
  components: {},
  data() {
    return {
      cadena: "",
      drawer: false,
      Buscar,
      items: [
        { title: "Home", link: "../src/views/Store.vue", icon: "home" },
        { title: "Estadisticas", link: "/", icon: "chart-bar" },
        { title: "Nuevo", link: "/", icon: "plus" },
        { title: "Carrito", link: "/", icon: "cart" },
      ],
    };
  },
};
</script>