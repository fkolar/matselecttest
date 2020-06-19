import {AfterViewInit, ChangeDetectorRef, Component, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatSelect} from '@angular/material/select';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'matselecttest';

  toppings = new FormControl();

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato', 'Extra 1cheese', 'Mushroom1', 'On1ion', 'Pepper1oni', 'Saus1age', 'Tom1ato'];


  @ViewChild(MatSelect)
  select: MatSelect;


  constructor(private cd: ChangeDetectorRef) {
  }

  ngAfterViewInit(): void {
    this.select._positions =
      [{
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top'
      },
        {
          originX: 'start',
          originY: 'top',
          overlayX: 'start',
          overlayY: 'bottom'
        }
      ];

    this.cd.detectChanges();
  }


}
