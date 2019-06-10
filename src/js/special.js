import '../css/special.styl'

import BaseSpecial from './base'
import Data from './data'
import * as Share from './lib/share'
import * as Analytics from './lib/analytics'
import { shuffleArray, toArray } from './lib/array'
import { createElement, clearNode } from './lib/dom'
import { U } from './lib/u'

import ElementQueries from 'css-element-queries/src/ElementQueries'

const CSS = {
  main: 'mgfn-trgt',
  iphone: 'mgfn-trgt-iphone-x',
  im: 'mgfn-trgt-im',
}

const NODES = {}

const TIME = 1500

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

  isStart() {
    return (this.qIndex === 0 && this.qLevel === 0)
  }

  setInitialParams() {
    this.qIndex = 0
    this.qLevel = 0
    this.score = 0

    this.questions = Data.quiz.questions

    this.results = Data.quiz.results

    this.quizLength = this.questions.length

    this.typeShowing = this.isFeed() ? 'in Feed' : 'in Page'

    this.btnsClickAbility = true

    if (this.isFeed()) {
      this.container.dataset.isFeed = ''
    }

    if (!this.container.classList.contains(CSS.main)) {
      this.container.classList.add(CSS.main)
    }

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

    NODES.T.textSMS = createElement('div', [`${CSS.main}-im__msg`, `${CSS.main}-im__msg--text`])

    NODES.T.textSMS.appendChild(createElement('div', `${CSS.main}-im__msg-author`))
    NODES.T.textSMS.appendChild(createElement('div', `${CSS.main}-im__msg-text`))

    /* Кнопка ответа на вопрос */

    NODES.T.answerItemBtn = createElement('div', `${CSS.main}__answers-item-btn`, { role: 'button' })

    NODES.T.answerItemBtn.appendChild(createElement('picture', `${CSS.main}__answers-item-btn--face`, { innerHTML: '<img>' }))
    NODES.T.answerItemBtn.appendChild(createElement('div', `${CSS.main}__answers-item-btn--name`))
    NODES.T.answerItemBtn.appendChild(createElement('div', `${CSS.main}__answers-item-btn--company`))

    delete NODES.T._temp
  }

  createElements() {
    NODES.S = {}
    NODES.E = {}

    /* Экраны */

    NODES.S.ALL = createElement('div', `${CSS.main}__screens`)

    NODES.S.quiz = createElement('div', [`${CSS.main}__screen`, `${CSS.main}__screen--quiz`])
    NODES.S.ALL.appendChild(NODES.S.quiz)

    NODES.S.final = createElement('div', [`${CSS.main}__screen`, `${CSS.main}__screen--final`])
    NODES.S.ALL.appendChild(NODES.S.final)

    this.container.appendChild(NODES.S.ALL)

    /* Элементы */

    // iPhone

    NODES.E.iphone = createElement('div', `${CSS.iphone}`, {
      innerHTML: `<div class="${CSS.iphone}__buttons"><div class="${CSS.iphone}__sound"></div><div class="${CSS.iphone}__power"></div></div><div class="${CSS.iphone}__notch"><div class="${CSS.iphone}__notch-sensors"></div></div>`,
    })
    NODES.E.iphoneScreen = createElement('div', `${CSS.iphone}__screen`)

    NODES.E.iphone.appendChild(NODES.E.iphoneScreen)

    NODES.S.quiz.appendChild(NODES.E.iphone)

    // IM

    NODES.E.im = createElement('div', `${CSS.im}`)
    NODES.E.imHeader = createElement('div', `${CSS.im}__header`)
    NODES.E.imCounter = createElement('div', `${CSS.im}__counter`)
    NODES.E.imOperator = createElement('div', `${CSS.im}__operator`, { innerText: 'MegaFon' })
    NODES.E.imSender = createElement('div', `${CSS.im}__sender`, {
      innerHTML: `<div class="${CSS.im}__sender-name">Неизвестный номер</div><div class="${CSS.im}__sender-avatar"></div>`,
    })

    NODES.E.imMessages = createElement('div', `${CSS.im}__messages`)
    NODES.E.imMessagesWrapper = createElement('div', `${CSS.im}__messages-wrapper`)
    NODES.E.imMessagesInner = createElement('div', `${CSS.im}__messages-inner`)
    NODES.E.imMessagesList = createElement('div', `${CSS.im}__messages-list`)

    NODES.E.imHeader.appendChild(NODES.E.imCounter)
    NODES.E.imHeader.appendChild(NODES.E.imOperator)
    NODES.E.imHeader.appendChild(NODES.E.imSender)

    NODES.E.imMessagesInner.appendChild(NODES.E.imMessagesList)
    NODES.E.imMessagesWrapper.appendChild(NODES.E.imMessagesInner)
    NODES.E.imMessages.appendChild(NODES.E.imMessagesWrapper)

    NODES.E.im.appendChild(NODES.E.imHeader)
    NODES.E.im.appendChild(NODES.E.imMessages)

    NODES.E.iphoneScreen.appendChild(NODES.E.im)

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

    NODES.E.answersList = createElement('div', `${CSS.main}__answers-list`, { role: 'list' })
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
      NODES.E.finalMegaText.appendChild(createElement('div', '', { innerText: paragraph, role: 'paragraph' }))
    })
    NODES.E.finalMegafon.appendChild(NODES.E.finalMegaText)

    NODES.E.finalMegaButton = createElement('a', `${CSS.main}__final-megafon--link`, { href: Data.final_links.button, target: '_blank', innerText: 'Попробовать' })
    NODES.E.finalMegafon.appendChild(NODES.E.finalMegaButton)

    NODES.S.final.appendChild(NODES.E.finalMegafon)
  }

  showScreen(screen) {
    toArray(NODES.S.ALL.childNodes).forEach(node => {
      if ('show' in node.dataset) {
        delete node.dataset.show
      }
    })

    NODES.S[screen].dataset.show = ''
  }

  show() {
    NODES.E.imMessagesInner.style.transition = 'transform 0.25s linear'

    if (NODES.E.imMessagesWrapper.offsetHeight > NODES.E.imMessages.offsetHeight) {
      NODES.E.imMessages.scrollTop = NODES.E.imMessagesWrapper.offsetHeight - NODES.E.imMessages.offsetHeight

      setTimeout(() => {
        NODES.E.imMessagesInner.style.transform = `translate3d(0, calc(100% - ${NODES.E.imMessagesList.offsetHeight}px), 0)`
      }, 100)
    } else {
      NODES.E.imMessagesInner.style.transform = `translate3d(0, calc(100% - ${NODES.E.imMessagesList.offsetHeight}px), 0)`
    }
  }

  send({ sender, content, type = 'text', typing = false, author = 'Неизвестный номер', success = true }) {
    const msg = createElement('div', `${CSS.im}__msg`, {
      data: {
        sender: sender
      }
    })

    if (type === 'face') {
      msg.classList.add(`${CSS.im}__msg--face`)
      msg.innerHTML = `<img src="${content.images.x1}" srcset="${content.images.x2} 2x">`

      msg.dataset.correct = success.toString()

    } else {
      msg.classList.add(`${CSS.im}__msg--text`)
      msg.innerHTML = `<div class="${CSS.im}__msg-author">${author}</div><div class="${CSS.im}__msg-text">${content.text}</div>`

      if (typing) {
        const tmp = msg.innerHTML

        msg.dataset.typing = true
        msg.innerHTML = '<span>.</span><span>.</span><span>.</span> печатает'

        setTimeout(() => {
          msg.removeAttribute('data-typing')
          msg.innerHTML = tmp

          this.show()
        }, content.text.length * 15)
      }
    }

    NODES.E.imMessagesList.appendChild(msg)

    this.show()
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

          Analytics.sendEvent(`${this.typeShowing} — Next question (to question №${this.qIndex + 1}, score is ${this.score})`, 'Click')
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

          NODES.E.imMessages.scrollTop = 0
          NODES.E.imMessagesInner.style.transition = ''
          NODES.E.imMessagesInner.style.transform = 'translate3d(0, 100%, 0)'
          clearNode(NODES.E.imMessagesList)

          Analytics.sendEvent(`${this.typeShowing} — End (score is ${this.score})`, 'Click')
        }
        NODES.E.answersResultBtn.textContent = 'Завершить тест'; break
    }
  }

  showAnswers() {
    NODES.E.answers.dataset.show = 'answers'
  }

  spawnNextLevelSMS(typing = false) {
    const text = this.getCurrentLevel().text

    setTimeout(() => {
      this.send({
        sender: 'from',
        content: {
          text: text
        },
        type: 'text'
      })
    }, typing ? 400 : 100)

    if (!(this.qLevel === 0)) {
      this.btnsClickAbility = false
      NODES.E.answers.dataset.disallowClicks = ''

      setTimeout(() => {
        this.btnsClickAbility = true
        delete NODES.E.answers.dataset.disallowClicks
      }, typing ? text.length * 15 + 100 : 100)
    }
  }

  nextLevel() {
    ++this.qLevel

    this.spawnNextLevelSMS(true)
  }

  nextQuestion() {
    ++this.qIndex

    this.qLevel = 0


    NODES.E.imMessages.scrollTop = 0
    NODES.E.imMessagesInner.style.transition = ''
    NODES.E.imMessagesInner.style.transform = 'translate3d(0, 100%, 0)'
    clearNode(NODES.E.imMessagesList)

    this.newQuestion()

    this.showAnswers()
  }

  newQuestion() {
    let currQ = this.getCurrentQuestion()

    NODES.E.imCounter.textContent = `${this.qIndex + 1} / ${this.quizLength}`

    clearNode(NODES.E.answersList)

    if (this.isStart()) {
      this.send({
        sender: 'from',
        content: {
          text: this.getCurrentLevel().text
        },
      })
    } else {
      this.spawnNextLevelSMS()
    }

    currQ.answers.forEach(answerData => {
      let answerItem = createElement('div', `${CSS.main}__answers-list-item`, { role: 'listitem' })

      let answerItemBtn = NODES.T.answerItemBtn.cloneNode('true')

      if ('clicked' in answerData) {
        delete answerData.clicked
      }

      let faceImg = U.qsf('img', answerItemBtn)

      faceImg.src = CDN_URL + Data.images.faces[answerData.id]
      faceImg.srcset = CDN_URL + Data.images.faces_2x[answerData.id] + ' 2x'

      U.qsf('[class$="name"]', answerItemBtn).textContent = answerData.who
      U.qsf('[class$="company"]', answerItemBtn).innerHTML = answerData.company

      answerItemBtn.addEventListener('click', e => {
        if (
          !this.btnsClickAbility ||
          'disabled' in e.target.dataset
        ) { return }

        if ('clicked' in answerData) {
          this.send({
            sender: 'from',
            author: 'vc.ru',
            content: {
              text: ':)'
            }
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

          NODES.E.answers.dataset.disallowNext = ''

          setTimeout(() => {
            delete NODES.E.answers.dataset.disallowNext
          }, TIME / 2)
        } else {
          e.target.dataset.disabled = ''
        }

        Analytics.sendEvent(`${this.typeShowing} — Answer (question №${this.qIndex + 1}, level ${this.qLevel + 1}, ${isRight ? 'right' : 'wrong'})`, 'Click')

        this.send({
          sender: 'to',
          content: {
            images: {
              x1: CDN_URL + Data.images.faces[answerData.id],
              x2: CDN_URL + Data.images.faces_2x[answerData.id],
            },
          },
          type: 'face',
          success: isRight,
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

        if ('chat' in cat) {
          setTimeout(() => {
            this.send({
              sender: 'to',
              content: {
                text: cat.chat
              },
              author: answerData.who,
            })
          }, 400)
        }

        /*
         * В норме, this.showResult() может отработать и для перехода на следующий этап
         * Здесь эта возможность убрана, но убрав if-else, её можно вернуть
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
        }
      })

      answerItem.appendChild(answerItemBtn)

      NODES.E.answersList.appendChild(answerItem)
    })
  }

  final() {
    let resultsPersonsKeys = Object.keys(Data.quiz.results)

    let person = resultsPersonsKeys[U.random({ max: resultsPersonsKeys.length - 1 })]

    let results = this.results[person]

    let scoreIndex = -1

    Object.keys(results).forEach(key => {
      if (this.score >= Number(key)) { scoreIndex++ }
    })

    let ourResult = Object.values(results)[scoreIndex]

    NODES.E.finalResultScore.textContent = `${this.score} из ${this.quizLength} адресатов разгадано`

    clearNode(NODES.E.finalResultShare)

    Share.make(NODES.E.finalResultShare, {
      url: this.params.share.url + '/' + person + '/' + (scoreIndex + 1),
      title: this.params.share.title,
      twitter: this.params.share.title,
    }, this.typeShowing)

    let finalFaceImg = U.qsf('img', NODES.E.finalResultFace)

    clearNode(NODES.E.finalResultSMS)

    NODES.E.finalResultSMS.appendChild(NODES.T.textSMS.cloneNode(true))

    NODES.E.finalResultSMS.firstChild.dataset.sender = 'from'

    U.qsf(`.${CSS.im}__msg-author`, NODES.E.finalResultSMS).textContent = ourResult.sender
    U.qsf(`.${CSS.im}__msg-text`, NODES.E.finalResultSMS).innerHTML = U.prepareText(ourResult.text)

    finalFaceImg.src = CDN_URL + Data.images.faces[`${person}_nichosi`]
    finalFaceImg.srcset = CDN_URL + Data.images.faces_2x[`${person}_nichosi`] + ' 2x'

    this.showScreen('final')
  }

  restart() {
    this.qIndex = 0
    this.qLevel = 0
    this.score = 0

    this.newQuestion()

    this.showAnswers()

    this.showScreen('quiz')
  }

  cacheImages() {
    let images = {
      x1: [], x2: []
    }

    this.imagesIsCached = true

    Object.keys(Data.images.faces).forEach(key => {
      images.x1.push(CDN_URL + Data.images.faces[key])
      images.x2.push(CDN_URL + Data.images.faces_2x[key])
    })

    images.x1.push(Data.images.target_logo.x1)
    images.x2.push(Data.images.target_logo.x2)

    for (let i = 0; i < images.x1.length -1; i++) {
      createElement('img', '', {
        src: images.x1[i],
        srcset: images.x2[i] + ' 2x',
        alt: 'cached image'
      })
    }
  }

  init() {
    this.setInitialParams()

    this.prepareQuestions()

    this.createTemplates()
    this.createElements()

    this.newQuestion()

    if ('allowSkip' in this.params) {
      NODES.E.imSender.addEventListener('dblclick', () => {
        this.score = U.random({ max: this.quizLength })
        this.final()
      })
    }

    ElementQueries.init()
    ElementQueries.listen()

    this.showScreen('quiz')

    Analytics.sendEvent(`${this.typeShowing} — Show`, 'Init')
  }
}

export { Special }