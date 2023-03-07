export function findService(id, services) {
  return services.find(s => s.id.toString() === id)
}

export function mapSubjects(variations) {
  const newData = {}
  variations.forEach(v => {
    const mainCategory = v.attributes.attribute_pa_subject.split('_')[0]
    const subjName = v.display_name
    if (!newData[mainCategory]) newData[mainCategory] = []
    newData[mainCategory].push(
      { id: v.variation_id, name: subjName, price: v.display_price }
    )
  })

  return newData
}