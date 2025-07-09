import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  heading: {
    id: 'authoring.discussions.heading',
    defaultMessage: 'Выберите инструмент для обсуждений для этого курса',
  },
  supportedFeatures: {
    id: 'authoring.discussions.supportedFeatures',
    defaultMessage: 'Поддерживаемые функции',
  },
  'supportedFeatureList-mobile-show': {
    id: 'authoring.discussions.supportedFeatureList-mobile-show',
    defaultMessage: 'Показать поддерживаемые функции',
    description: 'Это используется в мобильной версии как заголовок списка поддерживаемых функций при закрытии',
  },
  'supportedFeatureList-mobile-hide': {
    id: 'authoring.discussions.supportedFeatureList-mobile-hide',
    defaultMessage: 'Скрыть поддерживаемые функции',
    description: 'Это используется в мобильной версии как заголовок списка поддерживаемых функций при открытии',
  },
  noApps: {
    id: 'authoring.discussions.noApps',
    defaultMessage: 'Нет доступных поставщиков инструментов для обсуждений для вашего курса.',
    description: 'Сообщение, отображаемое, когда нет доступных поставщиков инструментов для обсуждений.',
  },
  nextButton: {
    id: 'authoring.discussions.nextButton',
    defaultMessage: 'Далее',
    description: 'Кнопка, позволяющая пользователю перейти к второму шагу настройки обсуждений.',
  },
  appFullSupport: {
    id: 'authoring.discussions.appFullSupport',
    defaultMessage: 'Полная поддержка',
    description: 'Метка, указывающая, что приложение поддерживает весь набор возможных функций для приложения для обсуждений.',
  },
  appBasicSupport: {
    id: 'authoring.discussions.appBasicSupport',
    defaultMessage: 'Базовая поддержка',
    description: 'Метка, указывающая, что приложение поддерживает только подмножество возможных функций приложения для обсуждений.',
  },
  selectApp: {
    id: 'authoring.discussions.selectApp',
    defaultMessage: 'Выбрать {appName}',
    description: 'Метка для флажка, позволяющего пользователю выбрать приложение для обсуждений, которое он хочет настроить.',
  },
  // Legacy
  'appName-legacy': {
    id: 'authoring.discussions.appList.appName-legacy',
    defaultMessage: 'edX',
    description: 'Название устаревшего приложения edX Discussions.',
  },
  'appDescription-legacy': {
    id: 'authoring.discussions.appList.appDescription-legacy',
    defaultMessage: 'Начните беседы с другими учащимися, задавайте вопросы и взаимодействуйте с другими учащимися на курсе.',
    description: 'Описание устаревшего приложения edX Discussions.',
  },
  // New provider
  'appName-openedx': {
    id: 'authoring.discussions.appList.appName-openedx',
    defaultMessage: 'edX',
    description: 'Название нового приложения edX Discussions.',
  },
  'appDescription-openedx': {
    id: 'authoring.discussions.appList.appDescription-openedx',
    defaultMessage: 'Включите участие в темах для обсуждения вместе с контентом курса.',
    description: 'Описание нового приложения edX Discussions.',
  },
  // Piazza
  'appName-piazza': {
    id: 'authoring.discussions.appList.appName-piazza',
    defaultMessage: 'Piazza',
    description: 'Название приложения Piazza.',
  },
  'appDescription-piazza': {
    id: 'authoring.discussions.appList.appDescription-piazza',
    defaultMessage: 'Piazza разработана для связи студентов, помощников и преподавателей, чтобы каждый студент мог получить необходимую помощь, когда она ему нужна.',
    description: 'Описание приложения Piazza.',
  },
  'appDescription-yellowdig': {
    id: 'authoring.discussions.appList.appDescription-yellowdig',
    defaultMessage: 'Yellowdig предлагает преподавателям цифровое решение для геймифицированного обучения для повышения вовлеченности студентов за счет создания учебных сообществ для любого формата курса.',
    description: 'Описание приложения Yellowdig.',
  },
  'appDescription-inscribe': {
    id: 'authoring.discussions.appList.appDescription-inscribe',
    defaultMessage: 'InScribe использует возможности сообщества и искусственного интеллекта для связи людей с ответами, ресурсами и людьми, которые им нужны для достижения успеха.',
    description: 'Описание приложения Inscribe.',
  },
  'appDescription-discourse': {
    id: 'authoring.discussions.appList.appDescription-discourse',
    defaultMessage: 'Discourse — это современное программное обеспечение для форумов для вашего сообщества. Используйте его как список рассылки, форум для обсуждения, чат для длительных разговоров и многое другое!',
    description: 'Описание приложения Discourse.',
  },
  'appDescription-ed-discuss': {
    id: 'authoring.discussions.appList.appDescription-ed-discus',
    defaultMessage: 'Ed Discussion помогает масштабировать общение в классе в красивом и интуитивно понятном интерфейсе. Вопросы достигают и приносят пользу всему классу. Меньше электронных писем, больше сэкономленного времени.',
    description: 'Описание приложения Ed Discuss.',
  },
  // Features
  'featureName-discussion-page': {
    id: 'authoring.discussions.featureName-discussion-page',
    defaultMessage: 'Страница обсуждений',
    description: 'Название функции обсуждений.',
  },
  'featureName-embedded-course-sections': {
    id: 'authoring.discussions.featureName-embedded-course-sections',
    defaultMessage: 'Встроенные разделы курса',
    description: 'Название функции обсуждений.',
  },
  'featureName-advanced-in-context-discussion': {
    id: 'authoring.discussions.featureName-advanced-in-context-discussion',
    defaultMessage: 'Расширенные обсуждения в контексте',
    description: 'Название функции обсуждений.',
  },
  'featureName-anonymous-posting': {
    id: 'authoring.discussions.featureName-anonymous-posting',
    defaultMessage: 'Анонимные публикации',
    description: 'Название функции обсуждений.',
  },
  'featureName-automatic-learner-enrollment': {
    id: 'authoring.discussions.featureName-automatic-learner-enrollment',
    defaultMessage: 'Автоматическая регистрация учащихся',
    description: 'Название функции обсуждений.',
  },
  'featureName-blackout-discussion-dates': {
    id: 'authoring.discussions.featureName-blackout-discussion-dates',
    defaultMessage: 'Заблокированные даты обсуждений',
    description: 'Название функции обсуждений.',
  },
  'featureName-community-ta-support': {
    id: 'authoring.discussions.featureName-community-ta-support',
    defaultMessage: 'Поддержка помощников сообщества',
    description: 'Название функции обсуждений.',
  },
  'featureName-course-cohort-support': {
    id: 'authoring.discussions.featureName-course-cohort-support',
    defaultMessage: 'Поддержка когорт курса',
    description: 'Название функции обсуждений.',
  },
  'featureName-direct-messages-from-instructors': {
    id: 'authoring.discussions.featureName-direct-messages-from-instructors',
    defaultMessage: 'Прямые сообщения от преподавателей',
    description: 'Название функции обсуждений.',
  },
  'featureName-discussion-content-prompts': {
    id: 'authoring.discussions.featureName-discussion-content-prompts',
    defaultMessage: 'Подсказки для контента обсуждений',
    description: 'Название функции обсуждений.',
  },
  'featureName-email-notifications': {
    id: 'authoring.discussions.featureName-email-notifications',
    defaultMessage: 'Email-уведомления',
    description: 'Название функции обсуждений.',
  },
  'featureName-graded-discussions': {
    id: 'authoring.discussions.featureName-graded-discussions',
    defaultMessage: 'Оцениваемые обсуждения',
    description: 'Название функции обсуждений.',
  },
  'featureName-in-platform-notifications': {
    id: 'authoring.discussions.featureName-in-platform-notifications',
    defaultMessage: 'Уведомления в платформе',
    description: 'Название функции обсуждений.',
  },
  'featureName-internationalization-support': {
    id: 'authoring.discussions.featureName-internationalization-support',
    defaultMessage: 'Поддержка интернационализации',
    description: 'Название функции обсуждений.',
  },
  'featureName-lti-advanced-sharing-mode': {
    id: 'authoring.discussions.featureName-lti-advanced-sharing-mode',
    defaultMessage: 'LTI расширенный режим обмена',
    description: 'Название функции обсуждений.',
  },
  'featureName-basic-configuration': {
    id: 'authoring.discussions.featureName-basic-configuration',
    defaultMessage: 'Базовая конфигурация',
    description: 'Название функции обсуждений.',
  },
  'featureName-primary-discussion-app-experience': {
    id: 'authoring.discussions.featureName-primary-discussion-app-experience',
    defaultMessage: 'Основной опыт приложения для обсуждений',
    description: 'Название функции обсуждений.',
  },
  'featureName-question-discussion-support': {
    id: 'authoring.discussions.featureName-question-discussion-support',
    defaultMessage: 'Поддержка вопросов и обсуждений',
    description: 'Название функции обсуждений.',
  },
  'featureName-report/flag-content-to-moderators': {
    id: 'authoring.discussions.featureName-report/flag-content-to-moderators',
    defaultMessage: 'Сообщить о контенте модераторам',
    description: 'Название функции обсуждений.',
  },
  'featureName-research-data-events': {
    id: 'authoring.discussions.featureName-research-data-events',
    defaultMessage: 'События исследовательских данных',
    description: 'Название функции обсуждений.',
  },
  'featureName-simplified-in-context-discussion': {
    id: 'authoring.discussions.featureName-simplified-in-context-discussion',
    defaultMessage: 'Упрощенные обсуждения в контексте',
    description: 'Название функции обсуждений.',
  },
  'featureName-user-mentions': {
    id: 'authoring.discussions.featureName-user-mentions',
    defaultMessage: 'Упоминания пользователей',
    description: 'Название функции обсуждений.',
  },
  'featureName-wcag-2.1': {
    id: 'authoring.discussions.featureName-wcag-2.1',
    defaultMessage: 'Поддержка WCAG 2.1',
    description: 'Название функции обсуждений.',
  },
  'featureName-wcag-2.0-support': {
    id: 'authoring.discussions.wcag-2.0-support',
    defaultMessage: 'Поддержка WCAG 2.0',
    description: 'Название функции обсуждений.',
  },
  'featureType-basic': {
    id: 'authoring.discussions.basic-support',
    defaultMessage: 'Базовая поддержка',
    description: 'Тип функции обсуждений.',
  },
  'featureType-partial': {
    id: 'authoring.discussions.partial-support',
    defaultMessage: 'Частичная поддержка',
    description: 'Тип функции обсуждений.',
  },
  'featureType-full': {
    id: 'authoring.discussions.full-support',
    defaultMessage: 'Полная поддержка',
    description: 'Тип функции обсуждений.',
  },
  'featureType-common': {
    id: 'authoring.discussions.common-support',
    defaultMessage: 'Востребованная',
    description: 'Тип функции обсуждений.',
  },
  hideDiscussionTab: {
    id: 'authoring.discussions.hide-discussion-tab',
    defaultMessage: 'Скрыть вкладку обсуждений',
    description: 'Заголовок сообщения о скрытии вкладки обсуждений',
  },
  hideDiscussionTabTitle: {
    id: 'authoring.discussions.hide-tab-title',
    defaultMessage: 'Скрыть вкладку обсуждений?',
    description: 'Заголовок сообщения о скрытии вкладки обсуждений',
  },
  hideDiscussionTabMessage: {
    id: 'authoring.discussions.hide-tab-message',
    defaultMessage: 'Вкладка обсуждений больше не будет видна учащимся в LMS. Кроме того, публикация на форумах будет отключена. Вы уверены, что хотите продолжить?',
    description: 'Помощник сообщения о скрытии вкладки обсуждений',
  },
  hideDiscussionOkButton: {
    id: 'authoring.discussions.hide-ok-button',
    defaultMessage: 'ОК',
    description: 'Заголовок кнопки ОК',
  },
  hideDiscussionCancelButton: {
    id: 'authoring.discussions.hide-cancel-button',
    defaultMessage: 'Отмена',
    description: 'Заголовок кнопки отмены',
  },
});
export default messages;