import { Injectable, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CollapsibleTableService implements OnInit{

    asyncItems = new Subject<any[]>()
    onEdit = new Subject<any>()
    onDelete = new Subject<any>()
    public columns: Column[]
    public items: any[]
    public objectKeys: ObjectKeys
    public content?: boolean | {}
    public options?: OPTIONS

    constructor() {

        
        this.columns = []
        this.items = []
        this.objectKeys = {
            id: 'id', 
        }
        this.content = false
        this.options = {
            edit: false,
            view: false,
            go: false,
            delete: false,
        }

        this.pushValue = ''
        
    }


    
    ngOnInit() {
        this.formatLastCol()
    }

    

    
    triggerEdit(idItem?): Observable<any> {
        var res 
        idItem? res = idItem : res = true
        this.onEdit.next(res)
        return 
    }

    triggerDel(idItem?): Observable<any> {
        var res 
        idItem? res = idItem : res = true
        this.onDelete.next(res)
        return 
    }

    triggerView(idItem?): Observable<any> {
        return idItem? idItem : true
    }

    triggerGo(idItem?): Observable<any> {
        return idItem? idItem : true
    }

    
    
    pushValue: string
    errorMsg: string
    formatLastCol() {
        if (this.columns) {

            if (this.columns.length > 10) {
                console.log(this.columns.length)
                this.errorMsg = 'No puedes agregar más de 10 columnas, agrega el resto al "content"'
            }

          var cols = []
          this.columns.forEach(col => { cols.push(col.colspan) })
          const colSize = cols.reduce((a, b) => a + b, 0)
      
          console.log(colSize)
            
          if (colSize > 10) {
            this.errorMsg = 'La suma de las columnas debe ser igual o menor a 10'
          } else if (colSize < 10) {
            let pushValue = 12 - colSize
            this.pushValue = 'push-s'+pushValue
          } else {
            this.pushValue = ''
          }
        }
  }

    
}

export interface Column {
    key: string
    name: string
    colspan: number
    type: 'string' | 'image' | 'boolean'
}


export interface ObjectKeys {
    id: string,
    name?: string,
    imageUrl?: string,
}

export interface OPTIONS {
    edit?: boolean
    view?: boolean
    go?: boolean 
    delete?: boolean
}