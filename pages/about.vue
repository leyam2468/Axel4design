<template>
    <div class="about">
        <v-carousel show-arrows-on-hover cycle height="50vh">
            <div class="overlay"></div>
            <h2 class="page-title py-5">About Me</h2>
            <v-carousel-item
                v-for="(item, i) in items"
                :key="i"
                :src="item.src"
            >
            </v-carousel-item>
        </v-carousel>
        <aboutMe />
    </div>
</template>

<script>
import aboutMe from '@/components/home/aboutMe.vue'
export default {
    components: {
        aboutMe
    },
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
.about {
    position: relative;
    .page-title {
        font-size: 4rem;
        position: absolute;
        text-transform: uppercase;
        font-weight: bold;
        color: white;
        z-index: 5;
        top: 50%;
        left: 50%;
        width: 100%;
        text-align: center;
        transform: translate(-50%, -50%);
        letter-spacing: 5px;
    }
    .overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 3;
        background: linear-gradient(
            220deg,
            rgba(189, 13, 13, 0.5) 0%,
            rgba(0, 0, 0, 0.8) 50%
        );
    }
}
@media (max-width: 570px) {
    .about {
        .page-title {
            font-size: 2.5rem;
        }
    }
}
</style>
