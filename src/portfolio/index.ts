import { TranslationData } from "../translations"

type PortfolioType = {
    name: keyof TranslationData['projects'];
    images: {
        path: string;
        width: number;
    }[];
    title: string;
}

export const portfolio: PortfolioType[] = [
    {
        name: "ntyre",
        images: [
            { path: "/assets/ntyre.jpeg", width: 600 }, { path: "/assets/ntyre2.jpeg", width: 250 }, { path: "/assets/ntyre3.jpeg", width: 250 }, { path: "/assets/ntyre4.jpeg", width: 250 }
        ],
        title: 'N-Tyre',
    },
    {
        name: "salve_elas",
        images: [
            { path: "/assets/salveelas.jpg", width: 250 }, { path: "/assets/salveelas2.png", width: 600 }
        ],
        title: 'Salve Elas',
    },
    {
        name: "ecommerce",
        images: [
            { path: "/assets/mockupecommerce.png", width:600 }, { path: "/assets/ecommerce1.png", width: 600 }, { path: "/assets/ecommerce2.png", width: 600 }

        ],
        title: 'Ecommerce',
    },
    {
        name: "chat_messages",
        images: [
            { path: "/assets/mockupmessages.png", width: 600 }, { path: "/assets/chat-messages1.png", width: 600 }
        ],
        title: 'Chat Messages',
    },
    {
        name: "invest",
        images: [
            { path: "/assets/mockupinvest.png", width: 600 }, { path: "/assets/invest.jpg", width: 250 },
        ],
        title: 'Invest',
    },
    {
        name: "smart_campus",
        images: [{ path:"/assets/smartcampus.png", width: 600 }, { path: "/assets/smartcampus2.png", width: 250 }, { path: "/assets/smartcampus3.png", width: 250 }],
        title: 'Smart Campus',
    },
    {
        name: "read_me_books",
        images: [
            { path: "/assets/mockupreadme.png", width: 600 }, { path: "/assets/readme.jpg", width: 250 }, { path: "/assets/readme2.jpg", width: 250 }
        ],
        title: 'ReadMeBooks',
    },
]

// {
//     invest: {
//         images: ["/assets/mockupinvest.png", "/assets/invest.jpg"],
//         title: 'Invest',
//     },
//     readmebooks: {
//         images: ["/assets/mockupreadme.png", "/assets/readme.jpg", "/assets/readme2.jpg"],
//         title: 'ReadMeBooks',
//     },
//     ntyre: {
//         images: ["/assets/ntyre.jpeg", "/assets/ntyre2.jpeg", "/assets/ntyre3.jpeg", "/assets/ntyre4.jpeg"],
//         title: 'N-Tyre',
//     },
//     salveelas: {
//         images: ["/assets/salveelas.jpg", "/assets/salveelas2.png"],
//         title: 'Salve Elas',
//     },
//     ecommerce: {
//         images: ["/assets/mockupecommerce.png", "/assets/ecommerce1.png", "/assets/ecommerce2.png"],
//         title: 'Ecommerce',
//     },
//     chatmessages: {
//         images: ["/assets/mockupmessages.png", "/assets/chat-messages1.png"],
//         title: 'Chat Messages',
//     },
//     smartcampus: {
//         images: ["/assets/smartcampus.png", "/assets/smartcampus2.png", "/assets/smartcampus3.png"],
//         title: 'Smart Campus',
//     }
// }