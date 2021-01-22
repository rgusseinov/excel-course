function toButton(button){
  const meta = `
    data-type="button"
    data-value="${JSON.stringify(button.value)}"
    `
  return `
    <div ${meta} class="button ${button.isActive ? 'active' : ''}">
      <i ${meta} class="material-icons">${button.icon}</i>
    </div>`
}

export function createToolbar(){
  const buttons = [
    {
      icon: 'format_align_left',
      isActive: false,
      value: {textAlign: 'left'}
    },
    {
      icon: 'format_align_center',
      isActive: true,
      value: {textAlign: 'center'}
    },
    {
      icon: 'format_align_right',
      isActive: false,
      value: {textAlign: 'right'}
    },
    {
      icon: 'format_bold',
      isActive: false,
      value: {fontWeight: 'bold'}
    },
    {
      icon: 'format_italic',
      isActive: false,
      value: {fontStyle: 'italic'}
    },
    {
      icon: 'format_underlined',
      isActive: true,
      value: {textDecoration: 'underline'}
    }
  ]
  return buttons.map(toButton).join('')


}