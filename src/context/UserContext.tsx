import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  Dispatch,
} from 'react';

interface UserState {
  name: string;
  email: string;
  isLoggedIn: boolean;
  currency: string;
  language: string;
  theme: string;
  notification: boolean;
}

type UserAction =
  | { type: 'SET_USER'; payload: Partial<UserState> }
  | { type: 'LOG_IN' }
  | { type: 'LOG_OUT' }
  | { type: 'SET_LANGUAGE'; payload: string }
  | { type: 'SET_THEME'; payload: string }
  | { type: 'SET_CURRENCY'; payload: string }
  | { type: 'TOGGLE_NOTIFICATION' };

const initialState = {
  name: 'john',
  email: 'johndoe@gmail.com',
  isLoggedIn: false,
  currency: 'USD',
  language: 'en',
  theme: 'light',
  notification: false,
};

const UserContext = createContext<UserState | undefined>(undefined);
const UserDispatchContext = createContext<Dispatch<UserAction> | undefined>(
  undefined,
);

function userReducer(state: UserState, action: UserAction): UserState {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, ...action.payload };
    case 'LOG_IN':
      return { ...state, isLoggedIn: true };
    case 'LOG_OUT':
      return { ...state, isLoggedIn: false };
    case 'SET_LANGUAGE':
      return { ...state, language: action.payload };
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    case 'SET_CURRENCY':
      return { ...state, currency: action.payload };
    case 'TOGGLE_NOTIFICATION':
      return { ...state, notification: !state.notification };
    default:
      return state;
  }
}

interface UserProviderProps {
  children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}

export function useUserDispatch() {
  return useContext(UserDispatchContext);
}
