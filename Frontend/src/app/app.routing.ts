import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './view/dashboard/dashboard.component';
import { UserProfileComponent } from './view/user-profile/user-profile.component';
import { TableListComponent } from './view/table-list/table-list.component';
import { TypographyComponent } from './view/typography/typography.component';
import { IconsComponent } from './view/icons/icons.component';
import { MapsComponent } from './view/maps/maps.component';
import { NotificationsComponent } from './view/notifications/notifications.component';
//import { UpgradeComponent } from './upgrade/upgrade.component';
import {LoginComponent} from "./view/login/login.component";

const routes: Routes =[
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'login',        component: LoginComponent },
    { path: '',               redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
