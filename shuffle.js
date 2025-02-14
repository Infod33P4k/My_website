// Array containing all write-ups
const writeups = [
    {
      title: "Ariekei",
      link: "./Writeup/Ariekei_writeup/Ariekei.html",
      image: "./Writeup/Ariekei.png",
      description: "Linux · Insane"
    },
    {
      title: "EvilCUPS",
      link: "./Writeup/EvilCUPS_writeup/EvilCUPS.html",
      image: "./Writeup/EvilCUPS.png",
      description: "Linux · Medium"
    },
    {
      title: "Photobomb",
      link: "./Writeup/Photobomb_writeup/Photobomb.html",
      image: "./Writeup/Photobomb.png",
      description: "Linux · Easy"
    },
    {
      title: "Backfire",
      link: "./Writeup/Backfire_writeup/Backfire.html",
      image: "./Writeup/Backfire.png",
      description: "Linux · Medium"
    },
    {
      title: "BigBang",
      link: "./Writeup/BigBang_writeup/BigBang.html",
      image: "./Writeup/BigBang.png",
      description: "Linux · Hard"
    },
    {
      title: "Cat",
      link: "writeup6.html",
      image: "./Writeup/Cat.png",
      description: "Linux · Medium"
    },
    {
      title: "Trickster",
      link: "./Writeup/Trickster_writeup/Trickster.html",
      image: "./Writeup/Trickster.png",
      description: "Linux · Medium"
    },
    {
      title: "MagicGardens",
      link: "./Writeup/MagicGardens_writeup/MagicGardens.html",
      image: "./Writeup/MagicGardens.png",
      description: "Linux · Insane"
    },
    {
      title: "EscapeTwo",
      link: "./Writeup/EscapeTwo_writeup/EscapeTwo.html",
      image: "./Writeup/EscapeTwo.png",
      description: "Windows · Easy"
    },
    {
      title: "Cicada",
      link: "./Writeup/Cicada_writeup/Cicada.html",
      image: "./Writeup/Cicada.png",
      description: "Windows · Easy"
    }
  ];
  
  // Function to shuffle the writeups array
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  // Shuffle the array and select the first 6 write-ups
  const shuffledWriteups = shuffle(writeups).slice(0, 6);
  
  // Get the container for the write-ups
  const writeupContainer = document.getElementById("writeup-container");
  
  // Dynamically generate the write-up cards
  shuffledWriteups.forEach(writeup => {
    const writeupHTML = `
      <div class="col-md-4">
        <div class="writeup-card">
          <a href="${writeup.link}">
            <img src="${writeup.image}" alt="${writeup.title}" class="writeup-img">
            <div class="writeup-info">
              <h4>${writeup.title}</h4>
              <p>${writeup.description}</p>
              <button class="read-more">Read More</button>
            </div>
          </a>
        </div>
      </div>
    `;
    writeupContainer.innerHTML += writeupHTML;
  });
  