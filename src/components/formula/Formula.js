import { ExcelComponent } from "../../core/ExcelComponent";

export class Formula extends ExcelComponent {
  static className = 'excel__formula'
  constructor($root, options){
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click', 'keydown'],
      ...options
    });
  }
  
  toHTML(){
    return `
      <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>
    `;
  }

  onInput(event){
    const text = event.target.textContent.trim()
    this.$emit('formula:input', text)
  }

  onKeydown(event) {
    if (event.key == 'Enter'){
      // console.log(this.selection);
      
    }
    
  }

  onClick(){
     
  }

}