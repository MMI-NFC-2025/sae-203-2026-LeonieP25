import PocketBase from 'pocketbase';
const pb = new PocketBase('https://festival.leonie-pruniaux.fr:443');

// Génère l'URL d'une image stockée dans PocketBase
export function getImageUrl(record, recordImage) {
    return pb.files.getURL(record, recordImage);
}

// Récupère tous les artistes triés par date de représentation
export async function getAllArtistesByDate() {
    const records = await pb.collection('Artistes').getFullList({
        sort: 'dateheure_representation',
        expand: 'scene_representation'
    });
    return records;
}

// Récupère toutes les scènes triées par nom
export async function getAllScenesByName() {
    const records = await pb.collection('Scenes').getFullList({
        sort: 'nom_scene'
    });
    return records;
}

// Récupère tous les artistes triés par nom
export async function getAllArtistesByName() {
    const records = await pb.collection('Artistes').getFullList({
        sort: 'nom_artiste'
    });
    return records;
}

// Récupère un artiste grâce à son ID
export async function getArtisteById(id) {
    const artiste = await pb.collection('Artistes').getOne(id);
    return artiste;
}

// Récupère une scène grâce à son ID
export async function getSceneById(id) {
    const scene = await pb.collection('Scenes').getOne(id);
    return scene;
}

// Récupère tous les artistes associés à une scène via l'ID de la scène
export async function getArtistesBySceneId(sceneId) {
    const records = await pb.collection('Artistes').getFullList({
        filter: `scene = "${sceneId}"`,
        sort: 'dateheure_representation'
    });
    return records;
}

// Récupère les artistes selon le nom de la scène
export async function getArtistesBySceneName(sceneName) {
    const records = await pb.collection('Artistes').getFullList({
        expand: 'scene',
        sort: 'dateheure_representation'
    });

    const filteredRecords = records.filter(artiste => 
        artiste.expand && artiste.expand.scene && artiste.expand.scene.nom === sceneName
    );

    return filteredRecords;
}

// Crée ou modifie un artiste
export async function saveArtiste(id, data) {
    if (id) {
        const record = await pb.collection('Artistes').update(id, data);
        return record;
    } else {
        const record = await pb.collection('Artistes').create(data);
        return record;
    }
}

// Crée ou modifie une scène
export async function saveScene(id, data) {
    if (id) {
        const record = await pb.collection('Scenes').update(id, data);
        return record;
    } else {
        const record = await pb.collection('Scenes').create(data);
        return record;
    }
}

// Authentifie un utilisateur
export async function Userauth(login, mdp) {
    try {
        const authData = await pb.collection('users').authWithPassword(login, mdp);
        console.log("Utilisateur connecté :", pb.authStore.model.email);
        return authData;
    } catch (error) {
        console.error("Erreur de connexion :", error.message);
        return null;
    }
}

// Crée un nouvel utilisateur
export async function createUser(email, password, passwordConfirm, name = "") {
    try {
        const data = {
            email: email,
            emailVisibility: true,
            password: password,
            passwordConfirm: passwordConfirm,
            name: name
        };

        const record = await pb.collection('users').create(data);
        return record;
    } catch (error) {
        console.error("Erreur lors de la création de l'utilisateur :", error.message);
        return null;
    }
}

// Vérifie si un utilisateur est connecté
export function isLogged() {
    return pb.authStore.isValid;
}

// Déconnecte l'utilisateur
export function logout() {
    pb.authStore.clear();
    console.log("Utilisateur déconnecté");
}

// Récupère les informations de l'utilisateur connecté
export function getUserInfo() {
    if (isLogged()) {
        return pb.authStore.model;
    }
    return null;
}