<script>
import * as CommonFunc from '../utils/ConvertFunction.js';
export default {
    props: { detailInfo: Object },
    data() {
        return {
            pokemonProfile: this.detailInfo,
            imagePokemon: null,
        }
    },
    mounted() {
        console.log(this.pokemonProfile);
        this.getInfoImagePokemon();
    },
    methods: {
        getInfoImagePokemon() {
            this.imagePokemon = this.pokemonProfile.sprites.other['official-artwork'].front_default;
            console.log(this.imagePokemon);
        }
    }
}
</script>
<template>
    <div class="profile-container columns-2 gap-5">
        <div class="image-stats-container">
            <div class="img-bg">
                <img :src="imagePokemon"/>
            </div>
        </div>
        <div class="profile-detail-container">

        </div>
    </div>
</template>
<style scoped>
.profile-container {
    background: #fff;
}

.img-bg {
    background: #f2f2f2;
    border-radius: 5px;
}
</style>