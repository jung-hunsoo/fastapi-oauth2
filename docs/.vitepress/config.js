export default {
    title: "FastAPI OAuth2",
    description: "OAuth2 authentication with support for several identity providers",
    head: [
        ["link", {rel: "icon", type: "image/x-icon", href: "/logo.png"}],
        ["link", {href: "/index.css", rel: "stylesheet"}],
    ],
    cleanUrls: true,
    lang: "en-US",
    base: "/fastapi-oauth2/",
    themeConfig: {
        siteTitle: "FastAPI OAuth2",
        socialLinks: [
            {
                icon: "github",
                link: "https://github.com/pysnippet/fastapi-oauth2",
            },
            {
                icon: {
                    svg: "<svg role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 560.000000 484.000000'><g class='mask' transform='translate(0.000000,484.000000) scale(0.100000,-0.100000)' stroke='none'><rect x='0' y='0' width='560' height='484' transform='scale(10)' fill='transparent'/><path class='cls-1' fill='#76767B' d='M647 4796 c-10 -22 -23 -50 -28 -61 -12 -27 -67 -192 -79 -235 -5 -19 -16 -60 -25 -90 -26 -87 -55 -202 -61 -240 -3 -19 -8 -38 -10 -42 -2 -4 9 -15 26 -24 16 -10 30 -21 30 -25 0 -4 11 -10 25 -13 14 -4 25 -10 25 -15 0 -5 16 -15 35 -21 19 -6 35 -15 35 -19 0 -5 20 -16 45 -25 25 -10 45 -21 45 -26 0 -4 25 -18 55 -30 30 -12 55 -26 55 -30 0 -4 25 -18 55 -30 30 -12 55 -27 55 -32 0 -5 4 -6 10 -3 5 3 10 2 10 -3 0 -4 34 -23 75 -41 41 -18 75 -38 75 -43 0 -5 4 -6 10 -3 5 3 10 2 10 -3 0 -4 34 -23 75 -41 41 -18 75 -38 75 -43 0 -5 5 -6 10 -3 6 3 10 2 10 -3 0 -4 43 -28 95 -51 52 -24 95 -48 95 -53 0 -5 5 -6 10 -3 6 3 10 2 10 -3 0 -5 38 -26 85 -47 47 -21 85 -42 85 -47 0 -5 5 -6 10 -3 6 3 10 2 10 -3 0 -5 29 -21 65 -37 36 -15 65 -32 65 -37 0 -5 4 -6 10 -3 5 3 10 2 10 -3 0 -5 20 -17 45 -26 25 -10 45 -22 45 -27 0 -6 5 -7 10 -4 6 3 10 2 10 -4 0 -5 16 -15 35 -21 19 -6 41 -17 48 -24 6 -7 30 -21 52 -32 22 -10 41 -27 43 -36 4 -21 -37 -78 -55 -78 -7 0 -13 -4 -13 -10 0 -5 -7 -10 -15 -10 -8 0 -15 -4 -15 -10 0 -5 -6 -10 -13 -10 -8 0 -24 -9 -37 -20 -13 -11 -29 -20 -37 -20 -7 0 -13 -4 -13 -9 0 -5 -16 -15 -35 -21 -19 -6 -35 -15 -35 -20 0 -5 -20 -16 -45 -26 -25 -9 -45 -21 -45 -26 0 -5 -4 -6 -10 -3 -5 3 -10 2 -10 -3 0 -5 -25 -20 -55 -32 -30 -12 -55 -27 -55 -32 0 -5 -4 -6 -10 -3 -5 3 -10 2 -10 -3 0 -5 -29 -22 -65 -37 -36 -16 -65 -32 -65 -37 0 -5 -4 -6 -10 -3 -5 3 -10 2 -10 -3 0 -5 -38 -26 -85 -47 -47 -21 -85 -42 -85 -47 0 -5 -4 -6 -10 -3 -5 3 -10 2 -10 -3 0 -5 -38 -27 -85 -48 -47 -21 -85 -42 -85 -47 0 -4 -4 -5 -10 -2 -5 3 -10 2 -10 -3 0 -5 -34 -25 -75 -43 -41 -18 -75 -37 -75 -41 0 -5 -5 -6 -10 -3 -5 3 -10 2 -10 -3 0 -5 -29 -22 -65 -37 -36 -16 -65 -32 -65 -37 0 -5 -4 -6 -10 -3 -5 3 -10 1 -10 -5 0 -6 -4 -8 -10 -5 -5 3 -10 2 -10 -3 0 -5 -25 -20 -55 -32 -30 -12 -55 -27 -55 -32 0 -5 -4 -6 -10 -3 -5 3 -10 2 -10 -3 0 -6 -25 -20 -55 -33 -30 -12 -55 -27 -55 -31 0 -5 -4 -6 -10 -3 -5 3 -10 2 -10 -3 0 -6 -25 -20 -55 -33 -30 -12 -55 -27 -55 -31 0 -5 -4 -6 -10 -3 -5 3 -10 2 -10 -4 0 -5 -20 -17 -45 -27 -25 -9 -45 -20 -45 -25 0 -4 -20 -15 -45 -25 -25 -9 -45 -20 -45 -24 0 -4 -15 -14 -32 -21 -18 -7 -39 -19 -46 -26 -7 -7 -19 -13 -27 -13 -11 0 -22 -19 -39 -73 -3 -9 -8 -57 -12 -105 -3 -48 -10 -118 -14 -157 -10 -88 -8 -406 3 -422 5 -9 48 9 151 62 78 41 146 72 149 68 4 -3 7 -1 7 6 0 7 4 9 10 6 5 -3 10 -1 10 5 0 6 5 8 10 5 6 -3 10 -1 10 5 0 6 5 8 10 5 6 -3 10 -1 10 5 0 6 4 8 10 5 5 -3 10 -1 10 6 0 7 3 10 6 6 7 -7 286 130 295 145 3 5 10 9 15 9 18 -1 44 11 44 20 0 6 5 7 10 4 6 -3 10 -1 10 5 0 6 5 8 10 5 6 -3 10 -1 10 5 0 6 5 8 10 5 6 -3 10 -1 10 5 0 6 5 8 10 5 6 -3 10 -1 10 5 0 6 5 8 10 5 6 -3 10 -1 10 5 0 6 5 8 10 5 6 -3 10 -1 10 5 0 6 5 8 10 5 6 -3 10 -1 10 5 0 6 5 8 10 5 6 -3 10 -1 10 5 0 6 5 8 10 5 6 -3 10 -1 10 5 0 6 5 8 10 5 6 -3 10 -1 10 5 0 6 4 8 10 5 5 -3 10 -1 10 5 0 6 5 8 10 5 6 -3 10 -1 10 5 0 6 5 8 10 5 6 -3 10 -1 10 5 0 6 5 8 10 5 6 -3 10 -1 10 5 0 6 4 9 9 6 5 -4 11 -2 13 3 1 5 116 64 253 131 138 66 252 125 253 131 2 5 8 7 13 3 5 -3 9 0 9 6 0 6 5 8 10 5 6 -3 10 -1 10 5 0 6 5 8 10 5 6 -3 10 -1 10 5 0 6 4 9 9 6 5 -4 11 -2 13 3 1 6 125 69 273 141 149 72 272 135 273 141 2 5 8 7 13 3 5 -3 9 0 9 6 0 6 5 8 10 5 6 -3 10 -1 10 5 0 6 5 8 10 5 6 -3 10 -1 10 5 0 6 5 8 10 5 6 -3 10 -2 10 3 0 4 70 41 155 82 85 40 155 77 155 82 0 5 5 6 10 3 6 -3 10 -1 10 5 0 6 5 8 10 5 6 -3 10 -2 10 3 0 5 38 26 85 47 47 21 85 42 85 47 0 5 5 6 10 3 6 -3 10 -2 10 3 0 5 25 20 55 32 30 12 55 27 55 32 0 5 5 6 10 3 6 -3 10 -2 10 4 0 5 16 15 35 21 19 6 35 15 35 20 0 5 16 14 35 20 19 6 35 15 35 20 0 4 11 11 25 14 14 4 25 11 25 16 0 6 7 10 15 10 8 0 15 5 15 10 0 6 7 10 15 10 9 0 18 7 21 15 4 8 11 15 18 15 14 0 66 54 66 69 0 6 4 11 8 11 5 0 9 6 10 13 0 6 7 30 15 52 15 40 21 68 33 155 5 43 4 47 -37 88 -23 23 -48 42 -56 42 -7 0 -13 5 -13 10 0 6 -7 10 -15 10 -8 0 -15 5 -15 10 0 6 -7 10 -15 10 -8 0 -15 5 -15 10 0 6 -7 10 -15 10 -8 0 -15 5 -15 10 0 6 -7 10 -15 10 -8 0 -15 4 -15 9 0 5 -11 12 -25 15 -14 4 -25 11 -25 16 0 6 -7 10 -15 10 -8 0 -15 5 -15 10 0 6 -5 10 -10 10 -6 0 -29 14 -52 30 -22 17 -47 30 -55 30 -7 0 -13 4 -13 10 0 5 -11 12 -25 16 -14 3 -25 10 -25 14 0 4 -11 11 -25 14 -14 4 -25 11 -25 16 0 6 -6 10 -13 10 -8 0 -24 9 -37 20 -13 11 -29 20 -37 20 -7 0 -13 4 -13 9 0 5 -16 15 -35 21 -19 6 -35 16 -35 21 0 5 -6 9 -13 9 -8 0 -24 9 -37 20 -13 11 -29 20 -37 20 -7 0 -13 5 -13 11 0 5 -4 7 -10 4 -5 -3 -10 -2 -10 3 0 6 -11 13 -25 16 -14 4 -25 10 -25 15 0 5 -16 15 -35 21 -19 6 -35 15 -35 20 0 4 -11 11 -25 14 -14 4 -25 10 -25 15 0 5 -16 15 -35 21 -19 6 -35 15 -35 20 0 5 -16 14 -35 20 -19 6 -35 15 -35 20 0 5 -16 14 -35 20 -19 6 -35 15 -35 20 0 5 -16 14 -35 20 -19 6 -35 15 -35 20 0 5 -16 14 -35 20 -19 6 -35 15 -35 20 0 5 -16 14 -35 20 -19 6 -35 15 -35 20 0 5 -16 14 -35 20 -19 6 -35 16 -35 21 0 6 -4 7 -10 4 -5 -3 -10 -2 -10 4 0 5 -16 15 -35 21 -19 6 -35 15 -35 20 0 5 -16 14 -35 20 -19 6 -35 15 -35 20 0 5 -16 14 -35 20 -19 6 -35 15 -35 20 0 5 -16 14 -35 20 -19 6 -35 15 -35 20 0 5 -16 14 -35 20 -19 6 -35 16 -35 21 0 6 -4 7 -10 4 -5 -3 -10 -2 -10 4 0 5 -16 15 -35 21 -19 6 -35 15 -35 20 0 5 -20 16 -45 26 -25 9 -45 20 -45 24 0 4 -20 15 -45 24 -25 10 -45 21 -45 26 0 5 -16 14 -35 20 -19 6 -35 16 -35 21 0 6 -4 7 -10 4 -5 -3 -10 -2 -10 4 0 5 -16 15 -35 21 -19 6 -35 15 -35 20 0 4 -25 18 -55 30 -30 12 -55 26 -55 30 0 5 -20 16 -45 26 -25 9 -45 21 -45 26 0 5 -4 6 -10 3 -5 -3 -10 -2 -10 3 0 5 -29 21 -65 37 -36 15 -65 32 -65 37 0 5 -4 6 -10 3 -5 -3 -10 -1 -10 6 0 7 -3 9 -7 6 -3 -4 -11 -3 -17 2 -7 6 -17 -5 -29 -33z'/><path class='cls-2' fill='#76767B' d='M5435 3504 c-77 -40 -143 -70 -147 -67 -5 2 -8 -1 -8 -7 0 -6 -4 -8 -10 -5 -5 3 -10 1 -10 -5 0 -6 -4 -8 -10 -5 -5 3 -10 1 -10 -5 0 -6 -4 -8 -10 -5 -5 3 -10 1 -10 -5 0 -6 -4 -8 -10 -5 -5 3 -10 1 -10 -6 0 -7 -3 -10 -6 -6 -7 6 -286 -131 -295 -145 -3 -6 -10 -9 -15 -9 -18 1 -44 -11 -44 -20 0 -6 -4 -7 -10 -4 -5 3 -10 1 -10 -5 0 -6 -4 -8 -10 -5 -5 3 -10 1 -10 -5 0 -6 -4 -8 -10 -5 -5 3 -10 1 -10 -5 0 -6 -4 -8 -10 -5 -5 3 -10 1 -10 -5 0 -6 -4 -8 -10 -5 -5 3 -10 1 -10 -5 0 -6 -4 -8 -10 -5 -5 3 -10 1 -10 -5 0 -6 -4 -8 -10 -5 -5 3 -10 1 -10 -5 0 -6 -4 -8 -10 -5 -5 3 -10 1 -10 -5 0 -6 -4 -8 -10 -5 -5 3 -10 1 -10 -5 0 -6 -4 -8 -10 -5 -5 3 -10 1 -10 -5 0 -6 -4 -8 -10 -5 -5 3 -10 1 -10 -5 0 -6 -4 -8 -10 -5 -5 3 -10 1 -10 -5 0 -6 -4 -8 -10 -5 -5 3 -10 1 -10 -5 0 -6 -4 -8 -10 -5 -5 3 -10 1 -10 -5 0 -6 -4 -9 -9 -6 -5 4 -11 2 -13 -3 -1 -5 -113 -64 -248 -130 -135 -66 -250 -125 -256 -130 -7 -5 -15 -7 -18 -4 -3 4 -6 1 -6 -6 0 -7 -4 -9 -10 -6 -5 3 -10 1 -10 -5 0 -6 -4 -8 -10 -5 -5 3 -10 1 -10 -5 0 -6 -4 -9 -9 -6 -5 4 -11 2 -13 -3 -1 -5 -122 -68 -268 -140 -146 -72 -270 -135 -276 -140 -7 -6 -15 -7 -18 -4 -3 4 -6 1 -6 -6 0 -7 -4 -9 -10 -6 -5 3 -10 1 -10 -5 0 -6 -4 -8 -10 -5 -5 3 -10 1 -10 -5 0 -6 -4 -8 -10 -5 -5 3 -10 2 -10 -2 0 -5 -69 -42 -152 -83 -84 -41 -155 -78 -156 -83 -2 -4 -8 -5 -13 -1 -5 3 -9 0 -9 -6 0 -6 -4 -8 -10 -5 -5 3 -10 2 -10 -3 0 -5 -37 -26 -82 -47 -46 -21 -85 -42 -86 -47 -2 -4 -8 -6 -13 -2 -5 3 -9 1 -9 -4 0 -5 -24 -19 -52 -33 -29 -13 -55 -27 -56 -32 -2 -4 -8 -5 -13 -1 -5 3 -9 1 -9 -5 0 -5 -16 -15 -35 -22 -19 -7 -35 -16 -35 -20 0 -4 -15 -13 -32 -20 -18 -7 -39 -19 -46 -26 -7 -7 -20 -13 -28 -13 -8 0 -14 -4 -14 -10 0 -5 -7 -10 -15 -10 -8 0 -15 -4 -15 -10 0 -5 -7 -10 -15 -10 -9 0 -18 -7 -21 -15 -4 -8 -11 -15 -18 -15 -14 0 -66 -54 -66 -69 0 -6 -4 -11 -10 -11 -5 0 -9 -3 -8 -7 1 -5 -1 -17 -5 -28 -13 -40 -54 -234 -48 -230 4 2 16 -10 26 -26 11 -16 28 -32 38 -35 9 -3 17 -10 17 -15 0 -5 7 -9 15 -9 8 0 15 -4 15 -10 0 -5 7 -10 15 -10 8 0 15 -4 15 -10 0 -5 7 -10 15 -10 8 0 15 -4 15 -10 0 -5 7 -10 15 -10 8 0 15 -4 15 -10 0 -5 7 -10 15 -10 8 0 15 -4 15 -9 0 -5 11 -12 25 -15 14 -4 25 -11 25 -16 0 -6 7 -10 15 -10 8 0 15 -3 15 -7 0 -5 18 -17 40 -27 22 -11 40 -23 40 -28 0 -4 6 -8 14 -8 8 0 21 -6 28 -14 8 -7 24 -17 36 -20 12 -4 22 -12 22 -17 0 -5 6 -9 14 -9 8 0 21 -6 28 -14 8 -7 24 -17 36 -20 12 -4 22 -12 22 -17 0 -5 6 -9 14 -9 8 0 21 -6 28 -13 7 -7 28 -19 46 -26 17 -7 32 -17 32 -22 0 -5 6 -9 14 -9 8 0 21 -6 28 -14 8 -7 24 -17 36 -20 12 -4 22 -12 22 -17 0 -6 5 -7 10 -4 6 3 10 1 10 -4 0 -6 6 -11 14 -11 8 0 21 -6 28 -13 7 -7 28 -19 46 -26 17 -7 32 -17 32 -22 0 -5 6 -9 14 -9 8 0 21 -6 28 -13 7 -7 28 -19 46 -26 17 -7 32 -16 32 -20 0 -4 16 -13 35 -20 19 -7 35 -16 35 -20 0 -4 16 -13 35 -20 19 -7 35 -16 35 -20 0 -4 16 -13 35 -20 19 -7 35 -16 35 -20 0 -4 16 -13 35 -20 19 -7 35 -16 35 -20 0 -4 16 -13 35 -20 19 -7 35 -16 35 -20 0 -4 16 -13 35 -20 19 -7 35 -17 35 -22 0 -6 5 -7 10 -4 6 3 10 2 10 -2 0 -5 16 -15 35 -22 19 -7 35 -16 35 -20 0 -4 16 -13 35 -20 19 -7 35 -16 35 -20 0 -4 16 -13 35 -20 19 -7 35 -16 35 -20 0 -4 16 -13 35 -20 19 -7 35 -16 35 -20 0 -4 16 -13 35 -20 19 -7 35 -17 35 -22 0 -6 5 -7 10 -4 6 3 10 2 10 -3 0 -6 11 -13 24 -16 14 -3 31 -12 38 -19 7 -7 32 -21 56 -31 23 -11 42 -22 42 -25 0 -3 20 -14 45 -24 25 -11 45 -22 45 -26 0 -4 16 -13 35 -20 19 -7 35 -17 35 -22 0 -6 4 -7 10 -4 6 3 10 2 10 -3 0 -6 11 -13 24 -16 14 -3 31 -12 38 -19 7 -6 37 -23 66 -36 28 -14 52 -27 52 -30 0 -3 20 -14 45 -24 25 -11 45 -23 45 -29 0 -5 4 -7 9 -4 5 4 11 3 13 -1 1 -5 31 -21 66 -37 34 -16 62 -34 62 -38 0 -5 5 -6 10 -3 6 3 10 2 10 -2 0 -5 8 -9 18 -10 19 -2 51 50 67 110 2 4 3 8 5 10 1 1 3 10 5 19 4 23 36 121 44 133 3 6 6 15 7 20 2 14 44 157 51 175 3 8 8 23 9 33 2 9 14 60 27 113 l24 95 -29 17 c-15 9 -28 20 -28 24 0 4 -6 8 -14 8 -8 0 -21 6 -28 13 -7 7 -28 19 -45 26 -18 7 -33 16 -33 20 0 4 -16 13 -35 20 -19 7 -40 18 -47 24 -7 7 -33 21 -57 32 -24 11 -49 24 -55 30 -6 5 -35 21 -63 34 -29 14 -53 28 -53 33 0 5 -4 7 -9 4 -5 -4 -11 -3 -13 1 -1 5 -36 23 -75 42 -40 19 -73 39 -73 44 0 4 -4 6 -9 3 -5 -4 -11 -3 -13 1 -1 5 -36 23 -75 42 -40 19 -73 39 -73 44 0 4 -4 6 -9 3 -5 -4 -11 -3 -13 1 -1 5 -45 28 -95 53 -51 24 -93 48 -93 53 0 4 -4 6 -9 3 -5 -4 -11 -3 -13 1 -1 5 -40 26 -85 48 -46 21 -83 43 -83 48 0 4 -4 6 -9 3 -5 -4 -11 -3 -13 1 -1 5 -31 21 -65 37 -35 16 -63 34 -63 38 0 5 -4 6 -10 3 -5 -3 -10 -3 -10 2 0 4 -20 16 -45 26 -25 11 -45 23 -45 29 0 5 -4 6 -10 3 -5 -3 -10 -2 -10 2 0 5 -16 15 -35 22 -19 7 -41 18 -48 24 -7 7 -30 21 -52 32 -22 11 -41 28 -43 37 -4 21 36 78 55 78 7 0 13 5 13 10 0 6 7 10 15 10 8 0 15 4 15 9 0 5 10 13 22 17 12 3 28 13 36 20 7 8 20 14 28 14 8 0 14 4 14 9 0 5 16 15 35 22 19 7 35 16 35 20 0 4 20 15 45 26 25 10 45 22 45 26 0 5 5 5 10 2 6 -3 10 -2 10 3 0 5 24 19 53 33 28 13 54 27 55 32 2 4 8 5 13 1 5 -3 9 -1 9 4 0 4 28 22 63 38 34 16 64 32 65 37 2 4 8 5 13 1 5 -3 9 -1 9 3 0 5 37 27 83 48 45 22 84 43 85 48 2 4 8 5 13 1 5 -3 9 -1 9 3 0 5 37 27 83 48 45 22 84 43 85 48 2 4 8 5 13 1 5 -3 9 -1 9 3 0 5 33 25 73 44 39 19 74 37 75 42 2 4 8 5 13 1 5 -3 9 -1 9 4 0 4 28 22 63 38 34 16 64 32 65 37 2 4 8 5 13 1 5 -3 9 0 9 6 0 6 5 8 10 5 6 -3 10 -2 10 3 0 5 24 19 53 33 28 13 54 27 55 32 2 4 8 5 13 1 5 -3 9 -1 9 4 0 5 24 19 53 33 28 13 54 27 55 32 2 4 8 5 13 1 5 -3 9 -1 9 4 0 5 24 19 53 33 28 13 54 27 55 32 2 4 8 5 13 1 5 -3 9 -1 9 4 0 5 19 17 43 28 23 10 48 24 55 31 7 6 28 17 47 24 19 7 35 16 35 20 0 4 15 13 33 20 17 7 38 19 45 26 7 7 20 13 27 13 21 0 33 56 51 230 19 178 24 515 9 527 -6 5 -69 -22 -150 -63z'/></g><style>.mask:hover > .cls-1{fill:#2b75a0;}.mask:hover > .cls-2{fill:#ffce59;}</style></svg>"
                },
                link: "https://pysnippet.org/",
            },
        ],
        search: {
            provider: "local",
        },
        nav: [
            {text: "Home", link: "/"},
            {text: "Docs", link: "/integration/", activeMatch: /integration/},
            {text: "Contributing", link: "https://github.com/pysnippet/.github/blob/master/.github/CONTRIBUTING.md"},
            {text: "Releases", link: "https://github.com/pysnippet/fastapi-oauth2/releases"},
        ],
        sidebar: [
            {
                text: "Integration",
                items: [
                    {text: "Getting Started", link: "/integration/"},
                    {text: "Configuration", link: "/integration/configuration"},
                    {text: "Integration", link: "/integration/integration"},
                    // {
                    //     text: "Settings",
                    //     items: [
                    //         {text: "Introduction", link: "/integration/settings/"},
                    //         {text: "Variables", link: "/integration/settings/variables"},
                    //     ],
                    // },
                ],
            },
        ],
    },
}