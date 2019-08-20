import {setup} from './adapter'
const lottie = require('../node_modules/lottie-web/build/player/lottie_canvas')

function loadAnimation(options) {
  ['wrapper', 'container'].forEach(key => {
    if (key in options) {
      throw new Error(`Not support '${key}' parameter in miniprogram version of lottie.`)
    }
  })
  if (typeof options.path === 'string' && !/^https?\:\/\//.test(options.path)) {
    throw new Error(`The 'path' is only support http protocol.`)
  }
  if (!options.rendererSettings || !options.rendererSettings.context) {
    throw new Error(`Parameter 'rendererSettings.context' should be a CanvasRenderingContext2D.`)
  }
  options.renderer = 'canvas'
  // options.rendererSettings.clearCanvas = false
  return lottie.loadAnimation(options)
}

export {
  setup,
  loadAnimation,
}
