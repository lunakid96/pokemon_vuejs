<script>
import * as Common from '../commons/constant.js';
import getService from '../service/commonServices.js';
import _ from 'lodash';
import { isProxy, toRaw } from 'vue';

export default {
    props: {detailInfo: Object},
    data() {
        return {
            detailCurrent: this.detailInfo,
            detailNext: {},
            detailPre: {}
        }
    },
    mounted() {
        this.getTitlePokemonPage();
    },
    methods: {
        async getTitlePokemonPage() {
            let resultAPI = await this.getListPokemon();
            let listAll = resultAPI.results;
            let rawData = this.detailCurrent;
            if (isProxy(rawData)) {
                rawData = toRaw(rawData);
            }
            let indexCurrentInfo = _.findIndex(listAll, function (item) { return item.name == rawData.name });

            if ((indexCurrentInfo + 1) == listAll.length) {
                this.detailNext = this.customizeDisplayInfoPokemon(listAll[0]);
            } else {
                this.detailNext = this.customizeDisplayInfoPokemon(listAll[indexCurrentInfo + 1])
            }

            if ((indexCurrentInfo - 1) < 0) {
                this.detailPre = this.customizeDisplayInfoPokemon(listAll[listAll.length - 1]);
            } else {
                this.detailPre = this.customizeDisplayInfoPokemon(listAll[indexCurrentInfo - 1])
            }
        },
        async getListPokemon() {
            let listPokemon = [];
            listPokemon = await getService(Common.BASE_URL + 'pokemon?limit=' + Common.LIMIT_NO + '&offset=0');
            return listPokemon;
        },
        customizeDisplayInfoPokemon(target) {
            let result = { name: '', id: '' };
            let urlValue = target.url.slice(0, -1).split('/');
            result.name = target.name;
            result.id = urlValue[urlValue.length - 1];
            return result;
        },
    },

}
</script>
<template>
    <div class="pokemon-pagination">
        <a class="previous">
            <div class="pokemon-pagination-wrapper">
                <span></span>
                <span class="pokemon-number">#{{ detailPre.id }}</span>
                <span class="pokemon-name">{{ detailPre.name }}</span>
            </div>
        </a>
        <a class="next">
            <div class="pokemon-pagination-wrapper">
                <span></span>
                <span class="pokemon-name">{{ detailNext.name }}</span>
                <span class="pokemon-number">#{{ detailNext.id }}</span>
            </div>
        </a>
    </div>
    <div class="pokemon-title">
        <div>
            <span>{{ detailInfo.name }}</span>
            <span class="pokemon-number">#{{ detailInfo.id }}</span>
        </div>
    </div>
</template>
<style scoped>
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
.previous:hover, .next:hover {
    background-color: #30a7d7;
}

.previous>div {
    float: right;
    margin-right: 0;
}

.next {
    width: 50%;
    margin-left: 3px;
}

.next>div {
    float: left;
    margin-left: 0;
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
    font-family: "Flexo-Medium", arial, sans-serif;
    color: #212121;
}

.pokemon-title::before {
    content: '';
    position: absolute;
    top: -1px;
    width: 75px;
    left: -75px;
    height: 51px;
    background: transparent url('../assets/images/notch-white-xxl.png') no-repeat 0 0;
}

.pokemon-title::after {
    content: " ";
    position: absolute;
    top: -1px;
    right: -75px;
    background: transparent url('../assets/images/notch-white-xxl.png') no-repeat 0 0;
    background-position: right top;
    width: 75px;
    height: 51px;
}

.pokemon-number {
    color: #616161;
    margin-left: 0.125em;
}

.pokemon-name {
    color: #616161;
    font-family: "Flexo-Bold", arial, sans-serif;
    font-size: 150%;
    line-height: 162.5%;
    text-transform: none;
}
</style>