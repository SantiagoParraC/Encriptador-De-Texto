const encryptionRules = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

const decryptionRules = {};
for (let char in encryptionRules) {
    decryptionRules[encryptionRules[char]] = char;
}

function encrypt(text) {
    let encryptedText = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (encryptionRules[char]) {
            encryptedText += encryptionRules[char];
        } else {
            encryptedText += char;
        }
    }
    return encryptedText;
}

function decrypt(text) {
    let decryptedText = text;
    for (let encoded in decryptionRules) {
        decryptedText = decryptedText.split(encoded).join(decryptionRules[encoded]);
    }
    return decryptedText;
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
}

document.getElementById('encryptButton').addEventListener('click', function() {
    let inputText = document.getElementById('inputText').value;
    let encryptedText = encrypt(inputText);
    document.getElementById('outputText').value = encryptedText;
});

document.getElementById('decryptButton').addEventListener('click', function() {
    let inputText = document.getElementById('inputText').value;
    let decryptedText = decrypt(inputText);
    document.getElementById('outputText').value = decryptedText;
});

document.getElementById('copyButton').addEventListener('click', function() {
    let outputText = document.getElementById('outputText').value;
    copyToClipboard(outputText);
});