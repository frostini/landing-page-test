import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import { LogoFull } from '@/components/Logo'
import { Formik, Form } from 'formik';
import signIn from '@/components/forms/SignIn'

const Basic = ({router}) => {

  return (
    <div>
      <Formik
        initialValues={{ 
          email: '',
          password: '',
        }}
        onSubmit={(values, {isSubmitting} ) => {
          signIn(values).then((user) =>{
            router.push({
              pathname: '/dashboard'
            })
          })
        }}
      >
        {({ isSubmitting }) => (
          <Form className="mt-10 grid grid-cols-1 gap-y-8">
            <TextField
              className="col-span-full"
              label="Email address"
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
            <TextField
              className="col-span-full"
              label="Password"
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
            />
            <Button
              type="submit"
              variant="solid"
              color="blue"
              className="w-full"
              disabled={isSubmitting}
            >
              <span>
                Sign in <span aria-hidden="true">&rarr;</span>
              </span>
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
  };

export default function Login() {
  const router = useRouter()
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
        <Basic router={router}/>
      </AuthLayout>
    </>
  )
}
