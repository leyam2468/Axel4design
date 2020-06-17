<template>
    <v-app class="home">
        <banner />
        <aboutMe />
        <portfolio />
        <clientsay />
    </v-app>
</template>

<script>
import banner from '@/components/home/banner.vue'
import aboutMe from '@/components/home/aboutMe.vue'
import portfolio from '@/components/home/portfolio.vue'
import clientsay from '@/components/home/clientsay.vue'

export default {
    components: {
        banner,
        aboutMe,
        portfolio,
        clientsay
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
