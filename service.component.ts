import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  route: ActivatedRoute = inject(ActivatedRoute);

}
