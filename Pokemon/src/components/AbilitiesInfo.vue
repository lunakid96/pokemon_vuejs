<script>
import * as CommonFunc from '../utils/ConvertFunction.js';
import getService from '../service/commonServices.js';
import * as Common from '../commons/constant.js';
export default {
    props: { abilitiesInfo: Object },
    data() {
        return {
            pokeDetailInfo: null,
            pokeHeight: null,
            pokeWeight: null,
            isHasGender: null
        }
    },
    mounted() {
        this.pokeDetailInfo = this.abilitiesInfo;
        this.pokeHeight = CommonFunc.convertHeightPokemon(this.pokeDetailInfo.height);
        this.pokeWeight = CommonFunc.convertWeightPokemon(this.pokeDetailInfo.weight);
        this.checkPokemonHasGender();
    },
    methods: {
        convertCharacter(value) {
            let result = '';
            result = CommonFunc.convertToUpperCaseCharacter(value);
            return result;
        },
        async checkPokemonHasGender() {
            let pokemonSpecies = await getService(Common.BASE_URL + 'pokemon-species/' + this.pokeDetailInfo.id);
            this.isHasGender = pokemonSpecies.gender_rate;
        }
    }
}
</script>
<template>
    <div class="pokemon-ability-info" v-if="pokeDetailInfo">
                <div class="ability-container">
                    <ul>
                        <li>
                            <span class="attr-title">Height</span>
                            <span class="attr-value">{{ pokeHeight[0] }}' {{ pokeHeight[1] }}"</span>
                        </li>
                        <li>
                            <span class="attr-title">Weight</span>
                            <span class="attr-value">{{ pokeWeight }} lbs</span>
                        </li>
                        <li>
                            <span class="attr-title">Gender</span>
                            <span class="attr-value" v-if="isHasGender != 1">Unknown</span>
                            <span class="attr-value gender" v-else>
                                <font-awesome-icon icon="fa-solid fa-mars" />
                                <font-awesome-icon icon="fa-solid fa-venus" class="gender-icon"/>
                            </span>
                        </li>
                    </ul>
                </div>
                <div class="ability-container">
                    <ul>
                        <li>
                            <span class="attr-title">Category</span>
                            <span class="attr-value"></span>
                        </li>
                        <li>
                            <span class="attr-title">Abilities</span>
                            <template v-for="item in abilitiesInfo.abilities">
                                <span v-if="!item.is_hidden" class="attr-value">{{ convertCharacter(item.ability.name) }}</span>
                            </template>
                        </li>
                    </ul>
                </div>
            </div>
</template>
<style scoped>
.pokemon-ability-info {
    min-height: 243px;
    width: 100%;
    background-color: #30a7d7;
    border-radius: 10px;
    display: flex;
}

.ability-container {
    width: 50%;
}

.attr-title {
    font-family: "Flexo-Medium", arial, sans-serif;
    clear: both;
    color: #fff;
    float: left;
    font-size: 100%;
    margin: 1.25em 0 0 1.25em;
    text-transform: none;
    white-space: normal;
    word-break: break-word;
}

.attr-value {
    font-family: "Flexo-Medium", arial, sans-serif;
    clear: both;
    color: #212121;
    float: left;
    font-size: 125%;
    margin: 0.75em 1.5em 0 1em;
    white-space: normal;
    word-break: break-word;
}
.gender {
    font-size: 165%;
    margin: 0.75em 1.5em 0.75em 1em;
}
.gender-icon {
    margin-left: 0.5em;
}

</style>