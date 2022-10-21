use crate::knapsack::Knapsack;
use std::mem;
pub const MAX_STATES: usize = (8 * 1000000000) / std::mem::size_of::<usize>();

pub(super) struct Array {
    data: Vec<Knapsack>,
    width: usize,
}

impl Array {
    pub(super) fn new(width: usize, height: usize) -> Array {
        let size = width * height;
        if size > MAX_STATES {
            panic!("Problem exceeds size limit: {} > {}", size, MAX_STATES);
        }

        println!("Array size: {}", size);

        Array {
            data: vec![Knapsack::new(width as u64); size],
            width,
        }
    }

    fn index(&self, num_objet: usize, poids: usize) -> usize {
        num_objet * self.width + poids
    }

    pub(super) fn get(&self, num_objet: usize, poids: usize) -> &Knapsack {
        let index = self.index(num_objet, poids);
        &self.data[index]
    }

    pub(super) fn set(&mut self, num_objet: usize, poids: usize, v: Knapsack) {
        let index = self.index(num_objet, poids);
        self.data[index] = v
    }

    pub(super) fn last(&mut self) -> Knapsack {
        mem::take(self.data.last_mut().unwrap())
    }
}
