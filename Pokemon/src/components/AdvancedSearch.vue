<script>
import getService from '../service/commonServices.js';
// Load the full build.
import _ from 'lodash';
export default {
    data() {
        return {
            types: [],
            abilities: [],
            dummyTypesDataProvider: []
        }
    },
    mounted() {
        this.getPokemonTypes();
    },
    methods: {
        async getPokemonTypes() {
            this.types = await getService('https://pokeapi.co/api/v2/type?limit=1000&offset=0');
            this.dummyTypesDataProvider = this.types.results.filter(item => item.name != 'shadow' && item.name != 'unknown');
            this.dummyTypesDataProvider = _.sortBy(this.dummyTypesDataProvider, ['name']);
        }
    }
}
</script>
<template>
    <div class="columns-2">
        <div>
            <div class="row type-title flex items-center">
                <h2 class="col-span-6">
                    Type & Weakness
                </h2>
                <div class="filter-help col-span-6">
                    <span>
                        <strong>T</strong>
                        =  Type
                    </span>
                    <span>
                        <strong>W</strong>
                        =  Weakness
                    </span>
                </div>
            </div>
            <div class="type-content">
                <ul class="columns-2">
                    <li v-for="item in dummyTypesDataProvider">
                        <div :class="('background-' + item.name)" class="type-name">{{item.name}}</div>
                        <div class="poke-type">T</div>
                        <div class="weakness">W</div>
                    </li>

                </ul>
            </div>
        </div>
        <div class="columns-5">
            dfsdf
        </div>
    </div>
</template>
<style scoped>
.advance-container {
    width: 100%;
}

.type-title {
    color: #fff;
}

.type-content {
    display: inline-flex;
}
.type-content ul {
    float: left;
    height: 370px;
    width: 100%;
}
.type-content ul li {
    float: left;
    height: 28px;
    margin-bottom: 12px;
    width: 195px;
    display: flex;
}

.weakness, .poke-type {
    font-family: "Flexo-Bold",arial,sans-serif;
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
    width: calc(100% - 56px);
    border: 2px solid #a4a4a4;
    border-radius: 3px;
}

</style>