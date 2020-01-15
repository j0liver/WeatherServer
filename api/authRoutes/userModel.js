async function addFavorite(id, favorite){
    await db('user_saved')
        .insert(id, favorite)
}

async function findFavorites(id, favorite){
    return db('user_saved')
        .where("user_Id", "id")
}

