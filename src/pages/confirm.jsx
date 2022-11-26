import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
// Render Prop
import React from 'react';
import { Formik, Form } from 'formik';
import confirmSignUp from '@/components/forms/SignUpConfirm'
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));


export default function Confirm() {
    const router = useRouter()
  
  return (
    <>
      <Head>
        <title>Sign Up - TaxPal</title>
      </Head>
      <AuthLayout>
        <div className="flex flex-col">
          <Link href="/" aria-label="Home">
            <Logo className="h-10 w-auto" />
          </Link>
          <div className="mt-20">
            <h2 className="text-lg font-semibold text-gray-900">
              Get started for free
            </h2>
            <p className="mt-2 text-sm text-gray-700">
              Request another confirmation code?{' '}
              <button 
                className="font-medium text-blue-600 hover:underline"
              >
                  Click here to request
                </button>
            </p>
          </div>
        </div>
  <div>
    <Formik
      initialValues={{ 
        code: '',
        username: '',
      }}
      onSubmit={(values, {isSubmitting}) => {
        const { code } = values
        const { email: username } = router.query
        const success = confirmSignUp({username,code})
        
        router.push({
          pathname: '/dashboard'
        })
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <TextField
            label="Confirmation Code"
            id="code"
            name="code"
            type="text"
            autoComplete="code"
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
              Complete Sign Up<span aria-hidden="true">&rarr;</span>
            </span>
          </Button>
        </Form>
      )}
    </Formik>
  </div>

      </AuthLayout>
    </>
  )
}
