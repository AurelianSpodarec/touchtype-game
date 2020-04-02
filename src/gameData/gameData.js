export const gameData = [
    {
        mode: 1,
        name: "Typing Game",
        groupLevels: [ // game? section? 
            {
                id: 1,
                name: "Top Row",
                levels: [
                    {
                        id: 1,
                        gameText:
                            "oGoodevening Madam! Today is a wonderful day. May I ask where your bothering this evening? It would be a pleasure to assist you in on this marverous journey!",
                        locked: false,
                        completed: true
                    },
                    {
                        id: 2,
                        gameText:
                            "Goodevening Madam! Today is a wonderful day. May I ask where your bothering this evening? It would be a pleasure to assist you in on this marverous journey!",
                        locked: true,
                        completed: false
                    },
                    {
                        id: 3,
                        gameText:
                            "Goodevening Madam! Today is a wonderful day. May I ask where your bothering this evening? It would be a pleasure to assist you in on this marverous journey!",
                        locked: true,
                        completed: false
                    },
                    {
                        id: 4,
                        gameText:
                            "Goodevening Madam! Today is a wonderful day. May I ask where your bothering this evening? It would be a pleasure to assist you in on this marverous journey!",
                        locked: true,
                        completed: false
                    },
                ]
            },
            {
                id: 2,
                name: "Bottom Row",
                levels: [
                    {
                        id: 5,
                        gameText:
                            "Goodevening Madam! Today is a wonderful day. May I ask where your bothering this evening? It would be a pleasure to assist you in on this marverous journey!",
                        locked: true,
                        completed: false
                    },
                    {
                        id: 6,
                        gameText:
                            "Goodevening Madam! Today is a wonderful day. May I ask where your bothering this evening? It would be a pleasure to assist you in on this marverous journey!",
                        locked: true,
                        completed: false
                    },
                ]
            },
            {
                id: 3,
                name: "Bottom Row",
                levels: [
                    {
                        id: 7,
                        text:
                            "Goodevening Madam! Today is a wonderful day. May I ask where your bothering this evening? It would be a pleasure to assist you in on this marverous journey!",
                        unlocked: false
                    },
                ]
            }
        ]
    },
    {
        mode: 2,
        name: "Speed Test",
        words: ["ACCOUNT", "ACCURATE", "ACRES", "ACROSS", "ACT", "ACTION", "ACTIVE"]
    }
];

// Add dificulty to speed test eg. level hard is all words above 5 characters and you have 40% less time to type it compared to lelvel 1

export default gameData;