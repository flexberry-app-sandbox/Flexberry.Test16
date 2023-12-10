import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Test1',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Test1',
          title: 'Test1'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
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
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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
