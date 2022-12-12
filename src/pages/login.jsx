import Head from 'next/head'
import Link from 'next/link'
import { AuthLayout } from '@/components/AuthLayout'
import { LogoFull } from '@/components/Logo'
import SignInHook from '@/components/forms/SignInHook'
import { useAuth } from '@/components/auth/user'
import { useRouter } from 'next/router'

export default function Login() {
  const { login } = useAuth()
  const router = useRouter()
  const onSubmit = ({email, password}) => {
    login(email, password).then((user) =>{
      router.push({
        pathname: '/dashboard'
      })
    })
  }

  return (
    <>
      <Head>
        <title>Sign In - TaxPal</title>
      </Head>
      <AuthLayout>
        <div className="flex flex-col">
          <LogoFull/>
          <div className="mt-20">
            <h2 className="text-lg font-semibold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-sm text-gray-700">
              Don’t have an account?{' '}
              <Link
                href="/register"
                className="font-medium text-blue-600 hover:underline"
              >
                Sign up
              </Link>{' '}
              for a free trial.
            </p>
          </div>
        </div>
        <SignInHook onLogin={onSubmit}/>
      </AuthLayout>
    </>
  )
}
