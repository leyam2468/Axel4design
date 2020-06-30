<template>
    <div>
        <v-btn v-show="visible" v-scroll-to="'#home'" class="scrollTop" icon=""
            ><v-icon large="" color="white"
                >mdi-chevron-up-circle</v-icon
            ></v-btn
        >
    </div>
</template>

<script>
export default {
    data() {
        return {
            visible: false
        }
    },
    mounted() {
        window.addEventListener('scroll', this.scrollListener)
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.scrollListener)
    },
    methods: {
        /* 
        scrollTop() {
            this.intervalId = setInterval(() => {
                if (this.visible === false) {
                    clearInterval(this.intervalId)
                }
                // if (window.pageYOffset === 0) {
                // clearInterval(this.intervalId)
                // }
                window.scroll(0, window.pageYOffset - 400)
            }, 20)
        }, */
        scrollListener(e) {
            this.visible = window.scrollY > 550
            // eslint-disable-next-line no-console
            // console.log(this.visible)

            // eslint-disable-next-line no-console
            // console.log(window.pageYOffset)
        }
    }
}
</script>

<style lang="scss" scoped>
.scrollTop {
    position: fixed;
    bottom: 20px;
    right: 20px;
    cursor: pointer;
    background-color: $color-one;
    width: 50px;
    height: 50px;
    z-index: 5;
    border-radius: 50%;
}
</style>
