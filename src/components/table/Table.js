import { ExcelComponent } from "../../core/ExcelComponent";
import { createTable } from "./table.template";
import { $ } from "../../core/dom";
import { resizeHandler } from "./table.resize";
import { shouldResize } from "./table.functions";

export class Table extends ExcelComponent {
  static className = 'excel__table'
  constructor($root){
    super($root, {
      listeners: ['click', 'mousedown', 'mousemove', 'mouseup']
    });
  }

  toHTML(){
    return createTable(50);
  }

  onMousedown(event){  
    if (shouldResize(event)){
      resizeHandler(this.$root, event)
    }
  }

  onClick(){

  }

  onMousemove(){

  }

  onMouseup(){

  }
  
}