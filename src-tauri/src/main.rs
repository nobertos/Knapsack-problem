#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

mod knapsack;
mod objet;

use knapsack::Knapsack;
use objet::Objet;

#[tauri::command]
fn calculate_knapsack(poids_maximal: u64, objets: Vec<Objet>) -> Knapsack {
    let mut knapsack = Knapsack::new(poids_maximal);
    knapsack.recursive_fill(&objets)
}
// #[tauri::command]
// fn on_button_clicked() -> String {
//     let start = SystemTime::now();
//     let mut objet = Objet::new("coffee", 1000, 120);
//     let since_the_epoch = start
//         .duration_since(UNIX_EPOCH)
//         .expect("Time went backwards")
//         .as_millis();
//     format!(
//         "on_button_clicked called from Rust! (timestamp: {}ms)\n
//         btw the {} has the weight of {} and the value of {}",
//         since_the_epoch,
//         objet.nom(),
//         objet.poids(),
//         objet.gain()
//     )
// }
//
fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![calculate_knapsack])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
