const messages = [
    "I'll survive the apocalypse just to spite them both—coffee and rage fuel me.",
    "Just think about how fun it will be to watch their funerals on CNN.",
    "Stay patient. The sweet release of death will come for them before it comes for you.",
    "Billionaires come and go, but your life force is going to last longer, statistically speaking.",
    "I don't need to go to Mars. I have a multivitamin and spite.",
    "My will to live is stronger than a cybertruck.",
    "Sex is great but have you imagined what it would be like to see the headlines of their deaths?"
];

document.querySelector("h1").innerText = messages[Math.floor(Math.random() * messages.length)];
