<template>
    <v-app class="home">
        <banner />
        <aboutMe />
        <portfolio />
    </v-app>
</template>

<script>
import banner from '@/components/home/banner.vue'
import aboutMe from '@/components/home/aboutMe.vue'
import portfolio from '@/components/home/portfolio.vue'

export default {
    components: {
        banner,
        aboutMe,
        portfolio
    },
    methods: {},
    head() {
        return {
            title: 'Home'
        }
    }
}
</script>

<style lang="scss" scoped>
.home {
    height: 5000px;
}
</style>
