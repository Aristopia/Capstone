import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuideComponent } from './guide/guide.component';
import { GuideKismetComponent } from './guide-kismet/guide-kismet.component';
import { GuideLinuxComponent } from './guide-linux/guide-linux.component';
import { GuideSetupComponent } from './guide-setup/guide-setup.component';
import { BootUsbComponent } from './boot-usb/boot-usb.component';
import { HomeComponent } from './home/home.component';
import { MenuHomeComponent } from './menu-home/menu-home.component';
import { GuideWiresharkComponent } from './guide-wireshark/guide-wireshark.component';
import { FileUploadComponent } from './file-upload/file-upload.component';


const routes: Routes = [
    {path: 'guide', component: GuideComponent,
    children: [
        {path: 'kismet-guide', component: GuideKismetComponent},
        {path: 'linux-guide', component: GuideLinuxComponent},
        {path: 'setup-guide', component: GuideSetupComponent},
        {path: 'boot-usb', component: BootUsbComponent},
        {path: 'menu-home', component: MenuHomeComponent},
        {path: 'wireshark', component: GuideWiresharkComponent}]
    },
    {path: 'file-analyzer', component: FileUploadComponent},
    {path: 'home-page', component: HomeComponent},
  ];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forRoot(routes)
    ]
})
export class AngularRoutingModule {}