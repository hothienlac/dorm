import { Component, OnInit } from '@angular/core';
import { Crumb } from '@app/theme';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '@env-dorm/environment';

@Component({
  selector: 'ngx-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  crumbs: ReadonlyArray<Crumb> = [{ name: 'Dashboard', link: '/dashboard' }];

  private baseUrl = environment.API_BASE_URL;

  constructor(private httpClient: HttpClient) {}

  check() {
    this.httpClient.get<string>(`${this.baseUrl}/hello`).subscribe(x => console.log(x))
  }

  ngOnInit() {}
}
