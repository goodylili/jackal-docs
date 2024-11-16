import {defineConfig} from "vocs";

// @ts-ignore
export default defineConfig({
    theme: {
        accentColor: {
            light: '#191a14',
            dark: '#e9f450',
        },
        // variables: {
        //     color: {
        //         background: {
        //             light: 'white',
        //             dark: 'black'
        //         }
        //
        //     },
        // },
    },
    // TODO: change the base URL and edit link before deploying to production
    editLink: {
        pattern: 'https://github.com/goodylili/jackal-docs/tree/main/docs/pages/:path',
        text: 'Edit this Page',
    },
    socials: [
        {
            icon: 'github',
            link: 'https://github.com/JackalLabs',
        },
        {
            icon: 'x',
            link: 'https://x.com/Jackal_Protocol',
        },
        {
            icon: 'discord',
            link: 'https://discord.com/invite/5GKym3p6rj'
        },
    ],
    title: "Jackal",
    description: "Decentralized Cloud Storage",
    logoUrl: {light: "/jackal-dark.png", dark: "/jackal-light.png"},
    topNav: [
        {text: "Blockchain", link: "/blockchain", match: "/blockchain"},
        {text: "Nodes", link: "/nodes", match: "/nodes"},
        {text: "Providers", link: "/providers", match: "/providers"},
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
                    text: "The Jackal Protocol",
                    link: "/jackal-ecosystem",
                },
            ],
        },
        {
            text: "Wallet",
            collapsed: true,
            items: [
                {
                    text: "Software Wallets",
                    link: "/wallet/software-wallets",
                },
                {
                    text: "Command Line",
                    link: "/wallet/command-line",
                },
            ],
        },
        {
            text: "Blockchain",
            collapsed: true,
            items: [
                {
                    text: "Storage Module",
                    link: "/blockchain/storage-module",
                },
                {
                    text: "File Tree Module",
                    link: "/blockchain/file-tree-module",
                },
                {
                    text: "Mint Module",
                    link: "/blockchain/mint-module",
                },
                {
                    text: "Name Service Module",
                    link: "/blockchain/name-service",
                },
            ],
        },
        {
            text: "Nodes",
            collapsed: true,
            items: [
                {
                    text: "Hardware Specifications",
                    link: "/nodes/Hardware",
                },
                {
                    text: "Install a Full Node",
                    link: "/nodes/install-full-node",
                },
                {
                    text: "Join a Network",
                    link: "/nodes/joining-networks",
                },
                {
                    text: "Create a validator",
                    link: "/nodes/create-validator",
                },
            ],
        },
        {
            text: "Providers",
            collapsed: true,

            items: [
                {
                    text: "Create a Storage Provider",
                    link: "/providers/create-provider",
                },
                {
                    text: "Sequoia Config",
                    link: "/providers/sequoia-config",
                },
                {
                    text: "Sequoia API",
                    link: "/providers/sequoia-api",
                },
            ],
        },
        {
            text: "Developers",
            collapsed: true,
            items: [
                {
                    text: "Jackal.js Quickstart",
                    link: "/developers/jackaljs-quickstart",
                },
                {
                    text: "Archway Quickstart",
                    link: "/developers/archway-quickstart",
                },
                {
                    text: "Embedding Archway Contracts",
                    link: "/developers/embedding-archway",
                },

            ],
        },

    ],
});
