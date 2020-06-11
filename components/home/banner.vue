<template>
    <v-carousel
        hide-delimiters
        cycle
        height="calc(100vh - 50px)"
        show-arrows-on-hover
    >
        <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
            <div class="banner">
                <div class="overlay"></div>
                <div class="banner-info">
                    <h3>Welcome To</h3>
                    <h2>Axel<span>4</span>Design</h2>
                    <div class="media">
                        <v-btn
                            icon
                            href="https://www.google.com"
                            target="_blank"
                            class="media-icon"
                        >
                            <v-icon>mdi-facebook</v-icon>
                        </v-btn>
                        <v-btn
                            icon
                            href="https://www.google.com"
                            target="_blank"
                            class="media-icon"
                        >
                            <v-icon>mdi-instagram</v-icon>
                        </v-btn>
                        <v-btn
                            icon
                            href="https://www.google.com"
                            target="_blank"
                            class="media-icon"
                        >
                            <v-icon>mdi-github</v-icon>
                        </v-btn>
                        <v-btn
                            icon
                            href="https://www.google.com"
                            target="_blank"
                            class="media-icon"
                        >
                            <v-icon>mdi-whatsapp</v-icon>
                        </v-btn>
                        <v-btn
                            icon
                            href="https://www.google.com"
                            target="_blank"
                            class="media-icon"
                        >
                            <v-icon>mdi-gmail</v-icon>
                        </v-btn>
                    </div>
                    <div class="links">
                        <a
                            class="cv"
                            target="_blank"
                            href="https://drive.google.com/file/d/1lY-U-riIqcwhxPuL7k3DtJ1Zdr-4eydK/view?usp=sharing"
                            ><v-icon right>mdi-file-document-outline</v-icon> My
                            CV
                        </a>
                        <a class="po" href="#"
                            >My Portfolio
                            <v-icon right>mdi-smart-card-outline</v-icon>
                        </a>
                    </div>
                </div>
            </div>
        </v-carousel-item>
    </v-carousel>
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
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    .overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba($color: #000000, $alpha: 0.5);
    }
    .banner-info {
        z-index: 2;
        text-align: center;
        color: white;
        h3 {
            font-size: 3rem;
            letter-spacing: 0px;
        }
        h2 {
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

            h2 {
                font-size: 3rem;
            }
        }
    }
}
</style>
