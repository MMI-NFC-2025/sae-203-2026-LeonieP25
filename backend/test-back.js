import { getImageUrl, getAllArtistesByDate, getAllScenesByName, getAllArtistesByName, getArtisteById,  getSceneById, getArtistesBySceneId, getArtistesBySceneName } from './backend.mjs';

/*
try {
    const artistes = await getAllArtistesByDate();
    console.log('Artistes par date :');
    console.log(JSON.stringify(artistes, null, 2));
} catch (e) {
    console.error(e);
}
*/

/*
try {
    const scenes = await getAllScenesByName();
    console.log('Scènes par nom :');
    console.log(JSON.stringify(scenes, null, 2));
} catch (e) {
    console.error(e);
}
*/

/*
try {
    const artistes = await getAllArtistesByName();
    console.log('Artistes par nom :');
    console.log(JSON.stringify(artistes, null, 2));
} catch (e) {
    console.error(e);
}
*/

/*
try {
    const artiste = await getArtisteById('RECORD_ID');
    console.log('Artiste par ID :');
    console.log(JSON.stringify(artiste, null, 2));
} catch (e) {
    console.error(e);
}
*/

/*
try {
    const scene = await getSceneById('RECORD_ID');
    console.log('Scène par ID :');
    console.log(JSON.stringify(scene, null, 2));
} catch (e) {
    console.error(e);
}
*/

/*
try {
    const artistes = await getArtistesBySceneId('SCENE_ID');
    console.log('Artistes par scène ID :');
    console.log(JSON.stringify(artistes, null, 2));
} catch (e) {
    console.error(e);
}
*/

/*
try {
    const artistes = await getArtistesBySceneName('Grande Scène');
    console.log('Artistes par nom de scène :');
    console.log(JSON.stringify(artistes, null, 2));
} catch (e) {
    console.error(e);
}
*/

/*
try {
    const artistes = await getAllArtistesByDate();
    if (artistes.length > 0 && artistes[0].photo_artiste) {
        const url = await getImageUrl(artistes[0], artistes[0].photo_artiste);
        console.log('URL image :');
        console.log(url);
    }
} catch (e) {
    console.error(e);
}
*/