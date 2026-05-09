import { Component } from "@angular/core";

@Component({
    selector: 'app-filter',
    template: `
    <div class="filter-container">
       <!-- dropdown button -->
      <div class="filter-btn" (click)="toggleDropdown()">
        Advanced Filters (Multi-select)
         <span class="arrow" [class.open]="isOpen">&#9662;</span>
      </div>
  <!-- Dropdown Panel -->
<div class="dropdown" *ngIf="isOpen">
<label *ngFor="let option of options"  class="option">
    <input type="checkbox"
    [checked]="isSelected(option)"
    (change)="onSelect(option)"
    >
    {{option}}
</label>
</div>


    </div>
    `,
    styles: [`
        .filter-container {
      position: relative;
      width: 260px;
      font-family: Arial, sans-serif;
      margin-top: 20px;
      margin-left: 130px;
    }

    /* Button */
    .filter-btn {
      border: 1px solid #d1d5db;
      padding: 10px 14px;
      border-radius: 8px;
      background: #f9fafb;
      cursor: pointer;
      font-size: 14px;
      color: #374151;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .filter-btn:hover {
      background: #f3f4f6;
    }

    /* Arrow */
    .arrow {
      font-size: 12px;
      transition: transform 0.2s ease;
    }

    .arrow.open {
      transform: rotate(180deg);
    }

    /* Dropdown */
    .dropdown {
      position: absolute;
      top: 45px;
      left: 0;
      width: 100%;
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      padding: 10px;
      z-index: 1000;
    }

    /* Options */
    .option {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 4px;
      cursor: pointer;
      font-size: 14px;
    }

    .option:hover {
      background: #f3f4f6;
      border-radius: 4px;
    }
        
        `]
})
export class AppFilterComponent {

    isOpen = false;
    options: string[] = [

    ];
    seleceOptions: string[] = []
    toggleDropdown() {
        this.isOpen = !this.isOpen;
    };
    onSelect(option: string) {
        if (this.seleceOptions.includes(option)) {
            this.seleceOptions = this.seleceOptions.filter(o => o !== option);
        } else {
            this.seleceOptions.push(option)
        }
        console.log("selected: ", this.seleceOptions)
    }

    isSelected(option: string): boolean {
        return this.seleceOptions.includes(option)
    }
}


