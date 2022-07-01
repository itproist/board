import { Navigate } from 'react-router-dom';
import { useAuth } from '../hook';

const AuthHOC = ({ children }) => {
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <Navigate to="/auth" />;
  }
  return children;
};

export default AuthHOC;
