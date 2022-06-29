exports.success = (message, data) => {
  return { message, data }
}

exports.getUniqueId = (furnitures) => {
  const furnituresIds = furnitures.map(furniture => furniture.id)
  const maxId = furnituresIds.reduce((a, b) => Math.max(a, b))
  const uniqueId = maxId + 1

  return uniqueId
}
