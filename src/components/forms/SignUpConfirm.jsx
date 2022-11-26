import { Auth } from 'aws-amplify';

export default async function confirmSignUp({username, code}) {
    try {
      const testing = await Auth.confirmSignUp(username, code);
      return testing
    } catch (error) {
        console.log('error confirming sign up', error);
    }
}