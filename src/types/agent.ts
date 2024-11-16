export type IMessage = {
  content: string;
  role: UserRole;
};

type UserRole = 'user' | 'assistant';
