<template>
  <div v-if="currentCliente" class="edit-form">
    <h4>Clientes</h4>
    <form>
      <div class="form-group">
        <label for="nombreCli">Nombre</label>
        <input type="text" class="form-control" id="nombreCli"
          v-model="currentCliente.nombreCli"
        />
      </div>
      <div class="form-group">
        <label for="telefono">Telefono</label>
        <input type="number" class="form-control" id="telefono"
          v-model="currentCliente.telefono"
        />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="text" class="form-control" id="email"
          v-model="currentCliente.email"
        />
      </div>
      <div class="form-group">
        <label for="fechaCreacion">Fecha Registro</label>
        <input type="text" class="form-control" id="frechaCreacion"
          v-model="currentCliente.fechaCreacion"
        />
      </div>

      <div class="form-group">
        <label for="saldoCompras">Saldo Compras</label>
        <input type="number" class="form-control" id="saldoCompras"
          v-model="currentCliente.saldoCompras"
        />
      </div>
      <div class="form-group">
        <label for="descuento">Descuentos</label>
        <input type="number" class="form-control" id="descuento"
          v-model="currentCliente.descuento"
        />
      </div>

      
    </form>

    <button class="btn btn-danger"
      @click="deleteCliente"
    >
      Delete
    </button>

    <button type="submit" class="btn btn-info"
      @click="updateCliente"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Cliente...</p>
  </div>
</template>

<script>
import  ClienteDataService  from "../services/ClienteDataService";

export default {
    name:"cliente",
    data(){
        return{
            currentCliente:null,
            message: ''
        };
    },
    methods: {
        getCliente(idCliente) {
            ClienteDataService.get(idCliente)
              .then(response => {
              this.currentCliente = response.data;
              console.log(response.data);
            })
            .catch(e => {
              console.log(e);
            });
        },

        updateCliente(){
            ClienteDataService.update(this.currentCliente.idCliente, this.currentCliente)
             .then(response =>{
                 console.log(response.data);
                 this.message = 'The Status was updated successfully!';
             })
             .catch(e =>{
                 console.log(e);
             });
        },

        deleteCliente(){
            ClienteDataService.delete(this.currentCliente.idCliente)
             .then(response =>{
                 console.log(response.data);
                 this.$router.push({name: "clientes"});
             })
             .catch(e =>{
                 console.log(e);
             });
        }
    },

  mounted() {
    this.message = '';
    this.getCliente(this.$route.params.idCliente);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
