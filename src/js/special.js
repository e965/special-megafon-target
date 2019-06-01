import '../css/special.styl'

import BaseSpecial from './base'
import Data from './data'
import * as Share from './lib/share'
import * as Analytics from './lib/analytics'
import { shuffleArray, toArray } from './lib/array'
import { createElement, clearNode } from './lib/dom'
import { U } from './lib/u'

const CSS = {
  main: 'mgfn-trgt',
}

const NODES = {}

const TIME = 2000

const CDN_URL = Data.imagesCDN

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

    this.results = Data.quiz.results

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
    NODES.T._temp = {}

    /* Текстовая СМС */

    NODES.T.textSMS = createElement('div', [`${CSS.main}__sms`, `${CSS.main}__sms-text`])

    NODES.T._temp.smsContent = createElement('div', `${CSS.main}__sms-text--content`)

    NODES.T._temp.smsContent.appendChild(createElement('div', `${CSS.main}__sms--sender`))
    NODES.T._temp.smsContent.appendChild(createElement('div', `${CSS.main}__sms--text`))

    NODES.T.textSMS.appendChild(NODES.T._temp.smsContent)

    /* СМС-лицо */

    NODES.T.faceSMS = createElement('picture', [`${CSS.main}__sms`, `${CSS.main}__sms-face`])

    NODES.T.faceSMS.appendChild(createElement('img', `${CSS.main}__sms--face`))

    /* Кнопка ответа на вопрос */

    NODES.T.answerItemBtn = createElement('button', `${CSS.main}__answers-item-btn`)

    NODES.T.answerItemBtn.appendChild(createElement('picture', `${CSS.main}__answers-item-btn--face`, { innerHTML: '<img>' }))
    NODES.T.answerItemBtn.appendChild(createElement('p', `${CSS.main}__answers-item-btn--name`))
    NODES.T.answerItemBtn.appendChild(createElement('p', `${CSS.main}__answers-item-btn--company`))

    delete NODES.T._temp
  }

  createElements() {
    NODES.S = {}
    NODES.E = {}

    /* Экраны */

    NODES.S.ALL = createElement('div', `${CSS.main}__screens`)

    NODES.S.quiz = createElement('div', [`${CSS.main}__screen`, `${CSS.main}__screen--quiz`], { data: { show: '' } })
    NODES.S.ALL.appendChild(NODES.S.quiz)

    NODES.S.final = createElement('div', [`${CSS.main}__screen`, `${CSS.main}__screen--final`])
    NODES.S.ALL.appendChild(NODES.S.final)

    this.container.appendChild(NODES.S.ALL)

    /* Элементы */

    NODES.E.phone = createElement('div', `${CSS.main}__phone`)
    NODES.S.quiz.appendChild(NODES.E.phone)

    NODES.E.phoneNotch = createElement('div', `${CSS.main}__phone--notch`)
    NODES.E.phone.appendChild(NODES.E.phoneNotch)

    NODES.E.phoneContent = createElement('div', `${CSS.main}__phone--content`)
    NODES.E.phone.appendChild(NODES.E.phoneContent)

    NODES.E.header = createElement('div', `${CSS.main}__header`)
    NODES.E.phoneContent.appendChild(NODES.E.header)

    NODES.E.headerCounter = createElement('div', `${CSS.main}__header--counter`, { innerText: '0/0' })
    NODES.E.header.appendChild(NODES.E.headerCounter)

    NODES.E.headerOperator = createElement('div', `${CSS.main}__header--operator`, { innerText: 'MegaFon' })
    NODES.E.header.appendChild(NODES.E.headerOperator)

    NODES.E.headerSender = createElement('div', `${CSS.main}__header--sender`, { innerText: 'Неизвестный номер' })
    NODES.E.header.appendChild(NODES.E.headerSender)

    NODES.E.headerTyping = createElement('div', `${CSS.main}__header--typing`, { innerText: 'отправка', style: { display: 'none' } })
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

    NODES.E.themeSwitcher = createElement('label', `${CSS.main}__answers--theme-switcher`, { htmlFor: 'theme_switcher' })

    NODES.E.themeSwitcherText = U.createText('Сменить тему')
    NODES.E.themeSwitcher.appendChild(NODES.E.themeSwitcherText)

    NODES.E.themeSwitcherInput = createElement('input', '', { type: 'checkbox', id: 'theme_switcher' })
    NODES.E.themeSwitcherInput.addEventListener('click', e => {
      let theme = e.target.checked ? 'pink' : 'green'

      this.container.dataset.theme = theme

      Analytics.sendEvent(`${this.typeShowing} — Theme switcher — Change to "${theme}"`, 'Click')
    })
    NODES.E.themeSwitcher.appendChild(NODES.E.themeSwitcherInput)

    NODES.E.themeSwitcher.appendChild(createElement('span'))

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

    NODES.E.finalResult = createElement('div', `${CSS.main}__final-result`)

    NODES.E.finalResultScore = createElement('div', `${CSS.main}__final--score`)
    NODES.E.finalResult.appendChild(NODES.E.finalResultScore)

    NODES.E.finalResultShare = createElement('div', `${CSS.main}__final--share`)
    NODES.E.finalResult.appendChild(NODES.E.finalResultShare)

    NODES.E.finalResultRestart = createElement('div', `${CSS.main}__final--restart-btn`)
    NODES.E.finalResultRestartBtn = createElement('button', '', { innerText: 'Пройти ещё раз' })

    NODES.E.finalResultRestartBtn.addEventListener('click', () => {
      this.restart()

      Analytics.sendEvent(`${this.typeShowing} — Restart`, 'Click')
    })
    NODES.E.finalResultRestart.appendChild(NODES.E.finalResultRestartBtn)

    NODES.E.finalResult.appendChild(NODES.E.finalResultRestart)

    NODES.E.finalResultSMS = createElement('div', `${CSS.main}__final--sms`)
    NODES.E.finalResult.appendChild(NODES.E.finalResultSMS)

    NODES.E.finalResultFace = createElement('picture', `${CSS.main}__final--face`)
    NODES.E.finalResultFace.appendChild(createElement('img', '', { alt: '' }))
    NODES.E.finalResult.appendChild(NODES.E.finalResultFace)

    NODES.S.final.appendChild(NODES.E.finalResult)

    NODES.E.finalMegafon = createElement('div', `${CSS.main}__final-megafon`)

    NODES.E.finalMegaLogo = createElement('a', `${CSS.main}__final-megafon--logo`, { href: Data.final_links.logo, target: '_blank' })
    NODES.E.finalMegaLogo.appendChild(createElement('img', '', { src: CDN_URL + Data.images.target_logo.x1, srcset: CDN_URL + Data.images.target_logo.x2, alt: 'Megafon Target logo' }))
    NODES.E.finalMegafon.appendChild(NODES.E.finalMegaLogo)

    NODES.E.finalMegaText = createElement('div', `${CSS.main}__final-megafon--text`)
    Data.mega_text.forEach(paragraph => {
      NODES.E.finalMegaText.appendChild(createElement('p', '', { innerText: paragraph }))
    })
    NODES.E.finalMegafon.appendChild(NODES.E.finalMegaText)

    NODES.E.finalMegaButton = createElement('a', `${CSS.main}__final-megafon--link`, { href: Data.final_links.button, target: '_blank', innerText: 'Попробовать' })
    NODES.E.finalMegafon.appendChild(NODES.E.finalMegaButton)

    NODES.S.final.appendChild(NODES.E.finalMegafon)

    NODES.E.cache = createElement('div', `${CSS.main}__cache`)
    this.container.appendChild(NODES.E.cache)
  }

  showScreen(screen) {
    toArray(NODES.S.ALL.childNodes).forEach(node => {
      if ('show' in node.dataset) {
        delete node.dataset.show
      }
    })

    NODES.S[screen].dataset.show = ''
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

      let faceImg = U.qsf('img[class$="face"]', sms)

      faceImg.src = images.x1
      faceImg.srcset = images.x2
    }

    if (
      !U.qsf(`.${CSS.main}__sms`, NODES.E.chat) &&
      !U.qsf(`.${CSS.main}__sms[data-solo]`, NODES.E.chat)
    ) {
      sms.dataset.solo = ''
    }

    if (U.qsf(`.${CSS.main}__sms[data-solo]`, NODES.E.chat)) {
      delete U.qsf(`.${CSS.main}__sms[data-solo]`, NODES.E.chat).dataset.solo
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
          this.final()

          Analytics.sendEvent(`${this.typeShowing} — End — Score is ${this.score}`, 'Click')
        }
        NODES.E.answersResultBtn.textContent = 'Завершить тест'; break
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

      if ('clicked' in answerData) {
        delete answerData.clicked
      }

      let faceImg = U.qsf('img', answerItemBtn)

      faceImg.src = CDN_URL + Data.images.faces[answerData.id]
      faceImg.srcset = CDN_URL + Data.images.faces_2x[answerData.id] + ' 2x'

      U.qsf('p[class$="name"]', answerItemBtn).textContent = answerData.who
      U.qsf('p[class$="company"]', answerItemBtn).textContent = answerData.company

      answerItemBtn.addEventListener('click', e => {
        if (!this.btnsClickAbility) { return }

        if ('clicked' in answerData) {
          this.spawnSMS({
            sender: 'vc.ru',
            text: ':)',
            tail: 'right'
          })

          return
        }

        // Кэширование изображений только в случае первого клика
        if (this.qIndex === 0 && this.qLevel === 0) {
          this.cacheImages()
        }

        answerData.clicked = true

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

          /*
           * В норме, this.showResult() может отработать и для перехода на соелующий этап
           * Здесь эта возможность убрана, но убрав if-else, её иожно вернуть
           */

          if (nextEvent === 'q' || nextEvent === 'end') {
            this.showResult(
              isRight,

              ('result' in cat)
                ? cat.result
                : false,

              nextEvent
            )
          } else {
            this.nextLevel()

            if (!this.btnsClickAbility) {
              this.btnsClickAbility = true
            }
          }

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
  }

  final() {
    let resultsPersonsKeys = Object.keys(Data.quiz.results)

    let person = resultsPersonsKeys[U.random({ max: resultsPersonsKeys.length - 1 })]

    let results = this.results[person]

    let scoreKey = -1

    this.score = U.random({ max: this.quizLength })

    Object.keys(results).forEach(key => {
      if (this.score >= Number(key)) { scoreKey++ }
    })

    let ourResult = Object.values(results)[scoreKey]

    NODES.E.finalResultScore.textContent = `${this.score} из ${this.quizLength} правильных ответов`

    clearNode(NODES.E.finalResultShare)

    Share.make(NODES.E.finalResultShare, {
      url: this.params.share.url,
      title: this.params.share.title,
      twitter: this.params.share.title,
    })

    let finalFaceImg = U.qsf('img', NODES.E.finalResultFace)

    clearNode(NODES.E.finalResultSMS)

    NODES.E.finalResultSMS.appendChild(NODES.T.textSMS.cloneNode(true))

    NODES.E.finalResultSMS.firstChild.dataset.tail = 'left'

    U.qsf('div[class$="--sender"]', NODES.E.finalResultSMS).textContent = ourResult.sender
    U.qsf('div[class$="--text"]', NODES.E.finalResultSMS).innerHTML = U.prepareText(ourResult.text)

    finalFaceImg.src = CDN_URL + Data.images.faces[`${person}_nichosi`]
    finalFaceImg.srcset = CDN_URL + Data.images.faces_2x[`${person}_nichosi`]

    this.showScreen('final')
  }

  restart() {
    this.qIndex = 0
    this.qLevel = 0
    this.score = 0

    clearNode(NODES.E.chat, [`${CSS.main}__chat--bottom`])

    this.newQuestion()

    this.showAnswers()

    this.showScreen('quiz')
  }

  cacheImages() {
    let images = []

    this.imagesIsCached = true

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

    this.newQuestion()

    NODES.E.headerCounter.addEventListener('dblclick', () => {
      this.final()
    })

    this.showScreen('quiz')

    Analytics.sendEvent(`${this.typeShowing} — Show`, 'Init')
  }
}

export { Special }
