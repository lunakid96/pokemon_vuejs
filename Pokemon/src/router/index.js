import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PokedexView from '../views/PokedexView.vue';
import DetailPokemonView from '../views/DetailPokemonView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/pokedex",
            name: "pokedex",
            component: PokedexView,
        },
        {
            path: "/pokedex/:name",
            name: "detail",
            component: DetailPokemonView,
        }
    ],
});

export default router;
