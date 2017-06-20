import messageBox from './src/messagebox/main'

const install = (Vue) => {
  Vue.components(messageBox.name, messageBox)
}

export {
  messageBox
}
