const forecastButton = document.querySelector("#forecastButton");
const weatherIcon = document.querySelector("#weatherIcon");
const weatherText = document.querySelector("#weatherText");
const temperatureText = document.querySelector("#temperatureText");
const messageText = document.querySelector("#messageText");

const moods = [
  {
    weather: "\u6674\u308c",
    icon: "\u2600",
    min: 22,
    max: 30,
    message: "\u8efd\u304f\u6df1\u547c\u5438\u3057\u3066\u3001\u4eca\u65e5\u306f\u524d\u5411\u304d\u306b\u9032\u3081\u305d\u3046\u3067\u3059\u3002"
  },
  {
    weather: "\u66c7\u308a",
    icon: "\u2601",
    min: 15,
    max: 23,
    message: "\u7121\u7406\u3057\u3059\u304e\u305a\u3001\u3086\u3063\u304f\u308a\u6574\u3048\u308b\u3068\u3088\u3055\u305d\u3046\u3067\u3059\u3002"
  },
  {
    weather: "\u96e8",
    icon: "\u2614",
    min: 10,
    max: 20,
    message: "\u9759\u304b\u306b\u96c6\u4e2d\u3067\u304d\u308b\u65e5\u3002\u5c0f\u3055\u3044\u4e88\u5b9a\u304b\u3089\u7247\u3065\u3051\u307e\u3057\u3087\u3046\u3002"
  },
  {
    weather: "\u96ea",
    icon: "\u2744",
    min: -2,
    max: 8,
    message: "\u5c11\u3057\u30da\u30fc\u30b9\u3092\u843d\u3068\u3057\u3066\u3001\u3042\u305f\u305f\u304b\u304f\u904e\u3054\u3059\u3068\u3088\u3055\u305d\u3046\u3067\u3059\u3002"
  },
  {
    weather: "\u96f7",
    icon: "\u26a1",
    min: 18,
    max: 28,
    message: "\u3072\u3089\u3081\u304d\u304c\u6765\u305d\u3046\u306a\u65e5\u3002\u601d\u3044\u3064\u3044\u305f\u3053\u3068\u3092\u30e1\u30e2\u3057\u307e\u3057\u3087\u3046\u3002"
  }
];

forecastButton.addEventListener("click", () => {
  const mood = pickRandom(moods);
  const temperature = randomNumber(mood.min, mood.max);

  weatherIcon.textContent = mood.icon;
  weatherText.textContent = mood.weather;
  temperatureText.textContent = `${temperature}\u2103`;
  messageText.textContent = mood.message;
});

function pickRandom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
