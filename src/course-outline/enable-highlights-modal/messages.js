import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  title: {
    id: 'course-authoring.course-outline.status-bar.modal.title',
    defaultMessage: 'Enable Course Highlighting Emails',
  },
  description_1: {
    id: 'course-authoring.course-outline.status-bar.modal.description-1',
    defaultMessage: 'When you enable course highlighting emails, learners will automatically receive emails for each section that has a highlight. You will not be able to disable highlighting after email sending begins.',
  },
  description_2: {
    id: 'course-authoring.course-outline.status-bar.modal.description-2',
    defaultMessage: 'Are you sure you want to enable course highlighting emails?',
  },
  link: {
    id: 'course-authoring.course-outline.status-bar.modal.link',
    defaultMessage: 'Learn more',
  },
  cancelButton: {
    id: 'course-authoring.course-outline.status-bar.modal.cancelButton',
    defaultMessage: 'Cancel',
  },
  submitButton: {
    id: 'course-authoring.course-outline.status-bar.modal.submitButton',
    defaultMessage: 'Enable',
  },
});
export default messages;