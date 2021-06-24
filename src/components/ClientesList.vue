<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Buscar por nombre de cliente"
          v-model="nombreCli"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchNombreCli"
          >
            Buscar
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Lista de Clientes</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(cliente, index) in clientes"
          :key="index"
          @click="setActiveCliente(cliente, index)"
        >
          {{ cliente.nombreCli }}
        </li>
      </ul>
      <!--
      <button class="m-3 btn btn-sm btn-danger" @click="removeAllTutorials">
        Remove All
      </button>
      -->
    </div>
    <div class="col-md-6">
      <div v-if="currentCliente">
        <h4>Cliente</h4>
        <div>
          <label><strong>Nombre:</strong></label> {{ currentCliente.nombreCli }}
        </div>
        <div>
          <label><strong>Telefono:</strong></label> {{ currentCliente.telefono }}
        </div>
        <div>
          <label><strong>Email:</strong></label> {{ currentCliente.email }}
        </div>
        <div>
          <label><strong>Fecha Registro:</strong></label> {{ currentCliente.fechaCreacion }}
        </div>
        <div>
          <label><strong>Saldo Compras:</strong></label> {{ currentCliente.saldoCompras }}
        </div>
        <div>
          <label><strong>Descuento:</strong></label> {{ currentCliente.descuento }}
        </div>

        <button class="m-3 btn btn-sm btn-warning">
        <router-link :to="'/clientes/' + currentCliente.idCliente" class="badge badge-warning">Edit</router-link>
        </button>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Cliente...</p>
      </div>
    </div>
  </div>
</template>

<script>
import   ClienteDataService  from "../services/ClienteDataService";

export default{
    name: "clientes-list",
    data(){
        return{
            clientes:[],
            currentCliente: null,
            currentIndex: -1,
            nombreCli:'',
        };
    },
    methods: {
   
        retrieveClientes() {
          
          ClienteDataService.getAll()
            .then(response => {
              this.clientes = response.data;
            console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

        refreshList(){
            this.retrieveclientes();
            this.currentCliente = null;
            this.currentIndex= -1;
        },

       setActiveCliente(cliente, index){
            this.currentCliente = cliente;
            this.currentIndex = cliente ? index : -1;
        },
        
        searchNombre(){
            ClienteDataService.findByNombreCli(this.nombreCli)
             .then(response =>{
                 this.clientes = response.data;
                 this.setActiveCliente(null);
                 console.log(response.data);
             })
             .catch (e=> {
                 console.log(e);
             });
        } 
    },
   mounted() {
    this.retrieveClientes();
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