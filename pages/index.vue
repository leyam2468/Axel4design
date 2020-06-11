<template>
    <v-app class="home">
        <banner />
        <aboutMe />
    </v-app>
</template>

<script>
import banner from '@/components/home/banner.vue'
import aboutMe from '@/components/home/aboutMe.vue'
export default {
    components: {
        banner,
        aboutMe
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
