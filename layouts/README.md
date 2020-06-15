# LAYOUTS

**This directory is not required, you can delete it if you don't want to use it.**

This directory contains your Application Layouts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/views#layouts).

<v-navigation-drawer v-model="siteNav" temporary color="colorOne" fixed>
            <!-- 1 -->
            <div>
                <v-list-item-avatar>
                    <img src="~static/favicon.png" />
                </v-list-item-avatar>
                <v-row align="end">
                    <v-list-item-content>
                        <v-list-item-title>Mohamed Ahmed</v-list-item-title>
                        <v-list-item-subtitle>WepDesign</v-list-item-subtitle>
                    </v-list-item-content>
                </v-row>
            </div>
            <v-list dense nav class="py-0">
                <!-- 1-1 -->
                <v-list-item two-line>
                    <v-list-item-avatar>
                        <img src="~static/favicon.png" />
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
                    <v-btn text class="font-weight-bold" nuxt>
                        <v-icon left>{{ item.icon }}</v-icon>
                        {{ item.title }}
                    </v-btn>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
