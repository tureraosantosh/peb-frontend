import { Component } from "@angular/core";
import { FormBuilder, FormControl } from "@angular/forms";

@Component({
    selector: 'app-viewfullcase',
    templateUrl: 'viewfullcase.component.html',
    styleUrls: ['./viewfullcase.component.css']
})

export class ViewFullCaseComponent {

    // parent.component.ts
    constructor(private fb: FormBuilder) {

    }
    caseSections: any[] = [

        {
            id: 'physician',
            title: 'Physician Information',
            icon: 'supervised_user_circle',

            fields: [
                {
                    label: 'First Name*',
                    value: 'Test First Name'
                },
                {
                    label: 'Last Name*',
                    value: 'Test Last Name'
                },
                {
                    label: 'NPI*',
                    value: '1234567890'
                },
                {
                    label: 'Phone',
                    value: 'Test Phone'
                },
                {
                    label: 'Fax*',
                    value: 'Test Fax'
                },
                {
                    label: 'State',
                    value: 'Test State'
                }
            ]
        },

        {
            id: 'patient',
            title: 'Patient Information',
            icon: 'personal_injury',

            fields: [
                {
                    label: 'First Name*',
                    value: 'Test Patient First'
                },
                {
                    label: 'Middle Name',
                    value: 'Test Middle'
                },
                {
                    label: 'Last Name*',
                    value: 'Test Patient Last'
                },
                {
                    label: 'DOB*',
                    value: '01/01/1990'
                },
                {
                    label: 'Gender*',
                    value: 'Male'
                },
                {
                    label: 'Patient ID*',
                    value: '983000'
                }
            ]
        },

        {
            id: 'service',
            title: 'Service & Facility',
            icon: 'apartment',

            fields: [
                {
                    label: 'Service Start*',
                    value: 'Test Date 12:00 AM'
                },
                {
                    label: 'Facility Name*',
                    value: 'Test Facility Name'
                },
                {
                    label: 'Transaction ID*',
                    value: 'TEST_TRANS_123'
                }
            ]
        },

        {
            id: 'insurance',
            title: 'Insurance Information',
            icon: 'shield',

            buttonText: '+ Add Another Insurance',

            fields: [
                {
                    label: 'Insurance Type*',
                    value: 'Primary'
                },
                {
                    label: 'Insurance Name*',
                    value: 'Test Aetna'
                },
                {
                    label: 'Member ID*',
                    value: 'RN3781'
                }
            ]
        },

        {
            id: 'procedure',
            title: 'Procedure Information',
            icon: 'description',

            fields: [
                {
                    label: 'CPT Code*',
                    value: '74181'
                },
                {
                    label: 'Test Name',
                    value: 'Test MRI Abdomen'
                },
                {
                    label: 'Body Part',
                    value: 'Abdomen'
                }
            ]
        },

        {
            id: 'icd',
            title: 'ICD Information',
            icon: 'medical_services',
            buttonText: '+ Add Another ICD',
            gridStyle: '1fr 2fr',
            fields: [
                {
                    label: 'ICD Code*',
                    value: 'R50'
                },
                {
                    label: 'Description',
                    value: 'Test Fever of Unknown Origin'
                }
            ]
        },

        {
            id: 'clinicals',
            title: 'Clinicals',
            icon: 'monitor_heart',

            file: {
                fileName: 'test_clinical_report.pdf',
                uploadedTime: 'Uploaded 2 hours ago'
            },

            uploadText:
                'Click to upload clinical files or drag & drop'
        }

    ];

    trackBySection(index: number, item: any) {
        return item.id
    }

    generateKey(label: string): string {

        return label
            .replace('*', '')
            .replace(/\s+/g, '')
            .toLowerCase();

    }
    dynamicForms: any = {};

    addNewCard(index: number) {
        console.log("add new card ............!")

        const section =
            this.caseSections[index];

        if (!section) return;

        /* ONLY ALLOW FOR THESE */

        if (
            section.id !== 'insurance' &&
            section.id !== 'icd'
        ) {
            return;
        }

        const count =
            this.caseSections.filter(
                (x: any) =>
                    x.id.startsWith(section.id)
            ).length;

        const newSection = {

            ...section,

            id:
                section.id + '_' + count,

            title:
                section.title + ' #' + count,

            fields:
                section.fields
                    ? section.fields.map((field: any) => ({
                        ...field
                    }))
                    : []

        };

        /* CREATE FORM */

        const group: any = {};

        if (newSection.fields) {

            newSection.fields.forEach((field: any) => {

                const key =
                    this.generateKey(field.label);

                group[key] =
                    new FormControl('');

            });

        }

        this.dynamicForms[newSection.id] =
            this.fb.group(group);

        this.caseSections.splice(
            index + 1,
            0,
            newSection
        );

        /* ADD ONLY ONCE */

        // this.caseSections = [
        //   ...this.caseSections,
        //   newSection
        // ];
    }



}