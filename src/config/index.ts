export const PRODUCT_CATEGORIES = [
    {
        label: "UI Kits",
        value: "ui_kits" as const,
        featured: [
            {
                name: "Editors Pick",
                href: '#',
                imageSrc: "/nav/ui-kits/mixed.jpg",
            },
            {
                name: "New Arrivals",
                href: '#',
                imageSrc: "/nav/ui-kits/blue.jpg",
            },
            {
                name: "Best Seller",
                href: '#',
                imageSrc: "/nav/ui-kits/purple.jpg",
            },
        ]
    },
    {
        label: "Icons",
        value: "icons" as const,
        featured: [
            {
                name: "Editors Pick",
                href: '#',
                imageSrc: "/nav/icons/picks.jpg",
            },
            {
                name: "New Arrivals",
                href: '#',
                imageSrc: "/nav/icons/new.jpg",
            },
            {
                name: "Best Seller",
                href: '#',
                imageSrc: "/nav/icons/bestsellers.jpg",
            },
        ]
    },
]