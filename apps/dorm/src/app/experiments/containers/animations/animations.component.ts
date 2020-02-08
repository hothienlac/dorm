import { Component, OnInit } from '@angular/core';
import { cardAnimation } from '@app/@animations';
import { Crumb } from '@app/theme';

@Component({
  selector: 'ngx-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss'],
  animations: [cardAnimation],
})
export class AnimationsComponent implements OnInit {
  crumbs: ReadonlyArray<Crumb> = [
    { name: 'Dashboard', link: '/dashboard' },
    { name: 'Experiments', link: '/dashboard/experiments' },
    { name: 'Animations' },
  ];
  animationState: string;

  constructor() {}

  ngOnInit() {}

  startAnimation(state) {
    console.log(state);
    if (!this.animationState) {
      this.animationState = state;
    }
  }

  resetAnimationState() {
    this.animationState = '';
  }
}
