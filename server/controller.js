module.exports = {

    politeStatement: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
        ];

        let randomComplimentIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomComplimentIndex];



        res.status(200).send(randomCompliment);
    },
    
    
    fortuneTeller: (req, res) => {
        const fortunes = ["Don't just spend time. Invest it.",
           "Emulate what you respect in your friends.",
           "Happiness begins with facing life with a smile and a wink.",
           "It's not the amount of time you devote, but what you devote to the time that counts.",
           "A faithful friend is a strong defense."
        ]

        let randomFortuneIndex = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomFortuneIndex]

        res.status(200).send(randomFortune)
    },
    
    pickEmUp: (req, res) => {
        const inpirationalQuotes = ["Be yourself; everyone else is already taken. - Oscar Wild",
            "Live as if you were to die tomorrow. Learn as if you were to live forever. - Mahatma Gandhi",
            "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle. - Albert Einstein",
            "I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison",
            "It is never too late to be what you might have been. - George Eliot",
            "Life isn't about finding yourself. Life is about creating yourself. - George Bernard Shaw",
            "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston S. Churchill"
        ]

        let randomInspirationIndex = Math.floor(Math.random() * inpirationalQuotes.length)
        let randomInspiration = inpirationalQuotes[randomInspirationIndex]

        res.status(200).send(randomInspiration)
    },

    sweetQuotes: (req, res) => {
        let { sweetQuote } = req.params

        
        let picks = ["Do what you can, with what you have, where you are. - Theodore Roosevelt", 
            "It's the possibility of having a dream come true that makes life interesting. ― Paulo Coelho",
            "A person's a person, no matter how small. - Dr. Seuss",
            "Nothing is impossible, the word itself says 'I'm possible'! - Audrey Hepburn"
        ]



        res.status(200).send(sweetQuote)
    },

    submitQuote: (req, res) => {
        let { sweetQuote } = req.body

        let teddyQuote = {
            id: 'Teddy',
            quote: "Do what you can, with what you have, where you are. - Theodore Roosevelt"
        }

        let pauloQuote = {
            id: 'Paulo',
            quote: "It's the possibility of having a dream come true that makes life interesting. ― Paulo Coelho"
        }

        let doctorQuote = {
            id: 'Doctor',
            quote: "A person's a person, no matter how small. - Dr. Seuss"
        }

        let audreyQuote = {
            id: 'Audrey',
            quote: "Nothing is impossible, the word itself says 'I'm possible'! - Audrey Hepburn"
        }

        arrQuotes = [teddyQuote, pauloQuote, doctorQuote, audreyQuote]

        for (let i = 0; i < arrQuotes.length; i++) {
            if (arrQuotes[i].id === sweetQuote) {
                res.status(200).send(arrQuotes[i].quote)
                return
            }
        }
        res.status(400).send("Invalid")
    }


}