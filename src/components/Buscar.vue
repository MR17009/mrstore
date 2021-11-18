<template>
    <div>
        <input v-model="cadena" type="text"/>
        <v-btn>boton</v-btn>
    </div>
</template>
<script>


export default {
    name: "Buscar",
    data(){
        return{
            cadena:""
        }
    },
    methods:{
        filtrarAnuncios(){
            if(this.cadena){
                this.$emit("buscarCadena", this.cadena)
            }
        }
    }
}
</script>