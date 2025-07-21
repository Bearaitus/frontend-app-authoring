import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  heading: {
    id: 'authoring.pagesAndResources.live.enableLive.heading',
    defaultMessage: 'Configure Live Session',
    description: 'Заголовок для конфигурации прямого эфира',
  },
  enableLiveLabel: {
    id: 'authoring.pagesAndResources.live.enableLive.label',
    defaultMessage: 'Live Session',
    description: 'Заголовок для конфигурации',
  },
  enableLiveHelp: {
    id: 'authoring.pagesAndResources.live.enableLive.help',
    defaultMessage: 'Schedule meetings and host live sessions with learners.',
    description: 'Описывает назначение конфигурации прямого эфира',
  },
  enableLiveLink: {
    id: 'authoring.pagesAndResources.live.enableLive.link',
    defaultMessage: 'Learn more about live sessions',
    description: 'Текст ссылки, предлагающий пользователю узнать больше о прямом эфире',
  },
  saveButton: {
    id: 'authoring.discussions.saveButton',
    defaultMessage: 'Save',
    description: 'Кнопка, позволяющая пользователю отправить конфигурацию обсуждения.',
  },
  savingButton: {
    id: 'authoring.discussions.savingButton',
    defaultMessage: 'Saving',
    description: 'Текст кнопки при отправке конфигурации обсуждения.',
  },
  savedButton: {
    id: 'authoring.discussions.savedButton',
    defaultMessage: 'Saved',
    description: 'Текст кнопки, когда конфигурация обсуждения успешно отправлена.',
  },
  selectProvider: {
    id: 'authoring.live.selectProvider',
    defaultMessage: 'Select a video conferencing tool',
    description: '',
  },
  formInstructions: {
    id: 'authoring.live.formInstructions',
    defaultMessage: 'Fill in the fields below to configure the video conferencing tool.',
    description: 'Инструкция по настройке инструмента для видеоконференций.',
  },
  consumerKey: {
    id: 'authoring.live.consumerKey',
    defaultMessage: 'Consumer Key',
    description: 'Подпись для поля Consumer Key.',
  },
  consumerKeyRequired: {
    id: 'authoring.live.consumerKey.required',
    defaultMessage: 'Consumer Key is required',
    description: 'Сообщает пользователю, что поле Consumer Key обязательно и должно содержать значение.',
  },
  consumerSecret: {
    id: 'authoring.live.consumerSecret',
    defaultMessage: 'Consumer Secret',
    description: 'Подпись для поля Consumer Secret.',
  },
  consumerSecretRequired: {
    id: 'authoring.live.consumerSecret.required',
    defaultMessage: 'Consumer Secret is required',
    description: 'Сообщает пользователю, что поле Consumer Secret обязательно и должно содержать значение.',
  },
  launchUrl: {
    id: 'authoring.live.launchUrl',
    defaultMessage: 'Launch URL',
    description: 'Подпись для поля Launch URL.',
  },
  launchUrlRequired: {
    id: 'authoring.live.launchUrl.required',
    defaultMessage: 'Launch URL is required',
    description: 'Сообщает пользователю, что поле Launch URL обязательно и должно содержать значение.',
  },
  launchEmail: {
    id: 'authoring.live.launchEmail',
    defaultMessage: 'Launch Email',
    description: 'Подпись для поля Launch Email.',
  },
  launchEmailRequired: {
    id: 'authoring.live.launchEmail.required',
    defaultMessage: 'Launch Email is required',
    description: 'Сообщает пользователю, что поле Launch Email обязательно и должно содержать значение.',
  },
  providerHelperText: {
    id: 'authoring.live.provider.helpText',
    defaultMessage: 'This configuration will require you to provide learner usernames and email addresses, as well as course staff to {providerName}.',
    description: 'Сообщает пользователю, что для конфигурации требуется предоставление имени пользователя и электронной почты',
  },
  requestPiiSharingEnable: {
    id: 'authoring.live.requestPiiSharingEnable',
    defaultMessage: 'This configuration will require you to provide learner usernames and email addresses, as well as course staff to {provider}. To access the LTI configuration for {provider}, contact your edX project coordinator to enable PII sharing for this course.',
    description: 'Сообщает пользователю, что необходимо обратиться к координатору проекта edX для активации передачи PII для доступа к конфигурации LTI поставщика.',
  },
  general: {
    id: 'authoring.live.appDocInstructions.documentationLink',
    defaultMessage: 'General Documentation',
    description: 'Сообщение инструкции к приложению для ссылки на документацию',
  },
  accessibility: {
    id: 'authoring.live.appDocInstructions.accessibilityDocumentationLink',
    defaultMessage: 'Accessibility Documentation',
    description: 'Сообщение инструкции к приложению для ссылки на документацию по доступности',
  },
  configuration: {
    id: 'authoring.live.appDocInstructions.configurationLink',
    defaultMessage: 'Configuration Documentation',
    description: 'Сообщение инструкции к приложению для ссылки на конфигурацию',
  },
  learnMore: {
    id: 'authoring.live.appDocInstructions.learnMoreLink',
    defaultMessage: 'Learn more about {providerName}',
    description: 'Сообщение инструкции к приложению для ссылок "Узнать больше"',
  },
  linkTextHeading: {
    id: 'authoring.live.appDocInstructions.linkTextHeading',
    defaultMessage: 'External Help and Documentation',
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
    defaultMessage: 'This configuration will require you to provide learner usernames and course staff to {provider}.',
    description: 'Сообщает пользователю, что для использования этой функции требуется предоставление имен пользователей поставщику',
  },
  piiSharingEnableHelpTextBbb: {
    id: 'authoring.live.piiSharingEnableHelpText',
    defaultMessage: 'To enable this feature, contact edX support to enable PII sharing for this course.',
    description: 'Сообщает пользователю, что необходимо обратиться в службу поддержки edX для активации передачи PII для доступа к конфигурации LTI поставщика.',
  },
  freePlanMessage: {
    id: 'authoring.live.freePlanMessage',
    defaultMessage: 'The free plan is preconfigured and requires no additional setup. By choosing the free plan, you agree to Blindside Networks',
    description: 'Сообщает пользователю, что бесплатные тарифы не требуют дополнительных настроек',
  },
  privacyPolicy: {
    id: 'authoring.live.privacyPolicy',
    defaultMessage: 'Privacy Policy.',
    description: 'Текст гиперссылки политики конфиденциальности для бесплатного плана',
  },
});
export default messages;