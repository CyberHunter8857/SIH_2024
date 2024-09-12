// // Configuration for API Key and Model
//  const apiKey = 'AIzaSyAO36_LDr2H1jojusoSo72mscY6lA6BQO4'; // Replace with your actual API key
//  const model = 'gemini-pro';
//  const projectId = 'dotted-memory-433306-u3'; // Replace with your actual Google Cloud project ID

// // Toggle the chat window
// function toggleChat() {
//     const chatBody = document.getElementById("chatBody");
//     chatBody.style.display = chatBody.style.display === "none" || chatBody.style.display === "" ? "flex" : "none";
// }

// // Send the message and handle user input
// function sendMessage() {
//     const userInput = document.getElementById("userInput").value;
//     if (userInput.trim() === "") return;

//     // Add user's message to chat
//     addMessage(userInput, "user");

//     // Clear input field
//     document.getElementById("userInput").value = "";

//     // Get API response
//     getBotResponse(userInput);
// }

// // Add the message to the chat window
// function addMessage(text, sender) {
//     const messagesContainer = document.getElementById("messages");
//     const messageElement = document.createElement("div");
//     messageElement.classList.add("message", sender);
//     messageElement.innerText = text;
//     messagesContainer.appendChild(messageElement);

//     // Scroll to the bottom
//     messagesContainer.scrollTop = messagesContainer.scrollHeight;
// }

// // Handle 'Enter' key press for sending messages
// function checkEnter(event) {
//     if (event.key === "Enter") {
//         sendMessage();
//     }
// }

// // Function to get bot response from the API
// async function getBotResponse(userMessage) {
//     const botReply = await fetchBotResponse(userMessage);
//     addMessage(botReply, "bot");
// }

// // API call to Gen AI model to fetch a response
// async function fetchBotResponse(userMessage) {
//     const url = `https://language.googleapis.com/v1/projects/${projectId}/locations/global/models/${model}:generate`; // Use your actual project ID

//     const data = {
//         requests: [
//             {
//                 inputs: [{ text: userMessage }],
//             },
//         ],
//     };

//     const options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${apiKey}`,
//         },
//         body: JSON.stringify(data),
//     };

//     try {
//         const response = await fetch(url, options);
//         const responseData = await response.json();
//         return responseData.generations[0].text; // Adjust this based on the actual API response structure

//     } catch (error) {
//         console.error('Error fetching bot response:', error);
//         return 'An error occurred. Please try again later.';
//     }
// }


// Configuration for API Key and Model
const apiKey = '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'; // Replace with your actual OpenAI API key
const model = 'gpt-3.5-turbo'; // You can change this to the desired GPT model

// Toggle the chat window
function toggleChat() {
    const chatBody = document.getElementById("chatBody");
    chatBody.style.display = chatBody.style.display === "none" || chatBody.style.display === "" ? "flex" : "none";
}

// Send the message and handle user input
function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    if (userInput.trim() === "") return;

    // Add user's message to chat
    addMessage(userInput, "user");

    // Clear input field
    document.getElementById("userInput").value = "";

    // Get API response
    getBotResponse(userInput);
}

// Add the message to the chat window
function addMessage(text, sender) {
    const messagesContainer = document.getElementById("messages");
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);
    messageElement.innerText = text;
    messagesContainer.appendChild(messageElement);

    // Scroll to the bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Handle 'Enter' key press for sending messages
function checkEnter(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

// Function to get bot response from the API
async function getBotResponse(userMessage) {
    const botReply = await fetchBotResponse(userMessage);
    addMessage(botReply, "bot");
}

// API call to OpenAI GPT model to fetch a response
async function fetchBotResponse(userMessage) {
    const url = 'https://api.openai.com/v1/chat/completions'; // OpenAI API endpoint

    const data = {
        model: model,
        messages: [{ role: 'user', content: userMessage }],
        max_tokens: 150 // Adjust this based on your needs
    };

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify(data)
    };

    try {
        const response = await fetch(url, options);
        const responseData = await response.json();
        return responseData.choices[0].message.content; // Adjust this based on the actual API response structure

    } catch (error) {
        console.error('Error fetching bot response:', error);
        return 'An error occurred. Please try again later.';
    }
}
