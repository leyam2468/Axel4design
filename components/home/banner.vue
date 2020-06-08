<template>
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
            </div>
            <div class="links">
                <a href="#">My CV</a>
                <a href="#">My Portfolio</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.banner {
    width: 100vw;
    height: calc(100vh - 56px);
    background-image: url(/banner1.jpg);
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    .overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba($color: #000000, $alpha: 0.6);
    }
    .banner-info {
        z-index: 2;
        text-align: center;
        color: white;
        h3 {
            font-size: 2rem;

            letter-spacing: 4px;
        }
        h2 {
            font-size: 5rem;
            letter-spacing: 5px;
            span {
                color: $color-one;
            }
        }
        .media {
            margin-bottom: 20px;
            color: white;
            .media-icon {
                margin: 0 10px;
                i {
                    color: white;
                    font-size: 3rem;
                    transition: 0.5s;
                    &:hover {
                        color: $color-one;
                    }
                }
            }
        }
        .links a {
            padding: 12px 15px;
            text-decoration: none;
            display: inline-block;
            color: #fff;
            font-weight: bold;
            border: 2px solid #fff;
            margin: 10px;
            min-width: 140px;
            transition: 0.5s;
            &:hover {
                color: $color-one;
                border-color: $color-one;
            }
        }
    }
}
</style>
