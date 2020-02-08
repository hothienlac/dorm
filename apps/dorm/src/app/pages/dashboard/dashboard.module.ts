import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilePondModule, registerPlugin } from 'ngx-filepond';

import { MaskModule, DateFnsModule } from '@app/@utils';
import { AuthGuard } from '@app/auth';
import { ChatBoxModule } from '@app/theme';
import { SharedModule } from '@app/shared';
import { BreadcrumbsModule } from '@app/theme';

import { DashboardLayoutComponent } from './containers/dashboard-layout/dashboard-layout.component';
import { OverviewComponent } from './containers/overview/overview.component';
import { SettingsComponent } from './containers/settings/settings.component';
import { RainbowComponent } from './components/rainbow/rainbow.component';
import { QuickpanelModule } from '@app/theme';
import { ToolbarModule } from '@app/theme';
import { SidenavModule } from '@app/theme';
import { environment } from '@env-dorm/environment';
import { ProfileComponent } from './containers/profile/profile.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppProfileComponent } from './components/app-profile/app-profile.component';

// Registering plugins
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginImageCrop from 'filepond-plugin-image-crop';
import FilePondPluginImageResize from 'filepond-plugin-image-resize';
import FilePondPluginImageTransform from 'filepond-plugin-image-transform';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';

registerPlugin(
  FilePondPluginFileEncode,
  FilePondPluginFileValidateSize,
  FilePondPluginFileValidateType,
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginImageCrop,
  FilePondPluginImageResize,
  FilePondPluginImageTransform,
);

const matModules = [
  MatSidenavModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
  MatDividerModule,
  MatListModule,
  MatRadioModule,
  MatSlideToggleModule,
];

@NgModule({
  imports: [
    SharedModule,
    BreadcrumbsModule,
    [...matModules],
    SidenavModule,
    ToolbarModule,
    QuickpanelModule,
    DateFnsModule,
    MaskModule,
    FilePondModule,
    // FIXME: AOT not working with environment.xyz
    ChatBoxModule.forRoot({
      accessToken: '37808bf14a19406cbe2a50cfd1332dd3', // environment.dialogFlow.apiToken
    }),
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      {
        path: '',
        component: DashboardLayoutComponent,
        canActivate: [AuthGuard],
        data: { title: 'Dashboard', depth: 1, roles: [] },
        children: [
          {
            path: '',
            component: OverviewComponent,
            data: { title: 'Overview' },
          },
          {
            path: 'profile',
            component: ProfileComponent,
            data: { title: 'Settings', depth: '2' },
          },
          {
            path: 'settings',
            component: SettingsComponent,
            data: { title: 'Settings', depth: '2' },
          },
          {
            path: 'grid',
            loadChildren: () => import('../../theme/grid/grid.module').then(module => module.GridModule),
            data: { title: 'Grid', depth: 2, preload: false },
          },
          {
            path: 'experiments',
            loadChildren: () => import('@app/experiments').then(module => module.ExperimentsModule),
            data: { title: 'Experiments', depth: 2, preload: false },
          },
          {
            path: 'widgets',
            loadChildren: () => import('@app/@widgets').then(module => module.WidgetsModule),
            data: { title: 'Widgets', depth: '2', preload: false },
          },
        ],
      },
    ]),
  ],
  declarations: [
    DashboardLayoutComponent,
    OverviewComponent,
    RainbowComponent,
    ProfileComponent,
    SettingsComponent,
    AppProfileComponent,
  ],
})
export class DashboardModule {}
