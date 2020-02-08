import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { AuthState } from '@app/auth';
import { Crumb } from '@app/theme';
import { ProfileState } from '@app/@core';
import { IUser } from '@dorm/models';
import { Select } from '@ngxs/store';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { Observable } from 'rxjs';

@AutoUnsubscribe()
@Component({
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent implements OnInit, OnDestroy {
  crumbs: ReadonlyArray<Crumb> = [{ name: 'Dashboard', link: '/dashboard' }, { name: 'Profile' }];

  @Select(AuthState.profile) oidcProfile$: Observable<any>;
  @Select(ProfileState.profile) appProfile$: Observable<IUser>;
  @Select(ProfileState.loading) loading$: Observable<boolean>;
  @Select(ProfileState.error) error$: Observable<string>;
  constructor(private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.error$.subscribe(err => this.snackBar.open(`Profile Error: ${err}`, '', { duration: 3000 }));
  }

  ngOnDestroy() {}
}
