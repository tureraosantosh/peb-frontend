import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  template: `
    <mat-icon
      [ngClass]="customClass"
      [style.fontSize.px]="size"
      [style.color]="color">
      {{ name }}
    </mat-icon>
  `,
  styles: [`
    mat-icon {
      vertical-align: middle;
      cursor: pointer;
      transition: 0.3s ease;
    }

    mat-icon:hover {
      opacity: 0.8;
    }
  `]
})
export class IconComponent {

  @Input() name: string = 'home';     // icon name
  @Input() size: number = 24;         // px
  @Input() color: string = '';    // color
  @Input() customClass: string = '';  // extra classes

}