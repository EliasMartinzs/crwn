import './Authentication.scss';
import SignUp from '../../components/Sign-Up/Sign-Up';
import SignIn from '../../components/Sign-In /Sign-In';

const Authentication = () => {
  return (
    <div className="authentication-container">
      <h1>Sign In Page</h1>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
