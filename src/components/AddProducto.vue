<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="nombre">Nombre</label>
        <input
          type="text"
          class="form-control"
          id="nombre"
          required
          v-model="producto.nombre"
          name="nombre"
        />
      </div>

      <div class="form-group">
        <label for="descripcion">Description</label>
        <input
          class="form-control"
          id="descripcion"
          required
          v-model="producto.descripcion"
          name="descripcion"
        />
      </div>

      <div class="form-group">
        <label for="codigo">Codigo</label>
        <input
          class="form-control"
          id="codigo"
          required
          v-model="producto.codigo"
          name="codigo"
        />
      </div>
      

      <button @click="saveProducto" class="btn btn-success">Enviar</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newProducto">Add</button>
    </div>
  </div>
</template>

<script>
import  TutorialDataService  from '../services/ProductoDataService';

export default{
    name: "add-producto",
    data(){
        return{
            producto:{
                id: null,
                nombre:"",
                descripcion:"",
                codigo:"",
                published:false
            },
            submitted: false
        };
    },
    methods:{
        saveProducto(){
            var data ={
                nombre: this.producto.nombre,
                descripcion: this.producto.descripcion,
                codigo: this.producto.codigo
            };

            TutorialDataService.create(data)
             .then(response =>{
                 this.producto.id = response.data.id;
                 console.log(response.data);
                 this.submitted = true;
             })
             .catch(e => {
                 console.log(e);
             });
        },

        newProducto(){
            this.submitted = false;
            this.producto = {};
        }
    }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>