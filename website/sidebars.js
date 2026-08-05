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
                }
            ]
        },
    ]
};