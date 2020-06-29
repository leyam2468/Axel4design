<template>
    <div id="education" class="persons overflow-hidden">
        <span class="persons-title-be" data-aos="fade-up">Axel</span>
        <h2 class="persons-title" data-aos="fade-up">Education</h2>
        <v-container>
            <v-row justify="center">
                <v-col
                    v-for="person in persons"
                    :key="person.title"
                    cols="6"
                    md="3"
                    data-aos="zoom-up"
                    data-aos-duration="2000"
                >
                    <v-card height="180px" width="180px" elevation="8">
                        <v-img :src="person.src"></v-img>
                    </v-card>
                    <v-btn
                        text
                        color="colorTow"
                        :href="person.link"
                        target="_blank"
                        class="px-0"
                    >
                        <v-icon left>{{ person.icon }}</v-icon
                        >{{ person.title }}
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            persons: [
                {
                    src: require('~/assets/elzero.jpg'),
                    title: 'Elzero School',
                    icon: 'mdi-youtube',
                    link:
                        'https://www.youtube.com/channel/UCSNkfKl4cU-55Nm-ovsvOHQ'
                },
                {
                    src: require('~/assets/Nour.jpg'),
                    title: 'Nour Homsi ',
                    icon: 'mdi-youtube',
                    link: 'https://www.youtube.com/user/drnour'
                },
                {
                    src: require('~/assets/travel.jpg'),
                    title: 'Traversy Media',
                    icon: 'mdi-youtube',
                    link:
                        'https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA/'
                },
                {
                    src: require('~/assets/Medhat Dawoud.jpg'),
                    title: 'Medhat Dawoud',
                    icon: 'mdi-youtube',
                    link:
                        'https://www.youtube.com/channel/UCzve9ZBBT6_Nt_3j-qHyheQ'
                },
                {
                    src: require('~/assets/Vue Mastery.jpg'),
                    title: 'Vue Mastery',
                    icon: 'mdi-youtube',
                    link: 'https://www.vuemastery.com/courses/'
                },
                {
                    src: require('~/assets/Vue Screencasts.jpg'),
                    title: 'Vue Screencasts',
                    icon: 'mdi-youtube',
                    link:
                        'https://www.youtube.com/channel/UCJasK7cAgRz1RGMJCoRLXXQ'
                },
                {
                    src: require('~/assets/Dev Ed.jpg'),
                    title: 'Dev Ed',
                    icon: 'mdi-youtube',
                    link:
                        'https://www.youtube.com/channel/UClb90NQQcskPUGDIXsQEz5Q'
                },
                {
                    src: require('~/assets/Web Dev Simplified.jpg'),
                    title: 'Web Dev ',
                    icon: 'mdi-youtube',
                    link:
                        'https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw'
                },
                {
                    src: require('~/assets/Fireship.jpg'),
                    title: 'Fireship',
                    icon: 'mdi-youtube',
                    link:
                        'https://www.youtube.com/channel/UCsBjURrPoezykLs9EqgamOA'
                },
                {
                    src: require('~/assets/DesignCourse.jpg'),
                    title: 'DesignCourse',
                    icon: 'mdi-youtube',
                    link:
                        'https://www.youtube.com/channel/UCVyRiMvfUNMA1UPlDPzG5Ow'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.persons {
    .persons-title-be {
        text-align: center;
        display: block;
        font-size: 8rem;
        font-weight: bold;
        margin-bottom: -125px;
        color: rgba(183, 183, 183, 0.5);
        text-transform: uppercase;
        letter-spacing: 20px;
    }
    .persons-title {
        text-align: center;
        font-size: 3rem;
        z-index: 2;
        font-weight: bold;
        letter-spacing: 10px;
    }
}

@media (max-width: 570px) {
    .persons {
        .persons-title-be {
            letter-spacing: 8px;
        }
    }
}
</style>
