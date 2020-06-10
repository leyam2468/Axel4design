# PAGES

This directory contains your Application Views and Routes.
The framework reads all the `*.vue` files inside this directory and creates the router of your application.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/routing).

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


                <v-app-bar app hide-on-scroll>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
            <logo />
            <v-spacer class="hidden-xs-only"></v-spacer>
            <v-toolbar-items class="hidden-xs-only">
                <v-btn v-for="(item, i) in items" :key="i" :to="item.to">

                {{ item.title }}
                </v-btn>
            </v-toolbar-items>
        </v-app-bar>
