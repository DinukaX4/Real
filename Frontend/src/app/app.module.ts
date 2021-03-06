import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './view/components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './view/dashboard/dashboard.component';
import { UserProfileComponent } from './view/user-profile/user-profile.component';
import { TableListComponent } from './view/table-list/table-list.component';
import { TypographyComponent } from './view/typography/typography.component';
import { IconsComponent } from './view/icons/icons.component';
import { MapsComponent } from './view/maps/maps.component';
import { NotificationsComponent } from './view/notifications/notifications.component';
import { UpgradeComponent } from './view/upgrade/upgrade.component';
import { LoginComponent } from './view/login/login.component';
import { NewAdminRegistrationComponent } from './view/new-admin-registration/new-admin-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    LoginComponent,
    NewAdminRegistrationComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
RouterModule,    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
