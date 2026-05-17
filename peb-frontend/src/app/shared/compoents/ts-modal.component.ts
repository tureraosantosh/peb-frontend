import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-modal',
    template: `
    <div class="overlay" *ngIf="isOpen" (click)="onOverlayClick($event)">

      <div class="modal" (click)="$event.stopPropagation()">

        <!-- Header -->
        <div class="modal-header">
          <h3 class="title">{{ title }}</h3>
          <button class="close-btn" (click)="close()">×</button>
        </div>

        <!-- Body -->
        <div class="modal-body">
          <ng-content></ng-content>
        </div>

        <!-- Footer (optional) -->
        <div class="modal-footer" *ngIf="showFooter">
          <ng-content select="[modal-footer]"></ng-content>
        </div>

      </div>

    </div>
  `,
    styles: [`
    .overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      animation: fadeIn 0.2s ease;
    }

    .modal {
      width: 900px;
      max-width: 95%;
      background: #ffffff;
      border-radius: 6px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.2);
      animation: scaleIn 0.2s ease;
      display: flex;
      flex-direction: column;
    }

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 14px 18px;
      border-bottom: 1px solid #e5e7eb;
      font-weight: 600;
    }

    .title {
      margin: 0;
      font-size: 16px;
    }

    .close-btn {
      border: none;
      background: transparent;
      font-size: 20px;
      cursor: pointer;
    }

    .modal-body {
      padding: 16px;
      max-height: 70vh;
      overflow-y: auto;
    }

    .modal-footer {
      padding: 12px 16px;
      border-top: 1px solid #e5e7eb;
      display: flex;
      justify-content: flex-end;
      gap: 10px;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes scaleIn {
      from { transform: scale(0.95); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
  `]
})
export class ModalComponent {

    @Input() isOpen: boolean = false;
    @Input() title: string = '';
    @Input() closeOnOutsideClick: boolean = true;
    @Input() showFooter: boolean = false;

    @Output() isOpenChange = new EventEmitter<boolean>();
    @Output() closed = new EventEmitter<void>();

    close() {
        this.isOpen = false;
        this.isOpenChange.emit(false);
        this.closed.emit();
    }

    onOverlayClick(event: MouseEvent) {
        if (this.closeOnOutsideClick) {
            this.close();
        }
    }
}