import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  pageTitle: {
    id: 'course-authoring.import.page.title',
    defaultMessage: '{headingTitle} | {courseName} | {siteName}',
  },
  headingTitle: {
    id: 'course-authoring.import.heading.title',
    defaultMessage: 'Импорт курса',
  },
  headingSubtitle: {
    id: 'course-authoring.import.heading.subtitle',
    defaultMessage: 'Инструменты',
  },
  description1: {
    id: 'course-authoring.import.description1',
    defaultMessage: 'Убедитесь, что вы хотите импортировать курс, прежде чем продолжить. Содержимое импортированного курса заменит содержимое существующего курса. Импорт курса нельзя отменить. Перед продолжением мы рекомендуем вам экспортировать текущий курс, чтобы иметь резервную копию.',
  },
  description2: {
    id: 'course-authoring.import.description2',
    defaultMessage: 'Курс, который вы импортируете, должен быть в файле .tar.gz (т.е. файл .tar, сжатый с помощью GNU Zip). Этот файл .tar.gz должен содержать файл course.xml. Он также может содержать другие файлы.',
  },
  description3: {
    id: 'course-authoring.import.description3',
    defaultMessage: 'Процесс импорта состоит из пяти этапов. На протяжении первых двух этапов вы должны оставаться на этой странице. Вы можете покинуть эту страницу после завершения этапа распаковки. Однако мы рекомендуем вам не вносить важные изменения в ваш курс до завершения операции импорта.',
  },
});

export default messages;
