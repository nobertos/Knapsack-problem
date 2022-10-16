use serde::{Deserialize, Serialize};

#[derive(Default, Clone, Serialize, Deserialize)]
pub(super) struct Objet {
    nom: String,
    poids: u64,
    gain: u64,
}

impl Objet {
    pub(super) fn new(nom: &str, poids: u64, gain: u64) -> Self {
        Objet {
            nom: nom.to_string(),
            poids,
            gain,
        }
    }

    pub(super) fn nom(&self) -> &str {
        &self.nom
    }

    pub(super) fn poids(&self) -> u64 {
        self.poids
    }

    pub(super) fn gain(&self) -> u64 {
        self.gain
    }
}
