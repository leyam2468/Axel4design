<template>
    <div>
        <!-- SideBar -->
        <v-navigation-drawer v-model="siteNav" temporary color="colorOne" fixed>
            <!-- 1 -->
            <v-list dense nav class="py-0">
                <!-- 1-1 -->
                <v-list-item two-line>
                    <v-list-item-avatar>
                        <img
                            src="https://randomuser.me/api/portraits/men/81.jpg"
                        />
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title>Mohamed Ahmed</v-list-item-title>
                        <v-list-item-subtitle>WepDesign</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <!-- 1-2 -->
                <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    :to="item.to"
                >
                    <v-btn text>
                        <v-icon left>{{ item.icon }}</v-icon>
                        {{ item.title }}
                    </v-btn>
                </v-list-item>
            </v-list>
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

            <v-toolbar-title class="font-weight-bold text-uppercase">
                Axel<span class="color-one">4</span>Design
            </v-toolbar-title>

            <v-spacer></v-spacer>
            <v-btn icon class="hidden-sm-and-up" @click="toggletheme">
                <v-icon>
                    mdi-{{
                        `${darktheme ? 'moon-waning-crescent' : 'brightness-6'}`
                    }}</v-icon
                >
            </v-btn>
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

                <v-menu left bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn icon v-bind="attrs" v-on="on">
                            <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                        <v-btn icon @click="toggletheme">
                            <v-icon>
                                mdi-{{
                                    `${
                                        darktheme
                                            ? 'moon-waning-crescent'
                                            : 'brightness-6'
                                    }`
                                }}</v-icon
                            >
                        </v-btn>
                    </template>

                    <v-list>
                        <v-list-item v-for="n in 5" :key="n" @click="() => {}">
                            <v-list-item-title
                                >Option {{ n }}</v-list-item-title
                            >
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-toolbar-items>
        </v-app-bar>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            siteNav: false,
            darktheme: false,
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
