'use strict'

const isUrl = require('is-url')
const filesize = require('filesize')

export default {
  filterDomainFromUrl: function (data) {
    if (data) {
      const domainOriginal = data
      let url = null
      if (domainOriginal && isUrl(domainOriginal) && domainOriginal.includes('.azuredatabricks.net')) {
        url = domainOriginal.split('https://').length > 1
          ? domainOriginal.split('https://')[1].split('.azuredatabricks.net')[0]
          : domainOriginal.split('azuredatabricks.net')[0]
      } else {
        url = domainOriginal.split('https://').length > 1
          ? domainOriginal.split('https://')[1]
          : domainOriginal
      }
      return url
    }
    return null
  },
  getUrlFromDomain: function (data) {
    if (data) {
      if (isUrl(data)) {
        return data
      } else {
        return `https://${data}.azuredatabricks.net`
      }
    }
  },
  hasSomeParentTheClass: function (element, classname) {
    if (element.className && element.className.split(' ').indexOf(classname) >= 0) {
      return true
    }
    return element.parentNode && this.hasSomeParentTheClass(element.parentNode, classname)
  },
  getReadableFileSize: function ({ size }) {
    if (size) {
      return filesize(size, {base: 10})
    }
  }
}
