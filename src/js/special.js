import '../css/special.styl'

import BaseSpecial from './base'
import Data from './data'
import * as Share from './lib/share'
import * as Analytics from './lib/analytics'
import { shuffleArray } from './lib/array'
import { createElement, clearNode } from './lib/dom'
import { U } from './lib/u'

import ElementQueries from 'css-element-queries/src/ElementQueries'

const CSS = {
  main: 'mgfn-trgt',
}

const NODES = {}

const TIME = 200

const CDN_URL = 'img/'

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

    this.btnsClickAbility = true

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
            if (lol in qaa && answersTexts[atk][lol] === '') {
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

    NODES.T.faceSMS = createElement('picture', [`${CSS.main}__sms`, `${CSS.main}__sms-face`])

    NODES.T.faceSMS.appendChild(createElement('img', `${CSS.main}__sms--face`))

    NODES.T.answerItemBtn = createElement('button', `${CSS.main}__answers-item-btn`)

    NODES.T.answerItemBtn.appendChild(createElement('picture', `${CSS.main}__answers-item-btn--face`, { innerHTML: '<img>' }))
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

    NODES.E.headerSender = createElement('div', `${CSS.main}__header--sender`, { innerText: 'Неизвестный номер' })
    NODES.E.header.appendChild(NODES.E.headerSender)

    NODES.E.headerTyping = createElement('div', `${CSS.main}__header--typing`, { innerText: 'печатает', style: { display: 'none' } })
    NODES.E.header.appendChild(NODES.E.headerTyping)

    NODES.E.headerAvatar = createElement('div', `${CSS.main}__header--avatar`)
    NODES.E.header.appendChild(NODES.E.headerAvatar)

    NODES.E.chat = createElement('div', `${CSS.main}__chat`)

    NODES.E.chatBottom = createElement('div', `${CSS.main}__chat--bottom`)

    NODES.E.chat.appendChild(NODES.E.chatBottom)

    NODES.E.phoneContent.appendChild(NODES.E.chat)

    NODES.E.answers = createElement('div', `${CSS.main}__answers`, { data: { show: 'answers' } })

    NODES.E.answersHeader = createElement('div', `${CSS.main}__answers--header`)

    NODES.E.answersPhrase = createElement('div', `${CSS.main}__answers--phrase`, { innerText: 'Кому адресовано сообщение?' })

    NODES.E.answersHeader.appendChild(NODES.E.answersPhrase)

    NODES.E.themeSwitcher = createElement('div', `${CSS.main}__answers--theme-switcher`)

    NODES.E.themeSwitcher__label = createElement('label', '', { htmlFor: 'theme_switcher', innerText: 'Сменить тему' })
    NODES.E.themeSwitcher.appendChild(NODES.E.themeSwitcher__label)

    NODES.E.themeSwitcher__input = createElement('input', '', { type: 'checkbox', id: 'theme_switcher' })
    NODES.E.themeSwitcher__input.addEventListener('click', e => {
      let theme = e.target.checked ? 'pink' : 'green'

      this.container.dataset.theme = theme

      Analytics.sendEvent(`${this.typeShowing} — Theme switcher — Change to "${theme}"`, 'Click')
    })
    NODES.E.themeSwitcher.appendChild(NODES.E.themeSwitcher__input)

    NODES.E.answersHeader.appendChild(NODES.E.themeSwitcher)

    NODES.E.answers.appendChild(NODES.E.answersHeader)

    NODES.E.answersMain = createElement('div', `${CSS.main}__answers--main`)

    NODES.E.answersList = createElement('ul', `${CSS.main}__answers-list`)
    NODES.E.answersMain.appendChild(NODES.E.answersList)

    NODES.E.answersResult = createElement('div', `${CSS.main}__answers-result`)

    NODES.E.answersResultStatus = createElement('div', `${CSS.main}__answers-result--status`)
    NODES.E.answersResult.appendChild(NODES.E.answersResultStatus)

    NODES.E.answersResultText = createElement('div', `${CSS.main}__answers-result--text`)
    NODES.E.answersResult.appendChild(NODES.E.answersResultText)

    NODES.E.answersResultBtn = createElement('button', `${CSS.main}__answers-result--next-btn`, { innerText: 'Далее' })
    NODES.E.answersResult.appendChild(NODES.E.answersResultBtn)

    NODES.E.answersMain.appendChild(NODES.E.answersResult)

    NODES.E.answers.appendChild(NODES.E.answersMain)

    NODES.S.quiz.appendChild(NODES.E.answers)

    NODES.E.cache = createElement('div', `${CSS.main}__cache`)
    this.container.appendChild(NODES.E.cache)
  }

  spawnSMS({ type = 'text', sender = 'Неизвестный номер', text = '', tail = 'left', images = {}, success = true }) {
    let sms = document.createElement('div')

    if (type === 'text') {
      sms = NODES.T.textSMS.cloneNode('true')

      sms.dataset.tail = tail

      U.qsf('div[class$="sender"]', sms).textContent = sender
      U.qsf('div[class$="text"]', sms).textContent = text

    } else if (type === 'face') {
      sms = NODES.T.faceSMS.cloneNode('true')

      setTimeout(() => {
        if (success) {
          sms.dataset.success = ''
        } else {
          sms.dataset.failure = ''
        }
      }, TIME)

      U.qsf('img[class$="face"]', sms).src = images.x1
      U.qsf('img[class$="face"]', sms).srcset = images.x2
    }

    NODES.E.chat.insertBefore(sms, NODES.E.chatBottom)

    NODES.E.chatBottom.scrollIntoView({
      block: 'end',
      behavior: 'smooth'
    })
  }

  showResult(success, text = false, next) {
    NODES.E.answers.dataset.show = 'result'

    NODES.E.answersResult.dataset.right = success ? 'yes': 'no'

    NODES.E.answersResultStatus.textContent = success ? 'Доставлено' : 'Не доставлено'

    NODES.E.answersResultText.innerHTML = text ? text : ''

    switch (next) {
      case 'q':
        NODES.E.answersResultBtn.onclick = () => {
          this.nextQuestion()

          Analytics.sendEvent(`${this.typeShowing} — Next question — To question №${this.qIndex + 1}, score is ${this.score}`, 'Click')
        }
        NODES.E.answersResultBtn.textContent = 'Далее'; break

      case 'l':
        NODES.E.answersResultBtn.onclick = () => {
          this.showAnswers()
          this.nextLevel()

          Analytics.sendEvent(`${this.typeShowing} — Next level — Question №${this.qIndex + 1}, to level ${this.qLevel + 1}`, 'Click')
        }
        NODES.E.answersResultBtn.textContent = 'Попробовать снова'; break

      case 'end':
        NODES.E.answersResultBtn.onclick = () => {
          Analytics.sendEvent(`${this.typeShowing} — End — Score is ${this.score}`, 'Click')
        }
        NODES.E.answersResultBtn.textContent = 'Завершить'; break
    }

    if (!this.btnsClickAbility) {
      this.btnsClickAbility = true
    }
  }

  showAnswers() {
    NODES.E.answers.dataset.show = 'answers'
  }

  nextLevel() {
    ++this.qLevel

    this.spawnSMS({
      text: this.getCurrentLevel().text
    })
  }

  nextQuestion() {
    ++this.qIndex

    this.qLevel = 0

    this.newQuestion()

    this.showAnswers()
  }

  newQuestion() {
    let currQ = this.getCurrentQuestion()

    NODES.E.headerCounter.textContent = `${this.qIndex + 1}/${this.quizLength}`

    clearNode(NODES.E.answersList)

    this.spawnSMS({
      text: this.getCurrentLevel().text
    })

    currQ.answers.forEach(answerData => {
      let answerItem = createElement('li', `${CSS.main}__answers-list-item`)

      let answerItemBtn = NODES.T.answerItemBtn.cloneNode('true')

      U.qsf('img', answerItemBtn).src = CDN_URL + Data.images.faces[answerData.id]
      U.qsf('img', answerItemBtn).srcset = CDN_URL + Data.images.faces_2x[answerData.id] + ' 2x'

      U.qsf('p[class$="name"]', answerItemBtn).textContent = answerData.who
      U.qsf('p[class$="company"]', answerItemBtn).textContent = answerData.company

      answerItemBtn.addEventListener('click', e => {
        if (!this.btnsClickAbility) { return }

        let cat = (answerData.id in this.getCurrentLevel().answersTexts)
          ? this.getCurrentLevel().answersTexts[answerData.id]
          : {}

        let isRight = ('right' in answerData && answerData.right)

        if (isRight) {
          this.increaseScore()
        }

        this.btnsClickAbility = false

        Analytics.sendEvent(`${this.typeShowing} — Answer — Question №${this.qIndex + 1}, level ${this.qLevel + 1}, ${isRight ? 'right' : 'wrong'}`, 'Click')

        this.spawnSMS({
          type: 'face',
          images: {
            x1: CDN_URL + Data.images.faces[answerData.id],
            x2: CDN_URL + Data.images.faces_2x[answerData.id]
          },
          success: isRight
        })

        let nextEvent =
          (typeof currQ.levels[this.qLevel + 1] === 'undefined' || isRight)
            ? 'q'
            : 'l'

        if (
          nextEvent === 'q' &&
          (this.qIndex + 1) === this.quizLength
        ) {
          nextEvent = 'end'
        }

        NODES.E.headerTyping.style.display = 'block'

        setTimeout(() => {
          if (!isRight) {
            e.target.disabled = true
          }

          this.showResult(
            isRight,

            ('result' in cat)
              ? cat.result
              : false,

            nextEvent
          )

          if ('chat' in cat) {
            this.spawnSMS({
              sender: answerData.who,
              text: cat.chat,
              tail: 'right'
            })
          }

          NODES.E.headerTyping.style.display = 'none'
        }, TIME)
      })

      answerItem.appendChild(answerItemBtn)

      NODES.E.answersList.appendChild(answerItem)
    })

    //-this.goToLevel(this.getCurrentLevel())
  }

  cacheImages() {
    let images = []

    Object.keys(Data.images.faces).forEach(key => {
      images.push(CDN_URL + Data.images.faces[key])
      images.push(CDN_URL + Data.images.faces_2x[key])
    })

    Object.keys(Data.images.target_logo).forEach(key => {
      images.push(CDN_URL + Data.images.target_logo[key])
    })

    images.forEach(image => {
      NODES.E.cache.appendChild(
        createElement('img', '', { src: image, alt: 'cached image' })
      )
    })
  }

  init() {
    this.setInitialParams()

    this.prepareQuestions()

    this.createTemplates()
    this.createElements()

    this.cacheImages()

    this.newQuestion()

    document.addEventListener('DOMContentLoaded', () => {
      ElementQueries.listen()
    })

    window.addEventListener('load', () => {
      ElementQueries.init()
    })

    Analytics.sendEvent(`${this.typeShowing} — Show`, 'Init')
  }
}

export { Special }
