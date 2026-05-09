import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { ColDef, GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'app-table',
  template: `
    <div class="ag-theme-alpine custom-grid">
      <ag-grid-angular
        style="width: 100%; height: 100%;"
        [rowData]="rowData"
        [columnDefs]="columnDefs"
        [defaultColDef]="defaultColDef"
        [pagination]="true"
        [paginationPageSize]="10"
        (gridReady)="onGridReady($event)">
      </ag-grid-angular>
    </div>
  `,
  styles: [`
    .custom-grid {
      width: 100%;
      height: 450px;
      border: none !important;
      border-radius:12px;
      padding: 10px;
    }
  `],
  encapsulation: ViewEncapsulation.None
})
export class TableComponent {
  @Input() rowData: any[] = [];
  @Input() columnDefs: ColDef[] = [];
  @Output() cellClicked = new EventEmitter<any>();
  @Output() rowClicked = new EventEmitter<any>();

  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    flex: 1
  };

  onGridReady(params: GridReadyEvent) {
    params.api.sizeColumnsToFit();
  }
}