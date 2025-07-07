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
    defaultMessage: 'Вы можете экспортировать курсы и редактировать их вне {studioShortName}. Экспортированный файл является файлом .tar.gz (т.е. файлом .tar, сжатым с помощью GNU Zip), который содержит структуру и содержимое курса. Вы также можете повторно импортировать курсы, которые вы экспортировали.',
  },
  description2: {
    id: 'course-authoring.export.description2',
    defaultMessage: 'Осторожно: при экспорте курса, информация такая как ключи API MATLAB, паспорта LTI, секретные токены аннотаций и URL-адреса хранилища аннотаций включаются в экспортированные данные. Если вы делитесь экспортированными файлами, вы также можете делиться конфиденциальной или лицензионной информацией.',
  },
  titleUnderButton: {
    id: 'course-authoring.export.title-under-button',
    defaultMessage: 'Экспортировать содержимое моего курса',
  },
  buttonTitle: {
    id: 'course-authoring.export.button.title',
    defaultMessage: 'Экспортировать содержимое курса',
  },
});

export default messages;
