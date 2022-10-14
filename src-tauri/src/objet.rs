pub(crate) struct Objet {
    nom: String,
    poids: u64,
    gain: u64,
}

impl Objet {
    pub(crate) fn new(nom: &str, poids: u64, gain: u64) -> Self {
        Objet {
            nom: nom.to_string(),
            poids,
            gain,
        }
    }

    pub(crate) fn nom(&self) -> &str {
        &self.nom
    }

    pub(crate) fn poids(&self) -> u64 {
        self.poids
    }

    pub(crate) fn gain(&self) -> u64 {
        self.gain
    }
}
