import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  pageTitle: {
    id: 'course-authoring.import.page.title',
    defaultMessage: '{headingTitle} | {courseName} | {siteName}',
  },
  headingTitle: {
    id: 'course-authoring.import.heading.title',
    defaultMessage: 'Import Course',
  },
  headingSubtitle: {
    id: 'course-authoring.import.heading.subtitle',
    defaultMessage: 'Tools',
  },
  description1: {
    id: 'course-authoring.import.description1',
    defaultMessage: '',
  },
  description2: {
    id: 'course-authoring.import.description2',
    defaultMessage: 'The course must be in .tar.gz format. Importing a course will take a considerable amount of time.  Please do not navigate away from the page until the import is complete, as this will interrupt the process.  During the import, it is prohibited to make changes to the course itself or to engage in learning activities on EdTech Academy, as the training platform may become unresponsive.',
  },
  description3: {
    id: 'course-authoring.import.description3',
    defaultMessage: '',
  },
});
export default messages;