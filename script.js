function translateText() {
  const text = document.getElementById("inputText").value;
  const lang = document.getElementById("language").value;

  fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${lang}`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("outputText").innerText =
        data.responseData.translatedText;
    })
    .catch(err => {
      console.error("Translation error:", err);
      document.getElementById("outputText").innerText =
        "Error translating text";
    });
}
