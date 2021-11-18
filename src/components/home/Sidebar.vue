<template>
<v-sheet>
  <v-card>
    <v-card-title>Marca</v-card-title>
    <v-card-text>
      <v-container fluid>
        <v-checkbox
            v-for="(marca,i) in marcas"
            :key="i"
            :label="marca"
            :value="i"
            color="red darken-3"
        ></v-checkbox>
      </v-container>
    </v-card-text>
  </v-card>
  <v-card>
    <v-card-title>Sistema</v-card-title>
    <v-card-text>
      <v-container fluid>
        <v-checkbox
            v-for="(sistema,i) in sistemas"
            :key="i"
            :label="sistema"
            :value="i"
            color="red darken-3"
        ></v-checkbox>
      </v-container>
    </v-card-text>
  </v-card>
  <v-card>
    <v-card-title>Sistema</v-card-title>
    <v-card-text>
      <v-container fluid>
        <v-checkbox
            v-for="(sistema,i) in sistemas"
            :key="i"
            :label="sistema"
            :value="i"
            color="red darken-3"
        ></v-checkbox>
      </v-container>
    </v-card-text>
  </v-card>
</v-sheet>
</template>


<script>
export default {
  data() {
    return {
      marcas: ["Samsung", "Huawei", "Nokia", "iPhone", "Xiaomi"],
      sistemas: ["Android", "Windows", "IOS"],
      pantalla: ["6.0", "5.5", "5.0"],

      checkbox: true,
    };
  },
};
</script>
