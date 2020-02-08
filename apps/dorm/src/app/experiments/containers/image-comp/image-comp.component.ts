import { Component, OnInit } from '@angular/core';
import { Crumb } from '@app/theme';

@Component({
  selector: 'ngx-image-comp',
  templateUrl: './image-comp.component.html',
  styleUrls: ['./image-comp.component.scss'],
})
export class ImageCompComponent implements OnInit {
  crumbs: ReadonlyArray<Crumb> = [
    { name: 'Dashboard', link: '/dashboard' },
    { name: 'Experiments', link: '/dashboard/experiments' },
    { name: 'Image Comp Demo' },
  ];

  constructor() {}

  ngOnInit() {}
}
