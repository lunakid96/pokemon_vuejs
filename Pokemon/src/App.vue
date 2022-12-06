<script>
import { inject } from 'vue';
import Menu from "./components/Menu.vue"

export default {
    components: { Menu },
    // mounted() {
    //     const axios = inject('axios');
    //     const getList = () => {
    //         axios
    //             .get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
    //             .then((response) => {
    //                 console.log(response.data)
    //             })
    //     }

    //     return { getList }
    // }
}

</script>

<template>
    <header>
        <div class="wrapper">
            <nav>
                <Menu></Menu>
            </nav>
        </div>
    </header>
    <main>
        <router-view></router-view>
    </main>
</template>

<style scoped>
.wrapper {
    display: flex;
    justify-content: center;
}
</style>
