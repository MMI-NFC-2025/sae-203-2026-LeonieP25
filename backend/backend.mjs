import PocketBase from 'pocketbase';
const pb = new PocketBase('https://festival.leonie-pruniaux.fr');

export function getImageUrl(record, recordImage) {
    return pb.files.getURL(record, recordImage);
}

export async function getAllArtistesByDate() {
    const records = await pb.collection('Artistes').getFullList({
        sort: 'dateheure_representation',
        expand: 'scene_representation'
    });
    return records;
}

export async function getAllScenesByName() {
    const records = await pb.collection('Scenes').getFullList({
        sort: 'nom_scene'
    });
    return records;
}

export async function getAllArtistesByName() {
    const records = await pb.collection('Artistes').getFullList({
        sort: 'nom_artiste'
    });
    return records;
}

export async function getArtisteById(id) {
    const artiste = await pb.collection('Artistes').getOne(id);
    return artiste;
}

export async function getSceneById(id) {
    const scene = await pb.collection('Scenes').getOne(id);
    return scene;
}

export async function getArtistesBySceneId(sceneId) {
    const records = await pb.collection('Artistes').getFullList({
        filter: `scene = "${sceneId}"`,
        sort: 'dateheure_representation'
    });
    return records;
}

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

export async function saveArtiste(id, data) {
    if (id) {
        const record = await pb.collection('Artistes').update(id, data);
        return record;
    } else {
        const record = await pb.collection('Artistes').create(data);
        return record;
    }
}

export async function saveScene(id, data) {
    if (id) {
        const record = await pb.collection('Scenes').update(id, data);
        return record;
    } else {
        // 
        const record = await pb.collection('Scenes').create(data);
        return record;
    }
}