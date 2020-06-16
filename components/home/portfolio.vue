<template>
    <div class="portfolio">
        <span class="portfolio-title-be">Axel</span>
        <h2 class="portfolio-title">Portfolio</h2>
        <div class="portfolio-item my-10">
            <v-row no-gutters>
                <v-col
                    v-for="item in items"
                    :key="item.id"
                    cols="6"
                    sm="6"
                    md="4"
                    lg="3"
                >
                    <div class="box-img">
                        <v-img
                            width="100%"
                            height="300px"
                            :src="item.src"
                        ></v-img>
                        <span class="img-title"
                            >{{ item.title }} <a href="#">DEMO</a></span
                        >
                    </div>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    title: 'Title Image',
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
    .box-img {
        position: relative;
        z-index: 1;
        width: 100%;
        height: 100%;
        &::before {
            position: absolute;
            content: '';
            width: 100%;
            height: 0;
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.6);
            z-index: 2;
            transition: all 0.5s ease-in-out;
        }
        .img-title {
            position: absolute;
            font-size: 30px;
            font-weight: bold;
            color: white;
            z-index: 3;
            text-align: center;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            opacity: 0;
            transition: all 1s ease-in-out;
            a {
                display: block;
                color: white;
                border: 1px solid #fff;
                padding: 5px 20px;
                margin: 10px 0;
                border-radius: 5px;
                letter-spacing: 5px;
                transition: all 0.5s ease-in-out;
                &:hover {
                    border-color: $color-one;
                    color: $color-one;
                }
            }
        }
        &:hover {
            &::before {
                height: 100%;
                border-bottom: 3px solid $color-one;
            }
            .img-title {
                opacity: 1;
            }
        }
    }
}
@media (max-width: 570px) {
    .portfolio {
        .portfolio-title-be {
            letter-spacing: 15px;
        }

        .box-img {
            .img-title {
                font-size: 20px;
                a {
                    padding: 5px 10px;
                    letter-spacing: 3px;
                    font-weight: normal;
                }
            }
        }
    }
}
</style>
