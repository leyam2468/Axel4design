<template>
    <div>
        <h5>{{ skil }}</h5>
    </div>
</template>

<script>
export default {
    props: {
        skil: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss" scoped></style>
