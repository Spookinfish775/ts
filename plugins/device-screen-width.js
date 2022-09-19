import Vue from "vue"

const DeviceBrakePoints = {
  mobile: 768,
  desctop: 1200
}

export default () => {
  const isMobile = window.screen.width < DeviceBrakePoints.mobile
  const isTablet = window.screen.width < DeviceBrakePoints.desctop
  const isDesctop = window.screen.width >= DeviceBrakePoints.desctop

  Vue.prototype.$isMobile = isMobile
  Vue.prototype.$isTablet = isTablet
  Vue.prototype.$isDesctop = isDesctop
}
