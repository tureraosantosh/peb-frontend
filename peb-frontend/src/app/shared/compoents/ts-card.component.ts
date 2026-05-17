import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <mat-card class="custom-card">
      <!-- Header -->
      <mat-card-header *ngIf="title">
        <mat-card-title>{{ title }}</mat-card-title>
        <mat-card-subtitle *ngIf="subtitle">{{ subtitle }}</mat-card-subtitle>
      </mat-card-header>

      <!-- Content -->
      <mat-card-content>
        <ng-content></ng-content>
      </mat-card-content>

      <!-- Actions -->
      <mat-card-actions *ngIf="showActions">
        <ng-content select="[card-actions]"></ng-content>
      </mat-card-actions>

    </mat-card>
  `,
  styles: [`
 .custom-card {
      max-width: auto;
      margin: 20px auto;
       border-radius: 16px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      transition: all 0.4s ease;

      /* background: var(  --bg-light-aqua-green); */
    }

    .custom-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    }

    mat-card-title {
      font-size: 20px;
      font-weight: 200;
    }

    mat-card-subtitle {
      font-size: 14px;
      color: #777;
    }

    mat-card-content {
      margin-top: 10px;
    }

    mat-card-actions {
      display: flex;
      justify-content: flex-end;
      margin-top: 10px;
    }
  `]
})
export class CardComponent {
  @Input() title!: string;
  @Input() subtitle: string = '';
  @Input() showActions: boolean = false;
}