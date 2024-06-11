export enum MenuOptions {
  HOME = 'home',
  TRANSACTION = 'transaction',
  ADDBUTTON = 'addButton',
  BUDGET = 'budget',
  PROFILE = 'profile',
}

export interface AppContextType {
  activeButton: MenuOptions | null;
  setActiveButton: (option: MenuOptions) => void;
}
