import {defineConfig} from "vocs";

export default defineConfig({
    // TODO: change the base URL before deploying to production
    baseUrl: 'http://localhost:5174/',
    title: "Jackal",
    description: "Decentralized Cloud Storage",
    logoUrl: {light: "/jackal-dark.png", dark: "/jackal-light.png"},
    topNav: [
        {text: "The Blockchain", link: "/blockchain", match: "/blockchain"},
        {text: "Nodes", link: "/nodes", match: "/nodes"},
        {text: "Providing Storage", link: "/providers", match: "/providers"},
        {text: "Developers", link: "/developers", match: "/developers"},
    ],
    sidebar: [
        {
            text: "Introduction",
            items: [
                {
                    text: "Overview",
                    link: "/",
                },
                {
                    text: "The Jackal Ecosystem",
                    link: "/jackal-ecosystem",
                },
            ],
        },
        {
            text: "The Blockchain",
            items: [],
        },
        {
            text: "Nodes",
            items: [],
        },
        {
            text: "Providers",
            items: [],
        },
        {
            text: "Developers",
            items: [],
        },
    ],
});
