import { Navigate } from 'react-router-dom';
import { CurrentUserContext } from '../Contexts/CurrentUserContext';
import { useContext } from 'react';
const ProtectedRouteRole = ({ element: Component, ...props }) => {
  const currentUser = useContext(CurrentUserContext);
  return props.loggedIn && currentUser.role.includes('admin') ? (
    <Component {...props} />
  ) : (
    <Navigate to='/' replace />
  );
};

export default ProtectedRouteRole;
