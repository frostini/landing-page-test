import { Amplify } from 'aws-amplify'
import awsExports from '../aws-exports'
import { AuthProvider } from '@/components/auth/user'
import 'focus-visible'
import '@/styles/tailwind.css'
import '@aws-amplify/ui-react/styles.css'

export default function App({ Component, pageProps }) {
  Amplify.configure({ ...awsExports, ssr: true });
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <AuthProvider>
      {getLayout( <Component {...pageProps}/> )}
    </AuthProvider>
  )
}