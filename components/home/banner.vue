<template>
    <v-app>
        <div class="banner">
            <div class="overlay"></div>
            <client-only
                ><vue-particles
                    class="vue-particles"
                    shape-type="edge"
                ></vue-particles
            ></client-only>
            <div class="banner-info">
                <h3>Welcome To</h3>
                <h1>Axel<span>4</span>Design</h1>
                <v-divider></v-divider>
                <div class="media">
                    <v-btn
                        icon
                        href="https://www.facebook.com/leyam24685"
                        target="_blank"
                        class="media-icon"
                    >
                        <v-icon>mdi-facebook</v-icon>
                    </v-btn>
                    <v-btn
                        icon
                        href="https://www.instagram.com/leyam24685"
                        target="_blank"
                        class="media-icon"
                    >
                        <v-icon>mdi-instagram</v-icon>
                    </v-btn>
                    <v-btn
                        icon
                        href="https://github.com/leyam2468"
                        target="_blank"
                        class="media-icon"
                    >
                        <v-icon>mdi-github</v-icon>
                    </v-btn>
                    <v-btn
                        icon
                        href="https://codepen.io/mm-m"
                        target="_blank"
                        class="media-icon"
                    >
                        <v-icon>mdi-codepen</v-icon>
                    </v-btn>
                    <v-btn
                        icon
                        href="https://api.whatsapp.com/send?phone=01023909759"
                        target="_blank"
                        class="media-icon"
                    >
                        <v-icon>mdi-whatsapp</v-icon>
                    </v-btn>
                    <v-btn
                        icon
                        href="mailto:leyamm3@gmail.com"
                        target="_blank"
                        class="media-icon"
                    >
                        <v-icon>mdi-gmail</v-icon>
                    </v-btn>
                </div>
            </div>
        </div>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    src: require('~/assets/banner1.jpg')
                },
                {
                    src: require('~/assets/banner2.jpg')
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.banner {
    width: 100%;
    height: calc(100vh - 50px);
    background-image: url(~assets/banner1.jpg);
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    .vue-particles {
        position: absolute;
        width: 100%;
        height: 100%;
    }
    .overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            220deg,
            rgba(255, 0, 0, 0.4) 0%,
            rgba(0, 0, 0, 0.7) 50%
        );
    }
    .banner-info {
        z-index: 2;
        text-align: center;
        color: white;
        h3 {
            font-size: 3rem;
            letter-spacing: 5px;
            font-family: $font-one;
            font-weight: 300;
            font-style: italic;
        }
        h1 {
            font-size: 6rem;
            letter-spacing: 8px;
            span {
                color: $color-one;
            }
        }
        .media {
            margin: 20px 0;
            color: white;
            .media-icon {
                margin: 0 10px;
                i {
                    color: white;
                    font-size: 3rem;
                    transition: 0.5s;
                    position: relative;
                    &::after {
                        position: absolute;
                        content: '';
                        width: 100%;
                        height: 100%;
                        top: 0;
                        left: 0;
                        background-color: white;
                    }
                    &:hover {
                        color: $color-one;
                        transform: scale(1.1);
                    }
                }
            }
        }
        .links {
            a {
                padding: 10px 15px;
                text-decoration: none;
                display: inline-block;
                color: #fff;
                font-weight: bold;
                border: 1px solid #fff;
                margin: 10px;
                min-width: 140px;
                transition: 0.5s;
                border-radius: 5px;
                i {
                    color: #fff;
                }
                &:hover {
                    color: $color-one;
                    border-color: $color-one;
                    i {
                        color: $color-one;
                        transform: scale(1.5);
                    }
                }
            }
        }
    }
}

@media (max-width: 570px) {
    .banner {
        .banner-info {
            h3 {
                font-size: 2rem;
            }

            h1 {
                font-size: 2.5rem;
            }
            .links {
                a {
                    padding: 8px 10px;
                    text-decoration: none;
                    display: inline-block;
                    color: #fff;
                    font-weight: bold;
                    border: 1px solid #fff;
                    margin: 20px 5px;
                    min-width: 140px;
                    transition: 0.5s;
                    border-radius: 2px;
                    i {
                        color: #fff;
                    }
                    &:hover {
                        color: $color-one;
                        border-color: $color-one;
                        i {
                            color: $color-one;
                            transform: scale(1.5);
                        }
                    }
                }
            }
        }
    }
}
</style>
