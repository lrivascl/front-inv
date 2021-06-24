<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="nombreCli">Nombre Cliente</label>
        <input
          type="text"
          class="form-control"
          id="nombreCli"
          required
          v-model="cliente.nombreCli"
          name="nombreCli"
        />
      </div>

      <div class="form-group">
        <label for="telefono">Telefono Cliente</label>
        <input
          type="number"
          class="form-control"
          id="telefono"
          required
          v-model="cliente.telefono"
          name="telefono"
        />
      </div>

      <div class="form-group">
        <label for="email">Email Cliente</label>
        <input
          type="text"
          class="form-control"
          id="email"
          required
          v-model="cliente.email"
          name="email"
        />
      </div>

      <div class="form-group">
        <label for="fechaCreacion">Fecha Registro</label>
        <input
          type="text"
          class="form-control"
          id="fechaCreacion"
          required
          v-model="cliente.fechaCreacion"
          name="fechaCreacion"
        />
      </div>

      <div class="form-group">
        <label for="descuento">Descuento</label>
        <input
          type="number"
          class="form-control"
          id="descuento"
          required
          v-model="cliente.descuento"
          name="descuento"
        />
      </div>
           

      <button @click="saveCliente" class="btn btn-success">Enviar</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newCliente">Add</button>
    </div>
  </div>
</template>

<script>
import  ClienteDataService  from '../services/ClienteDataService';

export default{
    name: "add-cliente",
    data(){
        return{
            cliente:{
                idCliente: null,
                nombreCli:"",
                telefono:"",
                email:"",
                fechaCreacion:"",
                descuento:"0"
            },
            submitted: false
        };
    },
    methods:{
        saveCliente(){
            var data ={
                nombreCli: this.cliente.nombreCli,
                telefono: this.cliente.telefono,
                email: this.cliente.email,
                fechaCreacion: this.cliente.fechaCreacion,
            };

            ClienteDataService.create(data)
             .then(response =>{
                 this.cliente.idCliente = response.data.idCliente;
                 console.log(response.data);
                 this.submitted = true;
             })
             .catch(e => {
                 console.log(e);
             });
        },

        newCliente(){
            this.submitted = false;
            this.cliente = {};
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