<template>
    <div id="client" class="clientsay">
        <span class="clientsay-title-be" data-aos="fade-up">Axel</span>
        <h2 class="clientsay-title" data-aos="fade-up">Client Say</h2>
        <!-- slider Client Say -->
        <div class="client-info my-5">
            <v-container>
                <v-row align="center">
                    <v-window
                        v-model="window"
                        show-arrows
                        show-arrows-on-hover
                        class="elevation-5"
                        data-aos="zoom-in"
                    >
                        <v-window-item
                            v-for="(item, index) in items"
                            :key="index"
                            transition="fade-transition"
                        >
                            <v-card flat class="client-box">
                                <v-card-text>
                                    <v-row class="mb-4" align="center">
                                        <v-avatar class="mx-4" color="colorOne"
                                            ><img :src="item.src" alt=""
                                        /></v-avatar>
                                        <strong class="title">{{
                                            item.title
                                        }}</strong>
                                        <v-spacer></v-spacer>
                                        <v-btn icon>
                                            <v-icon>mdi-account</v-icon>
                                        </v-btn>
                                    </v-row>
                                    <p>{{ item.dis }}</p>
                                </v-card-text>
                            </v-card>
                        </v-window-item>
                    </v-window>
                </v-row>
            </v-container>
        </div>
        <!-- box nambers -->
        <div class="box-info">
            <v-container>
                <v-row>
                    <v-col cols="6" md="3" data-aos="flip-left"
                        ><v-card
                            class="py-5"
                            height="250px"
                            width="100%"
                            elevation="5"
                            ><v-icon class="py-5"
                                >mdi-emoticon-happy-outline</v-icon
                            >
                            <div class="namber">4</div>
                            <h2 class="py-5">Happy Clients</h2></v-card
                        ></v-col
                    >
                    <v-col cols="6" md="3" data-aos="flip-left"
                        ><v-card
                            class="py-5"
                            height="250px"
                            width="100%"
                            elevation="5"
                            ><v-icon class="py-5"
                                >mdi-briefcase-variant-outline</v-icon
                            >
                            <div class="namber">10</div>
                            <h2 class="py-5">Projects</h2></v-card
                        ></v-col
                    >
                    <v-col cols="6" md="3" data-aos="flip-left"
                        ><v-card
                            class="py-5"
                            height="250px"
                            width="100%"
                            elevation="5"
                            ><v-icon class="py-5"
                                >mdi-trophy-variant-outline</v-icon
                            >
                            <div class="namber">0</div>
                            <h2 class="py-5">Awards Received</h2></v-card
                        ></v-col
                    >
                    <v-col cols="6" md="3" data-aos="flip-left"
                        ><v-card
                            class="py-5"
                            height="250px"
                            width="100%"
                            elevation="5"
                            ><v-icon class="py-5"
                                >mdi-account-group-outline</v-icon
                            >
                            <div class="namber">0</div>
                            <h2 class="py-5">Team Member</h2></v-card
                        ></v-col
                    >
                </v-row>
            </v-container>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            window: 0,
            autorun: true,
            showArrows: true,
            items: [
                {
                    title: 'Mohamed Ahmed',
                    src: require('~/assets/person-1.png'),
                    dis:
                        ' aliquid magni? Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui numquam dicta, facilis, at eum molestiae dolorum est iste commodi ipsum itaque vero accusantium illo architecto nisi debitis fugiat aliquid magni? Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui numquam dicta, facilis, at eum molestiae dolorum est iste commodi ipsum itaque vero accusantium illo architecto nisi debitis fugiat aliquid magni?'
                },
                {
                    title: 'Mohamed Mahmoud',
                    src: require('~/assets/person-3.png'),
                    dis:
                        ' aliquid magni? Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui numquam dicta, facilis, at eum molestiae dolorum est iste commodi ipsum itaque vero accusantium illo architecto nisi debitis fugiat aliquid magni? Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui numquam dicta, facilis, at eum molestiae dolorum est iste commodi ipsum itaque vero accusantium illo architecto nisi debitis fugiat aliquid magni?'
                },
                {
                    title: 'Nour Nabil',
                    src: require('~/assets/person-1.png'),
                    dis:
                        ' aliquid magni? Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui numquam dicta, facilis, at eum molestiae dolorum est iste commodi ipsum itaque vero accusantium illo architecto nisi debitis fugiat aliquid magni? Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui numquam dicta, facilis, at eum molestiae dolorum est iste commodi ipsum itaque vero accusantium illo architecto nisi debitis fugiat aliquid magni?'
                }
            ]
        }
    },
    created() {
        setInterval(() => {
            if (!this.autorun) return
            if (++this.window >= this.length) this.window = 0
        }, 3000)
    }
}
</script>

<style lang="scss" scoped>
.clientsay {
    .clientsay-title-be {
        text-align: center;
        display: block;
        font-size: 8rem;
        font-weight: bold;
        margin-bottom: -125px;
        color: rgba(183, 183, 183, 0.5);
        text-transform: uppercase;
        letter-spacing: 20px;
    }
    .clientsay-title {
        text-align: center;
        font-size: 3rem;
        z-index: 2;
        font-weight: bold;
        letter-spacing: 10px;
    }
    .box-info {
        text-align: center;

        i {
            font-size: 4rem;
        }
        .namber {
            font-size: 2rem;
        }
    }
}
@media (max-width: 570px) {
    .clientsay {
        .clientsay-title-be {
            letter-spacing: 8px;
        }
        .box-info {
            h2 {
                font-size: 18px;
            }
        }
    }
}
</style>
