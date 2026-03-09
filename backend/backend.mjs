import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');

export async function getAllArtistesByDate() {
    const records = await pb.collection('Artistes').getFullList({
        sort: 'date_representation'
    });
    return records;
}

export async function getAllScenesByName() {
    const records = await pb.collection('Scenes').getFullList({
        sort: 'nom'
    });
    return records;
}

export async function getAllArtistesByName() {
    const records = await pb.collection('Artistes').getFullList({
        sort: 'nom'
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
        sort: 'date_representation'
    });
    return records;
}

export async function getArtistesBySceneName(sceneName) {
    const records = await pb.collection('Artistes').getFullList({
        expand: 'scene',
        sort: 'date_representation'
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