import {Injectable} from "@angular/core";
import {IUser} from "./user.model";
import {delay, EMPTY, Observable, throwError} from "rxjs";


@Injectable()

export class DataRepositoryService {

  currentUser: IUser | null = null;

  constructor() {
  }

  saveUser(user: IUser): Observable<IUser> {
      user.classes = user.classes || [];
      this.currentUser = user;

      return EMPTY.pipe(delay(1000))
  }

  signIn(credentials: any ) : Observable<any> {
    //Never, ever check credentials in client-side code.
    //This code is only here to supply a fake endpoint for signing in.
    if (credentials.email !== 'me@whitebeards.edu' || credentials.password !== 'super-secret')
      return throwError(() => new Error('Invalid login'));

    this.currentUser = {
      userId: 'e61aebed-dbc5-437a-b514-02b8380d8efc',
      firstName: 'Jim',
      lastName: 'Cooper',
      email: 'me@whitebeards.edu',
      classes: []
    };

    return EMPTY;
  }

}
