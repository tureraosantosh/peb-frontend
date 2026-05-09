import { Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
    selector: "app-input",
    template: `
    <div class="form-container" [ngClass]="layout">
 
    <!-- label (for row layout) -->
<label *ngIf="layout ==='row'" class="row-label">
    {{label}}
</label>

<mat-form-field appearance="outline" class="full-width custom-field">
<!-- column layout label  -->
 <mat-label *ngIf="layout === 'column'"> {{label}} </mat-label>

 <input
matInput
[type]="type"
[formControl]="control"
[placeholder]="placeholder"
>

<mat-error *ngIf="control.touched && control.invalid">
<span *ngIf="control.errors?.['required']">
    {{label}} is requried
</span>

<span *ngIf="control.errors?.['email']">
    invalid email format
</span>
<span *ngIf="control.errors?.['minlength']">
Min{{control.errors?.['minlength'].requiredLength}} chars
</span>

<span *ngIf="control.errors?.['maxlength']">
Max{{control.errors?.['maxlength'].requiredLength}} chars
</span>

<span *ngIf="control.errors?.['pattern']">
Invalid Format
</span>
</mat-error>

</mat-form-field>

    </div>
    `,
    styles: [`
        .form-container{
            width: 100%;
            margin-bottom: 16px;
        }
        .column{
            display: flex;
            flex-direction: center;
            gap: 10px;
        }
        .row-label{
            width: 150px;
            font-weight: 500;
            color: #555;
        }
        .full-width{
            width: 100%;
        }
        .custom-field{
            flex: 1;
        }
        input.mat-input-element{
            font-size: 84px;
            padding: 1px 0;
        }
.mat-form-field-appearance-outline .mat-form-field-outline{
border-radius: 8px;
color: #ccc;
}

.mat-form-field.mat-focused .mat-form-field-outline-thick{
    color: #3f51b5;
    
}
.mat-form-field.mat-form-field-invalid .mat-form-field-outline-thick{
    color: #f44336;
}
mat-error{
    font-size: 12px;
}

@media(max-width:768px){
.row{
    flex-direction: column;
    align-items: stretch
};
.row-label{
    width: 100%;
}
}

        `]
})
export class tsInputComponent {

    @Input() label!: string;
    @Input() type: string = "text";
    @Input() placeholder: string = "";
    @Input() control!: FormControl
    @Input() layout: 'row' | 'column' = 'column';
}
