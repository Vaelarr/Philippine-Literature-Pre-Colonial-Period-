const baybayinTranslations = {
                
    "Binibini" : { path: 'img3/binibini.png', description: 'binibini' },
    "kalabasa" : { path: 'img3/kalabasa.png', description: 'kalabasa' },
    "maganda" : { path: 'img3/maganda.png', description: 'maganda' },
    "panahon" : { path: 'img3/panahon.png', description: 'panahon' },
    "pangangaliwa" : { path: 'img3/pangangaliwa.png', description: 'pangangaliwa' },
    "mahaba" : { path: 'img3/mahaba.png', description: 'mahaba' },
    "ubasan" : { path: 'img3/ubasan.png', description: 'ubasan' },
    "kapiling" : { path: 'img3/kapiling.png', description: 'kapiling' },
    "mahalaga" : { path: 'img3/mahalaga.png', description: 'mahalaga' },
    "bintana" : { path: 'img3/bintana.png', description: 'bintana' },
    "pinutol" : { path: 'img3/pinutol.png', description: 'pinutol' },
    "nadarama" : { path: 'img3/nadarama.png', description: 'nadarama' },  
    "bakulaw" : { path: 'img3/bakulaw.png', description: 'bakulaw' },  
    "maginoo" : { path: 'img3/maginoo.png', description: 'maginoo' },  
    "suplado" : { path: 'img3/suplado.png', description: 'suplado' },  
    "halimaw" : { path: 'img3/halimaw.png', description: 'halimaw' },  
    "binabae" : { path: 'img3/binabae.png', description: 'binabae' },    
    "sulyap" : { path: 'img3/sulyap.png', description: 'sulyap' },  
    "sigurado" : { path: 'img3/sigurado.png', description: 'sigurado' },  
    "siguro" : { path: 'img3/siguro.png', description: 'siguro' },  
    "halimuyak" : { path: 'img3/halimuyak.png', description: 'halimuyak' },  
  // We can add if you want guys more xD
      
};  

  

  let previousWords = [];
  let currentWord = null;

  function getRandomWord() {
      const words = Object.keys(baybayinTranslations);

      // Filter out the words that have already been used
      const availableWords = words.filter(word => !previousWords.includes(word));
  
      if (availableWords.length === 0) {
          // If all words have been used, reset the list
          previousWords = [];
      }
  
      const randomIndex = Math.floor(Math.random() * availableWords.length);
      const word = availableWords[randomIndex];
  
      // Update the list of previous words
      previousWords.push(word);
  
      return word;
  }

  function displayRandomWord() {
      const word = getRandomWord();
      const translation = baybayinTranslations[word];
  
      const displayedImageElement = document.getElementById("displayedImage");
      const displayedDescriptionElement = document.getElementById("displayedDescription");
  
      displayedImageElement.src = translation.path;
      displayedDescriptionElement.textContent = "";
      currentWord = word;
  }

  function submitAnswer() {
      const enteredDescription = document.getElementById("text").value.trim();
      const correctDescription = baybayinTranslations[currentWord].description;

      const feedbackElement = document.getElementById("feedback");
      const displayedImageElement = document.getElementById("displayedImage");

      if (enteredDescription.toLowerCase() === correctDescription.toLowerCase()) {
          feedbackElement.textContent = "Correct!";
          feedbackElement.classList.remove("incorrect-feedback");
          feedbackElement.classList.add("correct-feedback");
      

          displayedImageElement.classList.remove("shake", "shake-border");
      
          displayRandomWord();
          document.getElementById("text").value = '';
      } else {
          feedbackElement.textContent = "Incorrect. Try again.";
          feedbackElement.classList.remove("correct-feedback");
          feedbackElement.classList.add("incorrect-feedback");
      

          displayedImageElement.classList.add("shake", "shake-border");
      
       
          setTimeout(() => {
              displayedImageElement.classList.remove("shake", "shake-border");
          }, 500); 
      }
  }

  const submitButton = document.getElementById("submit");
  const textInput = document.getElementById("text");


  textInput.addEventListener("keyup", function(event) {
      if (event.key === "Enter") {
          submitAnswer();
      }
  });

  submitButton.addEventListener("click", submitAnswer);

  displayRandomWord();
  
  //img width area
  const imageWidthInput2 = document.getElementById("imageWidth2");
  const imageWidthValue2 = document.getElementById("imageWidthValue2");
  
  imageWidthInput2.addEventListener("input", () => {
      const width = `${imageWidthInput2.value}px`;
      imageWidthValue2.textContent = width;
      displayedImage.style.width = width;
  });
  

  function displayRandomWords(numWords) {
      const outputElement = document.getElementById("output");
      outputElement.innerHTML = ""; // Clear previous content

      for (let i = 0; i < numWords; i++) {
          const word = getRandomWord();
          const translation = baybayinTranslations[word];

          const imageDiv = document.createElement("div");
          imageDiv.className = "image-container";

          const imageElement = document.createElement("img");
          imageElement.src = translation.path;
          imageElement.alt = `${word} in Baybayin`;
          imageElement.style.width = `${imageWidthInput.value}px`;

          const descriptionElement = document.createElement("p");
          descriptionElement.className = "image-description";
          descriptionElement.textContent = translation.description;

          imageDiv.appendChild(imageElement);
          imageDiv.appendChild(descriptionElement);
          outputElement.appendChild(imageDiv);
      }
  }