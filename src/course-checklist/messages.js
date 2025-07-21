import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  pageTitle: {
    id: 'course-authoring.export.page.title',
    defaultMessage: '{headingTitle} | {courseName} | {siteName}',
  },
  headingTitle: {
    id: 'course-authoring.course-checklist.heading.title',
    defaultMessage: 'Checklists',
    description: 'Heading text for the Checklist page',
  },
  headingSubtitle: {
    id: 'course-authoring.course-checklist.heading.subtitle',
    defaultMessage: 'Tools',
  },
  launchChecklistLabel: {
    id: 'launchChecklistLabel',
    defaultMessage: 'Launch Checklist',
    description: 'Heading text for the checklist describing actions to take before launching a course',
  },
  bestPracticesChecklistLabel: {
    id: 'bestPracticesChecklistLabel',
    defaultMessage: 'Best Practices Checklist',
    description: 'Heading text for the checklist describing best practices for a course',
  },
  launchChecklistLoadingLabel: {
    id: 'doneLoadingChecklistStatusLabel',
    defaultMessage: 'Loading Launch Checklist data',
    description: 'Label informing the user that the Launch Checklist is loading',
  },
  launchChecklistDoneLoadingLabel: {
    id: 'launchChecklistDoneLoadingLabel',
    defaultMessage: 'Launch Checklist data loaded',
    description: 'Label informing the user that the Launch Checklist has loaded',
  },
  bestPracticesChecklistLoadingLabel: {
    id: 'bestPracticesChecklistLoadingLabel',
    defaultMessage: 'Loading Best Practices Checklist data',
    description: 'Label informing the user that the Best Practices Checklist is loading',
  },
  bestPracticesChecklistDoneLoadingLabel: {
    id: 'bestPracticesChecklistDoneLoadingLabel',
    defaultMessage: 'Best Practices Checklist data loaded',
    description: 'Label informing the user that the Best Practices Checklist has loaded',
  },
});
export default messages;