export enum MenuOptions {
  HOME = 'home',
  TRANSACTION = 'transaction',
  ADDBUTTON = 'addButton',
  BUDGET = 'budget',
  PROFILE = 'profile',
}

export interface AppContextType {
  activeTab: MenuOptions | null;
  setActiveTab: (option: MenuOptions) => void;
}
