import { setup, g } from './adapter'
const { window, document, navigator } = g

  ; '__LOTTIE_CANVAS__'

function loadAnimation (options) {
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
  return window.lottie.loadAnimation(options)
}

const miniprogramDestroy = window.lottie.destroy

const { freeze, unfreeze, getRegisteredAnimations } = window.lottie

function destroy (name) {
  const animations = getRegisteredAnimations() || []
  animations.forEach(animation => {
    animation.wrapper = {
      innerHTML: ''
    }
  })
  miniprogramDestroy(name)
}


export {
  setup,
  loadAnimation,
  freeze,
  unfreeze,
  destroy
}
