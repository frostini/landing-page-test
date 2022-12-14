import { Auth } from 'aws-amplify'

export default async function signUp(values) {
  
  const { email: username, password } = values
    try {
        const { user } = await Auth.signUp({
            username,
            password,
            attributes: {
                email: username,          // optional
                'custom:kindOf': 'government'
            },
            autoSignIn: { // optional - enables auto sign in after user is confirmed
                enabled: true,
            }
        });
        console.log(user);
        return user
    } catch (error) {
        console.log('error signing up:', error);
    }
}