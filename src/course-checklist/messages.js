import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  pageTitle: {
    id: 'course-authoring.export.page.title',
    defaultMessage: '{headingTitle} | {courseName} | {siteName}',
  },
  headingTitle: {
    id: 'course-authoring.course-checklist.heading.title',
    defaultMessage: 'Чек-листы',
    description: 'Текст заголовка для страницы Чек-листа',
  },
  headingSubtitle: {
    id: 'course-authoring.course-checklist.heading.subtitle',
    defaultMessage: 'Инструменты',
  },
  launchChecklistLabel: {
    id: 'launchChecklistLabel',
    defaultMessage: 'Чек-лист запуска',
    description: 'Текст заголовка для чек-листа, описывающего действия, которые необходимо выполнить перед запуском курса',
  },
  bestPracticesChecklistLabel: {
    id: 'bestPracticesChecklistLabel',
    defaultMessage: 'Чек-лист лучших практик',
    description: 'Текст заголовка для чек-листа, описывающего лучшие практики для курса',
  },
  launchChecklistLoadingLabel: {
    id: 'doneLoadingChecklistStatusLabel',
    defaultMessage: 'Данные Чек-листа запуска загружаются',
    description: 'Метка, сообщающая пользователю, что Чек-лист запуска загружается',
  },
  launchChecklistDoneLoadingLabel: {
    id: 'launchChecklistDoneLoadingLabel',
    defaultMessage: 'Данные Чек-листа запуска загружены',
    description: 'Метка, сообщающая пользователю, что Чек-лист запуска загружен',
  },
  bestPracticesChecklistLoadingLabel: {
    id: 'bestPracticesChecklistLoadingLabel',
    defaultMessage: 'Данные Чек-листа лучших практик загружаются',
    description: 'Метка, сообщающая пользователю, что Чек-лист лучших практик загружается',
  },
  bestPracticesChecklistDoneLoadingLabel: {
    id: 'bestPracticesChecklistDoneLoadingLabel',
    defaultMessage: 'Данные Чек-листа лучших практик загружены',
    description: 'Метка, сообщающая пользователю, что Чек-лист лучших практик загружен',
  },
});

export default messages;
