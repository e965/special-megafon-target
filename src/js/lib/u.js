// https://github.com/tehcojam/cmtt-test/blob/master/source/js/modules/u.js

import { makeElement } from './dom';

export const U = {
  prepareText(text) {
    let regExps = {
      links:  new RegExp(/\[link\|(?:[^\]]+)\|([^\]]+)\]/),
      bold:   new RegExp(/\[b\|(?:[^\]]+)\]/),
      quote:  new RegExp(/\[q\|(?:[^\]]+)\]/),
    }

    let regExps_keys = Object.keys(regExps)

    let regExps_g = {}

    regExps_keys.forEach(key => {
      regExps_g[key] = new RegExp(regExps[key], 'g')
    })

    let matches = {}

    regExps_keys.forEach(key => {
      matches[key] = text.match(regExps_g[key])
    })

    if (matches.links) {
      matches.links.forEach(link => {
        let _link = link.split('|')

        let linkNode = makeElement('a', '', { innerHTML: _link[2].replace(/]/g, '') })
        linkNode.setAttribute('href', _link[1])

        text = text.replace(
          regExps.links,
          linkNode.outerHTML
        )
      })
    }

    if (matches.bold) {
      matches.bold.forEach(bold => {
        let _bold = bold.split('|')

        text = text.replace(
          regExps.bold,
          makeElement('b', '', { innerHTML: _bold[1].replace(/]/g, '') }).outerHTML
        )
      })
    }

    if (matches.quote) {
      matches.quote.forEach(quote => {
        let _quote = quote.split('|')

        text = text.replace(
          regExps.quote,
          makeElement('q', '', { innerHTML: _quote[1].replace(/]/g, '') }).outerHTML
        )
      })
    }

    return text
  },

  clearNode(_node, exceptions = []) {
    if (_node.hasChildNodes()) {
      Array.from(_node.childNodes).forEach(node_ => {
        let trigger = false

        exceptions.forEach(exception => {
          if (node_.classList.contains(exception)) {
            trigger = true
          }
        })

        if (!trigger) { _node.removeChild(node_) }
      })
    }
  },
}
