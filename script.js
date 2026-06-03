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
  { english: "Solitude", french: "Solitude", italian: "Solitudine" },
  { english: "Dream", french: "Reve",italian: "Sogno" },
  { english: "Hope", french: "Espoir", italian: "Speranza"},
  { english: "love", french: "Amour", italian: "Amore"},
  { english: "Joy", french: "Joie", italian: "Gioia" },
  { english: "Peace", french: "Paix", italian: "Pace" },
  { english: "Adventure", french: "Aventure", italian: "Avventura" },
  { english: "Harmony", french: "Harmonie", italian: "Armonia" },
  { english: "Inspiration", french: "Inspiration", italian: "Ispirazione" },
  { english: "Passion", french: "Passion", italian: "Passione" } ,
  { english: "Gratitude", french: "Gratitude", italian: "Gratitudine" },
  { english: "Resilience", french: "Résilience", italian: "Resilienza" },
  { english: "Compassion", french: "Compassion", italian: "Compassione" },
  { english: "Serendipity", french: "Sérendipité", italian: "Serendipità" },
  { english: "Tranquility", french: "Tranquillité", italian: "Tranquillità" },
  { english: "Empathy", french: "Empathie", italian: "Empatia" },
  { english: "Optimism", french: "Optimisme", italian: "Ottimismo" },
  { english: "Courage", french: "Courage", italian: "Coraggio" },
  { english: "Wisdom", french: "Sagesse", italian: "Saggezza" },
  { english: "Laughter", french: "Rire", italian: "Risata" },
  { english: "Beauty", french: "Beauté", italian: "Bellezza" },
]

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