<template>
    <div>
        <v-container>
            <v-row>
                <v-col>
                    <h3>V-for</h3>
                    <v-divider></v-divider>
                    <test v-for="skil in skils" :key="skil" :skil="skil" />
                </v-col>
                <v-col>
                    <h3>V-if &v-else</h3>
                    <v-divider></v-divider>
                    <div v-if="this.$vuetify.theme.dark">Dark Theme</div>
                    <div v-else>Light Theme</div>
                </v-col>
                <v-col>
                    <h3>see data</h3>
                    <v-divider></v-divider>
                    <h5>{{ one }}</h5>
                    <h5>{{ age }}</h5>
                    <h5>{{ name | uppercasee }}</h5>
                </v-col>

                <v-col>
                    <h3>v-show & v-if</h3>
                    <v-divider></v-divider>
                    <h5 v-show="age < 30 && age > 20">v-show :{{ age }}</h5>
                    <h5 v-if="age < 30 && age > 20">v-if :{{ age }}</h5>
                </v-col>
                <v-col>
                    <h3>@click</h3>
                    <v-divider></v-divider>
                    <v-btn @click="age++">age++</v-btn>
                </v-col>
            </v-row>

            <v-divider></v-divider>

            <v-row>
                <v-col
                    ><v-text-field
                        v-model="fLang"
                        label="Search"
                    ></v-text-field>
                    <ul>
                        <li v-for="skil in three" :key="skil">{{ skil }}</li>
                    </ul></v-col
                >
                <v-col
                    ><v-text-field v-model="eg" label="Eg"></v-text-field>
                    <v-text-field v-model="USA" label="USA"></v-text-field
                ></v-col>
                <v-col>
                    <input v-model="color" type="color" value="#ff0" />
                    <h1 v-font="30" :style="{ color: color }">
                        code :{{ color }}
                    </h1>
                </v-col>
                <v-col> {{ text | shorten(50) }} </v-col>
            </v-row>

            <v-divider></v-divider>
        </v-container>
    </div>
</template>

<script>
import test from '@/components/test.vue'
export default {
    components: {
        test
    },
    filters: {
        uppercasee(value) {
            return value.toUpperCase()
        },
        shorten(v, num) {
            return v.substring(0, num) + ' .....'
        }
    },
    data() {
        return {
            name: 'Mohamed Ahmed',
            age: 22,
            color: '',
            fLang: '',
            skils: ['html', 'css', 'js', 'pug', 'scss', 'git', 'node'],
            eg: '',
            USA: '',
            text:
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus consequatur quidem expedita, repellendus facilis ad suscipit ipsam voluptatem reiciendis esse quia a nostrum enim! Sint ab nihil tempora saepe aliquam.'
        }
    },
    computed: {
        one() {
            // eslint-disable-next-line no-console
            console.log('one')
            return this.age * 2
        },
        three() {
            // eslint-disable-next-line no-console
            console.log('three')
            const filter = new RegExp(this.fLang, 'i')
            return this.skils.filter((el) => el.match(filter))
        }
    },
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
    watch: {
        eg(v) {
            // eslint-disable-next-line no-console
            console.log('eg')
            this.USA = v / 18
        },
        USA(v) {
            // eslint-disable-next-line no-console
            console.log('USA')
            this.eg = v * 18
        }
    },
    methods: {
        tow() {
            return this.age * 2
        }
    }
}
</script>

<style lang="scss" scoped></style>
