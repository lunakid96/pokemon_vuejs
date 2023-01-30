<script>
import { useRouter } from 'vue-router';
import getService from '../service/commonServices.js';
import * as Common from '../commons/constant.js';

export default {
    data() {
        return {
            pokeParam: {},
            detailInfo: {}
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
    <div class="detail-container">
        <section class="detail-header">
            <div class="pokemon-pagination">
                <a class="previous">
                    <div class="">
                        <span></span>
                    </div>
                </a>
                <a class="next"></a>
            </div>
            <div class="pokemon-title">
                <span>{{ detailInfo.name }}</span>
                <span class="pokemon-number">#{{ detailInfo.id }}</span>
            </div>
        </section>
        <section class="detail-form">

        </section>
        <section class="detail-info">

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

.pokemon-pagination {
    display: flex;
    height: 120px;
}
.pokemon-pagination a {
    background: #a4a4a4;
}

.previous {
    width: 50%;
    margin-right: 3px;
}

.next {
    width: 50%;
    margin-left: 3px;
}

.pokemon-title {
    height: 50px;
    text-align: center;
    background: #fff;
    position: absolute;
    bottom: 0;
    margin-right: -100%;
    margin-left: 20.2%;
    width: 58.0325%;
    float: left;
    font-size: 225%;
    word-break: break-word;
    font-family: "Flexo-Medium",arial,sans-serif;
    color: #212121;
}
.pokemon-title::before {
    content: '';
    position: absolute;
    top: -1px;
    width: 75px;
    left: 0;
    height: 51px;
    background: transparent url('../assets/images/indicate_left.png');
}
.pokemon-title::after {
    content: '';
    position: absolute;
    top: -1px;
    right: 0;
    width: 75px;
    height: 51px;
    background: transparent url('../assets/images/indicate_right.png');
}

.pokemon-number {
    color: #616161;
    margin-left: 0.125em;
}
</style>