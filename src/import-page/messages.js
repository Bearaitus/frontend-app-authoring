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
    defaultMessage: '',
  },
  description2: {
    id: 'course-authoring.import.description2',
    defaultMessage: 'Курс должен быть в формате .tar.gz. Импорт курса будет занимать определённое количество времени. Пока курс не будет импортирован, со страницы выходить нельзя (так как процесс загрузки прервется). Во время импорта курса запрещено вносить изменения в сам курс, а также проходить обучение на EdTech Academy, так как во время процесса импорта учебная платформа тренажера может подвиснуть.',
  },
  description3: {
    id: 'course-authoring.import.description3',
    defaultMessage: '/',
  },
});

export default messages;
