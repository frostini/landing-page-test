import 'focus-visible'
import '@/styles/tailwind.css'
import '@aws-amplify/ui-react/styles.css';
import { Amplify, Hub } from 'aws-amplify';
import awsExports from '../aws-exports';

export default function App({ Component, pageProps }) {
  Amplify.configure({ ...awsExports, ssr: true });
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  Hub.listen('auth', (data) => {
    const event = data.payload.event;
    console.log('event:', event);
    if (event === "signOut") {
      console.log('user signed out...');
    }
  });

  return getLayout(<Component {...pageProps} />)
}