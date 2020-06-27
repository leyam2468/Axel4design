<template>
    <div class="about">
        <div
            class="maker-canvas-container"
            tabindex="1"
            style="width: 650px; height: 520px; position: relative; user-select: none;"
        >
            <canvas
                id="js-maker-canvas"
                class="maker-canvas lower-canvas"
                width="650"
                height="520"
                style="position: absolute; width: 650px; height: 520px; left: 0px; top: 0px; touch-action: none; user-select: none;"
            ></canvas
            ><canvas
                class="upper-canvas maker-canvas"
                width="650"
                height="520"
                style="position: absolute; width: 650px; height: 520px; left: 0px; top: 0px; touch-action: none; user-select: none; cursor: move;"
            ></canvas>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {}
    }
}
</script>
<style lang="scss" scoped>
.about {
}
</style>
