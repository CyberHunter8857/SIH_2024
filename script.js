function toggleChat() {
    const chatBody = document.getElementById("chatBody");
    chatBody.style.display = chatBody.style.display === "none" || chatBody.style.display === "" ? "flex" : "none";
}

function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    if (userInput.trim() === "") return;

    // Add user's message to chat
    addMessage(userInput, "user");

    // Clear input field
    document.getElementById("userInput").value = "";

    // Simulate bot response
    setTimeout(() => {
        getBotResponse(userInput);
    }, 1000);
}

function addMessage(text, sender) {
    const messagesContainer = document.getElementById("messages");
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);
    messageElement.innerText = text;
    messagesContainer.appendChild(messageElement);

    // Scroll to the bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function checkEnter(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

// Function to simulate API response
async function getBotResponse(userMessage) {
    // Simulate API call to Gen AI for response
    const botReply = await fetchBotResponse(userMessage);
    addMessage(botReply, "bot");
}
function getChatbotResponse() {
    return `
      I'm an AI-powered chatbot designed to provide 24/7 medical assistance. I can help with:
      
      - Symptom checking: Describe your symptoms, and I'll suggest possible causes and recommend when to seek professional medical advice.
      
      - Disease information: Ask me about specific diseases or conditions, and I'll provide reliable information about their symptoms, causes, treatments, and prevention.
      
      - Medication guidance: If you have questions about medications, I can offer information on dosages, side effects, interactions, and proper usage.
      
      - Health advice: Seek general health advice on topics like nutrition, fitness, stress management, and healthy lifestyle choices.
      
      - Emergency assistance: If you believe you or someone else is experiencing a medical emergency, I'll guide you through the necessary steps and connect you with emergency services if needed.
    `;
  }
// Dummy function for API call
async function fetchBotResponse(userMessage) {
    // Here you would normally call an API
    // For now, return a simulated response
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(getChatbotResponse());
        }, 500);
    });
}

