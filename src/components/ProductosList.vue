<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Buscar por nombre de producto"
          v-model="nombre"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchNombre"
          >
            Buscar
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Lista de productos</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(producto, index) in productos"
          :key="index"
          @click="setActiveProducto(producto, index)"
        >
          {{ producto.nombre }}
        </li>
      </ul>
      <!--
      <button class="m-3 btn btn-sm btn-danger" @click="removeAllTutorials">
        Remove All
      </button>
      -->
    </div>
    <div class="col-md-6">
      <div v-if="currentProducto">
        <h4>Producto</h4>
        <div>
          <label><strong>Nombre:</strong></label> {{ currentProducto.nombre }}
        </div>
        <div>
          <label><strong>Descripcion:</strong></label> {{ currentProducto.descripcion }}
        </div>
        <div>
          <label><strong>Codigo:</strong></label> {{ currentProducto.codigo }}
        </div>
        <div>
          <label><strong>Status:</strong></label> {{ currentProducto.published ? "Published" : "Pending" }}
        </div>

        <button class="m-3 btn btn-sm btn-warning">
        <router-link :to="'/productos/' + currentProducto.id" class="badge badge-warning">Edit</router-link>
        </button>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Producto...</p>
      </div>
    </div>
  </div>
</template>

<script>
import   ProductoDataService  from "../services/ProductoDataService";

export default{
    name: "productos-list",
    data(){
        return{
            productos:[],
            currentProducto: null,
            currentIndex: -1,
            nombre:'',
        };
    },
    methods: {
   
        retrieveProductos() {
          
          ProductoDataService.getAll()
            .then(response => {
              this.productos = response.data;
            console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

        refreshList(){
            this.retrieveProductos();
            this.currentProducto = null;
            this.currentIndex= -1;
        },

        setActiveProducto(producto, index){
            this.currentProducto = producto;
            this.currentIndex = producto ? index : -1;
        },

        removeAllProductos(){
            ProductoDataService.deleteAll()
             .then(response =>{
                 console.log(response.data);
                 this.refreshList();
             })
             .catch(e=> {
                 console.log(e);
             });
        },

        searchNombre(){
            ProductoDataService.findByNombre(this.nombre)
             .then(response =>{
                 this.productos = response.data;
                 this.setActiveProducto(null);
                 console.log(response.data);
             })
             .catch (e=> {
                 console.log(e);
             });
        } 
    },
   mounted() {
    this.retrieveProductos();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 950px;
  margin: auto;
}
</style>