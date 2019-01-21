export interface IAction {
  payload: {
    lang: string;
  };
  type: string;
}

export interface ILocaleContainerProps {
  lang: string;
  changeLangAction: (lang: string) => void;
}

export interface ILocaleContainerState {
  langs: string[];
}

export interface ILocaleProviderProps {}

export interface ILocaleProviderState {}

export interface ILocaleViewProps {
  lang: string;
  langs: string[];
  onChange: (name: string, value: string) => void;
}

export interface ILocaleViewState {}

export interface IStore {
  lang: string;
}
