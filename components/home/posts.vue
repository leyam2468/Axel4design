<template>
    <div class="posts">
        <span class="posts-title-be">Axel</span>
        <h2 class="posts-title">Last Posts</h2>
        <div class="posts-area">
            <v-container>
                <v-row>
                    <v-col cols="12" sm="6" md="4">
                        <v-card>
                            <v-img :src="src" height="250"></v-img>
                            <v-card-title>AbouKir Hight instsint</v-card-title>
                            <v-card-text
                                ><v-row align="center" class="mx-0"
                                    ><v-rating
                                        value="4.5"
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
                                    $Univeristy
                                </div>
                                <div>
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Delectus voluptates
                                    praesentiuatur?
                                </div>
                            </v-card-text>
                            <v-divider class="mx-4"></v-divider>
                            <v-card-actions>
                                <v-btn text>Read More</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                        <v-card>
                            <v-img :src="src" height="250"></v-img>
                            <v-card-title>AbouKir Hight instsint</v-card-title>
                            <v-card-text
                                ><v-row align="center" class="mx-0"
                                    ><v-rating
                                        value="4.5"
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
                                    $Univeristy
                                </div>
                                <div>
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Delectus voluptates
                                    praesentiuatur?
                                </div>
                            </v-card-text>
                            <v-divider class="mx-4"></v-divider>
                            <v-card-actions>
                                <v-btn text>Read More</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                        <v-card>
                            <v-img :src="src" height="250"></v-img>
                            <v-card-title>AbouKir Hight instsint</v-card-title>
                            <v-card-text
                                ><v-row align="center" class="mx-0"
                                    ><v-rating
                                        value="4.5"
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
                                    $Univeristy
                                </div>
                                <div>
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Delectus voluptates
                                    praesentiuatur?
                                </div>
                            </v-card-text>
                            <v-divider class="mx-4"></v-divider>
                            <v-card-actions>
                                <v-btn text>Read More</v-btn>
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
            src: require('~/assets/tem5.jpg')
        }
    }
}
</script>

<style lang="scss" scoped>
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
            letter-spacing: 10px;
        }
    }
}
</style>
