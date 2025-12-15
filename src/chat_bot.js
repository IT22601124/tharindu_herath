// Service module to call the hosted chatbot backend

const API_URL = "https://api.portfolio.studiorespectweddings.com/api/chat";

/**
 * Send a message to the portfolio chatbot backend.
 * @param {string} userMessage - The user's message.
 * @param {Array<{role: string, content: string}>} history - Optional chat history to provide context.
 * @returns {Promise<string>} - The assistant's reply.
 */
async function chatWithBot(userMessage, history = []) {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: userMessage,
        history,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Chat API error ${res.status}: ${text}`);
    }

    const data = await res.json();
    if (!data || typeof data.reply !== "string") {
      throw new Error("Invalid response from Chat API");
    }
    return data.reply;
  } catch (error) {
    console.error("Error calling chatbot:", error);
    throw error;
  }
}

export { chatWithBot };
