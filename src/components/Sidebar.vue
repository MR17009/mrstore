<template>
<v-sheet>
  <v-card>
    <v-card-title>Marca</v-card-title>
    <v-card-text>
      <v-container fluid>
        <v-checkbox
            v-for="(brand,i) in brands"
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
            v-for="(osi,i) in os"
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
            v-for="(screen,i) in screens"
            :key="i"
            :label="screen"
            :value="i"
            color="red darken-3"
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
      sistemas:[],
      pantallas:[],
      brands: ["Samsung", "Huawei", "Nokia", "iPhone", "Xiaomi"],
      os: ["Android", "Windows", "IOS"],
      screens: ["6.0", "5.5", "5.0"],

      checkbox: true,
    };
  },
  methods:{
    emitirFiltros(){
      var x = {sistemas:[],pantallas:[]}
      if(this.sistemas.length>0)
        x.pantallas=this.sistemas
      if(this.pantallas.length>0)
        x.pantallas=this.pantallas

        this.$emit("cambioFiltro", x)
    }
  }
};
</script>
