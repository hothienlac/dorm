import { AfterViewInit, ChangeDetectorRef, Component, Inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OAuthService } from 'angular-oauth2-oidc';

import { ROPCService } from '../../ropc.service';
import { ChangeAuthMode, AuthMode } from '../../auth.actions';

/** @dynamic */
@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public infoMsg: string;
  public errorMsg: string;
  inputType = 'password';
  visible = false;
  loginForm: FormGroup;

  constructor(
    private store: Store,
    private oauthService: OAuthService,
    @Inject(MAT_DIALOG_DATA) public data: { infoMsg: string },
    public dialogRef: MatDialogRef<LoginComponent>,
  ) {
    if (data) {
      this.infoMsg = data.infoMsg;
    }
  }

  initSSO() {
    this.store.dispatch(new ChangeAuthMode(AuthMode.ImplicitFLow /* HINT: AuthMode.CodeFLow*/))
      .subscribe(() => {
        this.oauthService.initLoginFlow();
        console.log('initSSO');
      });
  }
}
