import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-navbar',
  template: `
    <mat-toolbar class="navbar">

  <!-- 🔍 Search -->
  <div class="search-box">
    <mat-form-field appearance="outline" class="search-input">
      <mat-icon matPrefix>search</mat-icon>
      <input matInput placeholder="Universal Search (Patient, Case ID, Physician)...">
    </mat-form-field>
  </div>

  <!-- Right Side -->
  <div class="spacer"></div>

  <!-- 🔔 Notification -->
  <button mat-icon-button matBadgeColor="warn">
    <mat-icon>notifications</mat-icon>
  </button>

  <!-- 👤 User -->
  <div class="user">

    <span>Admin User</span>
  </div>

</mat-toolbar>
    `,
  styles: [
    `
    /* Container to match width from image */
.search-box {
  width: 60%; /* Occupies 60% of available navbar space */
  max-width: 800px; /* But never gets wider than 800px */
  min-width: 300px; /* And never smaller than 300px */
  margin-left:50px;
  height: 100px;
  line-height: 100px;
margin-bottom: 5px;
}

/* --- Angular Material Overrides --- */

/* 1. Set the height and background */
::ng-deep .search-input .mat-mdc-text-field-wrapper {
  height: 40px !important;
  background-color: #ffffff !important;
  display: flex;
  align-items: center;
  padding: 0 30px !important;
}

/* 2. Customize the Border Color (Soft Blue-Grey) */
::ng-deep .search-input .mdc-notched-outline__leading,
::ng-deep .search-input .mdc-notched-outline__notch,
::ng-deep .search-input .mdc-notched-outline__trailing {
  border-color: #d1dae6 !important; /* The subtle blue-grey seen in image_e80e76.png */
  border-width: 1px !important;
}

/* 3. Perfect Rounded Corners */
::ng-deep .search-input .mdc-notched-outline__leading {
  border-radius: 10px 0 0 10px !important;
  width: 15px !important;
}
::ng-deep .search-input .mdc-notched-outline__trailing {
  border-radius: 0 10px 10px 0 !important;
}

/* 4. Search Icon Alignment and Color */
::ng-deep .search-input .mat-mdc-form-field-icon-prefix {
  padding: 0 !important;
  margin-right: 8px;
  display: flex;
  align-items: center;
}

::ng-deep .search-input mat-icon {
  color: #4b4b4b !important; /* Darker grey for the icon */
  font-size: 20px !important;
  width: 20px !important;
  height: 20px !important;
}

/* 5. Placeholder and Input Text */
::ng-deep .search-input input.mat-mdc-input-element {
  font-size: 14px !important;
  color: #333 !important;
  margin-top: -2px; /* Fine-tune vertical alignment */
}

::ng-deep .search-input input::placeholder {
  color: #7a869a !important; /* Muted text color from the image */
  opacity: 1;
}

/* 6. Remove the 'notch' gap (since we aren't using a label) */
::ng-deep .search-input .mdc-notched-outline__notch {
  border-right: none !important;
  border-left: none !important;
  width: 0 !important;
}


.spacer {
  flex: 1;
}

.user {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-left: 10px;
  font-weight: 500;
}
      
        `
  ]
})
export class NavbarComponent {

  @Input() userName: string = 'Admin User';

}