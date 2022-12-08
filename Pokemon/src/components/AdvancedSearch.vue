<script>
import getService from '../service/commonServices.js';
export default {
    data() {
        return {
            types: [],
            abilities: []
        }
    },
    mounted() {
        this.getPokemonTypes();
    },
    methods: {
        async getPokemonTypes() {
            this.types = await getService('https://pokeapi.co/api/v2/type?limit=1000&offset=0');
        }
    }
}
</script>
<template>
    <div class="advance-container row">
        <div class="col-span-7">
            <div class="row type-title">
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
            <div></div>
        </div>
        <div class="col-span-5"></div>
    </div>
</template>
<style scoped>
.advance-container {
    width: 100%;
}

.type-title {
    color: #fff;
}
</style>