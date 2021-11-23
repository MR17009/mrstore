<template>
  <v-sheet>
    <v-card color="red darken-1" dark>
      <v-card-title>Marca</v-card-title>
      <v-card-text >
        <v-container fluid>
          <v-switch
            :label="'Nuevo'"
            color="white"
            v-model="switch1"
            inset
          ></v-switch>
          <v-checkbox
            v-for="(brand,i) in brands"
            :key="i"
            :label="brand"
            :value="i"
            @change="emitirFiltros"
          ></v-checkbox>
        </v-container>
      </v-card-text>
      <v-card-title>Sistema</v-card-title>
      <v-card-text>
        <v-container fluid>
          <v-checkbox
            v-for="(osi, i) in os"
            :key="i"
            :label="osi"
            :value="i"
            @change="emitirFiltros"
          ></v-checkbox>
        </v-container>
      </v-card-text>
      <v-card-title>Pantalla</v-card-title>
      <v-card-text>
        <v-container fluid>
          <v-checkbox
            v-for="(screen, i) in screens"
            :key="i"
            :label="screen"
            :value="i"
            @change="emitirFiltros"
          ></v-checkbox>
        </v-container>
      </v-card-text>
    </v-card>
  </v-sheet>
</template>


<script>
export default {
  name: "Filtros",
  data() {
    return {
      sistemas: [],
      pantallas: [],
      brands: ["Samsung", "Huawei", "Nokia", "iPhone", "Xiaomi"],
      os: ["Android", "Windows", "IOS"],
      screens: ["6.0", "5.5", "5.0"],

      checkbox: true,
    };
  },
  methods: {
    emitirFiltros() {
      var x = { sistemas: [], pantallas: [] };
      if (this.sistemas.length > 0) x.pantallas = this.sistemas;
      if (this.pantallas.length > 0) x.pantallas = this.pantallas;

      this.$emit("cambioFiltro", x);
    },
  },
};
</script>
