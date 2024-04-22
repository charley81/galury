import { truncate } from '../utils/helpers'
import { getPosts } from '@/server/queries'

export default async function Posts() {
  const posts = await getPosts()

  return (
    <div className="grid gap-4 p-4 mt-24 max-w-6xl mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {posts.map((post) => (
        <div key={post.id} className="bg-white rounded-lg shadow-lg">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-48 object-cover object-center rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-600">
              {truncate(post.content, 100)}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
