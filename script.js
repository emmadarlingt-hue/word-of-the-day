const words = [
  { english: "Serenity", french: "Sérénité", italian: "Serenità" },
  { english: "Wanderer", french: "Vagabond", italian: "Viaggiatore" },
  { english: "Moonlight", french: "Clair de lune", italian: "Chiaro di luna" },
  { english: "Courage", french: "Courage", italian: "Coraggio" },
  { english: "Nostalgia", french: "Nostalgie", italian: "Nostalgia" },
  { english: "Freedom", french: "Liberté", italian: "Libertà" },
  { english: "Friendship", french: "Amitié", italian: "Amicizia" },
  { english: "Horizon", french: "Horizon", italian: "Orizzonte" },
  { english: "Whisper", french: "Chuchotement", italian: "Sussurro" },
  { english: "Solitude", french: "Solitude", italian: "Solitudine" }
];

let current = 0;

function showWord() {
  document.getElementById('english').textContent = words[current].english;
  document.getElementById('french').textContent = words[current].french;
  document.getElementById('italian').textContent = words[current].italian;
}

function nextWord() {
  current = (current + 1) % words.length;
  showWord();
}

showWord();