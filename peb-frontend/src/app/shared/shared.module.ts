import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule, MatLabel } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";

import { CardComponent } from "./compoents/ts-card.component";
import { AppSidebarComponent } from "./compoents/ts-sidebar.component";
import { AppSearchComponent } from "./compoents/ts-search.component";
import { AppFilterComponent } from "./compoents/ts-filter.component";
import { AgGridModule } from "ag-grid-angular";
import { TableComponent } from "./compoents/ts-table.component";

import { ModalComponent } from "./compoents/ts-modal.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { NavbarComponent } from "./compoents/ts-Navbar.component";
import { AppButtonComponent } from "./compoents/ts-button.component";
import { IconComponent } from "./compoents/ts-icon.component";
import { tsInputComponent } from "./compoents/ts-input/ts-input.component";



@NgModule({
    declarations: [

        CardComponent,
        AppButtonComponent,
        AppSidebarComponent,
        AppSearchComponent,
        AppFilterComponent,
        TableComponent,
        IconComponent,
        ModalComponent,
        NavbarComponent,
        tsInputComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatSelectModule,
        MatInputModule,
        AgGridModule,
        MatDialogModule,
        MatToolbarModule,
        MatBadgeModule,
        FormsModule,

    ],
    bootstrap: [],
    exports: [

        CardComponent,
        AppButtonComponent,
        AppSidebarComponent,
        AppSearchComponent,
        AppFilterComponent,
        TableComponent,
        IconComponent,
        ModalComponent,
        NavbarComponent,
        tsInputComponent
    ]
})
export class ShareModule { };