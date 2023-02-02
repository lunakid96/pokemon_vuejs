<script>
import * as CommonFunc from '../utils/ConvertFunction.js';
export default {
    props: { detailInfo: Object },
    data() {
        return {
            pokemonProfile: this.detailInfo,
            imagePokemon: null,
            statsPokemon: null
        }
    },
    mounted() {
        console.log(this.pokemonProfile);
        this.getInfoImagePokemon();
        this.getStatsPokemon();
    },
    methods: {
        getInfoImagePokemon() {
            this.imagePokemon = this.pokemonProfile.sprites.other['official-artwork'].front_default;
            console.log(this.imagePokemon);
        },
        getStatsPokemon() {
            this.statsPokemon = [];
            let statsAPI = this.pokemonProfile.stats;
            statsAPI.forEach(element => {
                let item = {baseStat: -1, name: ''};
                item.baseStat = element.base_stat;
                if (element.stat.name == 'hp') {
                    item.name = element.stat.name.toUpperCase();
                } else {
                    item.name = CommonFunc.convertToUpperCaseCharacter(element.stat.name);
                }
                this.statsPokemon.push(item);
            });
            console.log(this.statsPokemon);
        }
    }
}
</script>
<template>
    <div class="profile-container gap-5">
        <div class="image-stats-container">
            <div class="img-content">
                <img :src="imagePokemon"/>
            </div>
            <div class="stats-content">
                <div v-for="item in statsPokemon">
                    <div class="stat-graph"></div>
                    <span class="stat-name">{{ item.name }}</span>
                </div>
            </div>
        </div>
        <div class="profile-detail-container">

        </div>
    </div>
</template>
<style scoped>
.profile-container {
    background: #fff;
    display: flex;
}

.img-content {
    background: #f2f2f2;
    border-radius: 5px;
}
.stats-content {
    background: #a4a4a4;
    margin: 1em 0;
    display: flex;
}
.stat-graph {
    background: #fff;
    width: 56px;
    height: 176px;
}
.stat-name {
    font-family: "Roboto",arial,sans-serif;
    font-weight: bold;
    color: #212121;
    float: left;
    font-size: 62.5%;
    text-align: center;
    text-transform: none;
    width: 100%;
}
</style>