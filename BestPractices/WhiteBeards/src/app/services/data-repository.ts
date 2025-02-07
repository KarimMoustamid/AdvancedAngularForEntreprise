import {Injectable} from "@angular/core";
import {IUser} from "./user.model";


@Injectable()

export class DataRepositoryService {

  currentUser: IUser | null = null;
}
