import { Component, OnInit, Input } from '@angular/core';
import { CollapsibleTableService } from '../collapsible-table.service';

@Component({
  selector: 'app-collapsible-header',
  templateUrl: './collapsible-header.component.html',
  styleUrls: ['./collapsible-header.component.css']
})
export class CollapsibleHeaderComponent implements OnInit {

  @Input() item
  constructor(public service: CollapsibleTableService) { }

  ngOnInit() {
  }

  getThumnail( prop ) {
    console.log(prop)
    return prop['url'] ? prop['url'] : prop
  }


  onExpand(id) {
    $(`#${id} .collapsible-body`).slideToggle()
  }

}
