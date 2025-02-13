const questions = [
{
        image: "https://i.postimg.cc/ZKZGg3m5/IMG-2462.jpg",
        text: "❤︎How Much Do You Know Me❤︎ ━━━━༒︎━━━━ What's my favorite red?",
        choices: [
            { type: "image", content: "https://i.postimg.cc/wMNv3Nvr/IMG-2454.jpg" },
            { type: "image", content: "https://i.postimg.cc/zB6vJ7JW/IMG-2456.jpg" },
            { type: "image", content: "https://i.postimg.cc/tgr7cywB/IMG-2457.jpg" }, // Image choice
            { type: "image", content: "https://i.postimg.cc/RFNq5yz4/IMG-2459.jpg" }  // Image choice
        ],
        correct: 3
    },
    {
        image: "https://i.postimg.cc/L8NXb2Zn/IMG-2463.jpg",
        text: "How tall am I? (Hint:VERY tall)",
        choices: [
            { type: "text", content: "159cm" },
            { type: "text", content: "160cm" },
            { type: "text", content: "161cm" },
            { type: "text", content: "158cm" }
        ],
        correct: 1
    },
    {
        image: "https://i.postimg.cc/fyGqcVNp/IMG-2464.jpg",
        text: "My favorite Snack?",
        choices: [
            { type: "text", content: "Sour gummies" },
            { type: "text", content: "Powdered milk" },
            { type: "text", content: "Chocolate" }, // Image choice
            { type: "text", content: "Mcdonald's like the big back I am" }  // Image choice
        ],
        correct: 1
    },

    {
        image: "https://i.postimg.cc/x1NWhS89/IMG-2465.jpg",
        text: "Who do I actually love more....?",
        choices: [
            { type: "text", content: "Huzz #2" },
            { type: "text", content: "Huzz #7" },
            { type: "text", content: "Not you" }, // Image choice
            { type: "text", content: "Y-you i guess.." }  // Image choice
        ],
        correct: 4
    },
    {
        image: "https://i.postimg.cc/sgXs68dc/IMG-2466.jpg",
        text: "What's my oddly favorite game in Roblox?",
        choices: [
            { type: "text", content: "Da hood" },
            { type: "text", content: "Flee The Facility" },
            { type: "text", content: "Generic Cooking Game" }, // Image choice
            { type: "text", content: "Epic Mini Games" }  // Image choice
        ],
        correct: 4
    },
    {
        image: "https://i.postimg.cc/Gp9YRrVS/IMG-2468.jpg",
        text: "Type of characters I would look for first.",
        choices: [
            { type: "text", content: "Hot sexy gay girl" },
            { type: "text", content: "Characters with red hair" },
            { type: "text", content: "Op characters" }, // Image choice
            { type: "text", content: "Cute twinks" }  // Image choice
        ],
        correct: 2
    },
    {
        image: "https://i.postimg.cc/50qDfrPH/IMG-2476.jpg",
        text: "What style would I like to wear if I had money?",
        choices: [
            { type: "image", content: "https://i.postimg.cc/jS0YTycJ/IMG-2471.jpg" },
            { type: "image", content: "https://i.postimg.cc/wB9KyHSq/IMG-2472.jpg" },
            { type: "image", content: "https://i.postimg.cc/zGCZG322/IMG-2473.jpg" }, // Image choice
            { type: "image", content: "https://i.postimg.cc/mrjv7JsQ/IMG-2475.jpg" }  // Image choice
        ],
        correct: 3
    },
    {
        image: "https://i.postimg.cc/GmsZtKzj/IMG-2477.jpg",
        text: "What would I likely do on a day off with nothing to do?",
        choices: [
            { type: "text", content: "Gaming all day" },
            { type: "text", content: "Drawing" },
            { type: "text", content: "Going outside to explore" }, // Image choice
            { type: "text", content: "Online Window Shopping" }  // Image choice
        ],
        correct: 3
    },
    {
        image: "https://i.postimg.cc/nzF6TDfj/IMG-2479.jpg",
        text: "What's my favorite song?",
        choices: [
            { type: "text", content: "R u mine? -Arctic Monkeys" },
            { type: "text", content: "Killshot -Magdalena Bay" },
            { type: "text", content: "Keep Up -Odetari" }, // Image choice
            { type: "text", content: "This December -Ricky Montgomery" }  // Image choice
        ],
        correct: 1
    },
    {
        image: "https://i.postimg.cc/d33HhbzD/IMG-2480.jpg",
        text: "First thing I would buy if I won the lottery",
        choices: [
            { type: "text", content: "Rose toy" },
            { type: "text", content: "Madoka ring for us<3 " },
            { type: "text", content: "cat" },
            { type: "text", content: "Black myth Wukong" }
        ],
        correct: 2
    },
    {
        image: "https://i.postimg.cc/gJmJ7spD/IMG-2484.jpg",
        text: "Cat breed I want?",
        choices: [
            { type: "text", content: "Orange cat or Grey cat" },
            { type: "text", content: "Hairless cat" },
            { type: "text", content: "Tuxedo cat or Calico cat" },
            { type: "text", content: "Persian cat or any white cat " }
        ],
        correct: 3
    },
    {
        image: "https://i.makeagif.com/media/2-13-2025/aJhSFJ.gif",
        text: "My unchanging favorite food?",
        choices: [
            { type: "text", content: "Rawmen" },
            { type: "text", content: "Hawaiian Pizza" },
            { type: "text", content: "Tomato pasta" },
            { type: "text", content: "Cockroach" }
        ],
        correct: 3
    },
    {
        image: "https://i.postimg.cc/VkJLxDyM/IMG-2506.jpg",
        text: "Something I miss doing?",
        choices: [
            { type: "text", content: "Drawing short mangas" },
            { type: "text", content: "your mom" },
            { type: "text", content: "Roleplaying" },
            { type: "text", content: "Ice skating" }
        ],
        correct: 4
    },
    {
        image: "https://i.postimg.cc/h4MDhHcT/IMG-2507.jpg",
        text: "My Favorite Icecream Flavor?",
        choices: [
            { type: "text", content: "Matcha" },
            { type: "text", content: "Caramel" },
            { type: "text", content: "Chocolate" },
            { type: "text", content: "Mint" }
        ],
        correct: 4
    },
    {
        image: "https://i.postimg.cc/c4bdBwKJ/IMG-2508.jpg",
        text: "Favorite Sanrio Character?",
        choices: [
            { type: "text", content: "Kuromi" },
            { type: "text", content: "Badtz Maru" },
            { type: "text", content: "Mymelody" },
            { type: "text", content: "Cinnamoroll" }
        ],
        correct: 2
    },
    {
        image: "https://i.postimg.cc/7ZJwsh7n/IMG-2510.jpg",
        text: "My Favorite Tea?",
        choices: [
            { type: "text", content: "Jasmine Tea" },
            { type: "text", content: "Oolong Tea" },
            { type: "text", content: "Green Tea" },
            { type: "text", content: "Matcha" }
        ],
        correct: 1
    },
    {
        image: "https://i.postimg.cc/V68fbwJB/IMG-2511.jpg",
        text: "How many siblings do I have?",
        choices: [
            { type: "text", content: "An older sister & an older brother" },
            { type: "text", content: "Only child" },
            { type: "text", content: "One older brother" },
            { type: "text", content: "I ate them in the womb" }
        ],
        correct: 1
    },
    {
        image: "https://i.postimg.cc/fTLwdBRF/IMG-2512.jpg",
        text: "What's one of my favorite movies?",
        choices: [
            { type: "text", content: "The Truman Show" },
            { type: "text", content: "Forrest Gump" },
            { type: "text", content: "Meet Joe Black" },
            { type: "text", content: "500days of summer" }
        ],
        correct: 3
    },
    {
        image: "https://i.makeagif.com/media/2-13-2025/0Y2Jmq.gif",
        text: "lets play 1truth 3lies (which one is truth?)",
        choices: [
            { type: "text", content: "I've never been drunk before" },
            { type: "text", content: "None of my friends have been inside my house" },
            { type: "text", content: "I like rhythm games" },
            { type: "text", content: "I hate you" }
        ],
        correct: 2
    },
    {
        image: "https://i.postimg.cc/HLQHmN6J/IMG-2513.jpg",
        text: "I don't like cakes but what flavor is an exception?",
        choices: [
            { type: "text", content: "Chocolate cake" },
            { type: "text", content: "Vanilla cake" },
            { type: "text", content: "Cheese cake" },
            { type: "text", content: "Matcha cake" }
        ],
        correct: 1
    },
    {
        image: "https://i.postimg.cc/q7f09rxV/IMG-2514.jpg",
        text: "What's my favorite drink?",
        choices: [
            { type: "text", content: "Grape juice" },
            { type: "text", content: "Cola" },
            { type: "text", content: "Milk tea" },
            { type: "text", content: "Lemonade" }
        ],
        correct: 4
    },
    {
        image: "https://i.postimg.cc/1tsS3Kdv/IMG-2515.jpg",
        text: "What's one thing that's so important to me i would become an evil scientist just to get it back?",
        choices: [
            { type: "text", content: "My phone" },
            { type: "text", content: "My Manhwa title list" },
            { type: "text", content: "My gf" },
            { type: "text", content: "I aint doing allat bro😭" }
        ],
        correct: 3
    },
    {
        image: "https://i.postimg.cc/G21CvDg7/IMG-2559.jpg",
        text: "My reaction to you doing something that was cute to me",
        choices: [
            { type: "text", content: "Smiles and giggles and swings my grippers" },
            { type: "text", content: "Summons heart aura on top of my head" },
            { type: "text", content: "Strangles someone closest" },
            { type: "text", content: "All of the above" }
        ],
        correct: 4
    },
    {
        image: "https://i.postimg.cc/7hCnVFZs/IMG-2547.jpg",
        text: "Roblox games I play alot",
        choices: [
            { type: "text", content: "Obbies" },
            { type: "text", content: "Murder mystery typa games" },
            { type: "text", content: "Horror" },
            { type: "text", content: "Hangout games" }
        ],
        correct: 1
    },
    {
        image: "https://i.postimg.cc/WzctrsG2/IMG-2519.jpg",
        text: "I'm bored...What's the first thing I would do?",
        choices: [
            { type: "text", content: "Ask my friends to play with me" },
            { type: "text", content: "Send you some cringy rizz/jokes" },
            { type: "text", content: "Dance in my room" },
            { type: "text", content: "Clean my room" }
        ],
        correct: 2
    },
    {
        image: "https://i.postimg.cc/x8p3GsRj/IMG-2538.jpg",
        text: "A morning routine I like to do first",
        choices: [
            { type: "text", content: "Read yuri" },
            { type: "text", content: "Excercise" },
            { type: "text", content: "Cook breakfast" },
            { type: "text", content: "Scroll on tiktok" }
        ],
        correct: 1
    },
    {
        image: "https://i.makeagif.com/media/2-13-2025/N3lQmo.gif",
        text: "What's my biggest weakness(again, except u)",
        choices: [
            { type: "text", content: "Someone raising their voice at me" },
            { type: "text", content: "Holes(trypophobia shit)" },
            { type: "text", content: "MILK" },
            { type: "text", content: "Sexy juicy gyat pics" }
        ],
        correct: 3
    },
    {
        image: "https://i.postimg.cc/RCYzT2YJ/IMG-2561.jpg",
        text: "Something I'd REALLY like to do with you someday",
        choices: [
            { type: "text", content: "Watch any type of show together" },
            { type: "text", content: "Calling but i'm too scared" },
            { type: "text", content: "Asking eachother some deep questions" },
            { type: "text", content: "All of the above🥺" }
        ],
        correct: 4
    },
    {
        image: "https://i.postimg.cc/qBDNHmkL/IMG-2552.jpg",
        text: "The only person i'll let in beyond the walls i've put up?",
        choices: [
            { type: "text", content: "My relatives" },
            { type: "text", content: "My friends" },
            { type: "text", content: "YOU. NICOLE. YOUUU!🫵YOUUUUUUUUU!!!!" },
            { type: "text", content: "An online friend" }
        ],
        correct: 3
    },
    {
        image: "https://i.makeagif.com/media/2-13-2025/903jqu.gif",
        text: "First thing I want to buy when I get my first 1month paycheck?",
        choices: [
            { type: "text", content: "Save up!" },
            { type: "text", content: "Snacks" },
            { type: "text", content: "Clothes" },
            { type: "text", content: "Stronger Wifi" }
        ],
        correct: 4
    },
];
let currentQuestion = 0;
let score = 0;
let selectedAnswers = new Array(questions.length).fill(null); // Stores selected answers

function loadQuestion() {
//bruh
if (currentQuestion === 0) {
        document.getElementById("goBackButton").style.display = "block"; // Show Go Back button only at the start
    } else {
        document.getElementById("goBackButton").style.display = "none"; // Hide after starting
    } //bruh
if (currentQuestion >= questions.length) {
    let resultText = "";
    let resultImage = ""; 
    let incorrectAnswers = "";// Variable to store image path
//bruh"
    if (score <= 11) {
        resultText = "Howww💔 ✴︎heart shatters as my knees drop to the floor✴︎ (˚ ˃̣̣̥⌓˂̣̣̥ )";
        resultImage = "https://i.postimg.cc/FRPTM8mF/IMG-2438.jpg"; // Change this to your actual image file
    } else if (score <= 19) {
        resultText = "Yippiee!";
        resultImage = "https://i.postimg.cc/tCGvwY17/IMG-2439.jpg";
    } else if (score <= 25) {
        resultText = "TEEHEEE you know me well(✴︎ᴗ͈ˬᴗ͈)ꕤ✴︎.ﾟ";
        resultImage = "https://i.postimg.cc/DzpYM6sK/IMG-2440.jpg";
    } else {
        resultText = "WOOAAAHHH!!! WITCHHHH!!!🫵 YOU KNOW ME SO WELL♡(˃͈ ˂͈ )";
        resultImage = "https://i.makeagif.com/media/2-10-2025/aW4RjD.gif";
    }

    // Find incorrect answers
    for (let i = 0; i < questions.length; i++) {
         if (selectedAnswers[i] !== questions[i].correct) {
            incorrectAnswers += `<p class="incorrect-text">Q${i + 1}: ${questions[i].text} (Correct Answer: ${questions[i].correct})</p>`;
        }
        }

    document.body.innerHTML = `
  <h1 class="result-title">Quiz Complete!</h1>
        <h2 class="result-score">Your Score: ${score}/${questions.length}</h2>
        <h3 class="result-text">${resultText}</h3>
        <img src="${resultImage}" alt="${resultText}" class="result-image">
<button onclick="window.location.href='https://pissyshu.carrd.co/'" id="goBackButton">Go Back</button>

        <div class="incorrect-container">
            <h4 class="incorrect-header">Incorrect Answers:</h4>
            ${incorrectAnswers || "<p class='correct-text'>You got everything right!</p>"}
</div>
    `;
    return;
}


    const question = questions[currentQuestion];

    document.getElementById("question-image").src = question.image;
    document.getElementById("question-text").innerText = question.text;

    const choicesContainer = document.querySelector(".choices");
    choicesContainer.innerHTML = "";

    question.choices.forEach((choice, index) => {
        let button = document.createElement("button");
        button.classList.add("choice");
        button.onclick = () => selectAnswer(index + 1);

        if (choice.type === "text") {
            button.innerHTML = `${index + 1}. ${choice.content}`;
        } else if (choice.type === "image") {
            button.innerHTML = `${index + 1}. <img src="${choice.content}" alt="Choice ${index + 1}" class="choice-image">`;
        }

        // Highlight previously selected answer
        if (selectedAnswers[currentQuestion] === index + 1) {
            button.style.backgroundColor = "#7abfeb"; // Yellow highlight
        }

        choicesContainer.appendChild(button);
    });

    // Show or hide Back button
    document.getElementById("back-btn").style.display = currentQuestion > 0 ? "block" : "none";
}

function selectAnswer(choice) {
    // Store the selected answer
    selectedAnswers[currentQuestion] = choice;

    // Update score if needed
    if (choice === questions[currentQuestion].correct) {
        score++;
    } else if (selectedAnswers[currentQuestion] !== null && selectedAnswers[currentQuestion] === questions[currentQuestion].correct) {
        // If they previously had the right answer and changed it, decrease score
        score--;
    }

    currentQuestion++;
    loadQuestion();
}
function goBack() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}



window.onload = loadQuestion;