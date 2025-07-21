import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  gracePeriodOnDeadlineLabel: {
    id: 'course-authoring.grading-settings.deadline.label',
    defaultMessage: 'Grace Period on Deadline:',
  },
  gracePeriodOnDeadlineDescription: {
    id: 'course-authoring.grading-settings.deadline.description',
    defaultMessage: 'Grace Period for Deadlines',
  },
  gracePeriodOnDeadlineErrorMsg: {
    id: 'course-authoring.grading-settings.deadline.error.message',
    defaultMessage: 'Deadline must be specified in {timeFormat} format.',
  },
});
export default messages;