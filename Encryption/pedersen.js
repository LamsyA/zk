class PedersenCommitment {
    constructor() {
      // Set prime number (p) and generator (g)
      this.p = BigInt(23); // use a large prime in a real-world scenario
      this.g = BigInt(4); // use a large number in a real-world scenario
      this.h = null;
      this.r = null;
      this.s = null;
    }
  
    // Generate 'h' with a random number 'r' (h = g^r mod p)
    generateH() {
      // TODO: Generate a random number r (and save it to this.r)
      this.r = BigInt(Math.floor(Math.random() * Math.floor(Math.random() * Number(this.p))));
      // TODO: Calculate h using g, r and p (and save it to this.h)
      this.h = (this.g ** this.r) % this.p;
    }
  
    // Generate the commitment (g^s * h^r mod p)
    generateCommitment(s) {
      // TODO: Convert s to BigInt (and save it to this.s)
      this.s = BigInt(s);
      // TODO: Calculate and return the commitment using g, s, h, r and p
      return (this.g ** this.s * this.h ** this.r) % this.p;
    }
  
    // Reveal the secret number and random number (s, r)
    reveal() {
      // TODO: Return the secret and random number
      return {s: this.s, r: this.r};
    }
  
    // Verify the commitment (g^s * h^r mod p)
    verify(s, r, C) {
      // TODO: Verify the commitment by recalculating it and comparing with C
      const calculatedCommitment = (this.g ** s * this.h ** r) % this.p;
      return C === calculatedCommitment;
    }
  }
  
  // Test the PedersenCommitment
  const pc = new PedersenCommitment();
  console.log("pc: ", pc);
  pc.generateH();
  
  // Party A: Generate a commitment
  let secretNumber = 7;
  let commitment = pc.generateCommitment(secretNumber);
  console.log("Commitment: ", commitment);
  
  // Party A: Reveal the secret and random number
  let reveal = pc.reveal();
  console.log("Revealed: ", reveal);
  
  // Party B: Verify the commitment
  let verification = pc.verify(reveal.s, reveal.r, commitment);
  console.log("Verification: ", verification);