import { Auth } from 'aws-amplify';

export default async function signIn(values) {
  const {email: username, password} = values
    try {
        const user = await Auth.signIn(username, password);
    } catch (error) {
        console.log('error signing in', error);
    }
}