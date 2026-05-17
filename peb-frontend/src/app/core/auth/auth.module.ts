import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { AuthRoutingModule } from "./auth-routing.module"

import { AuthlayoutComponent } from "./authlayout/authlayout.component";
import { LoginComponent } from "./login/login.component";
import { ShareModule } from "src/app/shared/shared.module";

@NgModule({
    declarations: [
        AuthlayoutComponent,
        LoginComponent

    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AuthRoutingModule,
        ShareModule,
    ],
    exports: [

    ]

})
export class AuthModule { }