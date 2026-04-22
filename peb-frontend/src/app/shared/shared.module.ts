import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { tsInputComponent } from "./compoents/ts-input/ts-input.component";

const module:any=[
    FormsModule,
    FormsModule,
]
const provider:any=[
]
const directives:any=[
] 
const pipes:any=[
]
const components:any=[
    tsInputComponent,
]
@NgModule({
    declarations:[],
    imports:[],
    bootstrap:[],
    exports:[
    ...components,
    ...pipes
    ]
})
export class ShareModule{};