import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISTest1ЗаказLForm from './forms/i-i-s-test1-заказ-l';
import IISTest1КонтрагентLForm from './forms/i-i-s-test1-контрагент-l';
import IISTest1СотрудникLForm from './forms/i-i-s-test1-сотрудник-l';
import IISTest1ЗаказEForm from './forms/i-i-s-test1-заказ-e';
import IISTest1КонтрагентEForm from './forms/i-i-s-test1-контрагент-e';
import IISTest1СотрудникEForm from './forms/i-i-s-test1-сотрудник-e';
import IISTest1ЗаказModel from './models/i-i-s-test1-заказ';
import IISTest1КонтрагентModel from './models/i-i-s-test1-контрагент';
import IISTest1СотрудникModel from './models/i-i-s-test1-сотрудник';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-test1-заказ': IISTest1ЗаказModel,
    'i-i-s-test1-контрагент': IISTest1КонтрагентModel,
    'i-i-s-test1-сотрудник': IISTest1СотрудникModel
  },

  'application-name': 'Test1',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Test1',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Test1',
          title: 'Test1'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        test1: {
          caption: 'Test1',
          title: 'Test1',
          'i-i-s-test1-контрагент-l': {
            caption: 'Контрагент',
            title: ''
          },
          'i-i-s-test1-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          },
          'i-i-s-test1-заказ-l': {
            caption: 'Заказ',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-test1-заказ-l': IISTest1ЗаказLForm,
    'i-i-s-test1-контрагент-l': IISTest1КонтрагентLForm,
    'i-i-s-test1-сотрудник-l': IISTest1СотрудникLForm,
    'i-i-s-test1-заказ-e': IISTest1ЗаказEForm,
    'i-i-s-test1-контрагент-e': IISTest1КонтрагентEForm,
    'i-i-s-test1-сотрудник-e': IISTest1СотрудникEForm
  },

});

export default translations;
