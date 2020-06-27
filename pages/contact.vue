<template>
    <div>
        <div id="one" class="one">
            <a v-scroll-to="{ el: '#tow', duration: 2500 }" href="#">down</a>
        </div>
        <div id="tow" class="tow">
            <v-btn v-scroll-to="{ el: '#one', duration: 2500 }">up</v-btn>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.one {
    height: 2500px;
    background-color: red;
}
.tow {
    height: 2500px;
    background-color: green;
}
</style>
