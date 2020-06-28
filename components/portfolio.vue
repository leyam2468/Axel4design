<template>
    <div id="portfolio" class="portfolio">
        <span class="portfolio-title-be" data-aos="fade-up">Axel</span>
        <h2 class="portfolio-title" data-aos="fade-up">Portfolio</h2>

        <v-carousel
            cycle
            show-arrows
            delimiter-icon="mdi-minus"
            hide-delimiter-background
            height="100vh"
            class="gallry my-10"
        >
            <v-carousel-item v-for="(item, i) in items" :key="i">
                <v-sheet color="black"
                    ><v-container>
                        <!-- Img -->
                        <v-row justify="center" align="start"
                            ><img
                                :src="item.src"
                                width="330px"
                                height="350px"
                                :alt="item.title"
                                class="pt-5 hidden-xs-only"
                            />
                            <img
                                :src="item.src"
                                width="400px"
                                height="400px"
                                alt=""
                                class="img-phone"
                            />
                            <img
                                :src="item.src"
                                width="330px"
                                height="350px"
                                :alt="item.title"
                                class="pt-5 hidden-xs-only"
                            />
                        </v-row>
                        <!-- title -->
                        <v-row justify="center" align="center" class="py-4">
                            <div>
                                <h2 class="img-title">{{ item.title }}</h2>
                            </div>
                        </v-row>
                        <!-- Demo -->
                        <v-row>
                            <v-btn
                                large=""
                                width="200px"
                                class="mx-auto"
                                outlined
                                color="withe"
                                >View Project</v-btn
                            >
                        </v-row>
                    </v-container>
                </v-sheet>
            </v-carousel-item>
        </v-carousel>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    title: 'Aboukir-Institutes',
                    src: require('~/assets/tem5.jpg')
                },
                {
                    title: 'Title Image',
                    src: require('~/assets/tem6.jpeg')
                },
                {
                    title: 'Title Image',
                    src: require('~/assets/tem7.jpg')
                },
                {
                    title: 'Title Image',
                    src: require('~/assets/tem8.jpg')
                },
                {
                    title: 'Title Image',
                    src: require('~/assets/tem12.jpg')
                },
                {
                    title: 'Title Image',
                    src: require('~/assets/tem13.jpg')
                },
                {
                    title: 'Title Image',
                    src: require('~/assets/tem14.jpg')
                },
                {
                    title: 'Title Image',
                    src: require('~/assets/tem15.jpg')
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
.portfolio {
    overflow: hidden;
    .portfolio-title-be {
        text-align: center;
        display: block;
        font-size: 8rem;
        font-weight: bold;
        margin-bottom: -125px;
        color: rgba(183, 183, 183, 0.5);
        text-transform: uppercase;
        letter-spacing: 20px;
    }
    .portfolio-title {
        text-align: center;
        font-size: 3rem;
        z-index: 2;
        font-weight: bold;
        letter-spacing: 10px;
    }
    .gallry {
        .img-title {
            font-weight: bold;
            position: relative;
            color: $color-one;
            font-size: 50px;
            &:before {
                position: absolute;
                content: '';
                width: 150px;
                height: 3px;
                background-color: red;
                left: -170px;
                top: 50%;
            }
            &:after {
                position: absolute;
                content: '';
                width: 150px;
                height: 3px;
                background-color: red;
                right: -170px;
                top: 50%;
            }
        }
        .v-window__container {
            .theme--dark.v-sheet {
                height: 100%;
            }
        }
    }
}
@media (max-width: 570px) {
    .gallry {
        .img-phone {
            width: 300px;
            height: 300px;
        }
    }
}
</style>
