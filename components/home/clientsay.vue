<template>
    <div class="clientsay">
        <span class="clientsay-title-be">Axel</span>
        <h2 class="clientsay-title">Client Say</h2>
        <div class="client-info my-5">
            <v-container>
                <v-row align="center">
                    <v-window
                        v-model="window"
                        show-arrows
                        show-arrows-on-hover
                        class="elevation-5"
                    >
                        <v-window-item
                            v-for="item in items"
                            :key="item"
                            transition="fade-transition"
                        >
                            <v-card flat class="client-box" min-height="250px">
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
                    src: require('~/assets/tem8.jpg'),
                    dis:
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui numquam dicta, facilis, at eum molestiae dolorum est iste commodi ipsum itaque vero accusantium illo architecto nisi debitis fugiat aliquid magni? Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui numquam dicta, facilis, at eum molestiae dolorum est iste commodi ipsum itaque vero accusantium illo architecto nisi debitis fugiat aliquid magni? Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui numquam dicta, facilis, at eum molestiae dolorum est iste commodi ipsum itaque vero accusantium illo architecto nisi debitis fugiat aliquid magni? Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui numquam dicta, facilis, at eum molestiae dolorum est iste commodi ipsum itaque vero accusantium illo architecto nisi debitis fugiat aliquid magni?'
                },
                {
                    title: 'Mohamed Mahmoud',
                    src: require('~/assets/tem7.jpg'),
                    dis:
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui numquam dicta, facilis, at eum molestiae dolorum est iste commodi ipsum itaque vero accusantium illo architecto nisi debitis fugiat aliquid magni? Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui numquam dicta, facilis, at eum molestiae dolorum est iste commodi ipsum itaque vero accusantium illo architecto nisi debitis fugiat aliquid magni? Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui numquam dicta, facilis, at eum molestiae dolorum est iste commodi ipsum itaque vero accusantium illo architecto nisi debitis fugiat aliquid magni? Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui numquam dicta, facilis, at eum molestiae dolorum est iste commodi ipsum itaque vero accusantium illo architecto nisi debitis fugiat aliquid magni?'
                },
                {
                    title: 'Nour Nabil',
                    src: require('~/assets/tem7.jpg'),
                    dis:
                        'Lorem ipsum dolst iste commotecto nisi debitis fugiat aliquid magni? Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui numquam dicta, facilis, at eum molestiae dolorum est iste commodi ipsum itaque vero accusantium illo architecto nisi debitis fugiat aliquid magni? Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui numquam dicta, facilis, at eum molestiae dolorum est iste commodi ipsum itaque vero accusantium illo architecto nisi debitis fugiat aliquid magni? Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui numquam dicta, facilis, at eum molestiae dolorum est iste commodi ipsum itaque vero accusantium illo architecto nisi debitis fugiat aliquid magni?'
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
}
@media (max-width: 570px) {
    .clientsay {
        .clientsay-title-be {
            letter-spacing: 10px;
        }
    }
}
</style>
