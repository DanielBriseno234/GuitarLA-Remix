export async function getPosts(){
    const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`, { headers: { Authorization: `token Daniel 5acec04b16a27f1d5fa0c2342594a743ef3aa0fad54ec3d846a27e9c6c05544fb0bd75562cdcc96bb74f0d68b41a66194562155e9960bc53828e143882b5fb877e6dc04bea944d82538b411c3140a87fdaab29b83f77b3e405b9b211ea58c5dbbe5c145533a07188aa811889e00a946856da75ee94d82a74a32b234a234dd16f` } });
    return await respuesta.json();
}

export async function getPost(url){
    const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)
    return await respuesta.json();
}