window.onload = () => {
  const setBackgroundColor = (color) => {
    let content = document.querySelector(".content");
    content.style.backgroundColor = color;
  };

  const setFontColor = (color) => {
    let paragraphs = document.querySelectorAll(".paragraph");
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.color = color;
    }
  };

  const setFontSize = (size) => {
    let paragraphs = document.querySelectorAll(".paragraph");
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.fontSize = size;
    }
  };

  const setLineHeight = (height) => {
    let paragraphs = document.querySelectorAll(".paragraph");
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.lineHeight = height;
    }
  };

  const setFontFamily = (family) => {
    let paragraphs = document.querySelectorAll(".paragraph");
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.fontFamily = family;
    }
  };

  // Cor de fundo da tela;
  let backgroundColorButtons = document.querySelectorAll(
    "#background-color>button",
  );
  for (let index = 0; index < backgroundColorButtons.length; index += 1) {
    backgroundColorButtons[index].addEventListener("click", (event) => {
      setBackgroundColor(event.target.innerHTML);
    });
  }
  for (let i = 0; i < backgroundColorButtons.length; i += 1) {
    backgroundColorButtons[i].addEventListener(
      "click",
      backgroundColorLocalStorage,
    );
  }

  // Cor do texto;
  let fontColorButtons = document.querySelectorAll("#font-color>button");
  for (let index = 0; index < fontColorButtons.length; index += 1) {
    fontColorButtons[index].addEventListener("click", (event) => {
      setFontColor(event.target.innerHTML);
    });
  }
  for(let i = 0; i < fontColorButtons.length ; i +=1){
    fontColorButtons[i].addEventListener('click', buttonColorLocalStorage);
  }
  // Tamanho da fonte
  let fontSizeButtons = document.querySelectorAll("#font-size>button");
  for (let index = 0; index < fontSizeButtons.length; index += 1) {
    fontSizeButtons[index].addEventListener("click", (event) => {
      setFontSize(event.target.innerHTML);
    });
  }
  for(let i = 0; i < fontSizeButtons.length; i += 1){
    fontSizeButtons[i].addEventListener('click',fontSizeLocalStorage);
  }

  // Espaçamento entre as linhas do texto;
  let lineHeightButtons = document.querySelectorAll("#line-height>button");
  for (let index = 0; index < lineHeightButtons.length; index += 1) {
    lineHeightButtons[index].addEventListener("click", (event) => {
      setLineHeight(event.target.innerHTML);
    });
  }
  for(let i = 0; i < lineHeightButtons.length; i += 1){
    lineHeightButtons[i].addEventListener('click',spacementLocalStorage);
  }
  // Tipo da fonte (_Font family_).
  let fontFamilyButtons = document.querySelectorAll("#font-family>button");
  for (let index = 0; index < fontFamilyButtons.length; index += 1) {
    fontFamilyButtons[index].addEventListener("click", (event) => {
      setFontFamily(event.target.innerHTML);
    });
  }
  for(let i = 0; i < fontFamilyButtons.length; i += 1){
    fontFamilyButtons[i].addEventListener('click', fontFamilyLocalStorage);
  }
};


const backgroundColorLocalStorage = () => {
  let content = document.querySelector(".content");
  let colors = content.style.backgroundColor;
  localStorage.setItem("colorBackGround", colors);
};

const buttonColorLocalStorage = () => {
  let paragraph = document.querySelector('.paragraph');
  let colorParagraph = paragraph.style.color;
  localStorage.setItem('colorParagraph', colorParagraph);
}

const fontSizeLocalStorage = () => {
  let paragraph = document.querySelector('.paragraph');
  let fontSize = paragraph.style.fontSize;
  localStorage.setItem('fontSize', fontSize);
}

const spacementLocalStorage = () => {
  let space = document.querySelector('.paragraph');
  let spaceP = space.style.lineHeight;
  localStorage.setItem('space', spaceP);
}

const fontFamilyLocalStorage = () => {
  let font = document.querySelector('.paragraph');
  let fontFamily = font.style.fontFamily;
  localStorage.setItem('font-family', fontFamily);
}

console.log(document.getElementsByClassName('.content'));
