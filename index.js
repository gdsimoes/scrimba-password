// Theme Switcher
const themeSwitcher = document.querySelector("#theme-switcher");

themeSwitcher.addEventListener("click", () =>
    document.documentElement.classList.toggle("theme-switch")
);

// Copy password
const passwords = document.querySelectorAll(".password");
for (const password of passwords) {
    password.addEventListener("click", (event) => {
        copyText = event.currentTarget.firstElementChild.textContent;
        if (copyText.length !== 0) {
            navigator.clipboard.writeText(copyText);
            event.currentTarget.lastElementChild.classList.toggle(
                "tooltip-show",
                true
            );
        }
    });
}

// Generate passwords
const characters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "~",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "+",
    "=",
    "{",
    "[",
    "}",
    "]",
    ",",
    "|",
    ":",
    ";",
    "<",
    ">",
    ".",
    "?",
    "/",
];

function randomChar() {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}

const pwdLength = 15;

const generator = document.querySelector("#generator");
generator.addEventListener("click", () => {
    for (const password of passwords) {
        let pwdText = "";
        for (let i = 0; i < pwdLength; i++) {
            pwdText += randomChar();
        }
        password.firstElementChild.textContent = pwdText;
        password.lastElementChild.classList.toggle("tooltip-show", false);
    }
});
