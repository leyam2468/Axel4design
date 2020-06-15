<template>
    <div class="about-me">
        <v-container>
            <v-row
                justify="space-around"
                align-content="center"
                class="py-8"
                no-gutters=""
            >
                <!-- info in about -->
                <v-col cols="12" sm="6">
                    <div class="about-info">
                        <h2 class="title-about">
                            I'm <span> Front End</span> Developer
                        </h2>
                        <p class="title-about-des">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Repellendus ea vero dolores officiis suscipit
                            dolorum enim debitis illum !
                        </p>
                        <v-divider></v-divider>
                        <!--  -->
                        <ul class="info-area">
                            <li>
                                <span class="pro-title">Name</span
                                ><span class="pro-des">Mohamed Ahmed</span>
                            </li>
                            <li>
                                <span class="pro-title">Age</span
                                ><span class="pro-des">22</span>
                            </li>
                            <li>
                                <span class="pro-title">Experience</span
                                ><span class="pro-des">2 Years</span>
                            </li>
                            <li>
                                <span class="pro-title">Contary</span
                                ><span class="pro-des">Egypt</span>
                            </li>
                            <li>
                                <span class="pro-title">Location</span
                                ><span class="pro-des"
                                    >Al Behara , Kafr Al Dwar</span
                                >
                            </li>
                            <li>
                                <span class="pro-title">Email</span
                                ><span class="pro-des">Leyamm3@gmail.com</span>
                            </li>
                            <li>
                                <span class="pro-title">Freelance</span
                                ><span class="pro-des">Available</span>
                            </li>
                        </ul>
                        <!--  -->
                        <v-row justify="center">
                            <v-col cols="6">
                                <v-btn
                                    class="mr-5"
                                    href="tel:+201023909759"
                                    height="50px"
                                    elevation="15"
                                    ><v-icon left>mdi-phone</v-icon>
                                    +201023909759</v-btn
                                ></v-col
                            >
                            <v-col cols="6">
                                <v-btn
                                    class="contact-me-btn"
                                    to="/contact"
                                    color="colorOne"
                                    height="50px"
                                    elevation="5"
                                    ><v-icon left
                                        >mdi-comment-processing-outline</v-icon
                                    >
                                    Contact Me</v-btn
                                ></v-col
                            >
                        </v-row>
                    </div>
                </v-col>
                <!-- image in about -->
                <v-col cols="12" sm="6">
                    <div class="about-img my-5 my-sm-0">
                        <img
                            src="~/assets/me2.jpg"
                            alt=""
                            width="100%"
                            height="100%"
                        />
                    </div>
                </v-col>
            </v-row>
            <!-- Skils -->
            <v-row class="my-skils">
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
        </v-container>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.about-me {
    .about-info {
        .title-about {
            font-size: 30px;
            font-weight: bold;
            span {
                color: $color-one;
            }
        }
        .title-about-des {
            color: #8b8b8b;
            line-height: 1.5;
            margin-top: 10px;
        }
        .info-area {
            list-style: none;
            padding: 20px 0;
            .pro-title {
                width: 150px;
                font-weight: bold;
                display: inline-block;
                margin-bottom: 10px;
                position: relative;
                font-size: 20px;
                &::after {
                    content: ':';
                    right: 20px;
                    position: absolute;
                }
            }
            .pro-des {
                color: #8b8b8b;
                font-size: 20px;
            }
        }
    }
    .about-img {
        height: 500px;
        padding: 5px;
        border: 1px solid #555;
        position: relative;
        z-index: 1;
        img {
            object-fit: cover;
        }
        &::after {
            position: absolute;
            content: '';
            background-color: $color-one;
            opacity: 0.7;
            border-radius: 5px;
            top: -20px;
            right: -20px;
            width: 200px;
            height: 200px;
            z-index: -1;
        }
    }
    .my-skils div {
        color: white;
    }
}
@media (max-width: 570px) {
    .about-me {
        .about-info {
            .info-area {
                .pro-title {
                    width: 120px;
                    &::after {
                        right: 5px;
                    }
                }
            }
        }

        .about-img {
            &::after {
                right: -5px;
            }
        }
        .my-skils div {
            padding-bottom: 0;
        }
    }
}
</style>
