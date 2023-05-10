import {
  singInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase';

import SignUp from '../../components/Sign-Up/Sign-Up';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await singInWithGooglePopup();

    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign IN Page</h1>
      <button onClick={logGoogleUser}>sign in with google</button>
      <SignUp />
    </div>
  );
};

export default SignIn;
