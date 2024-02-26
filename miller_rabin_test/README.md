# Miller-Rabin Primality Test

## Overview

The Miller-Rabin primality test is a probabilistic algorithm used to determine whether a given number is likely to be prime. This repository contains a Rust implementation of the Miller-Rabin primality test algorithm along with a modular exponentiation function necessary for its operation.

## Features

- Determines whether a given number is likely prime with high probability.
- Implemented in Rust, providing efficiency and performance.
- Customizable number of iterations for higher accuracy.

## Prerequisites

- Rust programming language installed on your system.
- Cargo package manager, which comes bundled with Rust.

## Usage

1. Clone the repository to your local machine:

```
git clone https://github.com/LamsyA/zk.git

cd miller_rabin_test
```

2. Navigate to the project directory:

```
cd miller-rabin
```

3. Open the `src/main.rs` file and customize the value of `n` and `k` variables in the `main` function according to the number you want to test for primality and the desired number of iterations.

4. Run the code using Cargo:

```
cargo run
```

5. The program will output whether the number is likely prime or composite based on the Miller-Rabin primality test.

## Algorithm

The algorithm implemented in this code follows these steps:

1. Handle base cases: Check if the number is less than or equal to 1, 2, or 3, and if it's even.
2. Write the number as \( 2^r \cdot d + 1 \) where \( d \) is odd.
3. Perform the Miller-Rabin test with a specified number of iterations (`k`):
   - Generate random bases and compute modular exponentiation.
   - Test whether the number is likely prime or composite based on the Miller-Rabin test results.
