export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export class UsersService {
  async getAll(): Promise<{
    users: IUser[];
    total: number;
    skip: number;
    limit: number;
  }> {
    const res = await fetch('https://dummyjson.com/users');

    return res.json();
  }
}
