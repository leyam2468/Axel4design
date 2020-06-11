<template>
    <div class="about-me">
        <v-container>
            <v-row
                justify="space-around"
                align-content="center"
                class="py-8"
                no-gutters=""
            >
                <v-col cols="12" sm="6">
                    <div class="about-info">
                        <h2 class="">About Me</h2>
                        <v-divider></v-divider>
                        <span>Name:</span><span>Mohamed Ahmed Mahmoud</span
                        ><br />
                        <span>Age:</span><span>21</span><br />
                        <span>Education:</span
                        ><span>Mangement Information System</span>
                    </div>
                </v-col>
                <v-col cols="12" sm="6">
                    <div class="about-img">
                        <img
                            src="~/assets/banner1.jpg"
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
.about-img {
    height: 400px;
    padding: 5px;
    border: 1px solid #222;
    img {
        object-fit: cover;
    }
}
</style>
