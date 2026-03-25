import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "./views/Dashboard.vue";
import HotelPage from "./views/Hotel/HotelPage.vue";
import HotelDetail from "./views/Hotel/HotelDetail.vue";
import ColivingPage from "./views/ColivingPage.vue";
import KostPage from "./views/Kost/KostPage.vue";
import DwpPage from "./views/Dwp/DwpPage.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Dashboard },
    { path: "/hotel", component: HotelPage },
    { path: "/hotel/:id", component: HotelDetail },
    { path: "/coliving", component: ColivingPage },
    { path: "/kost", component: KostPage },
    { path: "/dwp", component: DwpPage },
  ],
});
