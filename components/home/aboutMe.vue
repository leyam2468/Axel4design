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
                            I am Full-Stack <span> Front End</span>
                        </h2>
                        <p class="title-about-des">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Repellendus ea vero dolores officiis suscipit
                            dolorum enim debitis illum !
                        </p>
                        <v-divider></v-divider>
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
                                    >Al behara , Kafr Al Dwar</span
                                >
                            </li>
                            <li>
                                <span class="pro-title">Email</span
                                ><span class="pro-des">Leyamm3@gmail.com</span>
                            </li>
                            <li>
                                <span class="pro-title">Phone</span
                                ><span class="pro-des">(+20) 1023909759</span>
                            </li>
                            <li>
                                <span class="pro-title">Freelance</span
                                ><span class="pro-des">Available</span>
                            </li>
                        </ul>
                    </div>
                </v-col>
                <!-- image in about -->
                <v-col cols="12" sm="6">
                    <div class="about-img">
                        <img
                            src="~/assets/me2.jpg"
                            alt=""
                            width="100%"
                            height="100%"
                        />
                    </div>
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
        border: 1px solid #222;
        img {
            object-fit: cover;
        }
    }
}
</style>
