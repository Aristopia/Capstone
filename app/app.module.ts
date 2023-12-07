import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDatepickerModule } from '@angular/material/datepicker';

import { MatFormFieldModule } from '@angular/material/form-field';

import { MatNativeDateModule } from '@angular/material/core'
import { MatInputModule } from '@angular/material/input';

import { MatIconModule } from '@angular/material/icon';


import {MatTreeModule} from '@angular/material/tree';

import {MatButtonModule} from '@angular/material/button';
// import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatDividerModule} from '@angular/material/divider';

import {MatButtonToggleModule} from '@angular/material/button-toggle';


import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule }  from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { AngularRoutingModule } from './angular-routing';
import { MenuComponent } from './menu/menu.component';
import { GuideComponent } from './guide/guide.component';
import { GuideMenuComponent } from './guide-menu/guide-menu.component';
import { GuideLinuxComponent } from './guide-linux/guide-linux.component';
import { GuideKismetComponent } from './guide-kismet/guide-kismet.component';
import { GuideSetupComponent } from './guide-setup/guide-setup.component';
import { BootUsbComponent } from './boot-usb/boot-usb.component';
import { HomeComponent } from './home/home.component';
import { MenuHomeComponent } from './menu-home/menu-home.component';
import { GuideWiresharkComponent } from './guide-wireshark/guide-wireshark.component';
import { FileUploadComponent } from './file-upload/file-upload.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GuideComponent,
    GuideMenuComponent,
    GuideLinuxComponent,
    GuideKismetComponent,
    GuideSetupComponent,
    BootUsbComponent,
    HomeComponent,
    MenuHomeComponent,
    GuideWiresharkComponent,
    FileUploadComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule,
    MatTreeModule,
    MatButtonModule,
    MatDividerModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatSelectModule,
    FormsModule,
    CommonModule,
    MatExpansionModule,
    MatCardModule,
    AngularRoutingModule,

    // NoopAnimationsModule
  ],
  exports: [MatDatepickerModule,
    MatFormFieldModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
