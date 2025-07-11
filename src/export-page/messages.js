import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  pageTitle: {
    id: 'course-authoring.export.page.title',
    defaultMessage: '{headingTitle} | {courseName} | {siteName}',
  },
  headingTitle: {
    id: 'course-authoring.export.heading.title',
    defaultMessage: 'Экспорт курса',
  },
  headingSubtitle: {
    id: 'course-authoring.export.heading.subtitle',
    defaultMessage: 'Инструменты',
  },
  description1: {
    id: 'course-authoring.export.description1',
    defaultMessage: 'Вы можете экспортировать курс в формате .tar.gz (экспортированный файл будет содержать всю структуру и содержание курса).',
  },
  description2: {
    id: 'course-authoring.export.description2',
    defaultMessage: '',
  },
  titleUnderButton: {
    id: 'course-authoring.export.title-under-button',
    defaultMessage: 'Экспортировать',
  },
  buttonTitle: {
    id: 'course-authoring.export.button.title',
    defaultMessage: 'Экспортировать курс',
  },
});

export default messages;
