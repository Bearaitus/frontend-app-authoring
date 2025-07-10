import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  configurationChangeConsequence: {
    id: 'authoring.discussions.configurationChangeConsequences',
    defaultMessage:
      'Студенты потеряют доступ к любым активным или предыдущим'
      + ' обсуждениям в вашем курсе.',
    description:
      'Описывает, что в результате изменения конфигурации'
      + ' студенты потеряют доступ к постам на курсе.',
  },
  configureApp: {
    id: 'authoring.discussions.configure.app',
    defaultMessage: 'Настроить {name}',
  },
  configure: {
    id: 'authoring.discussions.configure',
    defaultMessage: 'Настроить обсуждения',
  },
  ok: {
    id: 'authoring.discussions.ok',
    defaultMessage: 'ОК',
    description: 'Кнопка, позволяющая пользователю подтвердить изменение провайдера.',
  },
  cancel: {
    id: 'authoring.discussions.cancel',
    defaultMessage: 'Отмена',
    description: 'Кнопка, позволяющая пользователю вернуться к конфигурациям провайдера обсуждений.',
  },
  confirm: {
    id: 'authoring.discussions.confirm',
    defaultMessage: 'Подтвердить',
    description: 'Кнопка, позволяющая пользователю подтвердить подтверждение.',
  },
  confirmConfigurationChange: {
    id: 'authoring.discussions.confirmConfigurationChange',
    defaultMessage: 'Вы уверены, что хотите изменить настройки обсуждений?',
    description: 'Спрашивает пользователя, действительно ли он хочет изменить настройки.',
  },
  confirmEnableDiscussionsLabel: {
    id: 'authoring.discussions.confirmEnableDiscussionsLabel',
    defaultMessage: 'Включить обсуждения на единицах в оцененных подразделах?',
    description: 'Спрашивает пользователя, действительно ли он хочет включить обсуждения на единицах в оцененных подразделах.',
  },
  cancelEnableDiscussionsLabel: {
    id: 'authoring.discussions.cancelEnableDiscussionsLabel',
    defaultMessage: 'Отключить обсуждения на единицах в оцененных подразделах?',
    description: 'Спрашивает пользователя, действительно ли он хочет отключить обсуждения на единицах в оцененных подразделах.',
  },
  confirmEnableDiscussions: {
    id: 'authoring.discussions.confirmEnableDiscussions',
    defaultMessage: 'Включение этого переключателя автоматически включит обсуждение на всех единицах в оцененных подразделах, которые не являются экзаменами с ограничением по времени.',
    description: 'Спрашивает пользователя, действительно ли он хочет включить обсуждения на единицах в оцененных подразделах.',
  },
  cancelEnableDiscussions: {
    id: 'authoring.discussions.cancelEnableDiscussions',
    defaultMessage: 'Отключение этого переключателя автоматически отключит обсуждение на всех единицах в оцененных подразделах. Темы обсуждений, содержащие хотя бы один поток, будут перечислены и доступны в разделе «Архив» на странице обсуждений.',
    description: 'Спрашивает пользователя, действительно ли он хочет отключить обсуждения на единицах в оцененных подразделах.',
  },
  backButton: {
    id: 'authoring.discussions.backButton',
    defaultMessage: 'Назад',
    description: 'Кнопка, позволяющая пользователю вернуться к выбору приложения для обсуждений.',
  },
  saveButton: {
    id: 'authoring.discussions.saveButton',
    defaultMessage: 'Сохранить',
    description: 'Кнопка, позволяющая пользователю отправить свою конфигурацию обсуждений.',
  },
  savingButton: {
    id: 'authoring.discussions.savingButton',
    defaultMessage: 'Сохранение',
    description: 'Метка кнопки при отправке конфигурации обсуждений.',
  },
  savedButton: {
    id: 'authoring.discussions.savedButton',
    defaultMessage: 'Сохранено',
    description: 'Метка кнопки при успешной отправке конфигурации обсуждений.',
  },

  // App names
  'appName-piazza': {
    id: 'authoring.discussions.appConfigForm.appName-piazza',
    defaultMessage: 'Piazza',
    description: 'Название приложения Piazza.',
  },
  'appName-yellowdig': {
    id: 'authoring.discussions.appConfigForm.appName-yellowdig',
    defaultMessage: 'Yellowdig',
    description: 'Название приложения yellowdig.',
  },
  'appName-inscribe': {
    id: 'authoring.discussions.appConfigForm.appName-inscribe',
    defaultMessage: 'InScribe',
    description: 'Название приложения inscribe.',
  },
  'appName-discourse': {
    id: 'authoring.discussions.appConfigForm.appName-discourse',
    defaultMessage: 'Discourse',
    description: 'Название приложения discourse.',
  },
  'appName-ed-discuss': {
    id: 'authoring.discussions.appConfigForm.appName-ed-discuss',
    defaultMessage: 'Ed Discussion',
    description: 'Название приложения Ed Discussion.',
  },
  'appName-legacy': {
    id: 'authoring.discussions.appConfigForm.appName-legacy',
    defaultMessage: 'edX',
    description: 'Название приложения Legacy edX Discussions.',
  },
  'appName-openedx': {
    id: 'authoring.discussions.appConfigForm.appName-openedx',
    defaultMessage: 'edX (новое)',
    description: 'Название приложения нового edX Discussions.',
  },
  divisionByGroup: {
    id: 'authoring.discussions.builtIn.divisionByGroup',
    defaultMessage: 'Когорты',
  },
  divideByCohortsLabel: {
    id: 'authoring.discussions.builtIn.divideByCohorts.label',
    defaultMessage: 'Разделить обсуждения по когортам',
    description: 'Метка для переключателя, который включает разделение обсуждений по когортам.  allowDivisionByUnit, divideCourseWideTopics, divideGeneralTopic, и divideQuestionsForTAs используются только если это настройка установлена в true.',
  },
  divideByCohortsHelp: {
    id: 'authoring.discussions.builtIn.divideByCohorts.help',
    defaultMessage: 'Пользователи смогут просматривать и отвечать только на обсуждения, опубликованные членами их когорты.',
    description: 'Справочная информация для переключателя, который включает разделение обсуждений по когортам.',
  },
  divideCourseTopicsByCohortsLabel: {
    id: 'authoring.discussions.builtIn.divideCourseTopicsByCohorts.label',
    defaultMessage: 'Разделить темы курса',
    description: 'Метка для переключателя, который включает разделение тем курса по когортам.',
  },
  divideCourseTopicsByCohortsHelp: {
    id: 'authoring.discussions.builtIn.divideCourseTopicsByCohorts.help',
    defaultMessage: 'Выберите, какие из ваших общих тем курса вы хотите разделить по когортам.',
    description: 'Справочная информация, запрашивающая у пользователя выбор тем курса, которые должны быть разделены по когортам.',
  },
  divideGeneralTopic: {
    id: 'authoring.discussions.builtIn.divideGeneralTopic.label',
    defaultMessage: 'Общее',
    description: 'Метка для флажка, который позволяет пользователю разделить общую тему курса по когортам.',
  },
  divideQuestionsForTAsTopic: {
    id: 'authoring.discussions.builtIn.divideQuestionsForTAsTopic.label',
    defaultMessage: 'Вопросы для преподавателей',
    description: 'Метка для флажка, который позволяет пользователю разделить тему "Вопросы для преподавателей" по когортам.',
  },
  cohortsEnabled: {
    id: 'authoring.discussions.builtIn.cohortsEnabled.label',
    defaultMessage: 'Чтобы настроить эти настройки, включите когорты на '
    + 'панели управления преподавателем',
    description: 'Метка текста, информирующая пользователя о включении когорт',
  },
  instructorDashboard: {
    id: 'authoring.discussions.builtIn.instructorDashboard.label',
    defaultMessage: 'панели управления преподавателем',
    description: 'Метка текста для панели управления преподавателем',
  },
  // In-context discussion fields
  visibilityInContext: {
    id: 'authoring.discussions.builtIn.visibilityInContext',
    defaultMessage: 'Видимость обсуждений в контексте',
  },
  gradedUnitPagesLabel: {
    id: 'authoring.discussions.builtIn.gradedUnitPages.label',
    defaultMessage: 'Включить обсуждения на единицах в оцененных подразделах',
  },
  gradedUnitPagesHelp: {
    id: 'authoring.discussions.builtIn.gradedUnitPages.help',
    defaultMessage: 'Позволять учащимся взаимодействовать с обсуждениями на всех страницах оцененных единиц, кроме экзаменов с ограничением по времени.',
  },
  groupInContextSubsectionLabel: {
    id: 'authoring.discussions.builtIn.groupInContextSubsection.label',
    defaultMessage: 'Группировать обсуждения в контексте на уровне подраздела',
  },
  groupInContextSubsectionHelp: {
    id: 'authoring.discussions.builtIn.groupInContextSubsection.help',
    defaultMessage: 'Пользователи смогут просматривать любой пост в подразделе, независимо от страницы единицы, которую они просматривают. Хотя это не рекомендуется, если ваш курс имеет короткие последовательности обучения или низкую нагрузку, группировка может увеличить вовлеченность.',
  },

  // Anonymous posting fields
  anonymousPosting: {
    id: 'authoring.discussions.builtIn.anonymousPosting',
    defaultMessage: 'Анонимное размещение',
  },
  allowAnonymousPostsLabel: {
    id: 'authoring.discussions.builtIn.allowAnonymous.label',
    defaultMessage: 'Разрешить анонимные посты в обсуждениях',
  },
  allowAnonymousPostsHelp: {
    id: 'authoring.discussions.builtIn.allowAnonymous.help',
    defaultMessage: 'Если включено, пользователи смогут создавать посты, которые будут анонимны для всех пользователей.',
  },
  allowAnonymousPostsPeersLabel: {
    id: 'authoring.discussions.builtIn.allowAnonymousPeers.label',
    defaultMessage: 'Разрешить анонимные посты в обсуждениях для однокурсников',
  },
  allowAnonymousPostsPeersHelp: {
    id: 'authoring.discussions.builtIn.allowAnonymousPeers.help',
    defaultMessage: 'Пользователи смогут размещать посты анонимно для других однокурсников, но все посты будут видны для персонала курса.',
  },

  // Reported Email Notifications
  reportedContentEmailNotifications: {
    id: 'authoring.discussions.builtIn.reportedContentEmailNotifications',
    defaultMessage: 'Уведомления',
  },
  reportedContentEmailNotificationsLabel: {
    id: 'authoring.discussions.builtIn.reportedContentEmailNotifications.label',
    defaultMessage: 'Электронные уведомления о сообщенных контентах',
  },
  reportedContentEmailNotificationsHelp: {
    id: 'authoring.discussions.builtIn.reportedContentEmailNotifications.help',
    defaultMessage: 'Администраторы обсуждений, модераторы, преподаватели и групповые преподаватели (только для своей когорты) получат электронное уведомление, когда контент будет сообщен.',
  },

  // Discussion Topics
  discussionTopics: {
    id: 'authoring.discussions.discussionTopics',
    defaultMessage: 'Темы обсуждений',
  },
  discussionTopicsLabel: {
    id: 'authoring.discussions.discussionTopics.label',
    defaultMessage: 'Общие темы обсуждений',
    description: 'Метка для раздела тем обсуждений, позволяющая пользователю добавить новую тему.',
  },
  discussionTopicsHelp: {
    id: 'authoring.discussions.discussionTopics.help',
    defaultMessage: 'Обсуждения могут включать общие темы, не связанные с структурой курса. Все курсы имеют общую тему по умолчанию.',
    description: 'Справочная информация для добавления новых тем обсуждений в общем разделе тем обсуждений.',
  },
  discussionTopicRequired: {
    id: 'authoring.discussions.discussionTopic.required',
    defaultMessage: 'Название темы является обязательным полем',
    description: 'Сообщает пользователю, что поле темы обсуждения является обязательным и должно иметь значение.',
  },
  discussionTopicNameAlreadyExist: {
    id: 'authoring.discussions.discussionTopic.alreadyExistError',
    defaultMessage: 'Похоже, что это название уже используется',
    description: 'Сообщает пользователю, что название темы обсуждения уже используется и должно быть уникальным.',
  },
  addTopicButton: {
    id: 'authoring.discussions.addTopicButton',
    defaultMessage: 'Добавить тему',
    description: 'Метка кнопки при добавлении новой темы обсуждения.',
  },
  deleteButton: {
    id: 'authoring.discussions.deleteButton',
    defaultMessage: 'Удалить',
    description: 'Метка кнопки при удалении темы обсуждения из подтверждающей карточки.',
  },
  cancelButton: {
    id: 'authoring.discussions.cancelButton',
    defaultMessage: 'Отмена',
    description: 'Метка кнопки при отмене удаления темы обсуждения.',
  },
  discussionTopicDeletionHelp: {
    id: 'authoring.discussions.discussionTopicDeletion.help',
    defaultMessage: 'edX рекомендует не удалять темы обсуждений после начала курса.',
    description: 'Справочная информация для удаления темы обсуждения из раздела тем обсуждений.',
  },
  discussionTopicDeletionLabel: {
    id: 'authoring.discussions.discussionTopicDeletion.label',
    defaultMessage: 'Удалить эту тему?',
    description: 'Метка для подтверждающей карточки удаления темы обсуждения, позволяющая пользователю удалить тему.',
  },
  renameGeneralTopic: {
    id: 'authoring.discussions.builtIn.renameGeneralTopic.label',
    defaultMessage: 'Переименовать общую тему',
    description: 'Метка для темы по умолчанию, позволяющая пользователю переименовать общую тему.',
  },
  generalTopicHelp: {
    id: 'authoring.discussions.generalTopicHelp.help',
    defaultMessage: 'Это тема обсуждения по умолчанию для вашего курса.',
    description: 'Справочная информация для общей темы обсуждения в сворачиваемой карточке.',
  },
  configureAdditionalTopic: {
    id: 'authoring.discussions.builtIn.configureAdditionalTopic.label',
    defaultMessage: 'Настроить тему',
    description: 'Метка для дополнительной темы, позволяющая пользователю настроить дополнительную тему.',
  },
  addTopicHelpText: {
    id: 'authoring.discussions.addTopicHelpText',
    defaultMessage: 'Выберите уникальное название для вашей темы',
    description: 'Справочная информация для поля ввода при добавлении темы обсуждения.',
  },
  // Restricted dates
  restrictedStartDateHelp: {
    id: 'authoring.discussions.restrictedStartDate.help',
    defaultMessage: 'Введите дату начала, например, 12/10/2023',
  },
  restrictedEndDateHelp: {
    id: 'authoring.discussions.restrictedEndDate.help',
    defaultMessage: 'Введите дату окончания, например, 12/17/2023',
  },
  restrictedStartTimeHelp: {
    id: 'authoring.discussions.restrictedStartTime.help',
    defaultMessage: 'Введите время начала, например, 09:00',
  },
  restrictedEndTimeHelp: {
    id: 'authoring.discussions.restrictedEndTime.help',
    defaultMessage: 'Введите время окончания, например, 17:00',
  },
  discussionRestrictionLabel: {
    id: 'authoring.discussions.builtIn.discussionRestriction.label',
    defaultMessage: 'Ограничения обсуждений',
  },
  discussionRestrictionHelp: {
    id: 'authoring.discussions.discussionRestriction.help',
    defaultMessage: 'Если включено, пользователи не смогут размещать посты в обсуждениях.',
  },
  discussionRestrictionDatesHelp: {
    id: 'authoring.discussions.discussionRestrictionDates.help',
    defaultMessage: 'Если добавлено, пользователи не смогут размещать посты в обсуждениях между этими датами.',
  },
  addRestrictedDatesButton: {
    id: 'authoring.discussions.addRestrictedDatesButton',
    defaultMessage: 'Добавить ограниченные даты',
  },
  configureRestrictedDates: {
    id: 'authoring.discussions.builtIn.configureRestrictedDates.label',
    defaultMessage: 'Настроить ограниченный диапазон дат',
  },
  activeRestrictedDatesDeletionLabel: {
    id: 'authoring.discussions.activeRestrictedDatesDeletion.label',
    defaultMessage: 'Удалить активные ограниченные даты?',
    description: 'Метка для подтверждающей карточки удаления активных ограниченных дат, позволяющая пользователю удалить ограниченный диапазон дат.',
  },
  activeRestrictedDatesDeletionHelp: {
    id: 'authoring.discussions.activeRestrictedDatesDeletion.help',
    defaultMessage: 'Эти ограниченные даты в настоящее время активны. Если удалены, пользователи смогут размещать посты в обсуждениях в эти даты. Вы уверены, что хотите продолжить?',
    description: 'Справочная информация для удаления активных ограниченных дат из раздела ограниченных дат.',
  },
  completeRestrictedDatesDeletionHelp: {
    id: 'authoring.discussions.completeRestrictedDatesDeletion.help',
    defaultMessage: 'Вы уверены, что хотите удалить эти ограниченные даты?',
    description: 'Справочная информация для удаления завершенных ограниченных дат из раздела ограниченных дат.',
  },
  restrictedDatesDeletionLabel: {
    id: 'authoring.discussions.restrictedDatesDeletion.label',
    defaultMessage: 'Удалить ограниченные даты?',
    description: 'Метка для подтверждающей карточки удаления ограниченных дат, позволяющая пользователю удалить ограниченный диапазон дат.',
  },
  restrictedDatesDeletionHelp: {
    id: 'authoring.discussions.restrictedDatesDeletion.help',
    defaultMessage: 'Если удалены, пользователи смогут размещать посты в обсуждениях в эти даты.',
    description: 'Справочная информация для удаления предстоящих ограниченных дат из раздела ограниченных дат.',
  },
  discussionRestrictionOffLabelHelpText: {
    id: 'authoring.discussions.discussionRestrictionOff.label',
    defaultMessage: 'Если включено, пользователи смогут размещать посты в обсуждениях',
  },
  discussionRestrictionOnLabelHelpText: {
    id: 'authoring.discussions.discussionRestrictionOn.label',
    defaultMessage: 'Если включено, пользователи не смогут размещать посты в обсуждениях',
  },
  discussionRestrictionScheduledLabelHelpText: {
    id: 'authoring.discussions.discussionRestrictionScheduled.label',
    defaultMessage: 'Если добавлено, пользователи не смогут размещать посты в обсуждениях между этими датами.',
  },
  enableRestrictedDatesConfirmationLabel: {
    id: 'authoring.discussions.enableRestrictedDatesConfirmation.label',
    defaultMessage: 'Включить ограниченные даты?',
  },
  enableRestrictedDatesConfirmationHelp: {
    id: 'authoring.discussions.enableRestrictedDatesConfirmation.help',
    defaultMessage: 'Пользователи не смогут размещать посты в обсуждениях.',
  },
  deleteAltText: {
    id: 'authoring.topics.delete',
    defaultMessage: 'Удалить тему',
  },
  expandAltText: {
    id: 'authoring.topics.expand',
    defaultMessage: 'Развернуть',
  },
  collapseAltText: {
    id: 'authoring.topics.collapse',
    defaultMessage: 'Свернуть',
  },
  startDateLabel: {
    id: 'authoring.restrictedDates.start.date',
    defaultMessage: 'Дата начала',
    description: 'Метка для поля даты начала',
  },
  startTimeLabel: {
    id: 'authoring.restrictedDates.start.time',
    defaultMessage: 'Время начала (необязательно)',
    description: 'Метка для поля времени начала',
  },
  endDateLabel: {
    id: 'authoring.restrictedDates.end.date',
    defaultMessage: 'Дата окончания',
    description: 'Метка для поля даты окончания',
  },
  endTimeLabel: {
    id: 'authoring.restrictedDates.end.time',
    defaultMessage: 'Время окончания (необязательно)',
    description: 'Метка для поля времени окончания',
  },
});

export default messages;
