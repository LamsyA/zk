const crypto = require("crypto");
const poseidon = require("poseidon-encryption");

// SHA-256
const data = "This is some data X.";
// TODO: Compute the SHA-256 hash of the data and print it. Try changing the data slightly and observe the changes in the hash.
const sha256Hash = crypto.createHash("sha256").update(data).digest("hex");
console.log("sha256Hash: ", sha256Hash);

// Poseidon
const inputs = [1, 2, 3, 4];
// TODO: Compute the Poseidon hash of the inputs and print it. Remember that Poseidon accepts an array of integers as input.

const poseidonHash =poseidon.poseidon(inputs);

console.log("poseidonHash: ", poseidonHash.toString());
