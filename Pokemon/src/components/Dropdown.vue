<script>
export default {
    props: { dataProvider: Array, selectedItem: Object },
    emits: ['update:selectedItem'],
    data() {
        return {
            currentItem: this.selectedItem,
            flgShowPanel: false
        }
    },
    methods: {
        toggleDropdown() {
            this.flgShowPanel = !this.flgShowPanel;
        },
        selectedItemFunc(event) {
            this.currentItem = event;
            this.flgShowPanel = false;
            this.$emit('update:selectedItem', event);
        }
    }
}
</script>
<template>
    <div class="custom-display-dropdown">
        <label class="label-dropdown" @click="toggleDropdown()">{{ currentItem.label }}</label>
        <ul class="dropdown-panel" :style="{ 'display': flgShowPanel ? 'block' : 'none' }">
            <li v-for="item in dataProvider" @click="selectedItemFunc(item)">{{ item.label }}</li>
        </ul>
    </div>
</template>
<style scoped>
.dropdown {
    display: none;
}

.label-dropdown {
    color: #fff;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
}

.custom-display-dropdown {
    display: block;
    background: #313131;
    width: 312px;
    height: 100%;
    height: 40px;
}
.label-dropdown::before {
    content: url('../assets/images/pokeball-icon.png');
    margin: 0 10px 0 5px;
    line-height: 10px;
}

.label-dropdown::after {
    content: url('../assets/images/arrow-down.png');
    position: absolute;
    right: 0px;
    display: flex;
    height: 100%;
    width: 35px;
    justify-content: center;
    align-items: center;
}
.dropdown-panel {
    z-index: 50;
    background: var(--bgPanelMenu);
    color: #fff;
    border-radius: 3px;
    cursor: pointer;
    height: 152px;
}

.dropdown-panel li {
    height: 38px;
    line-height: 28px;
    padding: 5px;
}

.dropdown-panel li:hover {
    background: #313131;
}
</style>