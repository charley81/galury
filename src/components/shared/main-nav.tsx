import { Button } from '../ui/button'
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

export default function MainNav() {
  return (
    <nav className="p-4 bg-slate-100">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <h3 className="text-2xl">galury</h3>
        <Button variant="ghost">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Button>
      </div>
    </nav>
  )
}
