<template>
    <div dark>
        <!--side nav -->
        <v-navigation-drawer
            v-model="drawer"
            :mini-variant="miniVariant"
            :clipped="clipped"
            fixed
            app
        >
            <v-list>
                <!-- icons -->
                <v-list-item>
                    <v-btn icon @click.stop="miniVariant = !miniVariant">
                        <v-icon
                            >mdi-{{
                                `chevron-${miniVariant ? 'right' : 'left'}`
                            }}</v-icon
                        >
                    </v-btn>
                    <v-btn icon @click.stop="clipped = !clipped">
                        <v-icon>mdi-application</v-icon>
                    </v-btn>
                    <v-btn icon @click="toggletheme">
                        <v-icon>
                            mdi-{{
                                `moon-${darktheme ? 'waning-crescent' : 'full'}`
                            }}</v-icon
                        >
                    </v-btn>
                </v-list-item>
                <!-- links -->
                <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    :to="item.to"
                    router
                    exact
                >
                    <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.title" />
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <!--top nav-->
        <v-app-bar app hide-on-scroll="">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
            <logo />
            <v-spacer class="hidden-xs-only"></v-spacer>
            <v-toolbar-items class="hidden-xs-only">
                <v-btn v-for="(item, i) in items" :key="i" :to="item.to">
                    <!-- <v-icon>{{ item.icon }} </v-icon> -->
                    {{ item.title }}
                </v-btn>
            </v-toolbar-items>
        </v-app-bar>
    </div>
</template>

<script>
import logo from '@/components/logo.vue'
export default {
    components: {
        logo
    },
    data() {
        return {
            clipped: false,
            drawer: false,
            fixed: false,
            items: [
                {
                    icon: 'mdi-apps',
                    title: 'Welcome',
                    to: '/'
                },
                {
                    icon: 'mdi-account-alert',
                    title: 'About',
                    to: '/About'
                },
                {
                    icon: 'mdi-card-account-phone',
                    title: 'Contact',
                    to: '/contact'
                },
                {
                    icon: 'mdi-account-alert',
                    title: 'Portfolio',
                    to: '/portfolio'
                }
            ],
            miniVariant: false,
            right: true,
            rightDrawer: false,
            title: 'Axel 4 Design',
            darktheme: true
        }
    },
    methods: {
        toggletheme() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark
            this.darktheme = !this.darktheme
        }
    }
}
</script>

<style lang="scss"></style>
