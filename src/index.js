import messageBox from './messagebox/main'

const install = (Vue) => {
  Vue.component(messageBox.name, messageBox)
}

export {
  messageBox,
  install
}
