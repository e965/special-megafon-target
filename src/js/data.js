/**
 * Все текстовые значения рекомендуется хранить здесь
 */
export default {
  title: 'Мегафон Таргет',

  quiz: {
    questions: [
      {
        answers: {
          bezos: {
            who: 'Джефф Безос',
            company: 'Amazon, Blue Origin',
            right: true
          },

          musk: {
            who: 'Илон Маск',
            company: 'SpaceX, Tesla'
          },

          gates: {
            who: 'Билл Гейтс',
            company: 'Microsoft'
          },

          zuck: {
            who: 'Марк Цукерберг',
            company: 'Facebook'
          }
        },

        levels: [
          {
            author: 'РобоРобо',
            text: 'Работники устали и хотят домой! Наши роботы рассортируют товар, упакуют, отправят. Пожизненная поддержка в подарок [fakelink|https://ro.bots]',
            answersTexts: {
              bezos: {
                chat: '',
                result: ''
              }
            }
          },

          {
            author: 'РобоРобо',
            text: 'И на складе, и на доставке! Предложение для лояльных клиентов: протестируй робота до того, как он поступит в продажу [fakelink|https://ro.bots]',
            answersTexts: {
              bezos: {
                chat: '',
                result: ''
              }
            }
          },

          {
            author: 'РобоРобо',
            text: 'Акция до 1 июля! При покупке 10 складских роботов дрон для перевозки небольших грузов в подарок. [fakelink|https://ro.bots]',
            answersTexts: {
              bezos: {
                chat: '',
                result: ''
              },

              musk: {
                result: 'Машины Илона Маска тяжеловаты для дронов и роботов. Это сообщение для главы Amazon.'
              },

              gates: {
                result: 'Биллу Гейтсу ближе благотворительность. Это сообщение для главы Amazon'
              },

              zuck: {
                result: 'У Марка Цукерберга пока хватает проблем, и доставлять дронами нечего. Это сообщение для главы Amazon.'
              }
            }
          }
        ],

        answersCommonTexts: {
          bezos: {
            chat: 'Пора усиливать складскую логистику перед летними распродажами.',
            result: 'Это сообщение для главы Amazon, который с недавних пор занялся благотворительностью.'
          }
        }
      },

      {
        answers: {
          vrach: {
            who: 'Александр Жаров',
            company: 'Роском&shy;надзор',
            right: true
          },

          durov: {
            who: 'Павел Дуров',
            company: 'Telegram'
          },

          raid: {
            who: 'Рейд Хоффман',
            company: 'LinkedIn'
          },

          grishin: {
            who: 'Дмитрий Гришин',
            company: 'Mail.Ru Group'
          }
        },

        levels: [
          {
            author: 'CloudBox',
            text: 'Только для премиум-клиентов: высокий объём облачного хранилища и количество запросов. Серверы по всей России [fakelink|https://cloud.box]',
            answersTexts: {
              vrach: {
                chat: 'Будет, где хранить персональные данные россиян.',
                result: ''
              }
            }
          },

          {
            author: 'CloudBox',
            text: 'Только для премиум-клиентов: высокий объём облачного хранилища и количество запросов. Серверы по всей России, интеграция с операторами связи [fakelink|https://cloud.box]',
            answersTexts: {
              vrach: {
                chat: 'Будет, где хранить персональные данные россиян.',
                result: ''
              }
            }
          },

          {
            author: 'CloudBox',
            text: 'Клиентам CloudBox скидки на системы Pack Filter: заблокируем всё, что нужно! [fakelink|https://cloud.box]',
            answersTexts: {
              vrach: {
                chat: 'За такую систему мы хоть 25 млн заплатим.',
                result: ''
              },

              durov: {
                result: 'Павлу Дурову вряд ли нужно кого-то блокировать, а вот главе Роскомнадзора — вполне.'
              },

              raid: {
                result: 'Основателю LinkedIn уже достаточно! Это сообщение для главы Роскомнадзора Александра Жарова.'
              },

              grishin: {
                result: 'Это сообщение для главы Роскомнадзора Александра Жарова.'
              }
            }
          }
        ],

        answersCommonTexts: {
          vrach: {
            result: 'Это сообщение для главы Роскомнадзора.'
          }
        }
      },

      {
        answers: {
          volozh: {
            who: 'Аркадий Волож',
            company: '«Яндекс»',
            right: true
          },

          tinkov: {
            who: 'Олег Тиньков',
            company: '«Тинькофф банк»'
          },

          buck: {
            who: 'Питер Бак',
            company: 'соосно&shy;ватель Subway'
          },

          spiegel: {
            who: 'Эван Шпигель',
            company: 'Snapchat'
          }
        },

        levels: [
          {
            author: 'Одежда Оптом',
            text: '',
            answersTexts: {
              volozh: {
                chat: 'Пошив одежды жёлтого цвета. Скидка 20% за оптовую покупку [fakelink|https://cloth.es]',
                result: ''
              }
            }
          },

          {
            author: 'Одежда Оптом',
            text: 'Пошив одежды жёлтого цвета. Скидка 20% за оптовую покупку. Рюкзаки-холодильники в подарок [fakelink|https://cloth.es]',
            answersTexts: {
              volozh: {
                chat: '',
                result: ''
              }
            }
          },

          {
            author: 'Одежда Оптом',
            text: 'Пошив одежды жёлтого цвета. Скидка 20% за оптовую покупку. Рюкзаки-холодильники и самокаты в цвет одежды в подарок [fakelink|https://cloth.es]',
            answersTexts: {
              volozh: {
                chat: '',
                result: ''
              },

              tinkov: {
                result: 'Униформу в «Тинькофф банке» пока не ввели. А вот у курьеров «Яндекс.Еды» она есть.'
              },

              buck: {
                result: 'Логотип у Subway жёлтый, но форма у сотрудников — зелёная! В отличие от курьеров «Яндекс.Еды».'
              },

              spiegel: {
                result: 'Сотрудники мессенджера к этому не готовы. Сообщение пришло главе «Яндекса», которому принадлежит «Яндекс.Еда».'
              }
            }
          }
        ],

        answersCommonTexts: {
          volozh: {
            chat: 'Наша покупка будет самой оптовой.',
            result: 'Только Аркадию Воложу жёлтая одежда нужна в огромных количествах'
          }
        }
      },

      {
        answers: {
          grishin: {
            who: 'Дмитрий Гришин',
            company: 'Mail.Ru Group',
            right: true
          },

          elizabeth: {
            who: 'Елизавета Осетинская',
            company: 'The Bell'
          },

          brin: {
            who: 'Сергей Брин',
            company: 'Google'
          },

          musk: {
            who: 'Илон Маск',
            company: 'Tesla, SpaceX'
          }
        },

        levels: [
          {
            author: 'TeslaClub',
            text: 'Всем владельцам Model S — возможность купить Model Y без предзаказа! Закрытый старт продаж — в январе 2021 года. [fakelink|https://musk.see]',
            answersTexts: {
              grishin: {
                chat: 'Хм, мне подходит',
                result: 'У Дмитрия Гришина как раз есть Model S.'
              }
            }
          },

          {
            author: 'TeslaClub',
            text: 'Матчбол! Предъявите карту любого теннисного клуба и сэкономьте на обслуживании электрокара [fakelink|https://musk.see]',
            answersTexts: {
              grishin: {
                chat: 'А рядом с моим кортом есть офисы?',
                result: 'Дмитрий Гришин — заядлый теннисист.'
              }
            }
          },

          {
            author: 'TeslaClub',
            text: 'Предложение для лояльных клиентов: посетите фабрику Tesla и посмотрите на сборку электрокаров. Стартуем из Стэнфорда. [fakelink|https://musk.see]',
            answersTexts: {
              grishin: {
                chat: 'Едем!',
                result: 'Доставлено! Дмитрий Гришин учился в Стэнфорде, и наверняка будет рад заглянуть в альма-матер перед экскурсией.'
              },

              elizabeth: {
                result: 'Это сообщение для главы Mail.Ru Group Дмитрия Гришина — на конференции он мог бы поискать перспективные проекты.'
              },

              brin: {
                result: 'Не доставлено. Это сообщение для главы Mail.Ru Group Дмитрия Гришина.'
              },

              musk: {
                result: 'Это сообщение для главы Mail.Ru Group Дмитрия Гришина, а Маск может посетить свою фабрику и без всяких экскурсий'
              }
            }
          }
        ]
      },

      {
        answers: {
          nikolay: {
            who: 'Николай Сторонский',
            company: 'Revolut',
            right: true
          },

          richard: {
            who: 'Ричард Брэнсон',
            company: 'Virgin'
          },

          gref: {
            who: 'Герман Греф',
            company: 'Сбербанк'
          },

          cook: {
            who: 'Тим Кук',
            company: 'Apple'
          }
        },

        levels: [
          {
            author: 'MetalStuff',
            text: 'Металлические изделия из армированной стали, от 200 штук — скидка 5% [fakelink|https://metal.stff]',
            answersTexts: {
              nikolay: {
                chat: '',
                result: ''
              }
            }
          },

          {
            author: 'MetalStuff',
            text: 'Металлические изделия из армированной стали, от 200 штук — скидка 5%. Карты, кардхолдеры, металлические визитки, ярлыки. [fakelink|https://metal.stff]',
            answersTexts: {
              nikolay: {
                chat: '',
                result: ''
              }
            }
          },

          {
            author: 'MetalStuff',
            text: 'Металлические изделия из армированной стали, от 200 штук — скидка 5%. Отчеканим имена владельцев, доставим в Лондон, Осло, Копенгаген, Хельсинки и другие города [fakelink|https://metal.stff]',
            answersTexts: {
              nikolay: {
                chat: '',
                result: ''
              },

              richard: {
                result: 'Ни одному бизнесу Брэнсона это не пригодится, а Revolut Николая Сторонского выдаёт стальные карты премиальным клиентам.'
              },

              gref: {
                result: '«Сбербанк» не выпускает такие карты. А вот у Revolut они есть — для премиальных клиентов.'
              },

              cook: {
                result: 'Apple Card титановые. А Revolut Николая Сторонского выдаёт стальные — премиальным клиентам.'
              }
            }
          }
        ],

        answersCommonTexts: {
          nikolay: {
            chat: 'Отлично, подойдёт для премиальных клиентов.',
            result: 'Премиальные клиенты Revolut получают стальные карты.'
          }
        }
      },

      {
        answers: {
          bakalchuk: {
            who: 'Татьяна Бакальчук',
            company: 'Wildberries',
            right: true
          },

          fridman: {
            who: 'Михаил Фридман',
            company: 'X5 Retail'
          },

          romanova: {
            who: 'Надежда Романова',
            company: 'PickPoint'
          },

          max: {
            who: 'Максим Гришаков',
            company: 'Яндекс.&#8203;Маркет'
          }
        },

        levels: [
          {
            author: 'Агентство Коммерческой Недвижимости',
            text: 'Небольшие помещения в аренду. В торговых центрах, у метро. Покажите эту SMS и получите скидку на отделку [fakelink|https://real.ty]',
            answersTexts: {
              bakalchuk: {
                chat: '',
                result: ''
              }
            }
          },

          {
            author: 'Агентство Коммерческой Недвижимости',
            text: 'Небольшие помещения в аренду. В торговых центрах, у метро. Оборудуем примерочные внутри [fakelink|https://real.ty]',
            answersTexts: {
              bakalchuk: {
                chat: '',
                result: ''
              }
            }
          },

          {
            author: 'Агентство Коммерческой Недвижимости',
            text: 'Небольшие помещения в аренду. В торговых центрах, у метро. Оборудуем примерочные внутри, скидка на отделку по промокоду «МОДА» [fakelink|https://real.ty]',
            answersTexts: {
              bakalchuk: {
                chat: '',
                result: ''
              },

              fridman: {
                result: 'Небольшие помещения «Перекрёстку» и «Карусели» вряд ли пригодятся. А вот Wildberries бы подошли.'
              },

              romanova: {
                result: 'Под постаматы отдельные помещения не нужны, тем более с примерочными. Это сообщение для владелицы Wildberries.'
              },

              max: {
                result: 'У «Яндекс.Маркета» пока что нет собственных пунктов выдачи. Это сообщение для владелицы Wildberries.'
              }
            }
          }
        ],

        answersCommonTexts: {
          bakalchuk: {
            chat: 'Нам помещения пригодятся.',
            result: 'В 2019 году Wildberries собралась расширить сеть пунктов выдачи в два раза.'
          }
        }
      },

      {
        answers: {
          goncharov: {
            who: 'Михаил Гончаров',
            company: 'основа&shy;тель «Теремка»',
            right: true
          },

          novikov: {
            who: 'Аркадий Новиков',
            company: 'ресторатор'
          },

          tatulova: {
            who: 'Анастасия Татулова',
            company: 'основа&shy;тельница сети «Андерсон»'
          },

          tinkov: {
            who: 'Олег Тиньков',
            company: '«Тинькофф-банк»'
          }
        },

        levels: [
          {
            author: 'ПродуктОптТорг',
            text: 'К клубнике, маскарпоне и фуа-гра — маршмеллоу в подарок! При покупке до десяти килограммов любого продукта [fakelink|https://fo.od]',
            answersTexts: {
              goncharov: {
                chat: 'Как раз недавно в «Депо» открылись.',
                result: 'Основатель «Теремка» недавно открыл премиум-блинную «Припёк».'
              }
            }
          },

          {
            author: 'ПродуктОптТорг',
            text: 'К клубнике, маскарпоне и фуа-гра — маршмеллоу в подарок! При покупке до десяти килограммов любого продукта. Доставка до «Депо» [fakelink|https://fo.od]',
            answersTexts: {
              goncharov: {
                chat: 'Как раз недавно в «Депо» открылись.',
                result: 'Основатель «Теремка» недавно открыл премиум-блинную «Припёк».'
              }
            }
          },

          {
            author: 'ПродуктОптТорг',
            text: 'Не хватает чего-то русского? Купи 10 кг красной икры и получи кокошники от нашего партнера [fakelink|https://fo.od]',
            answersTexts: {
              goncharov: {
                chat: 'Ну конечно!',
                result: 'Кокошники — это точно для «Теремка». К тому же, основатель сети ресторанов недавно открыл премиум-блинную «Припёк».'
              },

              novikov: {
                result: 'Русские блины, клубника и маскарпоне — всё это в «Теремке». Или премиум-блинной «Припёк» от того же основателя.'
              },

              tatulova: {
                result: 'Русские блины, клубника и маскарпоне — всё это в «Теремке». Или премиум-блинной «Припёк» от того же основателя.'
              },

              tinkov: {
                result: 'Русские блины, клубника и маскарпоне — всё это в «Теремке». Или премиум-блинной «Припёк» от того же основателя.'
              }
            }
          }
        ]
      },

      {
        answers: {
          milner: {
            who: 'Юрий Мильнер',
            company: 'DST Global',
            right: true
          },

          maezawa: {
            who: 'Юсаку Маэдзава',
            company: 'Start Today'
          },

          zuck: {
            who: 'Марк Цукерберг',
            company: 'Facebook'
          },

          brin: {
            who: 'Сергей Брин',
            company: 'Google'
          }
        },

        levels: [
          {
            author: 'SpaceY',
            text: 'На Марс как на другой континент! Запускаем межпланетные перелеты. Записаться в лист ожидания [fakelink|https://spa.ce.y]',
            answersTexts: {
              milner: {
                chat: '',
                result: ''
              }
            }
          },

          {
            author: 'SpaceX',
            text: 'Оборудуем вам лабораторию для фиксации иноземных сигналов [fakelink|https://spa.ce.y]',
            answersTexts: {
              milner: {
                chat: '',
                result: ''
              }
            }
          },

          {
            author: 'SpaceX',
            text: 'Запускаем межпланетные перелеты на корабле с новейшими локаторами и системами поиска инопланетной жизни. Записаться в лист ожидания: [fakelink|https://spa.ce.y]',
            answersTexts: {
              milner: {
                chat: '',
                result: ''
              },

              maezawa: {
                result: 'У этого космического туриста уже есть билет на первый полёт SpaceX. А вот Юрия Мильнера предложение может заинтересовать — он [link|https://vc.ru/future/47247|планирует] посвятить себя поиску инопланетной жизни.'
              },

              zuck: {
                result: 'Основателя Facebook пока больше волнует земная жизнь. А вот Юрия Мильнера предложение может заинтересовать — он [link|https://vc.ru/future/47247|планирует] посвятить себя поиску инопланетной жизни.'
              },

              brin: {
                result: 'Кажется, Брин пока не стремится в космос. А вот Юрия Мильнера предложение может заинтересовать — он [link|https://vc.ru/future/47247|планирует] посвятить себя поиску инопланетной жизни.'
              }
            }
          }
        ],

        answersCommonTexts: {
          milner: {
            chat: 'Поехали!',
            result: 'В 2015 Юрий Мильнер [link|https://vc.ru/future/47247|запустил] программу Breakthrough Initiatives. Её участники ищут разумную жизнь во вселенной и разрабатывают межзвёздный космический корабль с солнечным парусом.'
          }
        }
      }
    ],

    results: {
      zuck: {
        0: {
          author: 'Aloha!',
          text: '[b|Марк Ц.], до 20.07 вам гарантирована персональная скидка 25% на гавайские рубашки и другую одежду ярких цветов!'
        },

        4: {
          author: 'YourCab',
          text: '[b|Марк Ц.], скидка 15% на такси для постоянных клиентов маршрута Аэропорт Рональда Рейгана — Конгресс'
        },

        7: {
          author: 'SiliconClothes',
          text: '[b|Марк Ц.], вам гарантирована пожизненная скидка 10% на одежду серых цветов'
        }
      },

      tinkov: {
        0: {
          author: 'Ракета-банк',
          text: '[b|Олег Т.], закажите дебетовую карту «Ракета-банка» до 25.07.2019 и получите бесплатное обслуживание на два года'
        },

        4: {
          author: '«Волна»',
          text: '[b|Олег Т.], только для вас — скидка 25% на проживание в трёхзвездочном отеле «Волна» в г. Куршавель'
        },

        7: {
          author: 'Planes4Brains',
          text: '[b|Олег Т.], мы скупаем подержанные самолёты! Отдайте свой Falcon нам и получите 50% скидку на новый с доплатой.'
        }
      },

      cook: {
        0: {
          author: 'iStore',
          text: '[b|Тим К.], вам гарантирована скидка 15% на смартфоны и сервисное обслуживание'
        },

        4: {
          author: 'CONF4YOU',
          text: '[b|Тим К.], ваша компания часто проводит конференции? Наймите нашего ведущего: скидка 15% по промокоду CONF4WIN'
        },

        7: {
          author: 'SecDiscuss',
          text: '[b|Тим К.], вступайте в закрытый дискуссионный клуб для технологических лидеров: +1 502 449 9564'
        }
      }
    }
  },

  imagesCDN: 'https://leonardo-direct.osnova.io/',

  images: {
    faces: {
      bakalchuk: '47df28c0-0c5f-9ad5-f9a2-e2702fe47b0d',
      bezos: 'f296efa9-f3b0-ffa8-9aba-b28b28050029',
      brin: '5d67dce3-722f-c1b6-9fc6-11e61cee6942',
      buck: '6a2f7357-c70e-9613-96e7-466062a27a8a',
      cook: 'cf0df115-f83c-901b-0f10-351f73dfbf66',
      cook_nichosi: '82ba2f22-0a1a-bbfb-e6d6-788bacdc7750',
      durov: 'ee3213f6-e437-a375-0363-f6d3bf3aaa9a',
      elizabeth: '15f9e5c3-73ba-b5d0-3665-a3a241419463',
      fridman: 'a78e655b-9809-e57b-804d-bd8eb9ac5f4e',
      gates: 'b0ed4248-b1de-4a9d-2ebb-e77bcc7ac5cc',
      goncharov: '85fd8d58-96cc-786f-22ed-88f78db2342c',
      gref: '233ff4a2-5bd7-beea-47ca-2e26fc9a6e38',
      grishin: '1f1a5951-0f6f-8d2e-6e07-b5c2c5de014c',
      maezawa: '4f15b5d2-5db0-ec9a-ff90-a34520c0f83d',
      max: '5ed0d06a-9ff5-5f33-68c4-c3b3e2246740',
      milner: '96a1638f-5f23-ee95-7488-05985ea42123',
      musk: '7801ddd0-c26f-ff24-34da-eb6316f5c76f',
      nikolay: '0f6b1630-42a8-ffb4-7d82-d38ee03180a1',
      novikov: 'b3747806-dd38-4156-1b57-b4dda9e2a396',
      raid: '6f4e8d7a-3b72-5d3a-5d27-6e141283444f',
      richard: '943d2930-0d70-8f13-b5ae-3f426eeb4bc8',
      romanova: '8b320d1c-8adc-5268-6d02-d8ae78aa2ed9',
      spiegel: '45225174-e98a-e54f-f6cb-4fc7e4fef4dc',
      tatulova: '13f346f1-e8dd-0c9c-3036-63bda62193ae',
      tinkov: 'bfd2e01d-664e-4be3-d429-baf3d86a270b',
      tinkov_nichosi: '7679d4f9-6d0c-0104-8cad-5cd51cd87b93',
      volozh: '050699e5-6b79-7e69-4f43-ab5b1862c3e0',
      vrach: 'd2ce5224-7a52-8a0a-8394-9879dc90c4cb',
      zuck: '202213d9-8fa8-a845-54f9-0520f562fd4e',
      zuck_nichosi: 'c4c22da6-946c-0f8a-72a1-08b066d511cb',
    },

    faces_2x: {
      bakalchuk: '53d48aae-7128-b42c-bbea-1419e1eba706',
      bezos: '8c120cef-edf6-ccfc-568b-aba89152a894',
      brin: 'e9401a44-717c-fa02-8d4d-a560b94f0fdd',
      buck: '2a67616e-8f26-b931-083c-391267dff9e9',
      cook: '521baf47-b12b-7910-3f97-be5b7aba5d31',
      cook_nichosi: '1435db6a-4dcf-9db9-9fe1-559511f00aa8',
      durov: 'fcf72883-e953-3f72-5ef0-b67575fce4d0',
      elizabeth: '74d1d268-0785-b962-fa73-225abacf3cad',
      fridman: '6cdc121e-63ea-2b79-f9e3-1585d2d22ead',
      gates: 'aae0cfd8-6b8a-3fd2-c4d9-524e82ae6a39',
      goncharov: '151ac364-ad63-682e-8061-1108999d9b96',
      gref: 'e050a700-033a-1195-9a63-64c2e1b72c07',
      grishin: '55fa32c2-836f-05d5-b1bc-3bdc2629f583',
      maezawa: 'f9ddee32-6534-f3cd-49b6-b0fb3fdfa43d',
      max: '5dc18511-e496-39ab-7863-720134f87642',
      milner: '4346981e-18b0-aa7d-8164-faca93a8910d',
      musk: 'b61fb2e4-9478-7a21-de52-cd58f7526ea3',
      nikolay: 'f20311cb-b306-627a-f936-e0b08904f00b',
      novikov: '3f3dfdf3-51d8-d17c-de1b-345e5e113e4a',
      raid: 'c3340231-393d-8acf-1178-58ed8f4d190f',
      richard: '0845e02b-e3e5-2dc9-fe20-e1aa0a1cf3d1',
      romanova: '5d3cd5af-32c6-a43e-dc8e-716fb841b14c',
      spiegel: 'f188501a-0373-c33f-058b-a776048757bf',
      tatulova: '83b87459-3502-c117-2299-b65a8fe11d99',
      tinkov: 'fb253204-3bc2-8317-7b3f-f7aa735b3072',
      tinkov_nichosi: '8f19126d-b403-a3b0-0c2f-af5d09f4a68b',
      volozh: '871a72d0-1ad2-5856-6ca1-83235385af2f',
      vrach: 'de4ef8f4-1548-ce64-a1a0-f1dbc7cdec5b',
      zuck: 'fd87593c-a35e-4f0f-99c5-31a419e4ab4a',
      zuck_nichosi: 'f918ed72-df66-b9b9-6d47-b5dad4e598ea',
    },

    target_logo: {
      x1: 'a2784402-276a-547d-f4ef-b1df02824509',
      x2: 'c4f70330-e194-86d2-39fc-304806fb7f4a'
    }
  },

  mega_text: [
    'Чтобы рассылки были эффективнее, можно нанять на работу МегаФон. У компании есть более 30 решений для оптимизации и развития бизнеса, в том числе МегаФон Таргет.',
    'С его помощью можно таргетировать SMS-сообщения по 11 параметрам: например, возрасту и полу клиента, посещённым сайтам, нахождению в определенной зоне на карте. Ещё можно узнать уровень дохода и интересы абонента, а для подключения достаточно номера телефона.'
  ],

  final_links: {
    logo: 'https://target.megafon.ru/?utm_source=vc&utm_medium=article&utm_campaign=vc-mftarget-test&utm_content=logo',
    button: 'https://target.megafon.ru/?utm_source=vc&utm_medium=article&utm_campaign=vc-mftarget-test&utm_content=link'
  }
};
