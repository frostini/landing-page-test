import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAuth } from '@/components/auth/user'
import { AuthLayout } from '@/components/AuthLayout'
import { LogoFull } from '@/components/Logo'
import SignUpHook from '@/components/forms/SignUpHook'


export default function Register() {
  const router = useRouter()
  const { signUp } = useAuth()
  const handleSubmit = (e) => {
    signUp(e).then((user) => {
      router.push({
        pathname: '/confirm',
        query: {
          ...user,
          ...e
        }
      })
    })
  } 

  

  return (
    <>
      <Head>
        <title>Sign Up - TaxPal</title>
      </Head>
      <AuthLayout>
        <div className="flex flex-col">
          <LogoFull/>

          <div className="mt-20">
            <h2 className="text-lg font-semibold text-gray-900">
              Get started for free
            </h2>
            <p className="mt-2 text-sm text-gray-700">
              Already registered?{' '}
              <Link
                href="/login"
                className="font-medium text-blue-600 hover:underline"
              >
                Sign in
              </Link>{' '}
              to your account.
            </p>
          </div>
        </div>
       <SignUpHook onLogin={handleSubmit}/>

      </AuthLayout>
    </>
  )
}
