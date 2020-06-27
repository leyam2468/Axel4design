<template>
    <div>
        <!-- SideBar -->
        <v-navigation-drawer v-model="siteNav" color="colorOne" fixed temporary>
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
            <v-list dense nav class="py-5">
                <!-- 1-2 -->
                <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    :to="item.to"
                >
                    <v-btn text class="font-weight-bold" nuxt>
                        <v-icon left>{{ item.icon }}</v-icon>
                        {{ item.title }}
                    </v-btn>
                </v-list-item>
            </v-list>
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

            <v-toolbar-title class="font-weight-bold text-uppercase font-one">
                Axel<span class="color-one">4</span>Design
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-toolbar-items class="hidden-xs-only">
                <v-btn
                    v-for="item in items"
                    :key="item.id"
                    :to="item.to"
                    text
                    class="font-weight-bold"
                    nuxt
                >
                    <v-icon left>{{ item.icon }}</v-icon>
                    {{ item.title }}
                </v-btn>
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

            <v-toolbar-items class="hidden-sm-and-up">
                <v-btn icon @click="toggletheme">
                    <v-icon>
                        mdi-{{
                            `${darktheme ? 'weather-night' : 'brightness-6'}`
                        }}</v-icon
                    >
                </v-btn>
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
                    icon: 'mdi-apps',
                    title: 'Home',
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
            ]
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

<style lang="scss" scoped>
.v-btn--active:hover::before,
.v-btn--active::before {
    background-color: red;
    opacity: 0.8;
}
</style>
