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
            abilitySelectedItem: {label: 'All', value: ''},
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
                    let newItem = {label: '', value: '', url: ''};
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
        </div>
        <div class="weight-container">
            dfsdf
            <div class="ability-content">
                <h3 class="sort-label">Ability</h3>
                <Dropdown id="AbilityComboBox" v-model:selectedItem="abilitySelectedItem" :dataProvider="abilityDataProvider"></Dropdown>
            </div>
        </div>
    </div>
</template>
<style scoped>
.advance-container {
    width: 100%;
    height: 100%;
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
    width: 32px;
    text-align: center;
}

.poke-type {
    margin: 0 10px;
}

.type-name {
    width: 120px;
    border: 2px solid #a4a4a4;
    border-radius: 3px;
}

.weight-container {
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

#AbilityComboBox ul {
    background: #a4a4a4;
    height: 300px;
}
</style>