import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  configurationErrorTitle: {
    id: 'course-authoring.course-outline.page-alerts.configurationErrorTitle',
    defaultMessage: 'Этот курс был создан как повторный. Требуется ручная настройка.',
    description: 'Название ошибки конфигурации в обзоре курса.',
  },
  configurationErrorText: {
    id: 'course-authoring.course-outline.page-alerts.configurationErrorText',
    defaultMessage: 'В настоящее время нет видимого контента курса, и нет зарегистрированных учащихся. Убедитесь, что вы проверили и сбросили все даты, включая дату начала курса; настроили команду курса; проверили обновления курса и другие активы на наличие устаревшего материала; и заполнили обсуждения и вики.',
    description: 'Текст ошибки конфигурации в обзоре курса.',
  },
  discussionNotificationText: {
    id: 'course-authoring.course-outline.page-alerts.discussionNotificationText',
    defaultMessage: 'Этот запуск курса использует обновленную версию {platformName} форума обсуждений. Чтобы отобразить боковую панель обсуждений, блоки обсуждений больше не будут видны для учащихся.',
    description: 'Текст уведомления об обновленной версии форума обсуждений.',
  },
  discussionNotificationLearnMore: {
    id: 'course-authoring.course-outline.page-alerts.discussionNotificationLearnMore',
    defaultMessage: 'Узнать больше',
    description: 'Ссылка "Узнать больше" в уведомлении об обновленной версии форума обсуждений.',
  },
  discussionNotificationFeedback: {
    id: 'course-authoring.course-outline.page-alerts.discussionNotificationFeedback',
    defaultMessage: 'Поделиться отзывом',
    description: 'Ссылка "Поделиться отзывом" в уведомлении об обновленной версии форума обсуждений.',
  },
  deprecationWarningTitle: {
    id: 'course-authoring.course-outline.page-alerts.deprecationWarningTitle',
    defaultMessage: 'Этот курс использует функции, которые больше не поддерживаются.',
    description: 'Название предупреждения об устаревших функциях, используемых в курсе, которые больше не поддерживаются.',
  },
  deprecationWarningBlocksText: {
    id: 'course-authoring.course-outline.page-alerts.deprecationWarningBlocksText',
    defaultMessage: 'Вам необходимо удалить или заменить следующие компоненты.',
    description: 'Текст предупреждения об устаревших компонентах, которые необходимо удалить или заменить.',
  },
  deprecationWarningDeprecatedBlockText: {
    id: 'course-authoring.course-outline.page-alerts.deprecationWarningDeprecatedBlockText',
    defaultMessage: 'Чтобы избежать ошибок, {platformName} настоятельно рекомендует удалить неподдерживаемые функции из расширенных настроек курса. Для этого перейдите на {hyperlink}, найдите настройку "Расширенный список модулей" и удалите следующие модули из списка.',
    description: 'Текст предупреждения об устаревших компонентах и о том, как их удалить.',
  },
  advancedSettingLinkText: {
    id: 'course-authoring.course-outline.page-alerts.advancedSettingLinkText',
    defaultMessage: 'Страница расширенных настроек',
    description: 'Текст ссылки на страницу расширенных настроек.',
  },
  deprecatedComponentName: {
    id: 'course-authoring.course-outline.page-alerts.deprecatedComponentName',
    defaultMessage: 'Устаревший компонент',
    description: 'Название устаревшего компонента по умолчанию.',
  },
  proctoringErrorTitle: {
    id: 'course-authoring.course-outline.page-alerts.proctoringErrorTitle',
    defaultMessage: 'Этот курс имеет настройки прокторинга, которые являются неполными или недействительными.',
    description: 'Название ошибки настроек прокторинга.',
  },
  proctoringErrorText: {
    id: 'course-authoring.course-outline.page-alerts.proctoringErrorText',
    defaultMessage: 'Чтобы обновить эти настройки, перейдите на {hyperlink}.',
    description: 'Текст ошибки настроек прокторинга.',
  },
  proctoredSettingsLinkText: {
    id: 'course-authoring.course-outline.page-alerts.proctoredSettingsLinkText',
    defaultMessage: 'Страница настроек прокторинга',
    description: 'Текст ссылки на страницу настроек прокторинга.',
  },
  alertFailedGeneric: {
    id: 'course-authoring.course-outline.page-alert.generic-error.description',
    defaultMessage: 'Невозможно {actionName} {type}. Пожалуйста, попробуйте снова.',
    description: 'Общий текст ошибки.',
  },
  newFileAlertTitle: {
    id: 'course-authoring.course-outline.page-alert.paste-alert.new-files.title',
    defaultMessage: 'Добавлены новые {newFilesLen, plural, one {файл} other {файлы}} в Файлы.',
    description: 'Название уведомления о добавлении новых файлов.',
  },
  newFileAlertDesc: {
    id: 'course-authoring.course-outline.page-alert.paste-alert.new-files.description',
    defaultMessage: 'Следующие обязательные {newFilesLen, plural, one {файл был} other {файлы были}} импортированы в этот курс: {newFilesStr}',
    description: 'Текст уведомления о добавлении новых файлов.',
  },
  newFileAlertAction: {
    id: 'course-authoring.course-outline.page-alert.paste-alert.new-files.action',
    defaultMessage: 'Просмотреть файлы',
    description: 'Текст кнопки для просмотра добавленных файлов.',
  },
  errorFileAlertTitle: {
    id: 'course-authoring.course-outline.page-alert.paste-alert.error-files.title',
    defaultMessage: 'Произошли некоторые ошибки',
    description: 'Название уведомления об ошибках при добавлении файлов.',
  },
  errorFileAlertDesc: {
    id: 'course-authoring.course-outline.page-alert.paste-alert.error-files.description',
    defaultMessage: 'Следующие обязательные {errorFilesLen, plural, one {файл} other {файлы}} не могли быть добавлены в курс: {errorFilesStr}',
    description: 'Текст уведомления об ошибках при добавлении файлов.',
  },
  conflictingFileAlertTitle: {
    id: 'course-authoring.course-outline.page-alert.paste-alert.conflicting-files.title',
    defaultMessage: 'Вам может потребоваться обновить {conflictingFilesLen, plural, one {файл} other {файлы}} вручную',
    description: 'Название уведомления о конфликтующих файлах.',
  },
  conflictingFileAlertDesc: {
    id: 'course-authoring.course-outline.page-alert.paste-alert.new-conflicting.description',
    defaultMessage: 'Следующие {conflictingFilesLen, plural, one {файл} other {файлы}} уже существуют в этом курсе, но не соответствуют версии, используемой компонентом, который вы вставили: {conflictingFilesStr}',
    description: 'Текст уведомления о конфликтующих файлах.',
  },
  serverErrorAlert: {
    id: 'course-authoring.course-outline.page-alert.server-error.title',
    defaultMessage: 'Серверы Studio遇到了 ошибку',
    description: 'Название общей ошибки сервера.',
  },
  serverErrorAlertBody: {
    id: 'course-authoring.course-outline.page-alert.server-error.body',
    defaultMessage: 'Произошла ошибка в Studio, и страница не могла быть загружена. Пожалуйста, попробуйте снова через несколько моментов. Мы зарегистрировали ошибку, и наш персонал работает над ее решением как можно скорее.',
    description: 'Текст общей ошибки сервера.',
  },
  networkErrorAlert: {
    id: 'course-authoring.course-outline.page-alert.network-error.title',
    defaultMessage: 'Ошибка сети',
    description: 'Название общей ошибки сети.',
  },
});

export default messages;
