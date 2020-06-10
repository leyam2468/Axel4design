<template>
    <div class="about">
        <div class="box"><!-- <img src="/v.png" alt="" /> --></div>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: 'About'
        }
    }
}
</script>

<style lang="scss" scoped>
.about {
    background-color: #fff;
    height: 100%;
    .box {
        width: 500px;
        height: 550px;
        background-color: white;
        border: 5px solid #000;
        border-right: 0;
        border-radius: 5px;
        /*         border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px; */
        position: relative;
        transition: all 0.5s ease-in-out;
        &::before {
            content: '';
            position: absolute;
            width: 500px;
            height: 540px;
            background-color: #202020;
            right: -500px;
            transition: all 0.5s ease-in-out;
        }
        &::after {
            content: '';
            position: absolute;
            width: 364px;
            height: 410px;
            right: -182px;
            bottom: 10%;
            //transform: translateY(-50%);
            background-image: url(https://elzero.org/res-images/megaman.png?fbclid=IwAR0f_8W6oiOj4zLBUJ8M6wVr2cOIcrS8KWDkp3yeZ8yim-yOJa8y9wMgE1E);
            background-repeat: no-repeat;
            transition: all 0.5s ease-in-out;
        }
        &:hover {
            &::before {
                right: 0;
            }
            &::after {
                right: 100px;
            }
        }
    }
}
</style>
