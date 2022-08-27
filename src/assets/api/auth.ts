import { demoUsers } from './users/users';
import { IUser } from '../../app/models/user';

import { throwError, of, Observable } from 'rxjs';

export class AuthAPI {
  private authToken!: string | null;

  constructor(token: string | null) {
    this.authToken = token;
  }

  authenticateUser(username: string, password: string) {
    // Authenticate user and returns user token

    const user = demoUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (!user) {
      return throwError(() => {
        return 'User not found';
      });
    }

    return of(user.token);
  }

  getUser() {
    if (!this.authToken) {
      return throwError(() => {
        return 'No auth token provided';
      });
    }

    const user = demoUsers.find((user) => user.token === this.authToken);

    if (!user) {
      return throwError(() => {
        return 'User not found';
      });
    }

    const { department, job_description, location, name, picture, username } =
      user;

    return <Observable<IUser>>of({
      department,
      job_description,
      location,
      name,
      picture,
      username,
    });
  }
}
