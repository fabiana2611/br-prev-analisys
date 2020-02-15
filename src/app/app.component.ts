import { Component } from '@angular/core';
import { OpenDataBrService } from './core/http/open-data-br.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [OpenDataBrService]
})
export class AppComponent {

}
