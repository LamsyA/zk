fn power_set(items: &mut Vec<char>) -> Vec<Vec<char>> {
    if items.is_empty() {
        vec![vec![]]
    } else {
        let element = items.pop().unwrap();
        let subsets = power_set(items);
        let mut new_subsets = Vec::new();
        for subset in subsets {
            new_subsets.push(subset.clone());
            let mut subset_with_element = subset.clone();
            subset_with_element.push(element);
            new_subsets.push(subset_with_element);
        }
        new_subsets
    }
}

fn main() {
    let mut input_set: Vec<char> = vec!['a', 'b', 'c'];
    let result = power_set(&mut input_set);
    println!("{:?}", result);
}
