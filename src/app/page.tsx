import Image from 'next/image'
import { mock } from 'node:test'
import { db } from '../server/db'

const mockSources = [
  'https://utfs.io/f/2579d989-b25e-475c-b5b7-be8f0fd7eb36-l9pgnd.jpg',
  'https://utfs.io/f/8a973366-634b-4a75-8077-0fe93573ab12-iobq7y.jpg',
  'https://utfs.io/f/09483592-81b5-4013-bb3a-6de0a8e7118e-603maf.jpg',
  'https://utfs.io/f/5f7f5446-c1d5-4da9-9c58-7d668b87292c-h94vvt.jpg'
]

const mockImages = mockSources.map((src, index) => ({
  id: index + 1,
  src,
  alt: `mock image ${index}`
}))

type Post = {
  id: number
  name: string
  createdAt: Date
  updatedAt: Date | null
}

export default async function Home() {
  const posts: Post[] = await db.query.posts.findMany()
  return (
    <main>
      <div className="grid gap-4 p-4 max-w-6xl mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {posts.map((post) => (
          <h3 key={post.id}>{post.name}</h3>
        ))}
      </div>
    </main>
  )
}
