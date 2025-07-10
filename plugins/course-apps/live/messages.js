import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  heading: {
    id: 'authoring.pagesAndResources.live.enableLive.heading',
    defaultMessage: 'Настроить прямой эфир',
    description: 'Заголовок для конфигурации прямого эфира',
  },
  enableLiveLabel: {
    id: 'authoring.pagesAndResources.live.enableLive.label',
    defaultMessage: 'Прямой эфир',
    description: 'Заголовок для конфигурации',
  },
  enableLiveHelp: {
    id: 'authoring.pagesAndResources.live.enableLive.help',
    defaultMessage: 'Планируйте встречи и проводите прямые сессии с учащимися.',
    description: 'Описывает назначение конфигурации прямого эфира',
  },
  enableLiveLink: {
    id: 'authoring.pagesAndResources.live.enableLive.link',
    defaultMessage: 'Узнать больше о прямом эфире',
    description: 'Текст ссылки, предлагающий пользователю узнать больше о прямом эфире',
  },
  saveButton: {
    id: 'authoring.discussions.saveButton',
    defaultMessage: 'Сохранить',
    description: 'Кнопка, позволяющая пользователю отправить конфигурацию обсуждения.',
  },
  savingButton: {
    id: 'authoring.discussions.savingButton',
    defaultMessage: 'Сохранение',
    description: 'Текст кнопки при отправке конфигурации обсуждения.',
  },
  savedButton: {
    id: 'authoring.discussions.savedButton',
    defaultMessage: 'Сохранено',
    description: 'Текст кнопки, когда конфигурация обсуждения успешно отправлена.',
  },
  selectProvider: {
    id: 'authoring.live.selectProvider',
    defaultMessage: 'Выберите инструмент для видеоконференций',
    description: '',
  },
  formInstructions: {
    id: 'authoring.live.formInstructions',
    defaultMessage: 'Заполните поля ниже, чтобы настроить инструмент для видеоконференций.',
    description: 'Инструкция по настройке инструмента для видеоконференций.',
  },
  consumerKey: {
    id: 'authoring.live.consumerKey',
    defaultMessage: 'Consumer Key',
    description: 'Подпись для поля Consumer Key.',
  },
  consumerKeyRequired: {
    id: 'authoring.live.consumerKey.required',
    defaultMessage: 'Consumer Key обязателен для заполнения',
    description: 'Сообщает пользователю, что поле Consumer Key обязательно и должно содержать значение.',
  },
  consumerSecret: {
    id: 'authoring.live.consumerSecret',
    defaultMessage: 'Consumer Secret',
    description: 'Подпись для поля Consumer Secret.',
  },
  consumerSecretRequired: {
    id: 'authoring.live.consumerSecret.required',
    defaultMessage: 'Consumer Secret обязателен для заполнения',
    description: 'Сообщает пользователю, что поле Consumer Secret обязательно и должно содержать значение.',
  },
  launchUrl: {
    id: 'authoring.live.launchUrl',
    defaultMessage: 'Launch URL',
    description: 'Подпись для поля Launch URL.',
  },
  launchUrlRequired: {
    id: 'authoring.live.launchUrl.required',
    defaultMessage: 'Launch URL обязателен для заполнения',
    description: 'Сообщает пользователю, что поле Launch URL обязательно и должно содержать значение.',
  },
  launchEmail: {
    id: 'authoring.live.launchEmail',
    defaultMessage: 'Launch Email',
    description: 'Подпись для поля Launch Email.',
  },
  launchEmailRequired: {
    id: 'authoring.live.launchEmail.required',
    defaultMessage: 'Launch Email обязателен для заполнения',
    description: 'Сообщает пользователю, что поле Launch Email обязательно и должно содержать значение.',
  },
  providerHelperText: {
    id: 'authoring.live.provider.helpText',
    defaultMessage: 'Для этой конфигурации потребуется предоставить имена пользователей и адреса электронной почты учащихся, а также команды курса поставщику {providerName}.',
    description: 'Сообщает пользователю, что для конфигурации требуется предоставление имени пользователя и электронной почты',
  },
  requestPiiSharingEnable: {
    id: 'authoring.live.requestPiiSharingEnable',
    defaultMessage: 'Для этой конфигурации потребуется предоставление имен пользователей и адресов электронной почты учащихся, а также команды курса поставщику {provider}. Чтобы получить доступ к конфигурации LTI для {provider}, обратитесь к координатору проекта edX с просьбой включить передачу PII для этого курса.',
    description: 'Сообщает пользователю, что необходимо обратиться к координатору проекта edX для активации передачи PII для доступа к конфигурации LTI поставщика.',
  },
  general: {
    id: 'authoring.live.appDocInstructions.documentationLink',
    defaultMessage: 'Общая документация',
    description: 'Сообщение инструкции к приложению для ссылки на документацию',
  },
  accessibility: {
    id: 'authoring.live.appDocInstructions.accessibilityDocumentationLink',
    defaultMessage: 'Документация по доступности',
    description: 'Сообщение инструкции к приложению для ссылки на документацию по доступности',
  },
  configuration: {
    id: 'authoring.live.appDocInstructions.configurationLink',
    defaultMessage: 'Документация по конфигурации',
    description: 'Сообщение инструкции к приложению для ссылки на конфигурацию',
  },
  learnMore: {
    id: 'authoring.live.appDocInstructions.learnMoreLink',
    defaultMessage: 'Подробнее о {providerName}',
    description: 'Сообщение инструкции к приложению для ссылок "Узнать больше"',
  },
  linkTextHeading: {
    id: 'authoring.live.appDocInstructions.linkTextHeading',
    defaultMessage: 'Внешняя справка и документация',
    description: 'Заголовок внешней справки и документации',
  },
  linkText: {
    id: 'authoring.live.appDocInstructions.linkText',
    defaultMessage: '{link}',
    description: 'link',
  },
  'appName-zoom': {
    id: 'authoring.live.appName-yellowdig',
    defaultMessage: 'Zoom',
    description: 'Название приложения Zoom.',
  },
  'appName-googleMeet': {
    id: 'authoring.live.appName-googleMeet',
    defaultMessage: 'Google Meet',
    description: 'Название приложения Google Meet.',
  },
  'appName-microsoftTeams': {
    id: 'authoring.live.appName-microsoftTeams',
    defaultMessage: 'Microsoft Teams',
    description: 'Название приложения Microsoft Teams.',
  },
  'appName-bigBlueButton': {
    id: 'authoring.live.appName-bigBlueButton',
    defaultMessage: 'BigBlueButton',
    description: 'Название приложения Big Blue Button.',
  },
  requestPiiSharingEnableForBbb: {
    id: 'authoring.live.requestPiiSharingEnableForBbb',
    defaultMessage: 'Для этой конфигурации потребуется предоставить имена пользователей учащихся и команды курса поставщику {provider}.',
    description: 'Сообщает пользователю, что для использования этой функции требуется предоставление имен пользователей поставщику',
  },
  piiSharingEnableHelpTextBbb: {
    id: 'authoring.live.piiSharingEnableHelpText',
    defaultMessage: 'Чтобы включить эту функцию, обратитесь в службу поддержки edX для включения передачи PII для этого курса.',
    description: 'Сообщает пользователю, что необходимо обратиться в службу поддержки edX для активации передачи PII для доступа к конфигурации LTI поставщика.',
  },
  freePlanMessage: {
    id: 'authoring.live.freePlanMessage',
    defaultMessage: 'Бесплатный тариф предварительно настроен, и дополнительные настройки не требуются. Выбирая бесплатный тариф, вы соглашаетесь с Blindside Networks',
    description: 'Сообщает пользователю, что бесплатные тарифы не требуют дополнительных настроек',
  },
  privacyPolicy: {
    id: 'authoring.live.privacyPolicy',
    defaultMessage: 'Политика конфиденциальности.',
    description: 'Текст гиперссылки политики конфиденциальности для бесплатного плана',
  },
});
export default messages;