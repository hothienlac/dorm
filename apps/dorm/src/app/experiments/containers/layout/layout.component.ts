import { Component, OnInit } from '@angular/core';
import { Crumb } from '@app/theme';

// TODO: https://svelte-grid.now.sh/
@Component({
  selector: 'ngx-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  crumbs: ReadonlyArray<Crumb> = [
    { name: 'Dashboard', link: '/dashboard' },
    { name: 'Experiments', link: '/dashboard/experiments' },
    { name: 'Layout Demo' },
  ];
  constructor() {}

  ngOnInit() {}
}
