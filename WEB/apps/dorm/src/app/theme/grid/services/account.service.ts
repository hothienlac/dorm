import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EntityService } from '@app/shared';
import { Account } from '../models/account.model';
import { environment } from '@env-dorm/environment';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class AccountService extends EntityService<Account> {
  // Optionally overwrite baseUrl
  public baseUrl = environment.API_BASE_URL;

  readonly entityPath = 'accounts';

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
}
