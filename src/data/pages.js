import wolfImg from '../assets/wolf.png'
import actionImg from '../assets/action.png'
import romanceImg from '../assets/romance.png'
import royalImg from '../assets/royal.png'
import bBoyImg from '../assets/bboy.png'
import youngImg from '../assets/young.png'
import checkmark from '../assets/checkmark.png'
import quiz from '../assets/quiz.png'

export const helloPage = {
  id: 0,
  title: 'Hello!',
  subtitle: 'Do You ready to take a quiz?',
  path: '/quiz/1',
  image: quiz,
  template: {
    type: 'redirect',
    button: `Let's go!`
  }
}

// Зі збільшенням проекту педжи можна розкидати по різним файлам
export const pages = [
  {
    id: 1,
    title: 'What is your preferred language?',
    subtitle: 'Choose language',
    variants: [
      {
        value: 'English',
        key: 'en'
      },
      {
        value: 'French',
        key: 'fr'
      },
      {
        value: 'German',
        key: 'de'
      },
      {
        value: 'Spanish',
        key: 'es'
      }
    ],
    template: {
      type: 'single-select',
      direction: 'column'
    }
  },
  {
    id: 2,
    title: 'gender.title',
    subtitle: 'gender.subtitle',
    variants: [
      {
        value: 'gender.values.female',
        icon: '👩'
      },
      {
        value: 'gender.values.male',
        icon: '👨'
      },
      {
        value: 'gender.values.other',
        icon: '😉'
      },
    ],
    template: {
      type: 'single-select-image',
      direction: 'row'
    }
  },
  {
    id: 3,
    title: 'age.title',
    variants: [
      {
        value: '18-29',
        desc: 'age.desc',
        key: 'trainee'
      },
      {
        value: '30-39',
        desc: 'age.desc',
        key: 'junior'
      },
      {
        value: '40-49',
        desc: 'age.desc',
        key: 'middle'
      },
      {
        value: '50+',
        key: 'senior'
      }
    ],
    template: {
      type: 'single-select',
      direction: 'column'
    }
  },
  {
    id: 4,
    title: 'bookHate.title',
    variants: {
      trainee: ['bookHate.trainee.1', 'bookHate.trainee.2', 'bookHate.trainee.3', 'bookHate.trainee.4'],
      junior: ['bookHate.junior.1', 'bookHate.junior.2', 'bookHate.junior.3', 'bookHate.junior.4'],
      middle: ['bookHate.middle.1', 'bookHate.middle.2', 'bookHate.middle.3', 'bookHate.middle.4'],
      senior: ['bookHate.senior.1', 'bookHate.senior.2', 'bookHate.senior.3', 'bookHate.senior.4']
    },
    template: {
      type: 'multiple-select',
      direction: 'column',
      button: 'buttons.next'
    }
  },
  {
    id: 5,
    title: 'topic.title',
    subtitle: 'topic.subtitle',
    path: '/loader',
    variants: [
      {
        value: 'topic.values.werewolf',
        icon: wolfImg
      },
      {
        value: 'topic.values.action',
        icon: actionImg
      },
      {
        value: 'topic.values.royalObsession',
        icon: royalImg
      },
      {
        value: 'topic.values.romance',
        icon: romanceImg
      },
      {
        value: 'topic.values.youngAdult',
        icon: youngImg
      },
      {
        value: 'topic.values.badBoy',
        icon: bBoyImg
      }
    ],
    template: {
      type: 'bubble',
      direction: 'row',
      button: 'buttons.next'
    }
  }
]

export const emailPage = {
  id: 6,
  title: 'email.title',
  subtitle: 'email.subtitle',
  placeholder: 'email.placeholder',
  terms: 'email.terms',
  path: '/thanks',
  template: {
    type: 'email',
    button: 'buttons.next',
    direction: 'column'
  }
}

export const thanksPage = {
  id: 7,
  title: 'thank.title',
  subtitle: 'thank.subtitle',
  path: '/quiz/1',
  image: checkmark,
  final: true,
  template: {
    type: 'redirect',
    button: 'buttons.restart',
    download: 'buttons.download',
    direction: 'column'
  }
}