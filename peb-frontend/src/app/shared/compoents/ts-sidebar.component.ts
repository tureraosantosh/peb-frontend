import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `

<div class="sidebar">
  <a
    class="sidebar-item"
    *ngFor="let item of sidebarItems"
 
  >
    <mat-icon>{{ item.icon }}</mat-icon>
  </a>
</div>
  `,
  styles: [`
.sidebar {
  width: 90px;
  height: 100vh;
  background: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right:2px;
  position: fixed;
box-shadow: 0px 10px  10px 0px rgba(0,0,0,0.2);
}
.sidebar-item {
  width: 30px;
  height: 30px;
 margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  color:var(--bg-sidebar-icon);
  text-decoration: none;
  transition: 0.3s;
}



/* Active Routes */
.sidebar-item.active {
  background: var( --bg-sidebar-icon);
  color: #fff;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}

mat-icon {
  font-size: 24px;
}
  `]
})
export class AppSidebarComponent {

  sidebarItems = [
    { icon: 'add', route: '/dashboard' },
    { icon: 'grid_view', route: '/dashboard' },
    { icon: 'group', route: '/users' },
    { icon: 'calendar_today', route: '/calendar' },
    { icon: 'description', route: '/documents' }
  ];
}

