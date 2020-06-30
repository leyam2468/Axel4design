<template>
    <v-app id="home" class="home">
        <banner />
        <aboutMe />
        <portfolio />
        <clientsay />
        <posts />
        <persons />
        <fotter />
        <scrollTop />
    </v-app>
</template>
<script>
import banner from '@/components/home/banner.vue'
import aboutMe from '@/components/home/aboutMe.vue'
import portfolio from '@/components/home/portfolio.vue'
import clientsay from '@/components/home/clientsay.vue'
import posts from '@/components/home/posts.vue'
import persons from '@/components/home/persons.vue'
import fotter from '@/components/home/fotter.vue'
import scrollTop from '@/components/scrollTop.vue'

export default {
    components: {
        banner,
        aboutMe,
        portfolio,

        clientsay,
        posts,
        persons,
        fotter,
        scrollTop
    },

    methods: {},
    head() {
        return {
            title: 'Home Page'
        }
    }
}
</script>

<style lang="scss" scoped></style>
