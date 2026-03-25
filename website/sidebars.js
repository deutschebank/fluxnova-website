import fluxnovaSidebar from "./docs/fluxnova/sidebar";

export default {
    docs: [
        {
            type: 'category',
            label: 'Documentation',
            link: {type: 'doc', id: 'index'},
            items: [
                {
                    type: 'category',
                    label: 'API Spec',
                    items: fluxnovaSidebar,
                    link: {
                        type: "generated-index",
                        title: "Fluxnova API",
                    },
                },
                {
                    type: 'category',
                    label: 'Releases',
                    link: {
                        type: "generated-index",
                        title: "Releases",
                        description: "A list of Fluxnova Releases",
                    },
                    items: [
                        {
                            type: 'doc',
                            id: 'releases/v2.0.0'
                        }
                    ]
                }
            ]
        },
    ]
};