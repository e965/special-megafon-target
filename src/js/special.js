import '../css/special.styl'

import BaseSpecial from './base'
import Data from './data'
import Svg from './svg'
import * as Share from './lib/share'
import * as Analytics from './lib/analytics'
import { shuffleArray } from './lib/array'
import { createElement } from './lib/dom'
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
    this.qLevel = 0
    this.score = 0

    this.questions = Data.quiz.questions

    this.quizLength = this.questions.length

    this.typeShowing = this.isFeed() ? 'in Feed' : 'in Page'

    this.container.dataset.theme = 'green'
  }

  getCurrentQuestion() {
    return this.questions[this.qIndex]
  }

  getCurrentLevel() {
    return this.questions[this.qIndex].levels[this.qLevel]
  }

  increaseScore() { this.score++ }

  prepareQuestions() {
    // здесь очень странные названия переменных
    // надо просто внутренне принять это и смириться
    // ¯\_(ツ)_/¯

    let act = 'answersCommonTexts'

    this.questions.forEach(question => {
      let actKeys = []

      if (act in question) {
        actKeys = Object.keys(question[act])
      }

      let qa = question.answers

      let qaKeys = Object.keys(qa)

      let qaTmpArray = []

      qaKeys.forEach(key => {
        let newAnswerObj = qa[key]

        newAnswerObj.id = key

        qaTmpArray.push(newAnswerObj)
      })

      qaTmpArray = shuffleArray(qaTmpArray)

      question.answers = qaTmpArray

      question.levels.forEach(level => {
        //level.text = U.prepareText(level.text)

        let answersTexts = level.answersTexts

        let answersTextsKeys = Object.keys(answersTexts)

        answersTextsKeys.forEach(atk => {
          let arrayLOL = ['result', 'chat']

          let qaa = {}

          if (actKeys.includes(atk)) {
            qaa = question[act][atk]
          }

          arrayLOL.forEach(lol => {
            if (lol in qaa && answersTexts[atk][lol] == '') {
              answersTexts[atk][lol] = qaa[lol]
            }

            if (lol in answersTexts[atk]) {
              answersTexts[atk][lol] = U.prepareText(answersTexts[atk][lol])
            }
          })
        })
      })

      if (act in question) { delete question[act] }
    })
  }

  createTemplates() {
    NODES.T = {}

    NODES.T.textSMS = createElement('div', [`${CSS.main}__sms`, `${CSS.main}__sms-text`])

    NODES.T.textSMS.appendChild(createElement('div', `${CSS.main}__sms--sender`))
    NODES.T.textSMS.appendChild(createElement('div', `${CSS.main}__sms--text`))

    NODES.T.faceSMS = createElement('div', [`${CSS.main}__sms`, `${CSS.main}__sms-face`])

    NODES.T.faceSMS.appendChild(createElement('img', `${CSS.main}__sms--face`))
    NODES.T.faceSMS.appendChild(createElement('img', `${CSS.main}__sms--mark`))

    NODES.T.answerItemBtn = createElement('button', `${CSS.main}__answers-item-btn`)

    NODES.T.answerItemBtn.appendChild(createElement('img', `${CSS.main}__answers-item-btn--face`))
    NODES.T.answerItemBtn.appendChild(createElement('p', `${CSS.main}__answers-item-btn--name`))
    NODES.T.answerItemBtn.appendChild(createElement('p', `${CSS.main}__answers-item-btn--company`))
  }

  createElements() {
    NODES.S = {}
    NODES.E = {}

    /* Экраны */

    NODES.S.quiz = createElement('div', [`${CSS.main}__screen`, `${CSS.main}__screen--quiz`])
    this.container.appendChild(NODES.S.quiz)

    NODES.S.final = createElement('div', [`${CSS.main}__screen`, `${CSS.main}__screen--final`])
    this.container.appendChild(NODES.S.final)

    /* Элементы */

    NODES.E.phone = createElement('div', `${CSS.main}__phone`)
    NODES.S.quiz.appendChild(NODES.E.phone)

    NODES.E.phoneNotch = createElement('div', `${CSS.main}__phone--notch`)
    NODES.E.phone.appendChild(NODES.E.phoneNotch)

    NODES.E.phoneContent = createElement('div', `${CSS.main}__phone--content`)
    NODES.E.phone.appendChild(NODES.E.phoneContent)

    NODES.E.header = createElement('div', `${CSS.main}__header`)
    NODES.E.phoneContent.appendChild(NODES.E.header)

    NODES.E.headerCounter = createElement('div', `${CSS.main}__header--counter`, {
      innerText: '0/0'
    })
    NODES.E.header.appendChild(NODES.E.headerCounter)

    NODES.E.headerOperator = createElement('div', `${CSS.main}__header--operator`, {
      innerText: 'MegaFon'
    })
    NODES.E.header.appendChild(NODES.E.headerOperator)

    NODES.E.headerSender = createElement('div', `${CSS.main}__header--sender`, {
      innerText: 'Неизвестный номер'
    })
    NODES.E.header.appendChild(NODES.E.headerSender)

    NODES.E.headerAvatar = createElement('div', `${CSS.main}__header--avatar`)
    NODES.E.header.appendChild(NODES.E.headerAvatar)

    NODES.E.chat = createElement('div', `${CSS.main}__chat`)
    NODES.E.phoneContent.appendChild(NODES.E.chat)

    NODES.E.answers = createElement('div', `${CSS.main}__answers`)

    NODES.E.answersHeader = createElement('div', `${CSS.main}__answers--header`)

    NODES.E.answersPhrase = createElement('div', `${CSS.main}__answers--phrase`, { innerText: 'Кому адресовано сообщение?' })

    NODES.E.answersHeader.appendChild(NODES.E.answersPhrase)

    NODES.E.themeSwitcher = createElement('div', `${CSS.main}__answers--theme-switcher`)

    NODES.E.themeSwitcher__label = createElement('label', '', { for: 'theme_switcher', innerText: 'Сменить тему' })
    NODES.E.themeSwitcher.appendChild(NODES.E.themeSwitcher__label)

    NODES.E.themeSwitcher__input = createElement('input', '', { type: 'checkbox', id: 'theme_switcher' })
    NODES.E.themeSwitcher__input.addEventListener('click', e => {
      this.container.dataset.theme = e.target.checked ? 'pink' : 'green'
    })
    NODES.E.themeSwitcher.appendChild(NODES.E.themeSwitcher__input)

    NODES.E.answersHeader.appendChild(NODES.E.themeSwitcher)

    NODES.E.answers.appendChild(NODES.E.answersHeader)

    NODES.E.answersMain = createElement('div', `${CSS.main}__answers--main`)

    NODES.E.answersList = createElement('ul', `${CSS.main}__answers-list`)
    NODES.E.answersMain.appendChild(NODES.E.answersList)

    NODES.E.answers.appendChild(NODES.E.answersMain)

    NODES.S.quiz.appendChild(NODES.E.answers)
  }

  spawnSMS({ type = 'text', sender = 'Неизвестный номер', text = '', tail = 'left', images = {}, success = true }) {
    let sms = document.createElement('div')

    // TODO scrollIntoView

    if (type == 'text') {
      sms = NODES.T.textSMS.cloneNode('true')

      sms.dataset.tail = tail

      U.qsf('div[class$="sender"]', sms).textContent = sender
      U.qsf('div[class$="text"]', sms).textContent = text
    } else if (type == 'face') {
      sms = NODES.T.faceSMS.cloneNode('true')

      if (success) {
        sms.dataset.success = ''
      } else {
        sms.dataset.failure = ''
      }

      U.qsf('img[class$="face"]', sms).src = images.x1
      U.qsf('img[class$="face"]', sms).srcset = images.x2
    }

    NODES.E.chat.appendChild(sms)
  }

  goToLevel(level) {
    this.spawnSMS({
      text: level.text
    })
  }

  showQuestion() {
    let currQ = this.getCurrentQuestion()

    NODES.E.headerCounter.textContent = `${this.qIndex + 1}/${this.quizLength}`

    currQ.answers.forEach(answerData => {
      let answerItem = createElement('li', `${CSS.main}__answers-list-item`)

      let answerItemBtn = NODES.T.answerItemBtn.cloneNode('true')

      U.qsf('img', answerItemBtn).src = 'img/' + Data.images.faces[answerData.id]
      U.qsf('img', answerItemBtn).srcset = 'img/' + Data.images.faces_2x[answerData.id] + ' 2x'

      U.qsf('p[class$="name"]', answerItemBtn).textContent = answerData.who
      U.qsf('p[class$="company"]', answerItemBtn).textContent = answerData.company

      answerItemBtn.addEventListener('click', e => {
        let isRight = ('right' in answerData && answerData.right)

        Analytics.sendEvent(`${this.typeShowing} — Answer (question №${this.qIndex + 1}, level ${this.qLevel + 1}, ${isRight ? 'right' : 'wrong'})`, 'Click')
      })

      answerItem.appendChild(answerItemBtn)

      NODES.E.answersList.appendChild(answerItem)
    })

    this.goToLevel(this.getCurrentLevel())
  }

  init() {
    this.setInitialParams()

    this.prepareQuestions()

    this.createTemplates()
    this.createElements()

    this.showQuestion()

    Analytics.sendEvent(`${this.typeShowing} — Show`, 'Init')
  }
}

export { Special }
