<template>
    <div>
        <h3>{{ $store.state.nam }}</h3>
        <button @click="$store.commit('increment')"></button>
    </div>
</template>

<script>
export default {
    computed: {
        namber() {
            return this.$store.state.nam
        }
    },
    methods: {
        increment() {}
    }
}
</script>

<style lang="scss" scoped></style>
