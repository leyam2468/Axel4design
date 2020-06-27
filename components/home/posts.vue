<template>
    <div id="posts" class="posts">
        <span class="posts-title-be" data-aos="fade-up">Axel</span>
        <h2 class="posts-title" data-aos="fade-up">
            Last Posts
        </h2>
        <div class="posts-area my-4" data-aos="fade-up">
            <v-container>
                <v-row>
                    <v-col
                        v-for="post in posts"
                        :key="post.title"
                        md="4"
                        cols="12"
                        sm="6"
                    >
                        <v-card>
                            <v-img :src="post.src" height="250"></v-img>
                            <v-card-title>{{ post.title }}</v-card-title>
                            <v-card-text
                                ><v-row align="center" class="mx-0"
                                    ><v-rating
                                        :value="4.5"
                                        color="colorTow"
                                        dense
                                        half-increments
                                        readonly
                                    ></v-rating>
                                    <div class="ml-4 grey--text">
                                        4.5
                                    </div>
                                </v-row>

                                <div class="my-4 subtitle-1">
                                    $Coming Soon
                                </div>
                                <div>{{ post.des }}</div>
                            </v-card-text>
                            <v-divider class="mx-4"></v-divider>
                            <v-card-actions>
                                <v-btn text color="colorTow">Read More</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            posts: [
                {
                    title: 'Front-end App',
                    src: require('~/assets/post1.jpg'),
                    des:
                        "I can make your website's front-end using Vue.js, React.js or Vanilla JavaScript. With a beautiful and interractive UI"
                },
                {
                    title: 'Back-end App',
                    src: require('~/assets/post2.jpg'),
                    des:
                        'I can make your secure & performant back-end RESTful or GraphQL API in Node.js, Express and MongoDB'
                },
                {
                    title: 'Full Stack App',
                    src: require('~/assets/post3.jpg'),
                    des:
                        'I can make your full stack web application in React.js, Vue.js or Vanilla JavaScript Front-end and Node.js or Firebase Back-end'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.posts.enter-active,
.potsts-leave-active {
    transition: opacity 1.5s;
}
.posts-enter,
.posts-leave-to {
    opacity: 0;
}
.posts {
    .posts-title-be {
        text-align: center;
        display: block;
        font-size: 8rem;
        font-weight: bold;
        margin-bottom: -125px;
        color: rgba(183, 183, 183, 0.5);
        text-transform: uppercase;
        letter-spacing: 20px;
    }
    .posts-title {
        text-align: center;
        font-size: 3rem;
        z-index: 2;
        font-weight: bold;
        letter-spacing: 10px;
    }
}
@media (max-width: 570px) {
    .posts {
        .posts-title-be {
            letter-spacing: 8px;
        }
    }
}
</style>
