import '../css/special.styl'

import BaseSpecial from './base'
import Data from './data'
import Svg from './svg'
import * as Share from './lib/share'
import * as Analytics from './lib/analytics'
import { makeElement } from './lib/dom'
import { U } from './lib/u'

const CSS = {
  main: 'mgfn-trgt',
}

const NODES = {}

class Special extends BaseSpecial {
  constructor(params = {}) {
    super()

    Object.assign(this.params, params)
    this.saveParams()

    if (Data && params.data) {
      Object.assign(Data, params.data)
    }

    if (this.params.css) {
      this.loadStyles(this.params.css).then(() => this.init())
    } else {
      this.init()
    }
  }

  isFeed() {
    return this.params.isFeed
  }

  setInitialParams() {
    this.qIndex = 0
    this.score = 0

    this.container.dataset.theme = 'green'
  }

  createTemplates() {
    NODES.T = {}

    NODES.T.SMS = makeElement('template', '', {
      id: `${CSS.main}__T--sms`
    })

    let smsContent = makeElement('div', `${CSS.main}__sms`)

    smsContent.appendChild(makeElement('p', `${CSS.main}__sms--sender`))
    smsContent.appendChild(makeElement('p', `${CSS.main}__sms--text`))

    NODES.T.SMS.appendChild(smsContent)
  }

  createElements() {
    NODES.S = {}
    NODES.E = {}

    /* Экраны */

    NODES.S.quiz = makeElement('div', [`${CSS.main}__screen`, `${CSS.main}__screen--quiz`])
    this.container.appendChild(NODES.S.quiz)

    NODES.S.final = makeElement('div', [`${CSS.main}__screen`, `${CSS.main}__screen--final`])
    this.container.appendChild(NODES.S.final)

    /* Элементы */

    NODES.E.phone = makeElement('div', `${CSS.main}__phone`)
    NODES.S.quiz.appendChild(NODES.E.phone)

    NODES.E.phoneNotch = makeElement('div', `${CSS.main}__phone--notch`)
    NODES.E.phone.appendChild(NODES.E.phoneNotch)

    NODES.E.phoneContent = makeElement('div', `${CSS.main}__phone--content`)
    NODES.E.phone.appendChild(NODES.E.phoneContent)

    NODES.E.header = makeElement('div', `${CSS.main}__header`)
    NODES.E.phoneContent.appendChild(NODES.E.header)

    NODES.E.headerCounter = makeElement('div', `${CSS.main}__header--counter`, {
      innerText: '0/0'
    })
    NODES.E.header.appendChild(NODES.E.headerCounter)

    NODES.E.headerOperator = makeElement('div', `${CSS.main}__header--operator`, {
      innerText: 'Megafon LTE'
    })
    NODES.E.header.appendChild(NODES.E.headerOperator)

    NODES.E.headerSender = makeElement('div', `${CSS.main}__header--sender`, {
      innerText: 'Неизвестный абонент'
    })
    NODES.E.header.appendChild(NODES.E.headerSender)

    NODES.E.headerAvatar = makeElement('div', `${CSS.main}__header--avatar`)
    NODES.E.header.appendChild(NODES.E.headerAvatar)

    NODES.E.chat = makeElement('div', `${CSS.main}__chat`)
    NODES.E.phoneContent.appendChild(NODES.E.chat)

    NODES.E.answers = makeElement('div', `${CSS.main}__answers`)
    NODES.S.quiz.appendChild(NODES.E.answers)

    NODES.E.themeSwitcher = makeElement('div', `${CSS.main}__answers--theme-switcher`)
    NODES.E.answers.appendChild(NODES.E.themeSwitcher)

    NODES.E.themeSwitcher__label = makeElement('label', '', { for: 'theme_switcher', innerText: 'Сменить тему' })
    NODES.E.themeSwitcher.appendChild(NODES.E.themeSwitcher__label)

    NODES.E.themeSwitcher__input = makeElement('input', '', { type: 'checkbox', id: 'theme_switcher' })
    NODES.E.themeSwitcher.appendChild(NODES.E.themeSwitcher__input)

    NODES.E.themeSwitcher__input.addEventListener('click', e => {
      this.container.dataset.theme = e.target.checked ? 'pink' : 'green'
    })
  }

  init() {
    this.setInitialParams()

    this.createTemplates()
    this.createElements()

    this.typeShowing = this.isFeed() ? 'in Feed' : 'in Page'

    Analytics.sendEvent(`${this.typeShowing} — Show`, 'Init')
  }
}

export default Special
