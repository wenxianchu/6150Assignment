let message = document.querySelector("#message");
let degrees = document.querySelector("#degrees");
let result = document.querySelector("#result");

function submit() {
    const originalText = message.value;
    const originalDegrees = degrees.value;
    result.value = cipher(originalText, originalDegrees);
    message.value = "";
    degrees.value = "";
}

function cipher(message, degrees) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let newMessage = "";
    for (const char of message) {
        if (alphabet.includes(char)) {
            let newIndex = Math.abs((alphabet.indexOf(char) + Number(degrees))) % 26;
            newMessage += alphabet[newIndex];
        } else {
            newMessage += char;
        }
    }
    return newMessage
}