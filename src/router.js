import { createWebHistory, createRouter } from "vue-router";

const routes = [
	{
		path:"/",
		alias:"/productos",
		name:"productos",
		component: ()=> import("./components/ProductosList.vue") 
	},
	{
		path:"/productos/:id",
		name:"productos-details",
		component: ()=> import("./components/Producto.vue")
	},
	{
		path:"/add",
		name:"add",
		component: ()=> import("./components/AddProducto.vue")
	},
	{
		path:"/",
		alias:"/clientes",
		name:"clientes",
		component: ()=> import("./components/ClientesList.vue") 
	},
	{
		path:"/clientes/:idCliente",
		name:"clientes-details",
		component: ()=> import("./components/Cliente.vue")
	},
	{
		path:"/addcliente",
		name:"addcliente",
		component: ()=> import("./components/AddCliente.vue")
	}
];
const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;