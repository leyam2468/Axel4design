<template>
    <v-app class="home">
        <banner />
        <aboutMe />
        <portfolio />
        <clientsay />
        <fotter />
    </v-app>
</template>

<script>
import banner from '@/components/home/banner.vue'
import aboutMe from '@/components/home/aboutMe.vue'
import portfolio from '@/components/home/portfolio.vue'
import clientsay from '@/components/home/clientsay.vue'
import fotter from '@/components/home/fotter.vue'

export default {
    components: {
        banner,
        aboutMe,
        portfolio,
        clientsay,
        fotter
    },
    methods: {},
    head() {
        return {
            title: 'Home'
        }
    }
}
</script>

<style lang="scss" scoped></style>
