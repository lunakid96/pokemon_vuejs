<script>
import Accordion from '../components/Accordion.vue';
import getService from '../service/commonServices.js';
import Pokedex from '../components/Pokedex.vue';
import Dropdown from '../components/Dropdown.vue';
import AdvancedSearch from '../components/AdvancedSearch.vue';
// Load the full build.
import _ from 'lodash';
import * as Common from '../commons/constant.js';

export default {
    components: { Accordion, Pokedex, Dropdown, AdvancedSearch },
    data() {
        return {
            result: null,
            sortSelectedItem: { label: 'Lowest Number (First)', value: 'numberAsc' },
            sortDataProvider: [
                { label: 'Lowest Number (First)', value: 'numberAsc' },
                { label: 'Highest Number (First)', value: 'numberDesc' },
                { label: 'A-Z', value: 'nameAsc' },
                { label: 'Z-A', value: 'nameDesc' },
            ],
            gridPokedex: { dataProvider: [] },
            dummyDataGrid: [],
            countLimit: 12
        }
    },

    mounted() {
        this.getPokeList();
    },
    methods: {
        async getPokeList() {
            let list = await getService(Common.BASE_URL + 'pokemon?limit=' + this.countLimit + '&offset=0');
            this.result = await this.generateInfoPokedex(list.results);
            this.setDummyDataProvider();
        },

        async generateInfoPokedex(list) {
            let resultList = [];
            if (list && list.length > 0) {
                for (let i = 0; i < list.length; i++) {
                    let item = list[i];
                    let info = await getService(item.url);
                    let upperCaseName = item.name[0].toUpperCase() + item.name.substring(1);
                    let generateItem = { name: upperCaseName, info: info };
                    resultList.push(generateItem);
                }
            }
            return resultList;
        },

        setDummyDataProvider() {
            if (this.result && this.result.length > 0) {
                // detach array to child array
                this.dummyDataGrid = _.chunk(this.result, 4);
            }
        },

        loadMorePokedex() {
            this.countLimit += 12;
            this.getPokeList();
        }
    }
}
</script>
<template>
    <div id="PokedexContainer">
        <div id="Title">
            <label>Pokedex</label>
        </div>
        <div id="Search">
            <div id="ContentSearch1">
                <label class="w-full text-4xl">Name or Number</label><br />
                <div class="flex">
                    <input type="text" id="SearchTxt" />
                    <button id="SearchBtn"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></button>
                </div>
                <p class="subtitle text-xl">Use the Advanced Search to explore Pokémon by type,<br /> weakness, Ability,
                    and more!</p>
            </div>
            <div id="ContentSearch2">
                <div class="content2">
                    Search for a Pokémon by name or using its National Pokédex number.
                </div>
            </div>
        </div>
        <div id="AdvancedSearch">
            <Accordion>
                <template v-slot:content>
                    <AdvancedSearch></AdvancedSearch>
                </template>
                <template v-slot:button>
                    Show Advanced Search
                </template>
            </Accordion>
        </div>
        <div id="DataPokedex">
            <div id="FilterData">
                <button id="SurpriseBtn">
                    <font-awesome-icon icon="fa-solid fa-arrows-rotate" />
                    Surprise Me!
                </button>
                <div id="SortData">
                    <h3 class="sort-label">Sort By</h3>
                    <Dropdown v-model:selectedItem="sortSelectedItem" :dataProvider="sortDataProvider"></Dropdown>
                </div>
            </div>
            <div id="PokedexContent">
                <Pokedex :dataProvider="dummyDataGrid"></Pokedex>
            </div>
            <div class="flex justify-center">
                <button class="button-lightblue" @click="loadMorePokedex()">Load more Pokémon</button>
            </div>
        </div>
    </div>
</template>
<style scoped>
#PokedexContainer {
    width: 100%;
    height: 100%;
}

#Title {
    height: 80px;
}

#Title label {
    color: #919191;
    font-size: 21px;
}

#Search {
    background: #313131;
    height: 185px;
    width: 100%;
    display: flex;
    justify-content: space-around;
}

#ContentSearch1 {
    padding: 15px 0px;
    color: #fff;
    font-family: "Roboto", arial, sans-serif;
    display: flex;
    flex-direction: column;
}

#ContentSearch2 {
    display: flex;
    align-items: center;
}

#AdvancedSearch {
    width: 100%;
    height: auto;
}

.content2 {
    width: 430px;
    height: 89px;
    padding: 15px;
    border-radius: 5px;
    background: #4dad5b;
    color: #fff;
    font-size: 125%;
    font-family: "Flexo-Medium", arial, sans-serif;
}

#SearchBtn {
    width: 50px;
    height: 50px;
    background: #ee6b2f;
    border-radius: 5px;
    font-size: 25px;
}

#SearchTxt {
    width: 318px;
    height: 45px;
    border-radius: 4px;
    color: black;
    border: 2px solid var(--clr2);
    margin-right: 15px;
}

#DataPokedex {
    background: #fff;
    height: calc(100% - 335px);
    padding: 10px;
}

#FilterData {
    display: flex;
    justify-content: space-around;
}

#SurpriseBtn {
    width: 345px;
    height: 50px;
    background: #30a7d7;
    color: #fff;
    border-radius: 5px;
}

#SortData {
    display: flex;
    align-items: center;
}

#PokedexContent {
    padding: 10px;
}

.sort-label {
    margin-right: 0.75em;
    white-space: nowrap;
    font-size: 125%;
    line-height: 125%;
    text-transform: none;
    font-family: "Flexo-Medium",arial,sans-serif;
    color: #a4a4a4;
}
</style>