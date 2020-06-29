<template>
    <div>
        <!-- SideBar -->
        <v-navigation-drawer v-model="siteNav" color="colorOne" fixed temporary>
            <!-- Top section -->
            <v-img :aspect-ratio="16 / 10" :src="src" position="bottom">
                <v-row
                    align="end"
                    class="lightbox white--text pa-2 fill-height"
                >
                    <v-col>
                        <div class="subheading font-one font-weight-bold">
                            Mohamed Ahmed
                        </div>
                        <div class="body-1">leyamm3@gmail.com</div>
                    </v-col>
                </v-row>
            </v-img>
            <!-- Links -->
            <v-list dense nav class="py-5">
                <v-list-item
                    v-for="item in items"
                    :key="item.el"
                    v-scroll-to="item.el"
                >
                    <v-btn text class="font-weight-bold" nuxt>
                        <v-icon left>{{ item.icon }}</v-icon>
                        {{ item.title }}
                    </v-btn>
                </v-list-item>
            </v-list>
            <!-- buttom Section -->
            <template v-slot:append>
                <div class="pa-2">
                    <v-btn block elevation="8">Login</v-btn>
                </div>
            </template>
        </v-navigation-drawer>

        <!-- NavBar -->
        <v-app-bar
            hide-on-scroll
            app
            class="navbar-area "
            color="colorOne"
            height="50px"
        >
            <v-app-bar-nav-icon
                @click.stop="siteNav = !siteNav"
            ></v-app-bar-nav-icon>
            <!-- title logo -->
            <v-toolbar-title class="font-weight-bold text-uppercase font-one">
                <nuxt-link
                    to="/"
                    :class="[darktheme ? 'black--text' : 'white--text']"
                    >Axel<span class="color-one">4</span>Design</nuxt-link
                >
            </v-toolbar-title>

            <v-spacer></v-spacer>
            <!-- links -->
            <v-toolbar-items class="hidden-xs-only">
                <v-btn
                    v-for="item in items"
                    :key="item.title"
                    v-scroll-to="item.el"
                    text
                    class="font-weight-bold"
                    nuxt
                >
                    <v-icon left>{{ item.icon }}</v-icon>
                    {{ item.title }}
                </v-btn>
            </v-toolbar-items>
            <!-- icons links -->
            <v-toolbar-items>
                <!-- dark -->
                <v-btn icon @click="toggletheme">
                    <v-icon>
                        mdi-{{
                            `${darktheme ? 'weather-night' : 'brightness-6'}`
                        }}</v-icon
                    >
                </v-btn>
                <!-- Setting -->
                <v-dialog
                    v-model="dialog"
                    fullscreen
                    hide-overlay
                    transition="dialog-bottom-transition"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn text v-bind="attrs" v-on="on"
                            ><v-icon>mdi-cog</v-icon></v-btn
                        >
                    </template>
                    <v-card>
                        <v-toolbar>
                            <v-toolbar-title>Settings</v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-btn @click="dialog = false"
                                ><v-icon>mdi-close</v-icon></v-btn
                            >
                        </v-toolbar>
                    </v-card>
                </v-dialog>
            </v-toolbar-items>
        </v-app-bar>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            dialog: false,
            siteNav: false,
            darktheme: false,
            src: require('~/assets/logo2.png'),
            items: [
                {
                    el: '#home',
                    title: 'Home',
                    icon: 'mdi-apps'
                },
                {
                    el: '#about',
                    title: 'About',
                    icon: 'mdi-account-alert'
                },
                {
                    el: '#portfolio',
                    title: 'Portfolio',
                    icon: 'mdi-solar-panel-large'
                },
                {
                    el: '#client',
                    title: 'Client Say',
                    icon: 'mdi-account-cash'
                },
                {
                    el: '#posts',
                    title: 'Posts',
                    icon: 'mdi-card-account-mail'
                },
                {
                    el: '#education',
                    title: 'Education',
                    icon: 'mdi-cast-education'
                }
            ],
            links: []
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

<style lang="scss" scoped></style>
