exports.success = (message, data) => {
  return { message, data }
}

exports.getUniqueId = (furnitures) => {
  // On récupére tous les ID des meubles
  const furnituresIds = furnitures.map(furniture => furniture.id)
  // Via .reduce récupére l'id le plus élever.
  const maxId = furnituresIds.reduce((a, b) => Math.max(a, b))
  //On rajoute +1 à l'ID le plus élevé pour créer un nouvel ID lors de l'ajout d'un nouvel élément dans la liste des meubles.
  const uniqueId = maxId + 1

  return uniqueId
}
