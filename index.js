// Theme Switcher
const themeSwitcher = document.querySelector("#theme-switcher");

themeSwitcher.addEventListener("click", () =>
    document.documentElement.classList.toggle("theme-switch")
);

// Copy password
const passwords = document.querySelectorAll(".password");
for (const password of passwords) {
    password.addEventListener("click", (event) => {
        copyText = event.target.firstElementChild.textContent;
        navigator.clipboard.writeText(copyText);
        event.target.lastElementChild.classList.toggle("tooltip-show", true);
    });
}

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
