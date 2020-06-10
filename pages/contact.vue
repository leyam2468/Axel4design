<template>
    <div>
        <div class="g-container">
            <div class="box box1">
                <span>1</span>
            </div>
            <div class="box box2" style="grid-column:2/4">
                <span>2</span>
            </div>
            <div class="box box3"><span>3</span></div>
            <div class="box box4"><span>4</span></div>
            <div class="box box1"><span>5</span></div>
            <div class="box box2"><span>6</span></div>
            <div class="box box3"><span>7</span></div>
            <div class="box box4"><span>8</span></div>
            <div class="box box1" style="grid-column:2/4"><span>9</span></div>
            <div class="box box2">
                <span>10</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.g-container {
    padding: 80px 0;
    display: grid;
    //grid-template-columns: repeat(4, 1fr);
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-rows: 200px;
    gap: 20px;
    .box {
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.5s;
        &:hover {
            transform: scale(1.1);
        }
        span {
            width: 50%;
            height: 50%;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background-color: #000;
        }
    }
    .box1 {
        background-color: orange;
    }
    .box2 {
        background-color: green;
    }
    .box3 {
        background-color: yellow;
    }
    .box4 {
        background-color: gold;
    }
}
</style>
