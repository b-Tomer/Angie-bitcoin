import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { ContactIndexComponent } from './pages/contact-index/contact-index.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { FormsModule } from '@angular/forms';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from './cmps/side-menu/side-menu.component';
import { AboutComponent } from './pages/about/about.component';
import { ChartComponent } from './pages/chart/chart.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { EditContactComponent } from './pages/edit-contact/edit-contact.component';
import { NgChartsModule, NgChartsConfiguration } from 'ng2-charts';
import { MoveListComponent } from './cmps/move-list/move-list.component';
import { ProfileComponent } from './pages/profile/profile.component';


@NgModule({
    declarations: [
        AppComponent,
        ContactIndexComponent,
        ContactListComponent,
        ContactPreviewComponent,
        ContactFilterComponent,
        AppHeaderComponent,
        HomePageComponent,
        SideMenuComponent,
        AboutComponent,
        ChartComponent,
        ContactDetailsComponent,
        EditContactComponent,
        MoveListComponent,
        ProfileComponent,

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        NgChartsModule,
        RouterModule.forRoot(routes)
    ],
    providers: [
        { provide: NgChartsConfiguration, useValue: { generateColors: false }}
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
