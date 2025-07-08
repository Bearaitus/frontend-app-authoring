import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  'authoring.proctoring.alert.error': {
    id: 'authoring.proctoring.alert.error',
    defaultMessage: 'Мы столкнулись с технической ошибкой при попытке сохранить настройки прокторинга. Это может быть временная проблема, поэтому попробуйте еще раз через несколько минут. Если проблема сохраняется, пожалуйста, обратитесь к {support_link} за помощью.',
    description: 'Сообщение об ошибке сохранения настроек прокторинга.',
  },
  'authoring.proctoring.alert.forbidden': {
    id: 'authoring.proctoring.alert.forbidden',
    defaultMessage: 'У вас нет разрешения на редактирование настроек прокторинга для этого курса. Если вы являетесь членом команды курса и проблема сохраняется, пожалуйста, обратитесь к {support_link} за помощью.',
    description: 'Сообщение об ошибке разрешения настройки прокторинга.',
  },
  'authoring.proctoring.no': {
    id: 'authoring.proctoring.no',
    defaultMessage: 'Нет',
    description: 'Вариант "Нет" для радиокнопки да/нет',
  },
  'authoring.proctoring.yes': {
    id: 'authoring.proctoring.yes',
    defaultMessage: 'Да',
    description: 'Вариант "Да" для настроек прокторинга',
  },
  'authoring.proctoring.support.text': {
    id: 'authoring.proctoring.support.text',
    defaultMessage: 'Страница поддержки',
    description: 'Текст, связанный со страницей поддержки.',
  },
  'authoring.proctoring.enableproctoredexams.label': {
    id: 'authoring.proctoring.enableproctoredexams.label',
    defaultMessage: 'Прокторинговые экзамены',
    description: 'Метка для чекбокса включения прокторинговых экзаменов.',
  },
  'authoring.proctoring.enableproctoredexams.help': {
    id: 'authoring.proctoring.enableproctoredexams.help',
    defaultMessage: 'Включить и настроить прокторинговые экзамены в вашем курсе.',
    description: 'Текст помощи для чекбокса включения прокторинговых экзаменов.',
  },
  'authoring.proctoring.enabled': {
    id: 'authoring.proctoring.enabled',
    defaultMessage: 'Включено',
    description: 'Текст, описывающий, что функция включена.',
  },
  'authoring.proctoring.learn.more': {
    id: 'authoring.proctoring.learn.more',
    defaultMessage: 'Узнать больше о прокторинге',
    description: 'Ссылка на изучение прокторинга.',
  },
  'authoring.proctoring.provider.label': {
    id: 'authoring.proctoring.provider.label',
    defaultMessage: 'Поставщик прокторинга',
    description: 'Метка для выбора поставщика прокторинга.',
  },
  'authoring.proctoring.provider.help': {
    id: 'authoring.proctoring.provider.help',
    defaultMessage: 'Выберите поставщика прокторинга, который вы хотите использовать для этого запуска курса.',
    description: 'Текст помощи для выбора поставщика прокторинга.',
  },
  'authoring.proctoring.provider.help.aftercoursestart': {
    id: 'authoring.proctoring.provider.help.aftercoursestart',
    defaultMessage: 'Поставщик прокторинга не может быть изменен после даты начала курса.',
    description: 'Текст помощи, уведомляющий пользователя, что поставщик не может быть изменен для курса, который уже начался.',
  },
  'authoring.proctoring.escalationemail.label': {
    id: 'authoring.proctoring.escalationemail.label',
    defaultMessage: 'Адрес электронной почты для эскалации',
    description: 'Метка для поля адреса электронной почты для эскалации',
  },
  'authoring.proctoring.escalationemail.help': {
    id: 'authoring.proctoring.escalationemail.help',
    defaultMessage: 'Укажите адрес электронной почты, на который будет отправлена команда поддержки для эскалации (например, апелляций, задержек обзоров).',
    description: 'Текст помощи, объясняющий поле адреса электронной почты для эскалации.',
  },
  'authoring.proctoring.escalationemail.error.blank': {
    id: 'authoring.proctoring.escalationemail.error.blank',
    defaultMessage: 'Поле адреса электронной почты для эскалации не может быть пустым, если {proctoringProviderName} является выбранным поставщиком.',
    description: 'Сообщение об ошибке для пустого обязательного поля адреса электронной почты.',
  },
  'authoring.proctoring.escalationemail.error.invalid': {
    id: 'authoring.proctoring.escalationemail.error.invalid',
    defaultMessage: 'Поле адреса электронной почты для эскалации имеет неправильный формат и не является действительным.',
    description: 'Сообщение об ошибке для недействительного формата адреса электронной почты.',
  },
  'authoring.proctoring.allowoptout.label': {
    id: 'authoring.proctoring.allowoptout.label',
    defaultMessage: 'Разрешить учащимся отказаться от прокторинга на прокторинговых экзаменах',
    description: 'Метка для радиокнопки, разрешающей отказаться от прокторинга',
  },
  'authoring.proctoring.createzendesk.label': {
    id: 'authoring.proctoring.createzendesk.label',
    defaultMessage: 'Создать тикеты Zendesk для подозрительных попыток',
    description: 'Метка для радиокнопки создания тикетов Zendesk.',
  },
  'authoring.proctoring.error.single': {
    id: 'authoring.proctoring.error.single',
    defaultMessage: 'В этой форме есть 1 ошибка.',
    description: 'Сообщение об ошибке для одной и единственной ошибки в форме.',
  },
  'authoring.proctoring.error.multiple': {
    id: 'authoring.proctoring.escalationemail.error.multiple',
    defaultMessage: 'В этой форме есть {numOfErrors} ошибок.',
    description: 'Сообщение об ошибке для нескольких ошибок в форме.',
  },
  'authoring.proctoring.save': {
    id: 'authoring.proctoring.save',
    defaultMessage: 'Сохранить',
    description: 'Кнопка для сохранения настроек прокторинга.',
  },
  'authoring.proctoring.saving': {
    id: 'authoring.proctoring.saving',
    defaultMessage: 'Сохранение...',
    description: 'Настройки прокторинга находятся в процессе сохранения.',
  },
  'authoring.proctoring.cancel': {
    id: 'authoring.proctoring.cancel',
    defaultMessage: 'Отмена',
    description: 'Кнопка для отмены изменений настроек прокторинга.',
  },
  'authoring.proctoring.studio.link.text': {
    id: 'authoring.proctoring.studio.link.text',
    defaultMessage: 'Вернуться к вашему курсу в Studio',
    description: 'Ссылка для возврата к странице курса Studio.',
  },
});

export default messages;
