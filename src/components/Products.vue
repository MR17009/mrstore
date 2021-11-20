<template>
  <v-container>
    <v-row>
      <v-col cols="5" class="hidden-sm-and-up">
        <span >
          <v-btn @click.stop="drawer = !drawer"
            ><v-icon>mdi-filter</v-icon>Filtros</v-btn
          ></span
        ></v-col
      >
      <v-col cols="6" class="hidden-sm-and-up">
        <label>Ordenar por:</label>
        <select>
          <option value="0">Precio</option>
          <option value="1">Fecha</option>
        </select></v-col
      >

      <v-container class="hidden-sm-and-down">
        <v-row>
          <v-col cols="4">
            <label for="precio">Precio:</label>
            <input id="precio" type="number" class="validate small" />
          </v-col>
          <v-col cols="4">
            <label for="hasta">Hasta:</label>
            <input id="hasta" type="number" class="validate small" />
          </v-col>
          <v-cols cols="4">
            <label>Ordenar por:</label>
            <select>
              <option value="0">Precio</option>
              <option value="1">Fecha</option>
            </select>
          </v-cols>
        </v-row>
      </v-container>
    </v-row>
    <v-row>
      <v-col v-for="(telefono, key) in telefonos" :key="key" cols="4">
        <v-card outlined>
          <v-img height="200px" />
          <v-card-title> ${{ telefono.precio }} </v-card-title>
          <v-card-subtitle>
            {{ telefono.marca }}, {{ telefono.modelo }},
            {{ telefono.pantalla }}, {{ telefono.rom }}, {{ telefono.ram }},
            {{ telefono.estado }}
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
    <v-navigation-drawer v-model="drawer" absolute temporary right>
      <v-card>
        <v-card-title>Marca</v-card-title>
        <v-card-text>
          <v-container fluid>
            <v-checkbox
              v-for="(brand, i) in brands"
              :key="i"
              :label="brand"
              :value="i"
              color="red darken-3"
              @change="emitirFiltros"
            ></v-checkbox>
          </v-container>
        </v-card-text>
      </v-card>
      <v-card>
        <v-card-title>Sistema</v-card-title>
        <v-card-text>
          <v-container fluid>
            <v-checkbox
              v-for="(osi, i) in os"
              :key="i"
              :label="osi"
              :value="i"
              color="red darken-3"
              @change="emitirFiltros"
            ></v-checkbox>
          </v-container>
        </v-card-text>
      </v-card>
      <v-card>
        <v-card-title>Pantalla</v-card-title>
        <v-card-text>
          <v-container fluid>
            <v-checkbox
              v-for="(screen, i) in screens"
              :key="i"
              :label="screen"
              :value="i"
              color="red darken-3"
              @change="emitirFiltros"
            ></v-checkbox>
          </v-container>
        </v-card-text>
      </v-card>
    </v-navigation-drawer>
  </v-container>
</template>
<script>
import { db } from "../db";
export default {
  name: "Anuncios",
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
