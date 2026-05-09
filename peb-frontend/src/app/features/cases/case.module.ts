import { NgModule } from "@angular/core";
import { CaseListComponent } from "./components/caselist/case-list.component";
import { CommonModule } from "@angular/common";
import { ShareModule } from "src/app/shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";
import { CaseListRoutingModule } from "./caselist-routing.moduel";
import { ViewFullCaseComponent } from "./components/viewfullcase/viewfullcase.component";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";


@NgModule({
    declarations: [CaseListComponent,
        ViewFullCaseComponent
    ],
    imports: [
        CommonModule,
        ShareModule,
        ReactiveFormsModule,
        CaseListRoutingModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule
    ],
    exports: []
})

export class CasesModule { }