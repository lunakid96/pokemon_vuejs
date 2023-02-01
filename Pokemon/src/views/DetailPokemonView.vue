<script>
import { useRouter } from 'vue-router';
import getService from '../service/commonServices.js';
import Pagination from '../components/Pagination.vue';
import PokemonProfile from '../components/PokemonProfile.vue';
import * as Common from '../commons/constant.js';

export default {
    components: { Pagination, PokemonProfile },
    data() {
        return {
            pokeParam: null,
            detailInfo: null
        }
    },
    mounted() {
        const router = useRouter();
        this.pokeParam = router.currentRoute.value.params;
        this.getDetailPokemon();
    },
    methods: {
        async getDetailPokemon() {
            this.detailInfo = await getService(Common.BASE_URL + 'pokemon/' + this.pokeParam.name);
        }
    }
}
</script>
<template>
    <div class="detail-container" v-if="detailInfo">
        <section class="detail-header">
            <Pagination :detailInfo="detailInfo"></Pagination>
        </section>
        <section class="detail-form">

        </section>
        <section class="detail-info">
            <PokemonProfile :detailInfo="detailInfo"></PokemonProfile>
        </section>
        <section class="detail-evolution">

        </section>
    </div>
</template>
<style scoped>
.detail-container {
    max-width: 1280px;
    margin: 0 auto;
}

.detail-header {
    padding-top: 90px;
}

.detail-info {
    max-width: 1024px;
    overflow: hidden;
    display: block;
    margin: 0 auto;
    padding: 1em 0;
}
</style>