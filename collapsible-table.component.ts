import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CollapsibleTableService } from './collapsible-table.service';

@Component({
  selector: 'app-collapsible-table',
  templateUrl: './collapsible-table.component.html',
  styleUrls: ['./collapsible-table.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CollapsibleTableComponent implements OnInit {

  constructor(
    public _service: CollapsibleTableService
  ) { 

  }

  ngOnInit() {
    // (function () { $('.collapsible').collapsible(); });
    
  }

}


