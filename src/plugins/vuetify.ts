import 'vuetify/styles'
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify, type ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const dark: ThemeDefinition = {
    dark: true,
    colors: {
        primary: "hsl(220, 98%, 61%)",
        checkBackground: "linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)",
        veryDarkBlue: "hsl(235, 21%, 11%)",
        veryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
        lightGrayishBlue: "hsl(234, 39%, 85%)",
        lightGrayishBlueHover: "hsl(236, 33%, 92%)",
        darkGrayishBlue: "hsl(234, 11%, 52%)",
        veryDarkGrayishBlue: "hsl(233, 14%, 35%)",
    },
};

const light: ThemeDefinition = {
    dark: false,
    colors: {
        primary: "hsl(220, 98%, 61%)",
        checkBackground: "linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)",
        veryLightGray: "hsl(0, 0%, 98%)",
        veryLightGrayishBlue: "hsl(236, 33%, 92%)",
        lightGrayishBlue: "hsl(233, 11%, 84%)",
        darkGrayishBlue: "hsl(236, 9%, 61%)",
        veryDarkGrayishBlue: "hsl(235, 19%, 35%)",
    },
};


export default createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: "dark",
        themes: {
            dark,
            light
        },
    },
})
