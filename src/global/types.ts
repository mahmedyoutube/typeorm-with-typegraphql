export interface IUser {
  email: string;
  id: number;
}

export interface IGraphQLCotext {
  req: Request;
  currentUser?: IUser;
}
