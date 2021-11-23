<template>
  <v-app>
    <TopNav />
    <v-container>
      <v-row>
        <v-carousel class="hidden-sm-and-up">
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
          ></v-carousel-item>
        </v-carousel>
        <v-col sm="12" md="6">
          <v-card>
            <v-container fluid>
              <label> Estado: </label>
              <v-radio-group v-model="row" row>
                <v-radio label="Option 1" value="radio-1"></v-radio>
                <v-radio label="Option 2" value="radio-2"></v-radio>
              </v-radio-group>
              <label for="Marca">Marca:</label>
              <v-text-field label="Marca"></v-text-field>
              <label>Modelo:</label>
              <v-text-field label="Modelo"></v-text-field>
              <label>Pantalla:</label>
              <v-text-field label="Pantalla"></v-text-field>
              <label>Rom:</label>
              <v-text-field label="Rom"></v-text-field>
              <label>RAM:</label>
              <v-text-field label="RAM"></v-text-field>
            </v-container>
          </v-card>
        </v-col>
        <v-col sm="12" md="6">
          <label >Titulo:</label>
          <v-text-field label="Titulo"></v-text-field>
          <label>Vendedor:</label>
          <v-text-field label="Vendedor"></v-text-field>
          <label>Telefono:</label>
          <v-text-field label="Telefono"></v-text-field>
          <label>Descripcion:</label>
          <v-textarea
          solo
          name="input-7-4"
          label="Descripcion"
        ></v-textarea>
        <v-card>
            <label>Precio:</label>
            <v-text-field label="Precio"></v-text-field>
        </v-card>
        </v-col>
      </v-row>
      <v-row>
          <v-col>
              <v-card>
                  <v-card-title>Imagenes</v-card-title>

              </v-card>
          </v-col>
          <v-col>
              <v-btn color="red">Cancelar</v-btn>
          </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
import TopNav from "../components/TopNav.vue";

export default {
  name: "NuevoAnuncio",
  components: {
    TopNav,
  },
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
    };
  },
};
</script>
