<template>
    <div>
        <div v-if="this.$vuetify.theme.dark">One</div>
        <div v-else>Tow</div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
div {
    color: red;
}
</style>
