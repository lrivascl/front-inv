<template>
  <div v-if="currentProducto" class="edit-form">
    <h4>Productos</h4>
    <form>
      <div class="form-group">
        <label for="nombre">Nombre</label>
        <input type="text" class="form-control" id="nombre"
          v-model="currentProducto.nombre"
        />
      </div>
      <div class="form-group">
        <label for="descripcion">Descripcion</label>
        <input type="text" class="form-control" id="descripcion"
          v-model="currentProducto.descripcion"
        />
      </div>
      <div class="form-group">
        <label for="codigo">Codigo</label>
        <input type="number" class="form-control" id="codigo"
          v-model="currentProducto.codigo"
        />
      </div>

      <div class="form-group">
        <label><strong>Status:</strong></label>
        {{ currentProducto.published ? "Published" : "Pending" }}
      </div>
    </form>

    <button class="btn btn-secondary"
      v-if="currentProducto.published"
      @click="updatePublished(false)"
    >
      UnPublish
    </button>
    <button v-else class="btn btn-success"
      @click="updatePublished(true)"
    >
      Publish
    </button>

    <button class="btn btn-danger"
      @click="deleteProdcuto"
    >
      Delete
    </button>

    <button type="submit" class="btn btn-info"
      @click="updateProducto"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Producto...</p>
  </div>
</template>

<script>
import  ProductoDataService  from "../services/ProductoDataService";

export default {
    name:"producto",
    data(){
        return{
            currentProducto:null,
            message: ''
        };
    },
    methods: {
        getProducto(id) {
            ProductoDataService.get(id)
              .then(response => {
              this.currentProducto = response.data;
              console.log(response.data);
            })
            .catch(e => {
              console.log(e);
            });
        },

        updatePublished(status){
            var data = {
                id: this.currentProducto.id,
                nombre: this.currentProducto.nombre,
                codigo: this.currentProducto.codigo,
                descripcion: this.currentProducto.descripcion,
                published: status
            };

            ProductoDataService.update(this.currentProducto.id, data)
             .then(response =>{
                 console.log(response.data);
                 this.currentProducto.published = status;
                 this.message = 'The Status was updated successfully!';
             })
             .catch(e =>{
                 console.log(e);
             });
        },

        updateProducto(){
            ProductoDataService.update(this.currentProducto.id, this.currentProducto)
             .then(response =>{
                 console.log(response.data);
                 this.message = 'The Status was updated successfully!';
             })
             .catch(e =>{
                 console.log(e);
             });
        },

        deleteProducto(){
            ProductoDataService.delete(this.currentProducto.id)
             .then(response =>{
                 console.log(response.data);
                 this.$router.push({name: "productos"});
             })
             .catch(e =>{
                 console.log(e);
             });
        }
    },

  mounted() {
    this.message = '';
    this.getProducto(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
