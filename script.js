// Initialize RSA encryption using JSEncrypt
const encryptor = new JSEncrypt({ default_key_size: 1024 });
const decryptor = new JSEncrypt();

const generateKeys = () => {
    encryptor.getKey(); // Generates a new key pair
    const publicKey = encryptor.getPublicKey();
    const privateKey = encryptor.getPrivateKey();

    // Set keys in UI
    document.getElementById('publicKey').value = publicKey;
    document.getElementById('privateKey').value = privateKey;

    decryptor.setPrivateKey(privateKey);
};

// Encrypt message
const encryptMessage = () => {
    const message = document.getElementById('plainText').value;
    const encrypted = encryptor.encrypt(message);

    if (!encrypted) {
        alert("Encryption failed!");
        return;
    }

    document.getElementById('encryptedText').value = encrypted;
};

// Decrypt message
const decryptMessage = () => {
    const encrypted = document.getElementById('decryptText').value;
    const decrypted = decryptor.decrypt(encrypted);

    if (!decrypted) {
        alert("Decryption failed! Ensure you have the correct private key.");
        return;
    }

    document.getElementById('decryptedText').value = decrypted;
};

// Event Listeners
document.getElementById('generateKeys').addEventListener('click', generateKeys);
document.getElementById('encrypt').addEventListener('click', encryptMessage);
document.getElementById('decrypt').addEventListener('click', decryptMessage);
