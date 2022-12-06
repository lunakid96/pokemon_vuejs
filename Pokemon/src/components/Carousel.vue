<script>
export default {
    data() {
        return {
            sliderItems: [
                { id: 0, src: 'https://www.youtube.com/embed/dAQBo9BGRdA', text: '', isActive: true },
                { id: 1, src: 'https://www.youtube.com/embed/uBYORdr_TY8', text: '', isActive: false },
                { id: 2, src: 'https://www.youtube.com/embed/dAQBo9BGRdA', text: '', isActive: false },
            ]
        };
    },
    mounted() {

    },
    methods: {
        nextShowSlider() {
            for (let i = 0; i < this.sliderItems.length; i++) {
                let item = this.sliderItems[i];
                if (item.isActive) {
                    if (i == this.sliderItems.length - 1) {
                        return;
                    }
                    item.isActive = false;
                    this.sliderItems[i + 1].isActive = true;
                    break;
                }
            }
        },

        prevShowSlider() {
            for (let i = this.sliderItems.length - 1; 0 <= i; i--) {
                let item = this.sliderItems[i];
                if (item.isActive) {
                    if (i == 0) {
                        return;
                    }
                    item.isActive = false;
                    this.sliderItems[i - 1].isActive = true;
                    break;
                }
            }
        }
    }

}
</script>
<template>
    <!-- Slideshow container -->
    <div class="slideshow-container">
        <div v-for="item in sliderItems" class="mySlides fade" :class="{ hiddenSlider: !item.isActive }"
            id="{{item.id}}">
            <iframe width="100%" height="100%" :src="item.src + '?autoplay=1&mute=1'"
                title="Pokémon Scarlet & Pokémon Violet – Overview Trailer – Nintendo Switch" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"></iframe>
            <div class="text">{{ item.text }}</div>
        </div>

        <a class="prev" @click="prevShowSlider()">❮</a>
        <a class="next" @click="nextShowSlider()">❯</a>
    </div>
</template>
<style scoped>
.slideshow-container {
    max-width: 1000px;
    height: 400px;
    position: relative;
    margin: auto;
}

.mySlides {
    width: 100%;
    height: 100%;
}
.prev, .next {
    font-size: 30px;
    position: absolute;
    width: 27px;
    text-align: center;
}



.prev {
    top: 160px;
    left: 0;
}

.next {
    top: 160px;
    right: 0;
}

.hiddenSlider {
    display: none;
}

.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}
</style>