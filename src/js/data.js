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
            sender: 'OpenCharity',
            text: 'Хотите помогать людям, но не знаете, с чего начать? Зарегистрируйтесь на круглый стол по благотворительности с крупными меценатами',
            answersTexts: {
              bezos: {
                chat: 'Это по мне, где зарегистрироваться?',
                result: ''
              },

              musk: {
                result: 'Илон Маск давно в благотворительности, круглые столы ему ни к чему.'
              },

              gates: {
                result: 'Билл Гейтс давно в благотворительности, круглые столы ему ни к чему.'
              },

              zuck: {
                result: 'Марк Цукерберг давно в благотворительности, круглые столы ему ни к чему.'
              }
            }
          },

          {
            sender: '3D for Space',
            text: 'До Луны и обратно! Скидки на 3D-печать деталей космического корабля. Одобрено NASA.',
            answersTexts: {
              bezos: {
                chat: 'Пригодится, мы в Blue Origin пока так не умеем.',
                result: ''
              },

              musk: {
                result: 'SpaceX уже запускает в космос ракеты с деталями, напечатанными на 3D-принтере, новый поставщик ей ни к чему.'
              },

              gates: {
                result: 'Билла Гейтса больше интересуют земные проблемы — например, загрязнение воды.'
              },

              zuck: {
                result: 'Марка Цукерберга больше интересуют земные проблемы — например, отсутствие интернета в Африке.'
              }
            }
          },

          {
            sender: 'РобоРобо',
            text: 'Работники устали и хотят домой! Их заменят наши роботы: рассортируют товар, упакуют, отправят. При оформлении заказа до конца апреля пожизненная поддержка в подарок.',
            answersTexts: {
              bezos: {
                chat: 'Пора усиливать складскую логистику перед летними распродажами.',
                result: ''
              },

              musk: {
                result: 'У Маска машины с автопилотом, сами себя расставят как надо. А вот Amazon роботы бы пригодились.'
              },

              gates: {
                result: 'Интересно, конечно, но кажется ему нечего раскладывать и упаковывать. А вот Amazon роботы бы пригодились.'
              },

              zuck: {
                result: 'Интересно, конечно, но кажется ему нечего раскладывать и упаковывать. А вот Amazon роботы бы пригодились.'
              }
            }
          }
        ],

        answersCommonTexts: {
          bezos: {
            result: 'Это сообщение для главы Amazon, который с недавних пор занялся благотворительностью.'
          }
        }
      },

      {
        answers: {
          vrach: {
            who: 'Александр Жаров',
            company: 'Роскомнадзор',
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
            sender: 'CloudBox',
            text: 'Только для премиум-клиентов: повысим объём хранилища и количество запросов без доплаты. Серверы по всей России!',
            answersTexts: {
              vrach: {
                chat: 'Будет, где хранить персональные данные.',
                result: ''
              },

              durov: {
                result: 'Кажется, серверы в России Павла Дурова не интересуют.'
              },

              raid: {
                result: 'Основателю LinkedIn это ни к чему.'
              },

              grishin: {
                result: 'Mail.Ru Group наверняка своих мощностей хватает.'
              }
            }
          },

          {
            sender: 'CloudBox',
            text: 'Предложение для премиум-клиентов: повысим объём хранилища и количество запросов без доплаты. Храним данные только в России.',
            answersTexts: {
              vrach: {
                chat: 'Будет, где хранить персональные данные.',
                result: ''
              },

              durov: {
                result: 'Кажется, серверы в России Павла Дурова не интересуют.'
              },

              raid: {
                result: 'Основателю LinkedIn это ни к чему.'
              },

              grishin: {
                result: 'Mail.Ru Group наверняка своих мощностей хватает.'
              }
            }
          },

          {
            sender: 'Pack Filter',
            text: 'Заблокируем только то, что нужно. Подробности у менеджеров.',
            answersTexts: {
              vrach: {
                chat: 'За такую систему мы хоть 25 млн заплатим.',
                result: ''
              },

              durov: {
                result: 'Павлу Дурову вряд ли нужно кого-то, а вот главе Роскомнадзора — вполне.'
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
            company: 'сооснователь Subway'
          },

          spiegel: {
            who: 'Эван Шпигель',
            company: 'Snapchat'
          }
        },

        levels: [
          {
            sender: 'Одежда Оптом',
            text: 'Пошив одежды жёлтого цвета. Скидка 20% за оптовую покупку. Торопитесь!',
            answersTexts: {
              volozh: {
                chat: '',
                result: ''
              }
            }
          },

          {
            sender: 'Одежда Оптом',
            text: 'Пошив одежды жёлтого цвета. Скидка 20% за оптовую покупку. Рюкзак в подарок. Подробности у продавцов.',
            answersTexts: {
              volozh: {
                chat: '',
                result: ''
              }
            }
          },

          {
            sender: 'Одежда Оптом',
            text: 'Пошив одежды жёлтого цвета. Скидка 20% за оптовую покупку. Рюкзак в подарок. Разыгрываем самокаты! Подробности у продавцов.',
            answersTexts: {
              volozh: {
                chat: '',
                result: ''
              },

              tinkov: {
                result: 'Насколько мы знаем, униформу в банке пока не ввели. А вот у у курьеров «Яндекс.Еды» она есть.'
              },

              buck: {
                result: 'Логотип у сети, конечно, жёлтый, но форма у сотрудников зелёная! В отличие от курьеров «Яндекс.Еды».'
              },

              spiegel: {
                result: 'Вы уверены, что сотрудники мессенджера к этому готовы? Нет, это сообщение для главы «Яндекса», которому принадлежит «Яндекс.Еда».'
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
            sender: 'TennisBest',
            text: 'Премиум-корты, лучшие ракетки, расположение в центре Москвы!',
            answersTexts: {
              grishin: {
                chat: 'Так-так, а где именно в центре?',
                result: 'Дмитрий Гришин — заядлый теннисист.'
              }
            }
          },

          {
            sender: 'Tesla',
            text: 'Всем владельцам Model S — возможность купить Model Y без предзаказа! Закрытый старт продаж — в январе 2021 года.',
            answersTexts: {
              grishin: {
                chat: 'Отличный таргетинг на существующих клиентов, так держать.',
                result: 'Дмитрий Гришин — заядлый теннисист.'
              }
            }
          },

          {
            sender: 'RoboCon',
            text: 'Три конференции по робототехнике — тройная скидка! При покупке билета на RoboCon и в Сингапуре, и в Гонконге, и в Лондоне скидка 30%. Промокод R2D2.',
            answersTexts: {
              grishin: {
                chat: 'Едем!',
                result: 'Grishin Robotics как раз ищет новые проекты.'
              },

              elizabeth: {
                result: 'Это сообщение для главы Grishin Robotics Дмитрия Гришина — на конференции он мог бы поискать перспективные проекты.'
              },

              brin: {
                result: 'Брин предложил бы провести четвёртую конференцию в кампусе Alphabet. Это сообщение для главы Grishin Robotics Дмитрия Гришина.'
              },

              musk: {
                result: 'Маск уже пробовал положиться в производстве на роботов, ничего не вышло. Это сообщение для главы Grishin Robotics Дмитрия Гришина — на конференции он мог бы поискать перспективные проекты.'
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
            sender: 'MetalStuff',
            text: 'Металлические изделия из армированной стали, от 200 штук — скидка 5%. Звоните.',
            answersTexts: {
              nikolay: {
                chat: '',
                result: ''
              }
            }
          },

          {
            sender: 'MetalStuff',
            text: 'Металлические изделия из армированной стали, от 200 штук — скидка 5%. Карты, кардхолдеры, металлические визитки, ярлыки. Звоните.',
            answersTexts: {
              nikolay: {
                chat: '',
                result: ''
              }
            }
          },

          {
            sender: 'MetalStuff',
            text: 'Металлические изделия из армированной стали, от 200 штук — скидка 5%. Карты, кардхолдеры, металлические визитки, ярлыки. Отчеканим имена владельцев, доставим по всей Европе: Лондон, Осло, Копенгаген, Хельсинки, другие города.',
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
            chat: 'Отлично, как раз для премиальных клиентов.',
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
            company: 'Яндекс.Маркет'
          }
        },

        levels: [
          {
            sender: 'Агентство Коммерческой Недвижимости',
            text: 'Небольшие помещения в аренду. В торговых центрах, у метро. Покажите эту SMS и получите скидку на отделку.',
            answersTexts: {
              bakalchuk: {
                chat: '',
                result: ''
              }
            }
          },

          {
            sender: 'Агентство Коммерческой Недвижимости',
            text: 'Небольшие помещения в аренду. В торговых центрах, у метро. Можем оборудовать примерочные внутри! Покажите эту SMS и получите скидку на отделку.',
            answersTexts: {
              bakalchuk: {
                chat: '',
                result: ''
              }
            }
          },

          {
            sender: 'Агентство Коммерческой Недвижимости',
            text: 'Небольшие помещения в аренду. В торговых центрах, у метро. Можем оборудовать примерочные внутри! Скидка на отделку — по промокоду «МОДА».',
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
            company: 'основатель «Теремка»',
            right: true
          },

          novikov: {
            who: 'Аркадий Новиков',
            company: 'ресторатор'
          },

          tatulova: {
            who: 'Анастасия Татулова',
            company: 'основательница сети «Андерсон»'
          },

          tinkov: {
            who: 'Олег Тиньков',
            company: '«Тинькофф-банк»'
          }
        },

        levels: [
          {
            sender: 'ПродуктОптТорг',
            text: 'К клубнике, маскарпоне и фуа-гра — маршмеллоу в подарок! При покупке до десяти килограммов любого продукта.',
            answersTexts: {
              goncharov: {
                chat: 'Как раз недавно в «Депо» открылись.',
                result: 'Основатель «Теремка» недавно открыл премиум-блинную «Припёк».'
              }
            }
          },

          {
            sender: 'ПродуктОптТорг',
            text: 'К клубнике, маскарпоне и фуа-гра — маршмеллоу в подарок! При покупке до десяти килограммов любого продукта. Доставка до «Депо».',
            answersTexts: {
              goncharov: {
                chat: 'Как раз недавно в «Депо» открылись.',
                result: 'Основатель «Теремка» недавно открыл премиум-блинную «Припёк».'
              }
            }
          },

          {
            sender: '',
            text: '',
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
            sender: 'SpaceX',
            text: 'На Марс как на другой континент! Запускаем межпланетные перелеты. Записаться в лист ожидания: https://spa.ce.x',
            answersTexts: {
              milner: {
                chat: '',
                result: ''
              }
            }
          },

          {
            sender: 'SpaceX',
            text: 'На Марс как на другой континент! Запускаем межпланетные перелеты. Оборудуем вам лабораторию для фиксации иноземных сигналов. Записаться в лист ожидания: https://spa.ce.x',
            answersTexts: {
              milner: {
                chat: '',
                result: ''
              }
            }
          },

          {
            sender: 'SpaceX',
            text: 'На поиски внеземных цивилизаций! Запускаем межпланетные перелеты на корабле с новейшими локарторами и системами поиска инопланетной жизни. Записаться в лист ожидания: https://spa.ce.x',
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
            result: 'В 2015 Юрий Мильнер [link|https://vc.ru/future/47247|запустил] программу Breakthrough Initiatives, которая состоит из двух проектов: Breakthrough Listen ищет разумную жизнь во вселенной, а Breakthrough Starshot разрабатывает межзвёздный космический корабль с солнечным парусом.'
          }
        }
      }
    ],

    results: {
      zuck: {
        0: {
          sender: 'Aloha!',
          text: 'Марк Ц., до 20.07 вам гарантирована персональная скидка 25% на гавайские рубашки и другую одежду ярких цветов!'
        },

        4: {
          sender: 'YourCab',
          text: 'Марк Ц., скидка 15% на такси для постоянных клиентов маршрута Аэропорт Рональда Рейгана — Конгресс'
        },

        7: {
          sender: 'SiliconClothes',
          text: 'Марк Ц., вам гарантирована пожизненная скидка 10% на одежду серых цветов'
        }
      },

      tinkov: {
        0: {
          sender: 'Ракета-банк',
          text: 'Олег Т., закажите дебетовую карту «Ракета-банка» до 25.07.2019 и получите бесплатное обслуживание на два года'
        },

        4: {
          sender: '«Волна»',
          text: 'Олег Т., только для вас — скидка 25% на проживание в трёхзвездочном отеле «Волна» в г. Куршавель'
        },

        7: {
          sender: 'Planes4Brains',
          text: 'Олег Т., мы скупаем поддержанные самолёты! Отдайте свой Falcon нам и получите 50% скидку на новый с доплатой.'
        }
      },

      cook: {
        0: {
          sender: 'iStore',
          text: 'Тим К., вам гарантирована скидка 15% на смартфоны и сервисное обслуживание'
        },

        4: {
          sender: 'CONF4YOU',
          text: 'Тим К., ваша компания часто проводит конференции? Наймите нашего ведущего: скидка 15% по промокоду CONF4WIN'
        },

        7: {
          sender: 'SecDiscuss',
          text: 'Тим К., вы обеспечили защиту данных пользователям, а мы обеспечим её вам. Закрытый дискуссионный клуб для технологических лидеров: +1 502 449 9564'
        }
      }
    }
  },

  imagesCDN: 'img/',

  images: {
    faces: {
      bakalchuk: 'faces/bakalchuk.png',
      bezos: 'faces/bezos.png',
      brin: 'faces/brin.png',
      buck: 'faces/buck.png',
      cook: 'faces/cook.png',
      cook_nichosi: 'faces/cook-1.png',
      durov: 'faces/durov.png',
      elizabeth: 'faces/elizabeth.png',
      fridman: 'faces/fridman.png',
      gates: 'faces/gates.png',
      goncharov: 'faces/goncharov.png',
      gref: 'faces/gref.png',
      grishin: 'faces/grishin.png',
      maezawa: 'faces/maezawa.png',
      max: 'faces/max.png',
      milner: 'faces/milner.png',
      musk: 'faces/musk.png',
      nikolay: 'faces/nikolay.png',
      novikov: 'faces/novikov.png',
      raid: 'faces/raid.png',
      richard: 'faces/richard.png',
      romanova: 'faces/romanova.png',
      spiegel: 'faces/spiegel.png',
      tatulova: 'faces/tatulova.png',
      tinkov: 'faces/tinkov.png',
      tinkov_nichosi: 'faces/tinkov-1.png',
      volozh: 'faces/volozh.png',
      vrach: 'faces/vrach.png',
      zuck: 'faces/zuck.png',
      zuck_nichosi: 'faces/zuck-1.png',
    },

    faces_2x: {
      bakalchuk: 'faces/bakalchuk@2x.png',
      bezos: 'faces/bezos@2x.png',
      brin: 'faces/brin@2x.png',
      buck: 'faces/buck@2x.png',
      cook: 'faces/cook@2x.png',
      cook_nichosi: 'faces/cook-1@2x.png',
      durov: 'faces/durov@2x.png',
      elizabeth: 'faces/elizabeth@2x.png',
      fridman: 'faces/fridman@2x.png',
      gates: 'faces/gates@2x.png',
      goncharov: 'faces/goncharov@2x.png',
      gref: 'faces/gref@2x.png',
      grishin: 'faces/grishin@2x.png',
      maezawa: 'faces/maezawa@2x.png',
      max: 'faces/max@2x.png',
      milner: 'faces/milner@2x.png',
      musk: 'faces/musk@2x.png',
      nikolay: 'faces/nikolay@2x.png',
      novikov: 'faces/novikov@2x.png',
      raid: 'faces/raid@2x.png',
      richard: 'faces/richard@2x.png',
      romanova: 'faces/romanova@2x.png',
      spiegel: 'faces/spiegel@2x.png',
      tatulova: 'faces/tatulova@2x.png',
      tinkov: 'faces/tinkov@2x.png',
      tinkov_nichosi: 'faces/tinkov-1@2x.png',
      volozh: 'faces/volozh@2x.png',
      vrach: 'faces/vrach@2x.png',
      zuck: 'faces/zuck@2x.png',
      zuck_nichosi: 'faces/zuck-1@2x.png',
    },

    target_logo: {
      x1: 'target-logo.png',
      x2: 'target-logo@2x.png'
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
