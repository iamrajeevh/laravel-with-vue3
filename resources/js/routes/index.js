import { createRouter, createWebHistory } from 'vue-router'
import FrontEndRoutes from "./frontend/index";

var allRoutes = []
allRoutes = allRoutes.concat(FrontEndRoutes)
const routes = allRoutes

const router = createRouter({ history: createWebHistory(), routes })

export default router