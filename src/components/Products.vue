<template>
  <v-container>
    <v-row>
      <v-col cols="5" class="hidden-sm-and-up">
        <span>
          <v-btn @click.stop="drawer = !drawer" color="red darken-3" dark
            ><v-icon>mdi-filter</v-icon>Filtros</v-btn
          ></span
        ></v-col
      >
      <v-card color="red darken-1" dark>
      <v-col cols="12" class="hidden-sm-and-up">
        <label>Ordenar por:               </label>
        <select>
          <option value="0">   Precio</option>
          <option value="1">  Fecha</option>
        </select>
        </v-col>
      </v-card>

      <v-container class="hidden-sm-and-down">
        <v-row>
          <v-card color="red darken-1" dark>
          <v-col cols="12">
            <label for="precio">Precio:</label>
            <input id="precio" type="number" class="validate small" />
          </v-col>
          </v-card>
          <v-card color="red darken-1" dark>
          <v-col cols="12">
            <label for="hasta">Hasta:</label>
            <input id="hasta" type="number" class="validate small" />
          </v-col>
          </v-card>
          <v-card color="red darken-1" dark>
          <v-cols cols="12">
            <label>Ordenar por:                  </label>
            <select>
              <option value="0">Precio</option>
              <option value="1">Fecha</option>
            </select>
          </v-cols>
          </v-card>
        
        </v-row>
      </v-container>
    </v-row>
    <v-row>
      <v-col v-for="(telefono, key) in telefonos" :key="key" xs="12" md="4">
        <v-card outlined>
          <v-img height="200px" width="200px" />
          <v-card-title> ${{ telefono.precio }} </v-card-title>
          <v-card-text>
            <v-container fluid>
              {{ telefono.marca }}, {{ telefono.modelo }},
              {{ telefono.pantalla }}, {{ telefono.rom }}, {{ telefono.ram }},
              {{ telefono.estado }}
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-navigation-drawer v-model="drawer" absolute temporary right>
      <sidebar></sidebar>
    </v-navigation-drawer>
  </v-container>
</template>
<script>
import { db } from "../db";
import Sidebar from './Sidebar.vue'
export default {
  components: { Sidebar },
  name: "Products",
  data() {
    return {

      drawer: false,
      telefonos: [],
      brands: ["Samsung", "Huawei", "Nokia", "iPhone", "Xiaomi"],
      os: ["Android", "Windows", "IOS"],
      screens: ["6.0", "5.5", "5.0"],
      checkbox: true,
    };
  },
  firestore: {
    telefonos: db.collection("telefono"),
  },
  methods: {
    goToProduct() {
      this.$router.push({ name: "UnAnuncio" });
    },
  },
};
</script>
