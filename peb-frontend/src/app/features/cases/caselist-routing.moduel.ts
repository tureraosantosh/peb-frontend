import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CaseListComponent } from "./components/caselist/case-list.component";
import { ViewFullCaseComponent } from "./components/viewfullcase/viewfullcase.component";

const routes: Routes = [

    { path: '', component: CaseListComponent },
    { path: '/viewfullcase', component: ViewFullCaseComponent }

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CaseListRoutingModule { }
