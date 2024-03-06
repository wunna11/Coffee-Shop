import { useAppSelector } from '../app/hooks';
import { selectAuth } from '../features/Auth/authSlice';

export default function useAuth() {
  const authUser = useAppSelector(selectAuth);
  return authUser;
}

export function useAuthentication() {
  const authUser = useAuth();
  return authUser.data;
}