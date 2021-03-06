import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppConfirmModule } from '@app/theme';
import { BreadcrumbsModule } from '@app/theme';
import { TruncateModule, HelperModule, NgLetModule } from '@app/@utils';
import { SharedMaterialDateModule, SharedFlexLayoutModule } from '@app/shared';

import { AccountsGridListComponent } from './containers/accounts-grid-list/accounts-grid-list.component';
import { AccountsTableComponent } from './containers/accounts-table/accounts-table.component';
import { AccountService } from './services/account.service';
import { RandomAccountService } from './services/random-account.service';
import { AccountDetailComponent } from './components/account-detail/account-detail.component';
import { AccountEditComponent } from './components/account-edit/account-edit.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

const matModules = [
  DragDropModule,
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatProgressBarModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatCardModule,
  MatButtonToggleModule,
  MatGridListModule,
  MatDividerModule,
  MatListModule,
  MatDialogModule,
  MatSelectModule,
  MatAutocompleteModule,
];

@NgModule({
  imports: [
    CommonModule,
    NgLetModule,
    BreadcrumbsModule,
    ReactiveFormsModule,
    BreadcrumbsModule,
    [...matModules],
    SharedFlexLayoutModule,
    SharedMaterialDateModule,
    AppConfirmModule,
    TruncateModule,
    HelperModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      { path: '', redirectTo: 'crud-table', pathMatch: 'full' },
      {
        path: 'crud-table',
        component: AccountsTableComponent,
        data: { title: 'Accounts', depth: 2 },
        children: [
          {
            path: ':id',
            component: AccountDetailComponent,
            data: { title: 'Account Detail' },
          },
        ],
      },
      {
        path: 'grid-list',
        component: AccountsGridListComponent,
        data: { title: 'Accounts Grid-List', depth: 3 },
      },
    ]),
  ],
  declarations: [AccountsTableComponent, AccountsGridListComponent, AccountDetailComponent, AccountEditComponent],
  entryComponents: [AccountEditComponent],
  providers: [AccountService, RandomAccountService],
})
export class GridModule {}
