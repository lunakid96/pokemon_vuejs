<script>
export default {
    data() {
        return {
            showFlg: false
        }
    },
    methods: {
        showContentFunc() {
            this.showFlg = !this.showFlg;
        }
    }
}
</script>
<template>
    <div id="AccordionContainer">
        <div class="AccordionContent" :style="{'display': this.showFlg ? 'none' : 'block', 'height': '50px'}"></div>
        <div class="AccordionContent" :style="{'display': !this.showFlg ? 'none' : 'block', 'height': '500px'}">
            <slot name="content"></slot>
        </div>
        <button id="AccordionBtn" @click="showContentFunc()">
            <slot name="button"></slot>
        </button>
    </div>
</template>
<style scoped>
#AccordionContainer {
    width: 100%;
    height: 100%;
    min-height: 70px;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
}

.AccordionContent {
    background: #616161;
    width: 100%;
    height: calc(100% - 20px);
}

#AccordionBtn {
    background: #616161;
    border: 0;
    width: 478px;
    height: 20px;
    color: #ffffff;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
}

#AccordionBtn::before {
    content: '';
    background: transparent;
    height: 20px;
    box-shadow: 0 -10px 0 0 #616161;
    width: 20px;
    position: absolute;
    left: -15px;
    border-top-right-radius: 20px;
    top: 0px;
}

#AccordionBtn::after {
    content: '';
    background: transparent;
    height: 20px;
    box-shadow: 0 -10px 0 0 #616161;
    width: 20px;
    position: absolute;
    right: -15px;
    border-top-left-radius: 20px;
    top: 0px;
}
</style>