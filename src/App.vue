<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">V1 Productos</router-link>
      
            
      <div class="navbar-nav mr-auto">
        <!--<li class="nav-item">
          <router-link to="/productos" class="nav-link">Productos</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Add</router-link>
        </li>-->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><router-link to="/productos" class="dropdown-item">Listar Productos</router-link></li>
            <li><router-link to="/add" class="dropdown-item">Agregar Productos</router-link></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </div>

      <div class="navbar-nav mr-auto">
        <!--CLIENTES-->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Clientes
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><router-link to="/clientes" class="dropdown-item">Listar Clientes</router-link></li>
            <li><router-link to="/addcliente" class="dropdown-item">Agregar Clientes</router-link></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </div>

      <div class="navbar-nav mr-auto">
        <!--TRX-->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            TRX
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><router-link to="/productos" class="dropdown-item">Listar TRX</router-link></li>
            <li><router-link to="/add" class="dropdown-item">Agregar TRX Venta</router-link></li>
            <li><router-link to="/add" class="dropdown-item">Agregar TRX Stock</router-link></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </div>

    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>
