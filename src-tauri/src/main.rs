#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

mod array;
mod knapsack;
mod objet;

use knapsack::Knapsack;
use objet::Objet;

#[tauri::command]
fn calculate_knapsack(poids_maximal: u64, objets: Vec<Objet>) -> Knapsack {
    let mut knapsack = Knapsack::new(poids_maximal);
    knapsack.dynamic_fill(&objets)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![calculate_knapsack])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
