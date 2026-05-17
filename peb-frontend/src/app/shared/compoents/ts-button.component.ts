import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button
      mat-raised-button
      [disabled]="disabled"
      class="custom-btn"
      [ngClass]="color"
      
      (click)="onClick.emit($event)"
     >
      <mat-icon *ngIf="icon" class="btn-icon">{{ icon }}</mat-icon>
      {{ label }}
    </button> 
  `,
  styles: [`
    .custom-btn {
       width:100%;
      border-radius: 8px;
      padding: 8px 16px;
      font-weight: 500;
      text-transform: none;
      transition: all 0.3s ease;
       
     
    }

    .custom-btn:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 10px rgba(0,0,0,0.15);
    }
    .btn-icon {
      margin-right: 6px;
      font-size: 18px;
      vertical-align: middle;
    }
    .green{
      background-color: var( --bg-button-green) !important;
      color: white !important;
    }
  `]
})
export class AppButtonComponent {
  @Input() label!: string;
  @Input() icon?: string;
  @Input() disabled: boolean = false;
  @Input() color!: string;
  @Input() bgColor!: string;
  @Output() onClick = new EventEmitter<Event>();
}