document.getElementById('encrypt-btn').addEventListener('click', function() {
    let text = document.getElementById('input-text').value;
    let encryptedText = encrypt(text);
    document.getElementById('output-text').value = encryptedText;
});

document.getElementById('decrypt-btn').addEventListener('click', function() {
    let text = document.getElementById('input-text').value;
    let decryptedText = decrypt(text);
    document.getElementById('output-text').value = decryptedText;
});

document.getElementById('copy-btn').addEventListener('click', function() {
    let outputText = document.getElementById('output-text');
    outputText.select();
    document.execCommand('copy');
});

function encrypt(text) {
    text = text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
    return text;
}

function decrypt(text) {
    text = text.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
    return text;
}
