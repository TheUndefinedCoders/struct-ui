import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950">
      <SignIn
        appearance={{
          elements: {
            rootBox: 'mx-auto',
            card: 'bg-zinc-900 border border-zinc-800',
            headerTitle: 'text-white',
            headerSubtitle: 'text-zinc-400',
            socialButtonsBlockButton: 'bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700',
            formFieldLabel: 'text-zinc-300',
            formFieldInput: 'bg-zinc-800 border-zinc-700 text-white',
            footerActionLink: 'text-orange-500 hover:text-orange-400',
            formButtonPrimary: 'bg-orange-500 hover:bg-orange-600',
          },
        }}
      />
    </div>
  );
}
