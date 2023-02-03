<script>
import * as CommonFunc from '../utils/ConvertFunction.js';
import * as Common from '../commons/constant.js';
export default {
    props: { detailInfo: Object },
    data() {
        return {
            pokemonProfile: this.detailInfo,
            imagePokemon: null,
            statsPokemon: null,
            heightGraph: 0
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
                item.baseStat = this.determineHeightStatsGraph(element.base_stat);
                if (element.stat.name == 'hp') {
                    item.name = element.stat.name.toUpperCase();
                } else {
                    item.name = CommonFunc.convertToUpperCaseCharacter(element.stat.name);
                }
                this.statsPokemon.push(item);
            });
            console.log(this.statsPokemon);
        },
        determineHeightStatsGraph(baseStat) {
            let heightPercent = 0;
            heightPercent = (baseStat/Common.MAX_STAT) * 100;
            return heightPercent;
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
                <h3>Stats</h3>
                <div class="h-box">
                    <div class="stats-container" v-for="item in statsPokemon">
                        <div class="stat-graph">
                            <div class="meter" :style="{ 'height': item.baseStat  + '%' }"></div>
                        </div>
                        <p class="stat-name">{{ item.name }}</p>
                    </div>
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
    flex-direction: column;
}
.stat-graph {
    background: #fff;
    width: 100%;
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
.stats-container {
    width: 56px;
}
.stats-content h3 {
    font-family: "Flexo-Medium",arial,sans-serif;
    clear: both;
    color: #313131;
    float: left;
    font-size: 100%;
    margin: 0.75em 1.5em 1.5em;
    text-transform: none;
}
.h-box {
    display: flex;
    justify-content: space-evenly;
}
.meter {
    background: #30a7d7;
    position: absolute;
    width: 100%;
    bottom: 0;
}
</style>