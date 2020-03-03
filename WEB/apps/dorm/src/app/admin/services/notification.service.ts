import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, finalize, map, retry } from 'rxjs/operators';
import { EntityService, IPagination } from '@app/shared';
import { environment } from '@env-dorm/environment';
import { AppNotification } from '@app/theme';

@Injectable({
  providedIn: 'root',
})
export class NotificationService extends EntityService<AppNotification> {
  // Optionally overwrite baseUrl
  public baseUrl = environment.API_BASE_URL;
  readonly entityPath = 'notifications';

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getAll(): Observable<AppNotification[]> {
    const params = new HttpParams().set('order', 'ASC').set('read', 'false');
    this.loadingSubject.next(true);
    return this.httpClient.get<IPagination<AppNotification>>(`${this.baseUrl}/${this.entityPath}`, { params }).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError),
      finalize(() => this.loadingSubject.next(false)),
      // return without count
      map(data => data.items),
    );
  }

  delete(id: number | string) {
    this.loadingSubject.next(true);
    return this.httpClient.delete(`${this.baseUrl}/${this.entityPath}/${id}`).pipe(
      catchError(this.handleError),
      finalize(() => this.loadingSubject.next(false)),
    );
  }

  send(id: number | string) {
    this.loadingSubject.next(true);
    return this.httpClient.post(`${this.baseUrl}/${this.entityPath}/send`, { id }).pipe(
      catchError(this.handleError),
      finalize(() => this.loadingSubject.next(false)),
    );
  }
}
