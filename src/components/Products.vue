<template>
    <div>productos
        <v-card v-for="(telefono,key) in telefonos" 
            :key="key">${{telefono.precio}}<br>
            {{telefono.marca}}, {{telefono.modelo}}, 
            {{telefono.pantalla}}, {{telefono.rom}}, 
            {{telefono.ram}}, {{telefono.estado}}
        </v-card>
    </div>
</template>
<script>
import {db} from '../db';

export default {
     name: "Anuncios",
    data(){
        return {
            telefonos:[]
        }
    },
    firestore:{
        telefonos: db.collection('telefono')
    }
}
</script>
