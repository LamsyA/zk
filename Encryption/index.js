const crypto = require('crypto');
const buffer = require('buffer');

// Asymmetric encryption
const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', { modulusLength: 2048 });

// Encrypt
const plaintext = 'This is a secret message.';
const ciphertext = crypto.publicEncrypt(
  {
    key: publicKey,
    padding: crypto.constants.RSA_PKCS1_PADDING,
  },
  Buffer.from(plaintext)
);

// Decrypt
const decrypted = crypto.privateDecrypt(
  {
    key: privateKey,
    padding: crypto.constants.RSA_PKCS1_PADDING,
  },
  ciphertext
);
console.log("\n cipher", ciphertext);
console.log("\n decrypted", decrypted.toString());

// Create a digital signature
const sign = crypto.createSign('SHA256');
sign.update(plaintext);
sign.end();
const signature = sign.sign(privateKey);

// Verify a digital signature
const verify = crypto.createVerify('SHA256');
verify.update(plaintext);
verify.end();
const isVerified = verify.verify(publicKey, signature);

console.log("\n Is signature verified?", isVerified);
