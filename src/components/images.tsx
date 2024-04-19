import {db} from '../server/db'

type Image = {
  id: number
  name: string
  url: string
  createdAt: Date
  updatedAt: Date | null
}

export default function Images() {
  const images: Image[] = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id)
  })

  return (
    <div className="grid gap-4 p-4 max-w-6xl mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {images.map((image, index) => (
        <div key={image.id}>
          <img src={image.url} alt={image.name} />
          <h3 className="font-bold text-2xl py-2">{image.name}</h3>
        </div>
      ))}
    </div>
  )
}




 
}