import { Component, OnInit, Input } from '@angular/core';
import { CollapsibleTableService } from '../collapsible-table.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-collapsible-body',
  templateUrl: './collapsible-body.component.html',
  styleUrls: ['./collapsible-body.component.css']
})
export class CollapsibleBodyComponent implements OnInit {
  
  private _item = new BehaviorSubject<{}>({})
  @Input() set item(object: {}) { this._item.next(object) }
  get item() { return this._item.getValue() }


  attrs
  
  constructor(public service: CollapsibleTableService) { }

  

  ngOnInit() {
    this._item.subscribe(item =>{this.sortAttr(item)})
  }

  getImage(prop) {
    return prop['url'] ? prop['url'] : prop
  }


  sortAttr(item) {
    
    if (item) {

      var attrs: string[] = Object.keys(item)
      this.service.columns.forEach(col => {
        let id = attrs.findIndex(attr => attr == col.key)
        attrs.splice(id, 1)
      })
      
    
      this.attrs = attrs
    }
  }

}
