const bibleText = {
    "John 3:16": "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
    "Psalm 23:1": "The Lord is my shepherd, I lack nothing.",
    "Matthew 5:3": "Blessed are the poor in spirit,for theirs is the kingdom of heaven."
  };

  const verseSelect = document.getElementById("verse");
  const bibleTextDiv = document.getElementById("bible-text");

  // Display initial verse text
  verseSelect.addEventListener("change", () => {
    const selected = verseSelect.value;
    bibleTextDiv.innerText = bibleText[selected];
  });

  // Set default on page load
  bibleTextDiv.innerText = bibleText[verseSelect.value];

  async function askGPT() {
    const userInput = document.getElementById("question").value;
    const verse = verseSelect.value;
    const verseContent = bibleText[verse];

    const fullPrompt = `You are a Chinese Bible study assistant. Please answer the user's question based on the following scriptures.\n\n经文：${verse} - ${verseContent}\n\n User's question：${userInput}`;

    document.getElementById("response").innerText = "Generating response...";

    const result = await fetch("/biblestudy/ask-gpt/", {
      method: "POST",
      headers: {
       "Content-Type": "application/json",
      },
      body: JSON.stringify({
        verse: verse,
        verseContent: verseContent,
        question: userInput
      })
    });

    const data = await result.json();
    console.log("GPT Response:", data);
    
    if (data.choices) {
      document.getElementById("response").innerText = data.choices[0].message.content;
    } else {
      document.getElementById("response").innerText = "Some error occured：" + JSON.stringify(data);
    }
  }

// Helper to get CSRF token from cookie
function getCSRFToken() {
  const name = "csrftoken";
  const cookieValue = document.cookie
    .split("; ")
    .find(row => row.startsWith(name + "="));
  return cookieValue ? decodeURIComponent(cookieValue.split("=")[1]) : "";
}