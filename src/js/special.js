import '../css/special.styl';

import BaseSpecial from './base';
import Data from './data';
import * as Share from './lib/share';
import * as Analytics from './lib/analytics';
import { shuffleArray, toArray } from './lib/array';
import { createElement, clearNode } from './lib/dom';
import { U } from './lib/u';

import ElementQueries from 'css-element-queries/src/ElementQueries';

const CSS = { main: 'mgfn-trgt' };

const CSS_HEIRS = {
    screen: '__screen',
    iphone: '-iphone-x',
    im: '-im',
    msg: '-im__msg',
    answers: '__answers',
    final: '__final',
};

Object.keys(CSS_HEIRS).forEach(key => (CSS[key] = CSS.main + CSS_HEIRS[key]));

const NODES = {};

class Special extends BaseSpecial {
    constructor(params = {}) {
        super();

        Object.assign(this.params, params);
        this.saveParams();

        if (Data && params.data) {
            Object.assign(Data, params.data);
        }

        if (this.params.css) {
            this.loadStyles(this.params.css).then(() => this.init());
        } else {
            this.init();
        }
    }

    isFeed() {
        return this.params.isFeed;
    }

    isStart() {
        return this.qIndex === 0 && this.qLevel === 0;
    }

    setInitialParams() {
        this.qIndex = 0;
        this.qLevel = 0;
        this.score = 0;

        this.questions = Data.quiz.questions;

        this.results = Data.quiz.results;

        this.quizLength = this.questions.length;

        this.typeShowing = this.isFeed() ? 'in Feed' : 'in Page';

        this.btnsClickAbility = true;

        if (this.isFeed()) {
            this.container.dataset.isFeed = '';
        }

        if (!this.container.classList.contains(CSS.main)) {
            this.container.classList.add(CSS.main);
        }

        this.container.dataset.theme = 'green';
    }

    getCurrentQuestion() {
        return this.questions[this.qIndex];
    }

    getCurrentLevel() {
        return this.questions[this.qIndex].levels[this.qLevel];
    }

    increaseScore() {
        this.score++;
    }

    prepareQuestions() {
        let act = 'answersCommonTexts';

        this.questions.forEach(question => {
            let actKeys = [];

            if (act in question) {
                actKeys = Object.keys(question[act]);
            }

            let qa = question.answers;

            let qaKeys = Object.keys(qa);

            let qaTmpArray = [];

            let arrayLOL = ['result', 'chat'];

            qaKeys.forEach(key => {
                let newAnswerObj = qa[key];

                newAnswerObj.id = key;

                qaTmpArray.push(newAnswerObj);
            });

            qaTmpArray = shuffleArray(qaTmpArray);

            question.answers = qaTmpArray;

            question.levels.forEach(level => {
                let answersTexts = level.answersTexts;

                let answersTextsKeys = Object.keys(answersTexts);

                if (Array.isArray(level.text)) {
                    level.text.forEach((txt, i) => {
                        level.text[i] = U.prepareText(txt);
                    });
                } else {
                    level.text = U.prepareText(level.text);
                }

                answersTextsKeys.forEach(atk => {
                    let qaa = {};

                    if (actKeys.includes(atk)) {
                        qaa = question[act][atk];
                    }

                    arrayLOL.forEach(lol => {
                        if (lol in qaa && answersTexts[atk][lol] === '') {
                            answersTexts[atk][lol] = qaa[lol];
                        }

                        if (lol in answersTexts[atk]) {
                            answersTexts[atk][lol] = U.prepareText(answersTexts[atk][lol]);
                        }
                    });
                });
            });

            if (act in question) {
                delete question[act];
            }
        });
    }

    createTemplates() {
        NODES.T = {};
        NODES.T._temp = {};

        /* Текстовая СМС */

        NODES.T.textSMS = createElement('div', [CSS.msg, `${CSS.msg}--text`]);

        NODES.T.textSMS.appendChild(createElement('div', `${CSS.msg}-author`));
        NODES.T.textSMS.appendChild(createElement('div', `${CSS.msg}-text`));

        /* Кнопка ответа на вопрос */

        NODES.T.answerItemBtn = createElement('div', `${CSS.answers}-item-btn`, { role: 'button' });

        NODES.T.answerItemBtn.appendChild(createElement('picture', `${CSS.answers}-item-btn--face`, { innerHTML: '<img>' }));
        NODES.T.answerItemBtn.appendChild(createElement('div', `${CSS.answers}-item-btn--name`));
        NODES.T.answerItemBtn.appendChild(createElement('div', `${CSS.answers}-item-btn--company`));

        delete NODES.T._temp;
    }

    createElements() {
        NODES.S = {};
        NODES.E = {};

        /* Экраны */

        NODES.S.ALL = createElement('div', `${CSS.screen}s`);

        NODES.S.quiz = createElement('div', [`${CSS.screen}`, `${CSS.screen}--quiz`]);
        NODES.S.ALL.appendChild(NODES.S.quiz);

        NODES.S.final = createElement('div', [`${CSS.screen}`, `${CSS.screen}--final`]);
        NODES.S.ALL.appendChild(NODES.S.final);

        this.container.appendChild(NODES.S.ALL);

        /* Элементы */

        // iPhone

        NODES.E.iphone = createElement('div', `${CSS.iphone}`);

        NODES.E.iphoneButtons = createElement('div', `${CSS.iphone}__buttons`);

        new Array('sound', 'power').forEach(_btn => NODES.E.iphoneButtons.appendChild(createElement('div', `${CSS.iphone}__${_btn}`)));

        NODES.E.iphone.appendChild(NODES.E.iphoneButtons);

        NODES.E.iphoneNotch = createElement('div', `${CSS.iphone}__notch`, {
            innerHTML: createElement('div', `${CSS.iphone}__notch-sensors`).outerHTML,
        });

        NODES.E.iphone.appendChild(NODES.E.iphoneNotch);

        NODES.E.iphoneScreen = createElement('div', `${CSS.iphone}__screen`);

        NODES.E.iphone.appendChild(NODES.E.iphoneScreen);

        NODES.S.quiz.appendChild(NODES.E.iphone);

        // IM

        NODES.E.im = createElement('div', `${CSS.im}`);
        NODES.E.imHeader = createElement('div', `${CSS.im}__header`);

        NODES.E.imOperator = createElement('div', `${CSS.im}__operator`, { innerText: 'MegaFon' });

        NODES.E.imStatus = createElement('div', `${CSS.im}__status`);
        NODES.E.imStatus.appendChild(createElement('span', '', { textContent: 'LTE' }));

        NODES.E.imBattery = createElement('div', `${CSS.im}__status--battery`);
        NODES.E.imBattery.appendChild(createElement('div'));

        this.batteryСharge = U.qsf('div', NODES.E.imBattery);

        NODES.E.imStatus.appendChild(NODES.E.imBattery);

        NODES.E.imSender = createElement('div', `${CSS.im}__sender`);

        NODES.E.imSenderName = createElement('div', `${CSS.im}__sender-name`, { textContent: 'Неизвестный номер' });
        NODES.E.imSenderAvatar = createElement('div', `${CSS.im}__sender-avatar`);

        NODES.E.imSenderAvatarImage = createElement('img', '', {
            src: Data.images.anon.x1,
            srcset: Data.images.anon.x2 + ' 2x', alt: 'Sender'
        });

        NODES.E.imSenderAvatar.appendChild(NODES.E.imSenderAvatarImage)

        NODES.E.imSender.appendChild(NODES.E.imSenderName);
        NODES.E.imSender.appendChild(NODES.E.imSenderAvatar);

        NODES.E.imMessages = createElement('div', `${CSS.im}__messages`);
        NODES.E.imMessagesWrapper = createElement('div', `${CSS.im}__messages-wrapper`);
        NODES.E.imMessagesInner = createElement('div', `${CSS.im}__messages-inner`);
        NODES.E.imMessagesList = createElement('div', `${CSS.im}__messages-list`);

        NODES.E.imHeader.appendChild(NODES.E.imOperator);
        NODES.E.imHeader.appendChild(NODES.E.imStatus);
        NODES.E.imHeader.appendChild(NODES.E.imSender);

        NODES.E.imMessagesInner.appendChild(NODES.E.imMessagesList);
        NODES.E.imMessagesWrapper.appendChild(NODES.E.imMessagesInner);
        NODES.E.imMessages.appendChild(NODES.E.imMessagesWrapper);

        NODES.E.im.appendChild(NODES.E.imHeader);
        NODES.E.im.appendChild(NODES.E.imMessages);

        NODES.E.iphoneScreen.appendChild(NODES.E.im);

        NODES.E.answers = createElement('div', `${CSS.answers}`, { data: { show: 'answers' } });

        NODES.E.answersHeader = createElement('div', `${CSS.answers}--header`);

        NODES.E.answersPhrase = createElement('div', `${CSS.answers}--phrase`, { innerText: 'Кому адресовано сообщение?' });

        NODES.E.answersPhrase.dataset.counter = 0;
        NODES.E.answersPhrase.dataset.quizLength = this.quizLength - 1;

        NODES.E.themeSwitcher = createElement('label', `${CSS.answers}--theme-switcher`, { htmlFor: 'theme_switcher' });

        NODES.E.themeSwitcherText = U.createText('Сменить тему');
        NODES.E.themeSwitcher.appendChild(NODES.E.themeSwitcherText);

        NODES.E.themeSwitcherInput = createElement('input', '', { type: 'checkbox', id: 'theme_switcher' });
        NODES.E.themeSwitcherInput.addEventListener('click', e => {
            let theme = e.target.checked ? 'pink' : 'green';

            this.container.dataset.theme = theme;

            Analytics.sendEvent(`${this.typeShowing} — Theme switcher — Change to "${theme}"`, 'Click');
        });
        NODES.E.themeSwitcher.appendChild(NODES.E.themeSwitcherInput);

        NODES.E.themeSwitcher.appendChild(createElement('span'));

        NODES.E.answersHeader.appendChild(NODES.E.themeSwitcher);
        NODES.E.answersHeader.appendChild(NODES.E.answersPhrase);

        NODES.E.answers.appendChild(NODES.E.answersHeader);

        NODES.E.answersMain = createElement('div', `${CSS.answers}--main`);

        NODES.E.answersList = createElement('div', `${CSS.answers}-list`, { role: 'list' });
        NODES.E.answersMain.appendChild(NODES.E.answersList);

        NODES.E.answersResult = createElement('div', `${CSS.answers}-result`);

        NODES.E.answersResultStatus = createElement('div', `${CSS.answers}-result--status`);
        NODES.E.answersResult.appendChild(NODES.E.answersResultStatus);

        NODES.E.answersResultText = createElement('div', `${CSS.answers}-result--text`);
        NODES.E.answersResult.appendChild(NODES.E.answersResultText);

        NODES.E.answersResultBtn = createElement('button', `${CSS.answers}-result--next-btn`, { innerText: 'Далее' });
        NODES.E.answersResult.appendChild(NODES.E.answersResultBtn);

        NODES.E.answersMain.appendChild(NODES.E.answersResult);

        NODES.E.answers.appendChild(NODES.E.answersMain);

        NODES.S.quiz.appendChild(NODES.E.answers);

        NODES.E.finalResult = createElement('div', `${CSS.final}-result`);

        NODES.E.finalResultScore = createElement('div', `${CSS.final}--score`);
        NODES.E.finalResult.appendChild(NODES.E.finalResultScore);

        NODES.E.finalResultShare = createElement('div', `${CSS.final}--share`);
        NODES.E.finalResult.appendChild(NODES.E.finalResultShare);

        NODES.E.finalResultRestart = createElement('div', `${CSS.final}--restart-btn`);
        NODES.E.finalResultRestartBtn = createElement('button');

        NODES.E.finalResultRestartBtn.appendChild(createElement('span', '', { innerText: 'Пройти ещё раз' }));

        NODES.E.finalResultRestartBtn.addEventListener('click', () => {
            this.restart();

            Analytics.sendEvent(`${this.typeShowing} — Restart`, 'Click');
        });

        NODES.E.finalResultRestart.appendChild(NODES.E.finalResultRestartBtn);

        NODES.E.finalResult.appendChild(NODES.E.finalResultRestart);

        NODES.E.finalResultSMS = createElement('div', `${CSS.final}--sms`);
        NODES.E.finalResult.appendChild(NODES.E.finalResultSMS);

        NODES.E.finalResultFace = createElement('picture', `${CSS.final}--face`);
        NODES.E.finalResultFace.appendChild(createElement('img', '', { alt: '' }));
        NODES.E.finalResult.appendChild(NODES.E.finalResultFace);

        this.finalFaceImg = U.qsf('img', NODES.E.finalResultFace);

        NODES.S.final.appendChild(NODES.E.finalResult);

        NODES.E.finalMegafon = createElement('div', `${CSS.final}-megafon`);

        NODES.E.finalMegaLogo = createElement('a', `${CSS.final}-megafon--logo`, { href: Data.final_links.logo, target: '_blank' });
        NODES.E.finalMegaLogo.appendChild(
            createElement('img', '', { src: Data.images.target_logo.x1, srcset: Data.images.target_logo.x2 + ' 2x', alt: 'Megafon Target logo' })
        );
        NODES.E.finalMegafon.appendChild(NODES.E.finalMegaLogo);

        NODES.E.finalMegaText = createElement('div', `${CSS.final}-megafon--text`);
        Data.mega_text.forEach(paragraph => {
            NODES.E.finalMegaText.appendChild(createElement('div', '', { innerText: paragraph, role: 'paragraph' }));
        });

        NODES.E.finalMegafon.appendChild(NODES.E.finalMegaText);

        NODES.E.finalMegaButton = createElement('a', `${CSS.final}-megafon--link`, {
            href: Data.final_links.button,
            target: '_blank',
            innerText: 'Попробовать',
        });
        NODES.E.finalMegafon.appendChild(NODES.E.finalMegaButton);

        NODES.S.final.appendChild(NODES.E.finalMegafon);
    }

    showScreen(screen) {
        toArray(NODES.S.ALL.childNodes).forEach(node => {
            if ('show' in node.dataset) {
                delete node.dataset.show;
            }
        });

        NODES.S[screen].dataset.show = '';
    }

    show() {
        if (!('show' in NODES.S.final.dataset)) {
            // фикс бага с последней SMS
            NODES.E.imMessagesInner.style.transition = 'transform 0.25s linear';

            if (NODES.E.imMessagesWrapper.offsetHeight > NODES.E.imMessages.offsetHeight) {
                NODES.E.imMessages.scrollTop = NODES.E.imMessagesWrapper.offsetHeight - NODES.E.imMessages.offsetHeight;

                setTimeout(() => {
                    NODES.E.imMessagesInner.style.transform = `translate3d(0, calc(100% - ${NODES.E.imMessagesList.offsetHeight}px), 0)`;
                }, 100);
            } else {
                NODES.E.imMessagesInner.style.transform = `translate3d(0, calc(100% - ${NODES.E.imMessagesList.offsetHeight}px), 0)`;
            }
        }
    }

    answersClicks() {
        return {
            allow: () => {
                this.btnsClickAbility = true;
                delete NODES.E.answers.dataset.disallowClicks;
            },

            disallow: () => {
                this.btnsClickAbility = false;
                NODES.E.answers.dataset.disallowClicks = '';
            },
        };
    }

    send({ sender, content, type = 'text', typing = false, author = 'Неизвестный номер', success = true, allowClickAfterTyping = false }) {
        const msg = createElement('div', CSS.msg, {
            data: {
                sender: sender,
            },
        });

        if (type === 'face') {
            msg.classList.add(`${CSS.msg}--face`);

            msg.appendChild(
                createElement('img', '', {
                    src: content.images.x1,
                    srcset: content.images.x2 + ' 2x',
                })
            );

            msg.dataset.correct = success.toString();

            msg.appendChild(createElement('span', `${CSS.msg}-mark`));
        } else {
            msg.classList.add(`${CSS.msg}--text`);

            let msgAuthorNode = createElement('div', `${CSS.msg}-author`, { textContent: author });
            let msgTextNode = createElement('div', `${CSS.msg}-text`, { innerHTML: content.text });

            msg.appendChild(msgAuthorNode);
            msg.appendChild(msgTextNode);

            if (sender === 'from') {
                NODES.E.imSenderName.textContent = author;
            }

            if (typing) {
                const tmp = msg.innerHTML;

                msg.dataset.typing = true;
                msg.textContent = '';

                for (let i = 0; i < 3; i++) {
                    msg.appendChild(createElement('span', '', { innerText: '.' }));
                }
                msg.appendChild(U.createText(' печатает'));

                let typingTime = content.text.replace(/<[^>]*>?/gm, '').length * 20;

                if (typingTime < 1500) {
                    typingTime = 1500;
                }

                setTimeout(() => {
                    msg.removeAttribute('data-typing');
                    msg.innerHTML = tmp;

                    this.show();

                    if (allowClickAfterTyping) {
                        this.answersClicks().allow();
                    }
                }, typingTime);
            }
        }

        NODES.E.imMessagesList.appendChild(msg);

        this.show();
    }

    showResult(success, text = false, next) {
        NODES.E.answers.dataset.show = 'result';

        NODES.E.answersResult.dataset.right = success ? 'yes' : 'no';

        NODES.E.answersResultStatus.textContent = success ? 'Доставлено' : 'Не доставлено';

        NODES.E.answersResultText.innerHTML = text ? text : '';

        switch (next) {
            case 'q':
                NODES.E.answersResultBtn.onclick = () => {
                    this.nextQuestion();

                    Analytics.sendEvent(`${this.typeShowing} — Next question (to question №${this.qIndex}, score is ${this.score})`, 'Click');
                };
                NODES.E.answersResultBtn.textContent = 'Далее';
                break;

            case 'l':
                NODES.E.answersResultBtn.onclick = () => {
                    this.showAnswers();
                    this.nextLevel();

                    Analytics.sendEvent(`${this.typeShowing} — Next level — Question №${this.qIndex}, to level ${this.qLevel + 1}`, 'Click');
                };
                NODES.E.answersResultBtn.textContent = 'Попробовать снова';
                break;

            case 'end':
                NODES.E.answersResultBtn.onclick = () => {
                    this.final();

                    NODES.E.imMessages.scrollTop = 0;

                    Array.from(['transition', 'transform']).forEach(p => {
                        NODES.E.imMessagesInner.style.removeProperty(p);
                    });

                    clearNode(NODES.E.imMessagesList);

                    Analytics.sendEvent(`${this.typeShowing} — End (score is ${this.score})`, 'Click');
                };
                NODES.E.answersResultBtn.textContent = 'Завершить тест';
                break;
        }
    }

    showAnswers() {
        NODES.E.answers.dataset.show = 'answers';
    }

    spawnNextLevelSMS(typing = false) {
        const text = this.getCurrentLevel().text;

        setTimeout(
            () => {
                this.send({
                    sender: 'from',
                    author: this.getCurrentLevel().author,
                    content: {
                        text: text,
                    },
                    type: 'text',
                    typing: typing,
                });
            },
            typing ? 2500 : 100
        );

        if (!(this.qLevel === 0)) {
            this.answersClicks().disallow();

            setTimeout(
                () => {
                    this.answersClicks().allow();
                },
                typing ? text.replace(/<[^>]*>?/gm, '').length * 20 + 2500 : 100
            );
        }
    }

    nextLevel() {
        ++this.qLevel;

        this.spawnNextLevelSMS(true);
    }

    nextQuestion() {
        ++this.qIndex;

        this.qLevel = 0;

        NODES.E.imMessages.scrollTop = 0;
        NODES.E.imMessagesInner.style.transition = '';
        NODES.E.imMessagesInner.style.transform = 'translate3d(0, 100%, 0)';

        let bc = this.batteryСharge;

        if (bc.style.width === '') {
            bc.style.width = 86 - U.random({ min: 1, max: 5 }) + '%';
        } else {
            let charge = Number(bc.style.width.replace('%', ''));

            bc.style.width = charge - 5 - U.random({ min: 1, max: 5 }) + '%';
        }

        clearNode(NODES.E.imMessagesList);

        this.newQuestion();

        this.showAnswers();
    }

    newQuestion() {
        let currQ = this.getCurrentQuestion();

        NODES.E.answersPhrase.dataset.counter = this.qIndex;

        clearNode(NODES.E.answersList);

        if (this.isStart()) {
            const text = this.getCurrentLevel().text;

            this.answersClicks().disallow();

            if (Array.isArray(text)) {
                text.forEach((t, i) => {
                    setTimeout(() => {
                        this.send({
                            sender: 'from',
                            author: this.getCurrentLevel().author,
                            content: {
                                text: t,
                            },
                            type: 'text',
                            typing: !!i,
                            allowClickAfterTyping: true,
                        });
                    }, 500 * i);
                });
            } else {
                this.send({
                    sender: 'from',
                    author: this.getCurrentLevel().author,
                    content: {
                        text: text,
                    },
                });
            }
        } else {
            this.spawnNextLevelSMS();
        }

        currQ.answers.forEach(answerData => {
            let answerItem = createElement('div', `${CSS.answers}-list-item`, { role: 'listitem' });

            let answerItemBtn = NODES.T.answerItemBtn.cloneNode('true');

            if ('clicked' in answerData) {
                delete answerData.clicked;
            }

            let faceImg = U.qsf('img', answerItemBtn);

            faceImg.src = Data.images.faces[answerData.id];
            faceImg.srcset = Data.images.faces_2x[answerData.id] + ' 2x';

            let nameNode = U.qsf('[class$="name"]', answerItemBtn);

            let splittedName = answerData.who.split(' ');

            nameNode.appendChild(createElement('span', '', { textContent: splittedName[0] }));
            nameNode.appendChild(createElement('span', '', { textContent: splittedName[1] }));

            U.qsf('[class$="company"]', answerItemBtn).innerHTML = answerData.company;

            answerItemBtn.addEventListener('click', e => {
                if (!this.btnsClickAbility || 'disabled' in e.target.dataset) {
                    return;
                }

                if ('clicked' in answerData) {
                    this.send({
                        sender: 'from',
                        author: 'vc.ru',
                        content: { text: ':)' },
                    });

                    return;
                }

                // Кэширование изображений только в случае первого клика

                if (this.qIndex === 0 && this.qLevel === 0) {
                    this.cacheImages();
                }

                answerData.clicked = true;

                let cat = answerData.id in this.getCurrentLevel().answersTexts ? this.getCurrentLevel().answersTexts[answerData.id] : {};

                let isRight = 'right' in answerData && answerData.right;

                if (isRight) {
                    if (this.qIndex !== 0) {
                        this.increaseScore();
                    }

                    NODES.E.answers.dataset.disallowNext = '';

                    setTimeout(() => {
                        delete NODES.E.answers.dataset.disallowNext;
                    }, 750);
                } else {
                    e.target.dataset.disabled = '';
                }

                Analytics.sendEvent(
                    `${this.typeShowing} — Answer (question №${this.qIndex}, level ${this.qLevel + 1}, ${isRight ? 'right' : 'wrong'})`,
                    'Click'
                );

                this.send({
                    sender: 'to',
                    content: {
                        images: {
                            x1: Data.images.faces[answerData.id],
                            x2: Data.images.faces_2x[answerData.id],
                        },
                    },
                    type: 'face',
                    success: isRight,
                });

                let nextEvent = typeof currQ.levels[this.qLevel + 1] === 'undefined' || isRight ? 'q' : 'l';

                if (nextEvent === 'q' && this.qIndex + 1 === this.quizLength) {
                    nextEvent = 'end';
                }

                if ('chat' in cat && cat.chat !== '') {
                    setTimeout(() => {
                        this.send({
                            sender: 'to',
                            content: {
                                text: cat.chat,
                            },
                            author: answerData.who,
                            typing: true,
                        });
                    }, 500);
                }

                /*
                 * В норме, this.showResult() может отработать и для перехода на следующий этап
                 * Здесь эта возможность убрана, но убрав if-else, её можно вернуть
                 */

                if (nextEvent === 'q' || nextEvent === 'end') {
                    this.showResult(
                        isRight,

                        'result' in cat ? cat.result : false,

                        nextEvent
                    );
                } else {
                    this.nextLevel();
                }
            });

            answerItem.appendChild(answerItemBtn);

            NODES.E.answersList.appendChild(answerItem);
        });
    }

    final() {
        let resultsPersonsKeys = Object.keys(Data.quiz.results);

        let person = resultsPersonsKeys[U.random({ max: resultsPersonsKeys.length - 1 })];

        let results = this.results[person];

        let scoreIndex = -1;

        Object.keys(results).forEach(key => {
            if (this.score >= Number(key)) {
                scoreIndex++;
            }
        });

        let ourResult = Object.values(results)[scoreIndex];

        NODES.E.finalResultScore.textContent = `${this.score} из ${this.quizLength - 1} адресатов разгадано`;

        clearNode(NODES.E.finalResultShare);

        Share.make(
            NODES.E.finalResultShare,
            {
                url: this.params.share.url + '/' + person + '/' + (scoreIndex + 1),
                title: this.params.share.title,
                twitter: this.params.share.title,
            },
            this.typeShowing
        );

        clearNode(NODES.E.finalResultSMS);

        NODES.E.finalResultSMS.appendChild(NODES.T.textSMS.cloneNode(true));

        NODES.E.finalResultSMS.firstChild.dataset.sender = 'from';

        U.qsf(`.${CSS.msg}-author`, NODES.E.finalResultSMS).textContent = ourResult.author;
        U.qsf(`.${CSS.msg}-text`, NODES.E.finalResultSMS).innerHTML = U.prepareText(ourResult.text);

        this.finalFaceImg.src = Data.images.faces[`${person}_nichosi`];
        this.finalFaceImg.srcset = Data.images.faces_2x[`${person}_nichosi`] + ' 2x';

        this.showScreen('final');
    }

    restart() {
        this.qIndex = 0;
        this.qLevel = 0;
        this.score = 0;

        this.batteryСharge.style.removeProperty('width');

        clearNode(NODES.E.imMessagesList);

        this.finalFaceImg.src = '';
        this.finalFaceImg.srcset = '';

        this.newQuestion();

        this.showAnswers();

        this.showScreen('quiz');
    }

    cacheImages() {
        let images = {
            x1: [],
            x2: [],
        };

        this.imagesIsCached = true;

        Object.keys(Data.images.faces).forEach(key => {
            images.x1.push(Data.images.faces[key]);
            images.x2.push(Data.images.faces_2x[key]);
        });

        images.x1.push(Data.images.target_logo.x1);
        images.x2.push(Data.images.target_logo.x2);

        for (let i = 0; i < images.x1.length - 1; i++) {
            createElement('img', '', {
                src: images.x1[i],
                srcset: images.x2[i] + ' 2x',
                alt: 'cached image',
            });
        }
    }

    init() {
        this.setInitialParams();

        this.prepareQuestions();

        this.createTemplates();
        this.createElements();

        this.newQuestion();

        if ('allowSkip' in this.params) {
            NODES.E.imSender.addEventListener('dblclick', () => {
                this.score = U.random({ max: this.quizLength });
                this.final();
            });
        }

        ElementQueries.init();
        ElementQueries.listen();

        this.showScreen('quiz');

        Analytics.sendEvent(`${this.typeShowing} — Show`, 'Init');
    }
}

export { Special };
