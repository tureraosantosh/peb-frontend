import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {
    form!: FormGroup;


    formConfig = [
        { key: 'Email', label: 'Email Id', type: 'email', required: true },
        { key: 'Password', label: 'Password', type: 'password', required: true, minLength: 6, maxLength: 10 },
    ];

    constructor(private fb: FormBuilder) { }
    ngOnInit() {
        const group: any = {};

        this.formConfig.forEach(field => {
            const validators = [];

            if (field.required) {
                validators.push(Validators.required);
            }

            if (field.type === 'email') {
                validators.push(Validators.email);
            }

            if (field.minLength) {
                validators.push(Validators.minLength(field.minLength));
            }

            if (field.maxLength) {
                validators.push(Validators.maxLength(field.maxLength));
            }

            group[field.key] = new FormControl('', validators);
        });

        this.form = new FormGroup(group);


    }

    getControl(name: string): FormControl {
        return this.form.get(name) as FormControl;
    }

    submit() {
        if (this.form.valid) {
            console.log(this.form.value);
        } else {
            this.form.markAllAsTouched();
        }
    }
}