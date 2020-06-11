<template>
    <v-app>
        <!--side nav -->
        <navbar />
        <!-- content -->
        <v-content>
            <nuxt />
        </v-content>
    </v-app>
</template>

<script>
import navbar from '~/layouts/navbar.vue'
export default {
    components: {
        navbar
    }
}
</script>

<style lang="scss">
a {
    text-decoration: none;
}
</style>
