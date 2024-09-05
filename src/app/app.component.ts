
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';
import { ContentWrapperComponent } from './content-wrapper/content-wrapper.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { ControlSidebarComponent } from './control-sidebar/control-sidebar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MainHeaderComponent,
    MainSidebarComponent,ContentWrapperComponent,MainFooterComponent,ControlSidebarComponent

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'apps';
}
