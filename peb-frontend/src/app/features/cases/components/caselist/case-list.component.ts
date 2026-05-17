import { Component } from "@angular/core";
import { ColDef } from 'ag-grid-community';
import { Router } from '@angular/router';

@Component({
    selector: 'app-caselist',
    templateUrl: './case-list.component.html',
    styleUrls: ['./case-list.component.css']
})
export class CaseListComponent {
    constructor(private router: Router) { }

    isModalOpen = false;
    selectedCaseId = '';

    openModal(id: string) {
        this.selectedCaseId = id;
        this.isModalOpen = true;
    }

    handleButtonClicks(action: string) {
        if (action === 'viewfullcase') {
            this.router.navigate(['/viewfullcase']);
        }
    }

    buttons = [
        {
            label: 'Download',
            icon: 'download',
            color: 'green'
        },
        {
            label: 'Print',
            icon: 'print',
            color: 'green'
        },
        {
            label: 'Complete Case',
            icon: 'check_circle',
            color: 'green'
        },
        {
            label: 'View Full Case',
            icon: 'visibility',
            color: 'green'
        }
    ];

    handleButtonClick(action: string) {
        if (action === 'Download') {
            console.log('Download Clicked');
        }

        else if (action === 'Print') {
            console.log('Print Clicked');
        }

        else if (action === 'Complete Case') {
            console.log('Complete Case Clicked');
        }

        else if (action === 'View Full Case') {
            console.log('View Full Case Clicked');
        }

    }

    columnDefs: ColDef[] = [
        {
            headerName: 'CASE ID',
            field: 'caseId',
            width: 150,
            cellRenderer: (params: any) => {
                const link = document.createElement('a');
                link.innerText = params.value;
                link.style.color = '#4f46e5';
                link.style.cursor = 'pointer';
                link.addEventListener('click', () => {
                    this.openModal(params.value);
                });
                return link;
            }

        },
        { headerName: 'PATIENT NAME', field: 'patientName' },
        { headerName: 'PHYSICIAN', field: 'physician' },
        { headerName: 'TIMELINE', field: 'timeline' },
        { headerName: 'INSURANCE PROVIDER', field: 'insuranceProvider' },
        {
            headerName: 'STATUS',
            field: 'status',
            cellRenderer: (params: any) => {
                const span = document.createElement('span');
                span.innerText = params.value;

                span.style.padding = '4px 10px';
                span.style.borderRadius = '12px';
                span.style.fontSize = '12px';

                if (params.value === 'Completed') {
                    span.style.background = '#dcfce7';
                    span.style.color = '#166534';
                } else if (params.value === 'Pending') {
                    span.style.background = '#fef3c7';
                    span.style.color = '#92400e';
                } else {
                    span.style.background = '#e5e7eb';
                }

                return span;
            }
        }
    ];

    rowData = [
        {
            caseId: 'tspl-99201',
            patientName: 'Sarah Jenkins',
            physician: 'Dr. Aris Sloan',
            timeline: 'Today',
            insuranceProvider: 'UnitedHealthcare',
            status: 'Pending'
        },
        {
            caseId: 'tspl-99202',
            patientName: 'Michael Chen',
            physician: 'Dr. Jane Aanestad',
            timeline: '1 day ago',
            insuranceProvider: 'AETNA',
            status: 'Pending'
        },
        {
            caseId: 'tspl-99203',
            patientName: 'Elena Rodriguez',
            physician: 'Dr. Aris Sloan',
            timeline: '2 days ago',
            insuranceProvider: 'Anthem BCBS',
            status: 'Completed'
        }
    ];

    onCellClicked(event: any) {
        console.log(event);
    }

    onRowClicked(event: any) {
        console.log(event);
    }
}





