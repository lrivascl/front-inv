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
	}
];
const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;