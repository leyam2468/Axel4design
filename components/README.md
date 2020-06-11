#COMPONENTS

**This directory is not required, you can delete it if you don't want to use it.**

The components directory contains your Vue.js Components.

_Nuxt.js doesn't supercharge these components._

<div class="overlay"></div>
        <div class="banner-info">
            <h3>Welcome To</h3>
            <h2>Axel<span>4</span>Design</h2>
            <div class="media">
                <v-btn
                    icon
                    href="https://www.google.com"
                    target="_blank"
                    class="media-icon"
                >
                    <v-icon>mdi-facebook</v-icon>
                </v-btn>
                <v-btn
                    icon
                    href="https://www.google.com"
                    target="_blank"
                    class="media-icon"
                >
                    <v-icon>mdi-instagram</v-icon>
                </v-btn>
                <v-btn
                    icon
                    href="https://www.google.com"
                    target="_blank"
                    class="media-icon"
                >
                    <v-icon>mdi-github</v-icon>
                </v-btn>
                <v-btn
                    icon
                    href="https://www.google.com"
                    target="_blank"
                    class="media-icon"
                >
                    <v-icon>mdi-whatsapp</v-icon>
                </v-btn>
            </div>
            <div class="links">
                <a class="cv" href="#"
                    ><v-icon>mdi-file-document-outline</v-icon> My CV
                </a>
                <a class="po" href="#"
                    >My Portfolio <v-icon>mdi-smart-card-outline</v-icon>
                </a>
            </div>
        </div>

.banner {
width: 100vw;
height: 100vh;
background-image: url(/banner1.jpg);
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
position: relative;
.overlay {
position: absolute;
width: 100%;
height: 100%;
background-color: rgba($color: #000000, $alpha: 0.6);
}
.banner-info {
z-index: 2;
text-align: center;
color: white;
h3 {
font-size: 2rem;
letter-spacing: 4px;
}
h2 {
font-size: 5rem;
letter-spacing: 5px;
span {
color: $color-one;
            }
        }
        .media {
            margin-bottom: 20px;
            color: white;
            .media-icon {
                margin: 0 10px;
                i {
                    color: white;
                    font-size: 3rem;
                    transition: 0.5s;
                    &:hover {
                        color: $color-one;
}
}
}
}
.links {
a {
padding: 10px 15px;
text-decoration: none;
display: inline-block;
color: #fff;
font-weight: bold;
border: 1px solid #fff;
margin: 30px -1px;
min-width: 140px;
transition: 0.5s;
i {

color: #fff;
}
&:hover {
color: $color-one;
                    border-color: $color-one;
i {
color: \$color-one;
transform: scale(1.5);
}
}
}
.cv {
border-radius: 15px 0 0 15px;
}
.po {
border-radius: 0 15px 15px 0;
}
}
}
}
