import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  pageTitle: {
    id: 'course-authoring.export.page.title',
    defaultMessage: '{headingTitle} | {courseName} | {siteName}',
  },
  headingTitle: {
    id: 'course-authoring.export.heading.title',
    defaultMessage: 'Course Export',
  },
  headingSubtitle: {
    id: 'course-authoring.export.heading.subtitle',
    defaultMessage: 'Tools',
  },
  description1: {
    id: 'course-authoring.export.description1',
    defaultMessage: 'You can export the course in a .tar.gz format. (The exported file will include the entire course structure and content).',
  },
  description2: {
    id: 'course-authoring.export.description2',
    defaultMessage: '',
  },
  titleUnderButton: {
    id: 'course-authoring.export.title-under-button',
    defaultMessage: 'Export',
  },
  buttonTitle: {
    id: 'course-authoring.export.button.title',
    defaultMessage: 'Export Course',
  },
});
export default messages;