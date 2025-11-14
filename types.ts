
export enum Role {
  USER = 'user',
  MODEL = 'model',
  ERROR = 'error'
}

export interface Citation {
  uri: string;
  title: string;
}

export interface Message {
  role: Role;
  content: string;
  citations?: Citation[];
}
