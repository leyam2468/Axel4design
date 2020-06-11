<template>
    <v-carousel
        hide-delimiters
        cycle
        height="calc(100vh - 64px)"
        show-arrows-on-hover
    >
        <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
            <div class="d-flex align-center justify-space-around ">
                <div width="200px" height="200px">test</div>
            </div>
        </v-carousel-item>
    </v-carousel>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    src: '/banner1.jpg'
                },
                {
                    src: '/banner2.jpg'
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped></style>
