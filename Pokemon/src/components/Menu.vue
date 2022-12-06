<script>
export default {
    data() {
        return {
            menuItems: [
                { text: 'Home', icon: 'fa-house', isActive: true, router: '/' },
                { text: 'Pokedex', icon: 'fa-table', isActive: false, router: '/pokedex' },
                { text: 'User', icon: 'fa-user', isActive: false, router: '/' },
                { text: 'Items', icon: 'fa-book', isActive: false, router: '/' },
                { text: 'Version', icon: 'fa-gamepad', isActive: false, router: '/' },
            ]
        };
    },

    methods: {
        /**
         * Handler click menu item
         * @param {*} event 
         */
        activeLink(event) {
            let indicatorEle = document.querySelector('.indicator');
            this.menuItems.forEach((item, index) => {
                if (item == event) {
                    item.isActive = true;
                    indicatorEle.style.transform = 'translateX(calc(70px *' + index + '))';
                } else {
                    item.isActive = false;
                }
            });
        }
    }
}


</script>

<template>
    <div class="navigation">
        <ul>
            <li v-for="item in menuItems" class="list" :class="{ active: item.isActive }" @click="activeLink(item)">
                <router-link :to="item.router">
                    <a>
                        <span class="icon">
                            <font-awesome-icon :icon="['fa-solid', item.icon]" />
                        </span>
                        <span class="text">{{ item.text }}</span>
                    </a>
                </router-link>
            </li>
            <div class="indicator"></div>
        </ul>
    </div>
</template>

<style scoped>
.navigation {
    position: relative;
    width: 400px;
    height: 70px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
}

ul {
    display: flex;
    width: 350px;
    padding: 0;
}

li {
    position: relative;
    list-style: none;
    width: 70px;
    height: 70px;
    z-index: 1;
}

a {
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    text-align: center;
    font-weight: 500;
}

.navigation ul li.active a:hover {
    background-color: transparent;
}


.icon {
    position: relative;
    display: block;
    line-height: 75px;
    font-size: 1.5em;
    text-align: center;
    transition: 0.5s;
    color: var(--clr);
}

.navigation ul li.active a span.icon {
    transform: translateY(-35px);
}

.text {
    position: absolute;
    color: var(--clr);
    font-weight: bold;
    font-size: 0.75em;
    letter-spacing: 0.05em;
    transition: 0.5s;
    opacity: 0;
    width: 100%;
    transform: translateY(20px);
}


.navigation ul li.active a span.text {
    opacity: 1;
    transform: translateY(10px);
}

.indicator {
    position: absolute;
    width: 70px;
    height: 70px;
    background: #29fd53;
    border-radius: 50%;
    top: -50%;
    border: 6px solid #f5f5f5;
    transition: 0.5s;
}

.indicator::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -22px;
    width: 20px;
    height: 20px;
    background: transparent;
    border-top-right-radius: 20px;
    box-shadow: 0 -10px 0 0 #f5f5f5;
}

.indicator::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -22px;
    width: 20px;
    height: 20px;
    background: transparent;
    border-top-left-radius: 20px;
    box-shadow: 0 -10px 0 0 #f5f5f5;
}
</style>
