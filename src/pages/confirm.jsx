import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AuthLayout } from '@/components/AuthLayout'
import { LogoFull } from '@/components/Logo'
import ConfirmHook from '@/components/forms/ConfirmHook'
import { useAuth } from '@/components/auth/user'

export default function Confirm() {
  const { confirmSignUp, resetConfirmCode } = useAuth()
  const router = useRouter()
  const { email: username } = router.query
  const onConfirm = (e) => {     
    confirmSignUp({ ...e, username }).then((_) => {
      router.push({pathname: '/login'})
    })
  }
  return (
    <>
      <Head>
        <title>Sign Up - TaxPal</title>
      </Head>
      <AuthLayout>
        <div className="flex flex-col">
          <Link href="/" aria-label="Home">
            <LogoFull/>
          </Link>
          <div className="mt-20">
            <h2 className="text-lg font-semibold text-gray-900">
              Get started for free
            </h2>
            <p className="mt-2 text-sm text-gray-700">
              Request another confirmation code?{' '}
              <button onClick={() => resetConfirmCode({username})}
                className="font-medium text-blue-600 hover:underline"
              >
                  Click here to request
                </button>
            </p>
          </div>
        </div>
  <div>
    <ConfirmHook onConfirm={onConfirm}/>
  </div>

      </AuthLayout>
    </>
  )
}
