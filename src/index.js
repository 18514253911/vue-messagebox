import messageBox from './src/messagebox/main'

const install = (Vue) => {
  Vue.component(messageBox.name, messageBox)
}

export default {
  messageBox
}
