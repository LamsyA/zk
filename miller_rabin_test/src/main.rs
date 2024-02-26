use rand::Rng;

fn miller_rabin(n: u64, k: u64) -> bool {
    if n <= 1 {
        return false;
    }
    if n <= 3 {
        return true;
    }
    if n % 2 == 0 {
        return false;
    }

    // Write n as 2^r * d + 1
    let mut d = n - 1;
    let mut r = 0;
    while d % 2 == 0 {
        d /= 2;
        r += 1;
    }

    'witness_loop: for _ in 0..k {
        let a = rand::thread_rng().gen_range(2..n - 2);
        let mut x = modular_exp(a, d, n);
        if x == 1 || x == n - 1 {
            continue;
        }
        for _ in 0..r - 1 {
            x = modular_exp(x, 2, n);
            if x == n - 1 {
                continue 'witness_loop;
            }
        }
        return false;
    }

    true
}

fn modular_exp(mut base: u64, mut exp: u64, modulus: u64) -> u64 {
    let mut result: u64 = 1;
    base %= modulus;
    while exp > 0 {
        if exp % 2 == 1 {
            if let Some(new_result) = result.checked_mul(base) {
                result = new_result % modulus;
            } else {
                return 0;
            }
        }
        if let Some(new_base) = base.checked_mul(base) {
            base = new_base % modulus;
        } else {
            return 0;
        }
        exp >>= 1;
    }
    result
}

fn main() {
    let n = 17977; // Number to be tested
    let k = 2; // Number of iterations (higher k means higher accuracy)
    if miller_rabin(n, k) {
        println!("{} is likely prime", n);
    } else {
        println!("{} is composite", n);
    }
}
