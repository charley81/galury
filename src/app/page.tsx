import { SignedIn, SignedOut } from '@clerk/nextjs'
import Images from '@/components/images'

export const dynamic = 'force-dynamic'

export default async function Home() {
  return (
    <main>
      <SignedOut>
        <div className="bg-red-100 p-4 text-center">
          <p>
            You need to be signed in to view this page.{' '}
            <a href="/sign-in">Sign in</a>
          </p>
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  )
}
