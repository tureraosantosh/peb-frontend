import { NgModule } from "@angular/core";

import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { ShareModule } from "src/app/shared/shared.module";
import { DashboardlayoutComponent } from "./dashboardlayout/dashboardlayout.component";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { CasesModule } from "../cases/case.module";

@NgModule({
    declarations: [
        DashboardlayoutComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatIconModule,
        ShareModule,
        DashboardRoutingModule,
        CasesModule

    ],
    providers: [],

})
export class DashboardModule { }