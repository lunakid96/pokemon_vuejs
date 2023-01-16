<script>
export default {
    props: [
        'dataProvider',
    ],
}
</script>
<template>
    <ul class="grid grid-cols-4" v-for="row in dataProvider">
        <li v-for="cell in row">
            <router-link :to="{ name: 'detail', params: { name: cell.name } }">
                <figure>
                    <img :src="cell.info.sprites.other['official-artwork']
                    .front_default" alt="" style="width:100%">
                </figure>
                <div class="pokemon-info">
                    <p class="id">
                        <span>#</span>
                        {{ cell.info.id }}
                    </p>
                    <h5>{{ cell.name }}</h5>
                </div>
                <div v-for="ability in cell.info.types" class="abilities">
                    <span :class="'background-' + ability.type.name">{{ ability.type.name }}</span>
                </div>
            </router-link>
        </li>
    </ul>
</template>
<style scoped>
ul li {
    padding: 10px;
}

.pokemon-info h5 {
    font-family: "Flexo-Demi", arial, sans-serif;
    color: #313131;
    text-transform: none;
    font-size: 145%;
    margin-bottom: 5px;
}

ul li:hover {
    box-shadow: 2px 4px 5px 0 #acacac;
    animation: hoverCell 1s;
}

@keyframes hoverCell {
    from {
        box-shadow: 0 0 0 0 #acacac;
    }

    to {
        box-shadow: 2px 4px 5px 0 #acacac;
    }
}
</style>