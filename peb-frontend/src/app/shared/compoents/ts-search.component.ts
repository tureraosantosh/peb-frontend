import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  template: `
<div class="search-container">
     <mat-icon class="search-icon">search</mat-icon>

   <input
    type="text"
    placeholder="Universal Search (Patient,Case ID,Physician)"
    [formControl]="searchControl"
   />

   </div>
    `,
  styles: [`

.search-container {


    background-color: white;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 8px 15px;
    width: 400px;
    display: flex;
    align-items: center;
}
.search-container {
    color: #888;
    margin-right: 10px;
}

.search-container:focus-within {
  background: #fff;
  border: 1px solid #f6f9f8;
  box-shadow: 0 0 8px rgba(15, 118, 110, 0.3);
}

.search-container input {
    border: none;
    outline: none;
    width: 100%;
    font-size: 0.9rem;
}

.search-icon {
  color: #777;
  margin-left: -200px !important;
}

.clear-icon:hover {
  color: #000;
}

  `],

})
export class AppSearchComponent {
  searchControl = new FormControl('');

  // clearSearch() {
  //   this.searchControl.setValue('')
  // }
}







