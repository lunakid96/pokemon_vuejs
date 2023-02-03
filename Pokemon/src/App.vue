<script>
import { inject } from 'vue';
import Menu from "./components/Menu.vue"

export default {
    components: { Menu },
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
