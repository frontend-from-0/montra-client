import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  Dispatch,
} from 'react';

enum Currency {
  USD = 'USD',
  IDR = 'IDR',
  JPY = 'JPY',
  RUB = 'RUB',
  EUR = 'EUR',
  WON = 'WON',
}

enum Language {
  EN = 'EN',
  ID = 'ID',
  AR = 'AR',
  ZH = 'ZH',
  NL = 'NL',
  FR = 'FR',
  DE = 'DE',
  IT = 'IT',
  KO = 'KO',
  PT = 'PT',
  RU = 'RU',
  ES = 'ES',
}

enum Theme {
  Dark = 'Dark',
  Light = 'Light',
}

enum UserActionType {
  SET_USER = 'SET_USER',
  LOG_IN = 'LOG_IN',
  LOG_OUT = 'LOG_OUT',
  SET_LANGUAGE = 'SET_LANGUAGE',
  SET_THEME = 'SET_THEME',
  SET_CURRENCY = 'SET_CURRENCY',
  TOGGLE_NOTIFICATION = 'TOGGLE_NOTIFICATION',
}

interface UserState {
  name: string;
  email: string;
  isLoggedIn: boolean;
  currency: Currency;
  language: Language;
  theme: Theme;
  notificationSettings: {
    expenseAlert: boolean;
    budget: boolean;
    tipsArticle: boolean;
  };
}

type SetUserAction = {
  type: UserActionType.SET_USER;
  payload: Partial<UserState>;
};
type LogInAction = { type: UserActionType.LOG_IN };
type LogOutAction = { type: UserActionType.LOG_OUT };
type SetLanguageAction = {
  type: UserActionType.SET_LANGUAGE;
  payload: Language;
};
type SetThemeAction = { type: UserActionType.SET_THEME; payload: Theme };
type SetCurrencyAction = {
  type: UserActionType.SET_CURRENCY;
  payload: Currency;
};
type ToggleNotificationAction = {
  type: UserActionType.TOGGLE_NOTIFICATION;
  payload: keyof UserState['notificationSettings'];
};

type UserAction =
  | SetUserAction
  | LogInAction
  | LogOutAction
  | SetLanguageAction
  | SetThemeAction
  | SetCurrencyAction
  | ToggleNotificationAction;

const initialState: UserState = {
  name: 'john',
  email: 'johndoe@gmail.com',
  isLoggedIn: false,
  currency: Currency.USD,
  language: Language.EN,
  theme: Theme.Light,
  notificationSettings: {
    expenseAlert: false,
    budget: false,
    tipsArticle: false,
  },
};

const UserContext = createContext<UserState | undefined>(undefined);
const UserDispatchContext = createContext<Dispatch<UserAction> | undefined>(
  undefined,
);

function userReducer(state: UserState, action: UserAction): UserState {
  switch (action.type) {
    case UserActionType.SET_USER:
      return { ...state, ...action.payload };
    case UserActionType.LOG_IN:
      return { ...state, isLoggedIn: true };
    case UserActionType.LOG_OUT:
      return { ...state, isLoggedIn: false };
    case UserActionType.SET_LANGUAGE:
      return { ...state, language: action.payload };
    case UserActionType.SET_THEME:
      return { ...state, theme: action.payload };
    case UserActionType.SET_CURRENCY:
      return { ...state, currency: action.payload };
    case UserActionType.TOGGLE_NOTIFICATION:
      return {
        ...state,
        notificationSettings: {
          ...state.notificationSettings,
          [action.payload]: !state.notificationSettings[action.payload],
        },
      };
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
