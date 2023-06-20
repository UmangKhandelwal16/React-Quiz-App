const questions = [
    {
        questionText: "What is the correct command to create a new React project?",
        answerOptions: [
            {answerText: "npx create-react-app", isCorrect: false},
            {answerText: "npm create-react-app", isCorrect: false},
            {answerText: "npx create-myreact-app", isCorrect: false},
            {answerText: "npx create-react-app mynewapp", isCorrect: true},
        ],
    },

    {
        questionText: "What does mynewapp refer to in the following command?-----npx create-react-app mynewapp",
        answerOptions: [
            {answerText: "type of app", isCorrect: false},
            {answerText: "name of app", isCorrect: true},
            {answerText: "external reference", isCorrect: false},
            {answerText: "none of above", isCorrect: false},
        ],
    },

    {
        questionText: "What command is used to start the React local development server?",
        answerOptions: [
            {answerText: "npm run", isCorrect: false},
            {answerText: "npm run dev", isCorrect: false},
            {answerText: "npm start", isCorrect: true},
            {answerText: "npm build", isCorrect: false},
        ],
    },

    {
        questionText: "What is the default local host port that a React development server uses?",
        answerOptions: [
            {answerText: "5000", isCorrect: false},
            {answerText: "8080", isCorrect: false},
            {answerText: "3000", isCorrect: true},
            {answerText: "3500", isCorrect: false},
        ],
    },

    {
        questionText: "To develop and run React code, Node.js is required.",
        answerOptions: [
            {answerText: "true", isCorrect: true},
            {answerText: "false", isCorrect: false},
            {answerText: "sometimes", isCorrect: false},
            {answerText: "a & c", isCorrect: false},
        ],
    },

    {
        questionText: "Which keyword creates a constant in JavaScript?",
        answerOptions: [
            {answerText: "const", isCorrect: true},
            {answerText: "constant", isCorrect: false},
            {answerText: "var", isCorrect: false},
            {answerText: "let", isCorrect: false},
        ],
    },

    {
        questionText: "A copy of the 'real' DOM that is kept in memory is called what?",
        answerOptions: [
            {answerText: "React DOM", isCorrect: false},
            {answerText: "DOM", isCorrect: false},
            {answerText: "Virtual DOM", isCorrect: true},
            {answerText: "Shadow DOM", isCorrect: false},
        ],
    },

    {
        questionText: "Which operator can be used to conditionally render a React component?",
        answerOptions: [
            {answerText: "??", isCorrect: false},
            {answerText: "::", isCorrect: false},
            {answerText: "&&", isCorrect: true},
            {answerText: "\\", isCorrect: true},
        ],
    },

    {
        questionText: "When rendering a list using the JavaScript map() method, what is required for each element rendered?",
        answerOptions: [
            {answerText: "key", isCorrect: true},
            {answerText: "index", isCorrect: false},
            {answerText: "data", isCorrect: false},
            {answerText: "id", isCorrect: false},
        ],
    },

    {
        questionText: "What tool does React use to compile JSX?",
        answerOptions: [
            {answerText: "React Compiler", isCorrect: false},
            {answerText: "ReactDOM", isCorrect: false},
            {answerText: "JS compiler", isCorrect: false},
            {answerText: "Babel", isCorrect: true},
        ],
    },

]

export default questions;