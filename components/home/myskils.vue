<template>
    <v-container>
        <!-- Skils -->
        <v-row class="my-skils" data-aos="zoom-up" data-aos-duration="1500">
            <v-col cols="12" md="6">
                <v-progress-linear
                    value="99"
                    height="30"
                    color="colorTow"
                    class="font-weight-black"
                    >HTML</v-progress-linear
                >
            </v-col>
            <v-col cols="12" md="6">
                <v-progress-linear
                    value="95"
                    height="30"
                    color="colorTow"
                    class="font-weight-black"
                    >CSS</v-progress-linear
                >
            </v-col>
            <v-col cols="12" md="6">
                <v-progress-linear
                    value="75"
                    height="30"
                    color="colorTow"
                    class="font-weight-black"
                    >JavaScript</v-progress-linear
                >
            </v-col>
            <v-col cols="12" md="6">
                <v-progress-linear
                    value="80"
                    height="30"
                    color="colorTow"
                    class="font-weight-black"
                    >Vue Js</v-progress-linear
                >
            </v-col>
            <v-col cols="12" md="6">
                <v-progress-linear
                    value="80"
                    height="30"
                    color="colorTow"
                    class="font-weight-black"
                    >JQuary</v-progress-linear
                >
            </v-col>
            <v-col cols="12" md="6">
                <v-progress-linear
                    value="75"
                    height="30"
                    color="colorTow"
                    class="font-weight-black"
                    >Nuxt Js</v-progress-linear
                >
            </v-col>
            <v-col cols="12" md="6">
                <v-progress-linear
                    value="90"
                    height="30"
                    color="colorTow"
                    class="font-weight-black"
                    >Scss</v-progress-linear
                >
            </v-col>
            <v-col cols="12" md="6">
                <v-progress-linear
                    value="90"
                    height="30"
                    color="colorTow"
                    class="font-weight-black"
                    >Pug</v-progress-linear
                >
            </v-col>
            <v-col cols="12" md="6">
                <v-progress-linear
                    value="85"
                    height="30"
                    color="colorTow"
                    class="font-weight-black"
                    >GitHup</v-progress-linear
                >
            </v-col>
            <v-col cols="12" md="6">
                <v-progress-linear
                    value="70"
                    height="30"
                    color="colorTow"
                    class="font-weight-black"
                    >Gulp Js</v-progress-linear
                >
            </v-col>
            <v-col cols="12" md="6">
                <v-progress-linear
                    value="90"
                    height="30"
                    color="colorTow"
                    class="font-weight-black"
                    >BootStrap</v-progress-linear
                >
            </v-col>
            <v-col cols="12" md="6">
                <v-progress-linear
                    value="60"
                    height="30"
                    color="colorTow"
                    class="font-weight-black"
                    >Vuetify</v-progress-linear
                >
            </v-col>
        </v-row>
        <!-- skils Imgs -->
        <v-row justify="center">
            <v-col
                v-for="skil in skils"
                :key="skil.index"
                cols="6"
                md="2"
                data-aos="zoom-up"
                data-aos-duration="1500"
            >
                <v-card height="200px">
                    <v-card-text class="">
                        <v-row justify="center">
                            <div class="icon">
                                <v-img
                                    max-height="60%"
                                    max-width="60%"
                                    :src="skil.src"
                                ></v-img>
                            </div>
                        </v-row>
                    </v-card-text>
                    <v-card-title>
                        <v-row justify="center">{{ skil.title }}</v-row>
                    </v-card-title>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            skils: [
                {
                    title: 'HTML',
                    src: require('~/assets/html.png')
                },
                {
                    title: 'Css',
                    src: require('~/assets/css.png')
                },
                {
                    title: 'JavaScript',
                    src: require('~/assets/js.png')
                },
                {
                    title: 'JQuery',
                    src: require('~/assets/jquery.png')
                },
                {
                    title: 'Vue.js',
                    src: require('~/assets/vue.png')
                },
                {
                    title: 'Nuxt.js',
                    src: require('~/assets/nuxt.png')
                },
                {
                    title: 'Vuex',
                    src: require('~/assets/vuex.png')
                },
                {
                    title: 'Scss',
                    src: require('~/assets/scss.png')
                },
                {
                    title: 'Pug',
                    src: require('~/assets/pug.png')
                },
                {
                    title: 'Gulp.js',
                    src: require('~/assets/gulpjs.png')
                },
                {
                    title: 'Bootstrap',
                    src: require('~/assets/bootstrip.png')
                },
                {
                    title: 'Vuetify',
                    src: require('~/assets/vuetify.png')
                }
            ]
        }
    }
}
</script>

<style leng="scss" scoped>
.my-skils div {
    color: white;
}
.icon {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #444;
    display: flex;
    align-items: center;
    justify-content: center;
}
@media (max-width: 570px) {
    .my-skils div {
        padding-bottom: 0;
    }
}
</style>
