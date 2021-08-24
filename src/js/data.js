/**
 * Все текстовые значения рекомендуется хранить здесь
 */

import * as IMAGES from '../img';

export default {
    title: 'Мегафон Таргет',

    quiz: {
        questions: [
            {
                answers: {
                    bezos: {
                        who: 'Джефф Безос',
                        company: 'Amazon, Blue Origin',
                    },

                    musk: {
                        who: 'Илон Маск',
                        company: 'SpaceX, Tesla',
                    },

                    durov: {
                        who: 'Павел Дуров',
                        company: 'Telegram',
                    },

                    zuck: {
                        who: 'Марк Цукерберг',
                        company: 'Facebook',
                        right: true,
                    },
                },

                levels: [
                    {
                        author: 'Test',
                        text: [
                            'Известные предпри&shy;ниматели тоже получают рекламные сообщения. Выберите того, кому могла прийти SMS ниже. Если ошибётесь, придёт вариант попроще.',
                            'Весь июнь! Скидки на серые футболки до 50% [fakelink|https://we.ar].',
                        ],
                        answersTexts: {
                            bezos: {
                                chat: '',
                            },

                            musk: {
                                chat: '',
                            },

                            durov: {
                                chat: '',
                            },

                            zuck: {
                                chat: '',
                                result: '',
                            },
                        },
                    },

                    {
                        author: 'Test',
                        text: 'Весь июнь! Скидки на серые футболки до 50%. Всем покупателям промокод на курсы кризисного менеджмента [fakelink|https://we.ar].',
                        answersTexts: {
                            bezos: {
                                chat: '',
                            },

                            musk: {
                                chat: '',
                            },

                            durov: {
                                chat: '',
                            },

                            zuck: {
                                chat: '',
                                result: '',
                            },
                        },
                    },

                    {
                        author: 'Test',
                        text: 'Весь июнь! Скидки на серые футболки до 50%. Всем покупателям промокод на курсы кризисного менеджмента и книги о будущем технологий [fakelink|https://we.ar].',
                        answersTexts: {
                            bezos: {
                                chat: '',
                                result: 'Марк Цукерберг — большой любитель серой одежды. Это была разминка, но с остальным тестом вы наверняка справитесь.',
                            },

                            musk: {
                                chat: '',
                                result: 'Марк Цукерберг — большой любитель серой одежды. Это была разминка, но с остальным тестом вы наверняка справитесь.',
                            },

                            durov: {
                                chat: '',
                                result: 'Марк Цукерберг — большой любитель серой одежды. Это была разминка, но с остальным тестом вы наверняка справитесь.',
                            },

                            zuck: {
                                chat: '',
                                result: '',
                            },
                        },
                    },
                ],

                answersCommonTexts: {
                    bezos: {
                        chat: 'Футболки? Мне больше по вкусу рубашки.',
                    },

                    musk: {
                        chat: 'Чёрные футболки круче.',
                    },

                    durov: {
                        chat: 'Предпочитаю ходить без футболки.',
                    },

                    zuck: {
                        chat: 'Эта человеческая одежда мне подходит.',
                        result: 'Это была разминка. Теперь вы с тестом точно справитесь.',
                    },
                },
            },

            {
                answers: {
                    bezos: {
                        who: 'Джефф Безос',
                        company: 'Amazon, Blue Origin',
                        right: true,
                    },

                    musk: {
                        who: 'Илон Маск',
                        company: 'SpaceX, Tesla',
                    },

                    gates: {
                        who: 'Билл Гейтс',
                        company: 'Microsoft',
                    },

                    zuck: {
                        who: 'Марк Цукерберг',
                        company: 'Facebook',
                    },
                },

                levels: [
                    {
                        author: 'RoboRobo',
                        text: 'Работники устали и хотят домой! Наши роботы рассортируют товар, упакуют, отправят. Пожизненная поддержка в подарок [fakelink|https://ro.bots].',
                        answersTexts: {
                            bezos: {
                                chat: '',
                                result: '',
                            },

                            musk: {
                                chat: '',
                            },

                            gates: {
                                chat: '',
                            },

                            zuck: {
                                chat: '',
                            },
                        },
                    },

                    {
                        author: 'RoboRobo',
                        text: 'И на складе, и на доставке! Предложение для лояльных клиентов: протестируй робота до того, как он поступит в продажу [fakelink|https://ro.bots].',
                        answersTexts: {
                            bezos: {
                                chat: '',
                                result: '',
                            },

                            musk: {
                                chat: '',
                            },

                            gates: {
                                chat: '',
                            },

                            zuck: {
                                chat: '',
                            },
                        },
                    },

                    {
                        author: 'RoboRobo',
                        text: 'Акция до 1 июля! При покупке 10 складских роботов дрон для перевозки небольших грузов в подарок. [fakelink|https://ro.bots].',
                        answersTexts: {
                            bezos: {
                                chat: '',
                                result: '',
                            },

                            musk: {
                                chat: '',
                                result: 'Это сообщение для Джеффа Безоса, главы Amazon.',
                            },

                            gates: {
                                chat: '',
                                result: 'Это сообщение для Джеффа Безоса, главы Amazon.',
                            },

                            zuck: {
                                chat: '',
                                result: 'Это сообщение для Джеффа Безоса, главы Amazon.',
                            },
                        },
                    },
                ],

                answersCommonTexts: {
                    bezos: {
                        chat: 'Пора усиливать складскую логистику перед летними распродажами.',
                        result: 'Это сообщение для главы Amazon — его компания заменяет складских работников роботами.',
                    },

                    musk: {
                        chat: 'Наши машины для дронов тяжеловаты.',
                    },

                    gates: {
                        chat: 'Мне благотвори&shy;тельность интереснее.',
                    },

                    zuck: {
                        chat: 'Мне и так проблем хватает, чтобы людей рабочих мест лишать',
                    },
                },
            },

            {
                answers: {
                    vrach: {
                        who: 'Александр Жаров',
                        company: 'Роском&shy;надзор',
                        right: true,
                    },

                    durov: {
                        who: 'Павел Дуров',
                        company: 'Telegram',
                    },

                    raid: {
                        who: 'Рейд Хоффман',
                        company: 'LinkedIn',
                    },

                    grishin: {
                        who: 'Дмитрий Гришин',
                        company: 'Mail.Ru Group',
                    },
                },

                levels: [
                    {
                        author: 'CloudBox',
                        text: 'Только для премиум-клиентов: высокий объём облачного хранилища и никаких ограничений на количество запросов. Серверы по всей России [fakelink|https://cloud.box].',
                        answersTexts: {
                            vrach: {
                                chat: 'Будет, где хранить персо&shy;нальные данные россиян.',
                                result: '',
                            },

                            durov: {
                                chat: '',
                            },

                            raid: {
                                chat: '',
                            },

                            grishin: {
                                chat: '',
                            },
                        },
                    },

                    {
                        author: 'CloudBox',
                        text: 'Только для премиум-клиентов: высокий объём облачного хранилища и никаких ограничений на количество запросов. Серверы по всей России, интеграция с операторами связи [fakelink|https://cloud.box].',
                        answersTexts: {
                            vrach: {
                                chat: 'Будет, где хранить персональные данные россиян.',
                                result: '',
                            },

                            durov: {
                                chat: '',
                            },

                            raid: {
                                chat: '',
                            },

                            grishin: {
                                chat: '',
                            },
                        },
                    },

                    {
                        author: 'CloudBox',
                        text: 'Клиентам CloudBox скидки на системы Pack Filter: заблокируем всё, что нужно! [fakelink|https://cloud.box].',
                        answersTexts: {
                            vrach: {
                                chat: 'За такую систему мы хоть 25 млн заплатим.',
                                result: '',
                            },

                            durov: {
                                chat: '',
                                result: 'Павлу Дурову блокировки действительно ни к чему, а вот главе Роскомнадзора — вполне.',
                            },

                            raid: {
                                chat: '',
                                result: 'Основателю LinkedIn уже достаточно! Это сообщение для главы Роскомнадзора Александра Жарова.',
                            },

                            grishin: {
                                chat: '',
                                result: 'Это сообщение для главы Роскомнадзора Александра Жарова.',
                            },
                        },
                    },
                ],

                answersCommonTexts: {
                    vrach: {
                        result: 'Это сообщение для главы Роскомнадзора.',
                    },

                    durov: {
                        chat: 'Ну и зачем мне кого-то блокировать?',
                    },

                    raid: {
                        chat: 'Вы что, шутите?',
                    },

                    grishin: {
                        chat: 'Нам своих серверов хватает, и мы ничего не блокируем.',
                    },
                },
            },

            {
                answers: {
                    volozh: {
                        who: 'Аркадий Волож',
                        company: '«Яндекс»',
                        right: true,
                    },

                    tinkov: {
                        who: 'Олег Тиньков',
                        company: '«Тинькофф банк»',
                    },

                    buck: {
                        who: 'Питер Бак',
                        company: 'соосно&shy;ватель Subway',
                    },

                    spiegel: {
                        who: 'Эван Шпигель',
                        company: 'Snapchat',
                    },
                },

                levels: [
                    {
                        author: 'OptClothes',
                        text: 'Пошив одежды жёлтого цвета. Скидка 20% за оптовую покупку [fakelink|https://cloth.es].',
                        answersTexts: {
                            volozh: {
                                chat: '',
                                result: '',
                            },

                            tinkov: {
                                chat: '',
                            },

                            buck: {
                                chat: '',
                            },

                            spiegel: {
                                chat: '',
                            },
                        },
                    },

                    {
                        author: 'OptClothes',
                        text: 'Пошив одежды жёлтого цвета. Скидка 20% за оптовую покупку. Рюкзаки-холодильники в подарок [fakelink|https://cloth.es].',
                        answersTexts: {
                            volozh: {
                                chat: '',
                                result: '',
                            },

                            tinkov: {
                                chat: '',
                            },

                            buck: {
                                chat: '',
                            },

                            spiegel: {
                                chat: '',
                            },
                        },
                    },

                    {
                        author: 'OptClothes',
                        text: 'Пошив одежды жёлтого цвета. Скидка 20% за оптовую покупку. Рюкзаки-холодильники и самокаты в цвет одежды в подарок [fakelink|https://cloth.es].',
                        answersTexts: {
                            volozh: {
                                chat: '',
                                result: '',
                            },

                            tinkov: {
                                chat: '',
                                result: 'А вот у курьеров «Яндекс.Еды» униформа есть. И её нужно много.',
                            },

                            buck: {
                                chat: '',
                                result: 'Логотип у Subway жёлтый, но форма у сотрудников — зелёная! В отличие от курьеров «Яндекс.Еды».',
                            },

                            spiegel: {
                                chat: '',
                                result: 'Только главе «Яндекса», которому принадлежит «Яндекс.Еда», нужно столько жёлтой одежды.',
                            },
                        },
                    },
                ],

                answersCommonTexts: {
                    volozh: {
                        chat: 'Наша покупка будет самой оптовой.',
                        result: 'Только Аркадию Воложу жёлтая одежда нужна в огромных количествах.',
                    },

                    tinkov: {
                        chat: 'У нас нет униформы.',
                    },

                    buck: {
                        chat: 'Нам бы зелёные подошли.',
                    },

                    spiegel: {
                        chat: 'Наши сотрудники к этому не готовы.',
                    },
                },
            },

            {
                answers: {
                    grishin: {
                        who: 'Дмитрий Гришин',
                        company: 'Mail.Ru Group',
                        right: true,
                    },

                    elizabeth: {
                        who: 'Елизавета Осетинская',
                        company: 'The Bell',
                    },

                    brin: {
                        who: 'Сергей Брин',
                        company: 'Google',
                    },

                    musk: {
                        who: 'Илон Маск',
                        company: 'Tesla, SpaceX',
                    },
                },

                levels: [
                    {
                        author: 'TeslaClub',
                        text: 'Всем владельцам Model S — возможность купить Model Y без предзаказа! Закрытый старт продаж — в январе 2021 года. [fakelink|https://musk.see]',
                        answersTexts: {
                            grishin: {
                                chat: 'Хм, мне подходит',
                                result: 'У Дмитрия Гришина как раз есть Model S.',
                            },

                            elizabeth: {
                                chat: '',
                            },

                            brin: {
                                chat: '',
                            },

                            musk: {
                                chat: '',
                            },
                        },
                    },

                    {
                        author: 'TeslaClub',
                        text: 'Матчбол! Предъявите карту любого теннисного клуба и сэкономьте на обслуживании Tesla [fakelink|https://musk.see].',
                        answersTexts: {
                            grishin: {
                                chat: 'А рядом с моим кортом есть офисы?',
                                result: 'Дмитрий Гришин — заядлый теннисист.',
                            },

                            elizabeth: {
                                chat: '',
                            },

                            brin: {
                                chat: '',
                            },

                            musk: {
                                chat: '',
                            },
                        },
                    },

                    {
                        author: 'TeslaClub',
                        text: 'Предложение для лояльных клиентов: посетите фабрику Tesla и посмотрите на сборку электрокаров. Стартуем из Стэнфорда. [fakelink|https://musk.see]',
                        answersTexts: {
                            grishin: {
                                chat: 'Едем!',
                                result: 'Доставлено! Дмитрий Гришин учился в Стэнфорде, и наверняка будет рад заглянуть в альма-матер перед экскурсией.',
                            },

                            elizabeth: {
                                chat: '',
                                result: 'Это сообщение для главы Mail.Ru Group Дмитрия Гришина — он тоже учился в Стэнфорде, а также владеет Tesla.',
                            },

                            brin: {
                                chat: '',
                                result: 'Это сообщение для главы Mail.Ru Group Дмитрия Гришина — у него есть Tesla.',
                            },

                            musk: {
                                chat: '',
                                result: 'Это сообщение для главы Mail.Ru Group Дмитрия Гришина, а Маск может посетить свою фабрику и без всяких экскурсий.',
                            },
                        },
                    },
                ],

                answersCommonTexts: {
                    elizabeth: {
                        chat: 'У меня нет «Теслы».',
                    },

                    brin: {
                        chat: 'Не очень хочется поддер&shy;живать конкурентов.',
                    },

                    musk: {
                        chat: 'И зачем [b|мне] скидки на электрокары?',
                    },
                },
            },

            {
                answers: {
                    nikolay: {
                        who: 'Николай Сторонский',
                        company: 'Revolut',
                        right: true,
                    },

                    richard: {
                        who: 'Ричард Брэнсон',
                        company: 'Virgin',
                    },

                    gref: {
                        who: 'Герман Греф',
                        company: 'Сбербанк',
                    },

                    cook: {
                        who: 'Тим Кук',
                        company: 'Apple',
                    },
                },

                levels: [
                    {
                        author: 'MetalStuff',
                        text: 'Металлические изделия из армированной стали, от 200 штук — скидка 5% [fakelink|https://metal.stff].',
                        answersTexts: {
                            nikolay: {
                                chat: '',
                                result: '',
                            },

                            richard: {
                                chat: '',
                            },

                            gref: {
                                chat: '',
                            },

                            cook: {
                                chat: '',
                            },
                        },
                    },

                    {
                        author: 'MetalStuff',
                        text: 'Металлические изделия из армированной стали, от 200 штук — скидка 5%. Карты, кардхолдеры, металлические визитки, ярлыки. [fakelink|https://metal.stff]',
                        answersTexts: {
                            nikolay: {
                                chat: '',
                                result: '',
                            },

                            richard: {
                                chat: '',
                            },

                            gref: {
                                chat: '',
                            },

                            cook: {
                                chat: '',
                            },
                        },
                    },

                    {
                        author: 'MetalStuff',
                        text: 'Металлические изделия из армированной стали, от 200 штук — скидка 5%. Отчеканим имена владельцев, доставим в Лондон, Осло, Копенгаген, Хельсинки и другие города [fakelink|https://metal.stff].',
                        answersTexts: {
                            nikolay: {
                                chat: '',
                                result: '',
                            },

                            richard: {
                                chat: '',
                                result: 'Это сообщение для Николая Сторонского — Revolut выдаёт стальные карты премиальным клиентам.',
                            },

                            gref: {
                                chat: '',
                                result: 'Это сообщение для Николая Сторонского — Revolut выдаёт стальные карты премиальным клиентам.',
                            },

                            cook: {
                                chat: '',
                                result: 'Это сообщение для Николая Сторонского — Revolut выдаёт стальные карты премиальным клиентам.',
                            },
                        },
                    },
                ],

                answersCommonTexts: {
                    nikolay: {
                        chat: 'Отлично, подойдёт для премиальных клиентов.',
                        result: 'Премиальные клиенты Revolut получают стальные карты.',
                    },

                    richard: {
                        chat: 'У меня много компаний, но ни одной это не нужно.',
                    },

                    gref: {
                        chat: 'Мы металлические карты не выпускаем.',
                    },

                    cook: {
                        chat: 'Наши Apple Card — титано&shy;вые.',
                    },
                },
            },

            {
                answers: {
                    bakalchuk: {
                        who: 'Татьяна Бакальчук',
                        company: 'Wildberries',
                        right: true,
                    },

                    fridman: {
                        who: 'Михаил Фридман',
                        company: 'X5 Retail',
                    },

                    romanova: {
                        who: 'Надежда Романова',
                        company: 'PickPoint',
                    },

                    max: {
                        who: 'Максим Гришаков',
                        company: 'Яндекс.&#8203;Маркет',
                    },
                },

                levels: [
                    {
                        author: 'RealRealty',
                        text: 'Небольшие помещения в аренду. В торговых центрах, у метро. Покажите эту SMS и получите скидку на отделку [fakelink|https://real.ty].',
                        answersTexts: {
                            bakalchuk: {
                                chat: '',
                                result: '',
                            },

                            fridman: {
                                chat: '',
                            },

                            romanova: {
                                chat: '',
                            },

                            max: {
                                chat: '',
                            },
                        },
                    },

                    {
                        author: 'RealRealty',
                        text: 'Небольшие помещения в аренду. В торговых центрах, у метро. Оборудуем примерочные внутри [fakelink|https://real.ty].',
                        answersTexts: {
                            bakalchuk: {
                                chat: '',
                                result: '',
                            },

                            fridman: {
                                chat: '',
                            },

                            romanova: {
                                chat: '',
                            },

                            max: {
                                chat: '',
                            },
                        },
                    },

                    {
                        author: 'RealRealty',
                        text: 'Небольшие помещения в аренду. В торговых центрах, у метро. Оборудуем примерочные внутри, скидка на отделку по промокоду «МОДА» [fakelink|https://real.ty].',
                        answersTexts: {
                            bakalchuk: {
                                chat: '',
                                result: '',
                            },

                            fridman: {
                                chat: '',
                                result: '«Перекрёстку» и «Карусели» вряд ли это пригодится. А Wildberries — вполне.',
                            },

                            romanova: {
                                chat: '',
                                result: 'Это сообщение для вла&shy;делицы Wildberries.',
                            },

                            max: {
                                chat: '',
                                result: 'Это сообщение для вла&shy;делицы Wildberries.',
                            },
                        },
                    },
                ],

                answersCommonTexts: {
                    bakalchuk: {
                        chat: 'Эти помещения нам приго&shy;дятся.',
                        result: 'В 2019 году Wildberries собралась расширить сеть пунктов выдачи в два раза.',
                    },

                    fridman: {
                        chat: 'Нам нужны [b|большие] поме&shy;щения.',
                    },

                    romanova: {
                        chat: 'У нас постаматы, какие там примерочные.',
                    },

                    max: {
                        chat: 'У «Яндекс.Маркета» нет собственных пунктов выдачи.',
                    },
                },
            },

            {
                answers: {
                    goncharov: {
                        who: 'Михаил Гончаров',
                        company: 'основа&shy;тель «Теремка»',
                        right: true,
                    },

                    novikov: {
                        who: 'Аркадий Новиков',
                        company: 'ресторатор',
                    },

                    tatulova: {
                        who: 'Анастасия Татулова',
                        company: 'основа&shy;тельница сети «Андерсон»',
                    },

                    tinkov: {
                        who: 'Олег Тиньков',
                        company: '«Тинькофф-банк»',
                    },
                },

                levels: [
                    {
                        author: 'FoodOptTorg',
                        text: 'К клубнике, маскарпоне и фуа-гра — маршмеллоу в подарок! При покупке до десяти килограммов любого продукта [fakelink|https://fo.od].',
                        answersTexts: {
                            goncharov: {
                                chat: 'Как раз недавно в «Депо» открылись.',
                                result: 'Основатель «Теремка» недавно открыл премиум-блинную «Припёк».',
                            },

                            novikov: {
                                chat: '',
                            },

                            tatulova: {
                                chat: '',
                            },

                            tinkov: {
                                chat: '',
                            },
                        },
                    },

                    {
                        author: 'FoodOptTorg',
                        text: 'К клубнике, маскарпоне и фуа-гра — маршмеллоу в подарок! При покупке до десяти килограммов любого продукта. Доставка до «Депо» [fakelink|https://fo.od].',
                        answersTexts: {
                            goncharov: {
                                chat: 'Как раз недавно в «Депо» открылись.',
                                result: 'Основатель «Теремка» недавно открыл премиум-блинную «Припёк».',
                            },

                            novikov: {
                                chat: '',
                            },

                            tatulova: {
                                chat: '',
                            },

                            tinkov: {
                                chat: '',
                            },
                        },
                    },

                    {
                        author: 'FoodOptTorg',
                        text: 'Не хватает чего-то русского? Купи 10 кг красной икры и получи кокошники от нашего партнера [fakelink|https://fo.od].',
                        answersTexts: {
                            goncharov: {
                                chat: 'Ну конечно!',
                                result: 'Кокошники — это точно для «Теремка». К тому же, основатель сети ресторанов недавно открыл премиум-блинную «Припёк».',
                            },

                            novikov: {
                                chat: '',
                                result: 'Русские блины, клубника и маскарпоне — всё это в «Теремке». Или премиум-блинной «Припёк» от того же основателя.',
                            },

                            tatulova: {
                                chat: '',
                                result: 'Русские блины, клубника и маскарпоне — всё это в «Теремке». Или премиум-блинной «Припёк» от того же основателя.',
                            },

                            tinkov: {
                                chat: '',
                                result: 'Русские блины, клубника и маскарпоне — всё это в «Теремке». Или премиум-блинной «Припёк» от того же основателя.',
                            },
                        },
                    },
                ],

                answersCommonTexts: {
                    novikov: {
                        chat: 'Нам и старые поставщики подходят.',
                    },

                    tatulova: {
                        chat: 'Десять килограммов? Ма&shy;ловато.',
                    },

                    tinkov: {
                        chat: 'Ресторанный бизнес для меня давно не в приори&shy;тете.',
                    },
                },
            },

            {
                answers: {
                    milner: {
                        who: 'Юрий Мильнер',
                        company: 'DST Global',
                        right: true,
                    },

                    maezawa: {
                        who: 'Юсаку Маэдзава',
                        company: 'Start Today',
                    },

                    zuck: {
                        who: 'Марк Цукерберг',
                        company: 'Facebook',
                    },

                    brin: {
                        who: 'Сергей Брин',
                        company: 'Google',
                    },
                },

                levels: [
                    {
                        author: 'SpaceY',
                        text: 'На Марс как на другой континент! Запускаем межпланетные перелеты. Записаться в лист ожидания [fakelink|https://spa.ce.y].',
                        answersTexts: {
                            milner: {
                                chat: '',
                                result: '',
                            },

                            maezawa: {
                                chat: '',
                            },

                            zuck: {
                                chat: '',
                            },

                            brin: {
                                chat: '',
                            },
                        },
                    },

                    {
                        author: 'SpaceY',
                        text: 'Оборудуем вам лабораторию для фиксации инопланетных сигналов [fakelink|https://spa.ce.y].',
                        answersTexts: {
                            milner: {
                                chat: '',
                                result: '',
                            },

                            maezawa: {
                                chat: '',
                            },

                            zuck: {
                                chat: '',
                            },

                            brin: {
                                chat: '',
                            },
                        },
                    },

                    {
                        author: 'SpaceY',
                        text: 'Запускаем межпланет&shy;ные перелеты на корабле с новейшими локаторами и системами поиска инопланетной жизни. Записаться в лист ожидания: [fakelink|https://spa.ce.y].',
                        answersTexts: {
                            milner: {
                                chat: '',
                                result: '',
                            },

                            maezawa: {
                                chat: '',
                                result: 'Предложение может заинтересовать Юрия Мильнера — он [link|https://vc.ru/future/47247|планирует] посвятить себя поиску инопланетной жизни.',
                            },

                            zuck: {
                                chat: '',
                                result: 'Предложение может заинтересовать Юрия Мильнера — он [link|https://vc.ru/future/47247|планирует] посвятить себя поиску инопланетной жизни.',
                            },

                            brin: {
                                chat: '',
                                result: 'Предложение может заинтересовать Юрия Мильнера — он [link|https://vc.ru/future/47247|планирует] посвятить себя поиску инопланетной жизни.',
                            },
                        },
                    },
                ],

                answersCommonTexts: {
                    milner: {
                        chat: 'Поехали!',
                        result: 'В 2015 Юрий Мильнер [link|https://vc.ru/future/47247|запустил] программу Breakthrough Initiatives. Её участники ищут разумную жизнь во вселенной и разрабатывают межзвёздный космический корабль с солнечным парусом.',
                    },

                    maezawa: {
                        chat: 'Вообще-то у меня уже есть билет на первый полёт SpaceX.',
                    },

                    zuck: {
                        chat: 'Меня земная жизнь больше волнует.',
                    },

                    brin: {
                        chat: 'Космос? У нас и на Земле дел по горло.',
                    },
                },
            },
        ],

        results: {
            zuck: {
                0: {
                    author: 'Aloha!',
                    text: '[b|Марк Ц.], до 20.07 вам гарантирована персональная скидка 25% на гавайские рубашки и другую одежду ярких цветов!',
                },

                4: {
                    author: 'YourCab',
                    text: '[b|Марк Ц.], скидка 15% на такси для постоянных клиентов маршрута Аэропорт Рональда Рейгана — Конгресс',
                },

                7: {
                    author: 'SiliconClothes',
                    text: '[b|Марк Ц.], вам гарантирована пожизненная скидка 10% на одежду серых цветов',
                },
            },

            tinkov: {
                0: {
                    author: 'Ракета-банк',
                    text: '[b|Олег Т.], закажите дебетовую карту «Ракета-банка» до 25.07.2019 и получите бесплатное обслуживание на два года',
                },

                4: {
                    author: '«Волна»',
                    text: '[b|Олег Т.], только для вас — скидка 25% на проживание в трёхзвездочном отеле «Волна» в г. Куршавель',
                },

                7: {
                    author: 'Planes4Brains',
                    text: '[b|Олег Т.], мы скупаем подержанные самолёты! Отдайте свой Falcon нам и получите 50% скидку на новый с доплатой.',
                },
            },

            cook: {
                0: {
                    author: 'iStore',
                    text: '[b|Тим К.], вам гарантирована скидка 15% на смартфоны и сервисное обслуживание',
                },

                4: {
                    author: 'CONF4YOU',
                    text: '[b|Тим К.], ваша компания часто проводит конференции? Наймите нашего ведущего: скидка 15% по промокоду CONF4WIN',
                },

                7: {
                    author: 'SecDiscuss',
                    text: '[b|Тим К.], вступайте в закрытый дискуссионный клуб для технологических лидеров: +1 502 449 9564',
                },
            },
        },
    },

    images: {
        faces: {
            bakalchuk: IMAGES.bakalchuk,
            bezos: IMAGES.bezos,
            brin: IMAGES.brin,
            buck: IMAGES.buck,
            cook: IMAGES.cook,
            cook_nichosi: IMAGES.cook_nichosi,
            durov: IMAGES.durov,
            elizabeth: IMAGES.elizabeth,
            fridman: IMAGES.fridman,
            gates: IMAGES.gates,
            goncharov: IMAGES.goncharov,
            gref: IMAGES.gref,
            grishin: IMAGES.grishin,
            maezawa: IMAGES.maezawa,
            max: IMAGES.max,
            milner: IMAGES.milner,
            musk: IMAGES.musk,
            nikolay: IMAGES.nikolay,
            novikov: IMAGES.novikov,
            raid: IMAGES.raid,
            richard: IMAGES.richard,
            romanova: IMAGES.romanova,
            spiegel: IMAGES.spiegel,
            tatulova: IMAGES.tatulova,
            tinkov: IMAGES.tinkov,
            tinkov_nichosi: IMAGES.tinkov_nichosi,
            volozh: IMAGES.volozh,
            vrach: IMAGES.vrach,
            zuck: IMAGES.zuck,
            zuck_nichosi: IMAGES.zuck_nichosi,
        },

        faces_2x: {
            bakalchuk: IMAGES.bakalchuk2x,
            bezos: IMAGES.bezos2x,
            brin: IMAGES.brin2x,
            buck: IMAGES.buck2x,
            cook: IMAGES.cook2x,
            cook_nichosi: IMAGES.cook_nichosi2x,
            durov: IMAGES.durov2x,
            elizabeth: IMAGES.elizabeth2x,
            fridman: IMAGES.fridman2x,
            gates: IMAGES.gates2x,
            goncharov: IMAGES.goncharov2x,
            gref: IMAGES.gref2x,
            grishin: IMAGES.grishin2x,
            maezawa: IMAGES.maezawa2x,
            max: IMAGES.max2x,
            milner: IMAGES.milner2x,
            musk: IMAGES.musk2x,
            nikolay: IMAGES.nikolay2x,
            novikov: IMAGES.novikov2x,
            raid: IMAGES.raid2x,
            richard: IMAGES.richard2x,
            romanova: IMAGES.romanova2x,
            spiegel: IMAGES.spiegel2x,
            tatulova: IMAGES.tatulova2x,
            tinkov: IMAGES.tinkov2x,
            tinkov_nichosi: IMAGES.tinkov_nichosi2x,
            volozh: IMAGES.volozh2x,
            vrach: IMAGES.vrach2x,
            zuck: IMAGES.zuck2x,
            zuck_nichosi: IMAGES.zuck_nichosi2x,
        },

        anon: {
            x1: IMAGES.anon,
            x2: IMAGES.anon2x,
        },

        target_logo: {
            x1: IMAGES.targetLogo,
            x2: IMAGES.targetLogo2x,
        },
    },

    mega_text: [
        'Чтобы рассылки были эффективнее, можно нанять на работу МегаФон. У компании есть более 30 решений для оптимизации и развития бизнеса, в том числе МегаФон Таргет.',
        'С его помощью можно таргетировать SMS-сообщения по 11 параметрам: например, возрасту и полу клиента, посещённым сайтам, нахождению в определенной зоне на карте. Ещё можно узнать уровень дохода и интересы абонента, а для подключения достаточно номера телефона.',
    ],

    final_links: {
        logo: 'https://target.megafon.ru/?utm_source=vc&utm_medium=article&utm_campaign=vc-mftarget-test&utm_content=logo',
        button: 'https://target.megafon.ru/?utm_source=vc&utm_medium=article&utm_campaign=vc-mftarget-test&utm_content=link',
    },
};
