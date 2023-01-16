<script>
import getService from '../service/commonServices.js';
import Dropdown from '../components/Dropdown.vue';
// Load the full build.
import _ from 'lodash';
import * as Common from '../commons/constant.js';
export default {
    components: { Dropdown },
    data() {
        return {
            types: [],
            abilities: [],
            dummyTypesDataProvider: [],
            abilitySelectedItem: { label: 'All', value: '' },
            abilityDataProvider: []
        }
    },
    mounted() {
        this.getPokemonTypes();
        this.getAbilities();
    },
    methods: {
        async getPokemonTypes() {
            this.types = await getService(Common.BASE_URL + 'type?limit=1000&offset=0');
            this.dummyTypesDataProvider = this.types.results.filter(item => item.name != 'shadow' && item.name != 'unknown');
            this.dummyTypesDataProvider = _.sortBy(this.dummyTypesDataProvider, ['name']);
        },

        async getAbilities() {
            this.abilities = await getService(Common.BASE_URL + 'ability');
            this.abilityDataProvider = this.createDisplayAbilities(this.abilities.results)
        },

        createDisplayAbilities(dataProvider) {
            let result = [];
            if (dataProvider && dataProvider.length > 0) {
                for (let index = 0; index < dataProvider.length; index++) {
                    let newItem = { label: '', value: '', url: '' };
                    const element = dataProvider[index];
                    newItem.label = this.customizeDisplayLabel(element.name);
                    newItem.value = element.name;
                    newItem.url = element.url;
                    result.push(newItem);
                }
            }
            return result;
        },

        /**
         * Change name 「abc-abc」to 「Abc Abc」
         * @param {*} name 
         */
        customizeDisplayLabel(name) {
            let newName = name.split('-');
            let result = [];
            for (let i = 0; i < newName.length; i++) {
                let firstCharacter = newName[i].charAt(0).toUpperCase();
                let remainCharacter = newName[i].slice(1);
                result.push(firstCharacter + remainCharacter);
            }
            return result.join(' ');
        }
    }
}
</script>
<template>
    <div class="columns-2 advance-container">
        <div class="type-container">
            <div class="row type-title flex items-center justify-center">
                <h2 class="col-span-6">
                    Type & Weakness
                </h2>
                <div class="filter-help col-span-6">
                    <span>
                        <strong>T</strong>
                        = Type
                    </span>
                    <span>
                        <strong>W</strong>
                        = Weakness
                    </span>
                </div>
            </div>
            <div class="type-content">
                <ul class="columns-1">
                    <li v-for="item in dummyTypesDataProvider">
                        <div :class="('background-' + item.name)" class="type-name">{{ item.name }}</div>
                        <div class="poke-type">T</div>
                        <div class="weakness">W</div>
                    </li>

                </ul>
            </div>
            <div class="range-content flex justify-between clr-fff">
                <h2 class="col-span-6">
                    Number Range
                </h2>
                <div class="flex justify-around items-center w-[200px]">
                    <input type="text" class="range-txt"/>
                    <label>-</label>
                    <input type="text" class="range-txt"/>
                </div>
            </div>
        </div>
        <div class="filter-container">
            <div class="ability-content">
                <h3 class="advance-label">Ability</h3>
                <Dropdown id="AbilityComboBox" v-model:selectedItem="abilitySelectedItem"
                    :dataProvider="abilityDataProvider"></Dropdown>
            </div>
            <div class="height-content">
                <h3 class="advance-label">Height</h3>
                <div class="height-filter flex">
                    <span id="small-height" class="filter-button">

                    </span>
                    <span id="medium-height" class="filter-button">

                    </span>
                    <span id="lagre-height" class="filter-button">

                    </span>
                </div>
            </div>
            <div class="weight-content">
                <h3 class="advance-label">Weight</h3>
                <div class="weight-filter flex">
                    <span id="small-weight" class="filter-button">

                    </span>
                    <span id="medium-weight" class="filter-button">

                    </span>
                    <span id="lagre-weight" class="filter-button">

                    </span>
                </div>
            </div>
            <div class="advance-submit">
                <button id="reset-btn" class="advance-btn">Reset</button>
                <button id="search-btn" class="advance-btn"><font-awesome-icon icon="fa-solid fa-magnifying-glass" />Search</button>
            </div>
        </div>
    </div>
</template>
<style >
.advance-container {
    width: 100%;
    height: 100%;
    max-width: 1024px;
    margin: 1em auto;
}

.type-title {
    color: #fff;
}

.type-content {
    text-align: center;
}

.type-content ul {
    float: left;
    height: 370px;
    width: 100%;
}

.type-content ul li {
    float: left;
    height: 28px;
    margin-bottom: 8px;
    width: 50%;
    display: flex;
}

.weakness,
.poke-type {
    font-family: "Flexo-Bold", arial, sans-serif;
    background: #F2F2F2;
    border-radius: 14px;
    color: #313131;
    line-height: 30px;
    width: 28px;
    text-align: center;
    font-weight: bold;
}

.poke-type {
    margin: 0 10px;
}

.type-name {
    width: 120px;
    border: 2px solid #a4a4a4;
    border-radius: 3px;
}

.filter-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}

.type-container {
    height: 100%;
    display: flex;
    flex-direction: column;
}

.ability-content {
    display: flex;
    flex-direction: column;
}

.advance-label {
    color: #ffffff;
}

#AbilityComboBox ul {
    background: #a4a4a4;
    height: 300px;
}

.height-content {
    height: 107px;
    margin-bottom: 0.5em;
}

.height-filter {
    height: 80px;
}

.weight-filter {
    height: 80px;
}

.filter-button {
    line-height: 100px;
    text-align: center;
    width: 27.46%;
    border-radius: 12px;
    height: 100%;
    background: #f2f2f2;
}

#small-height::before {
    content: url('../assets/images/height_small_black.png');
}
#medium-height::before {
    content: url('../assets/images/height_medium_black.png');
}
#lagre-height::before {
    content: url('../assets/images/height_lagre_black.png');
}

#lagre-height {
    line-height: 120px !important;
}
#medium-height, #medium-weight {
    margin: 0 5.69%;
}

#small-weight::before {
    content: url('../assets/images/weight_small_black.png');
}
#medium-weight::before {
    content: url('../assets/images/weight_medium_black.png');
}
#lagre-weight::before {
    content: url('../assets/images/weight_lagre_black.png');
}

.range-txt {
    width: 75px;
    height: 100%;
    display: inline;
    color: black;
    border-radius: 5px;
    padding: 0 3px;
}
.clr-fff {
    color: #fff;
}

.advance-btn {
    border-radius: 5px;
    color: #fff;
    height: 55px;
}

#reset-btn {
    background: #a4a4a4;
    width: 104px;
}
#search-btn {
    background: #ee6b2f;
    width: 137px;
    margin-left: 10px;
}
.advance-submit {
    display: flex;
    justify-content: flex-end;
    height: 100px;
    padding: 0 30px;
}
</style>