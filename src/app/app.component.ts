import { Component } from '@angular/core'; //using kısmı gibii.

@Component({  //HTML'in datasını yönettiğimz yer.
  selector: 'app-root', //app-root tagini tanıyabilmesi için selector'e ekliyoruz.
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] //HTML'in şekilli şukullu olmasını sağladığmız yer.
})
export class AppComponent {
  title: string = 'northwind'; //string ekleyerek type security yapıyoruz.
  user: string = "Ali Konar";
  
}
