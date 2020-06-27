<template>
    <div id="about" class="about-me">
        <v-container>
            <v-card color="colorOne" class="about-area p-10" elevation="5">
                <v-row
                    justify="space-around"
                    align-content="center"
                    no-gutters=""
                >
                    <!-- info in about -->
                    <v-col cols="12" sm="6">
                        <div class="about-info">
                            <h2 class="title-about">
                                I'm
                                <span> Front End</span>
                                Developer
                            </h2>
                            <p class="title-about-des">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Repellendus ea vero dolores
                                officiis suscipit dolorum enim debitis illum !
                            </p>
                            <v-divider></v-divider>
                            <!--  -->
                            <ul
                                class="info-area"
                                data-aos="fade-up"
                                data-aos-duration="1500"
                            >
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
                                        >Al Behara,Kafr Aldwar</span
                                    >
                                </li>
                                <li>
                                    <span class="pro-title">Email</span
                                    ><span class="pro-des"
                                        >Leyamm3@gmail.com</span
                                    >
                                </li>
                                <li>
                                    <span class="pro-title">Freelance</span
                                    ><span class="pro-des">Available</span>
                                </li>
                            </ul>
                            <!--  -->
                            <v-row justify="center" class="info-area-btn">
                                <v-col cols="6">
                                    <v-btn
                                        class="info-area-btn-phone"
                                        href="tel:+201023909759"
                                        height="50px"
                                        elevation="15"
                                        width="95%"
                                        data-aos="zoom-in"
                                        ><v-icon left class="hiddin-xs-only"
                                            >mdi-phone</v-icon
                                        >
                                        01023909759</v-btn
                                    ></v-col
                                >
                                <v-col cols="6">
                                    <v-btn
                                        class="info-area-btn-cv"
                                        href="https://drive.google.com/file/d/1lY-U-riIqcwhxPuL7k3DtJ1Zdr-4eydK/view?usp=sharing"
                                        color="colorOne"
                                        height="50px"
                                        elevation="10"
                                        width="95%"
                                        target="_blank"
                                        data-aos="zoom-in"
                                        ><v-icon left
                                            >mdi-smart-card-outline</v-icon
                                        >
                                        My CV</v-btn
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
            </v-card>
            <myskils />
        </v-container>
    </div>
</template>

<script>
import myskils from '@/components/home/myskils.vue'
export default {
    components: {
        myskils
    }
}
</script>

<style lang="scss" scoped>
.about-me {
    .about-area {
        margin-top: -110px;
        z-index: 3;
        padding: 15px;
        position: relative;
        background-color: #191919c4;
        cursor: default;
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
            .info-area-btn {
                .info-area-btn-cv {
                }
            }
        }
        .about-img {
            height: 500px;
            padding: 3px;
            border: 1px solid #999;
            position: relative;
            z-index: 1;
            img {
                object-fit: cover;
            }
            &::after {
                position: absolute;
                content: '';
                background: linear-gradient(220deg, $color-one 0%, #000 50%);

                border-radius: 5px;
                top: -20px;
                right: -20px;
                width: 200px;
                height: 200px;
                z-index: -1;
            }
        }
    }
}
@media (max-width: 570px) {
    .about-me {
        .about-area {
            .about-info {
                .title-about {
                    font-size: 28px;
                }
                .info-area {
                    .pro-title {
                        width: 120px;
                        font-family: $font-one;
                        &::after {
                            right: 5px;
                        }
                    }
                    .pro-des {
                        font-size: 18px;
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
}
</style>
