import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-authlayout',
    templateUrl: './authlayout.component.html',
    styleUrls: ['./authlayout.component.css']
})
export class AuthlayoutComponent implements OnInit {

    handleMenu(menu: any) {
        console.log(menu);
    }

    constructor() { }

    ngOnInit(): void {
    }
    handleSearch(searchText: string) {
        console.log('Search text:', searchText);
        // Implement your search logic here, e.g., navigate to a search results page or filter data
    }
}