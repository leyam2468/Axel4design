<template>
    <div class="header">
        <banner />
    </div>
</template>

<script>
import banner from '@/components/home/banner.vue'
export default {
    components: {
        banner
    },
    methods: {},
    head() {
        return {
            title: 'Home'
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
    height: 5600px;
    .title {
        color: $color-one;
    }
}
</style>
