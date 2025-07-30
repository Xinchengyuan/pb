  const bibleText = {
    "约翰福音 3:16": "神爱世人，甚至将他的独生子赐给他们，叫一切信他的，不至灭亡，反得永生。(约翰福音 3:16 和合本)",
    "诗篇 23:1": "耶和华是我的牧者，我必不至缺乏。(诗篇 23:1 和合本)",
    "马太福音 5:3": "虚心的人有福了，因为天国是他们的。(马太福音 5:3 和合本)"
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

    const fullPrompt = `你是一个中文圣经研究助手。请根据以下经文回答用户的问题。\n\n 经文：${verse} - ${verseContent}\n\n 用户的问题：${userInput}`;

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