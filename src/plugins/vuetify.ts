import 'vuetify/styles'
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify, type ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const dark: ThemeDefinition = {
    dark: true,
    colors: {
        primary: "#1A99DD",
        surface: "hsl(235, 24%, 19%)",
        borderColor: "hsl(234, 39%, 85%)",
        darkGrayishBlue: "hsl(234, 11%, 52%)",
        veryDarkGrayishBlue: "hsl(233, 14%, 35%)",
    },
};

const light: ThemeDefinition = {
    dark: false,
    colors: {
        primary: "#1A99DD",
        surface: "#FFFFFF",
        borderColor: "#000",
        darkGrayishBlue: "hsl(236, 9%, 61%)",
        veryDarkGrayishBlue: "hsl(235, 19%, 35%)",
    },
};


export default createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: "dark",
        variations: {
            colors: ['primary', 'secondary'],
            lighten: 4,
            darken: 4,
        },
        themes: {
            dark,
            light
        },
    },
})
