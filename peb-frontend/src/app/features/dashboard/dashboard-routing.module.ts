import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardlayoutComponent } from "./dashboardlayout/dashboardlayout.component";


const routes: Routes = [
    {
        path: '', component: DashboardlayoutComponent, children: [
            { path: 'cases', loadChildren: () => import('../cases/case.module').then(m => m.CasesModule) }
        ]
    },
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }