<template>
    <v-app dark>
        <div class="error-page">
            <img src="@/static/404_.svg" alt="" width="250px" height="250px" />
            <h1 v-if="error.statusCode === 404">
                {{ pageNotFound }}
            </h1>
            <h1 v-else>
                {{ otherError }}
            </h1>
            <NuxtLink to="/">
                Go Home page
            </NuxtLink>
        </div>
    </v-app>
</template>

<script>
export default {
    layout: 'empty',
    props: {
        error: {
            type: Object,
            default: null
        }
    },
    data() {
        return {
            pageNotFound: 'Page Not Found',
            otherError: 'An error occurred'
        }
    },
    head() {
        const title =
            this.error.statusCode === 404 ? this.pageNotFound : this.otherError
        return {
            title
        }
    }
}
</script>

<style scoped lang="scss">
.error-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
h1 {
    font-size: 5rem;
}
a {
    text-decoration: none;
    color: red;
    border: 2px solid red;
    width: 150px;
    padding: 10px;
    text-align: center;
    font-weight: bold;
}
@media (max-width: 600px) {
    h1 {
        font-size: 2rem;
        text-align: center;
    }
}
</style>
