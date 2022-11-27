import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import { LogoFull } from '@/components/Logo'
// Render Prop
import { Formik, Form } from 'formik';
import signUp from '@/components/forms/SignUpForm'

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const Basic = ({router}) => {

return (
  <div>
    <Formik
      initialValues={{ 
        email: '',
        password: '',
        first_name: '',
        last_name: '' 
      }}
      onSubmit={(values, {isSubmitting} ) => {
        // await sleep(500);
        // alert(JSON.stringify(values, null, 2));
        const user = signUp(values)
        router.push({
          pathname: '/confirm',
          query: {
            ...user,
            ...values
          }
        })
      }}
    >
      {({ isSubmitting }) => (
        <Form className="mt-10 grid grid-cols-1 gap-y-8">
          <TextField
            label="First name"
            id="first_name"
            name="first_name"
            type="text"
            autoComplete="given-name"
            required
          />
          <TextField
            label="Last name"
            id="last_name"
            name="last_name"
            type="text"
            autoComplete="family-name"
            required
          />
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
              Sign up <span aria-hidden="true">&rarr;</span>
            </span>
          </Button>
        </Form>
      )}
    </Formik>
  </div>
)
};


export default function Register() {
  const router = useRouter()
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
        <Basic router={router}/>

      </AuthLayout>
    </>
  )
}
