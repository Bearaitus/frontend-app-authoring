import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  gracePeriodOnDeadlineLabel: {
    id: 'course-authoring.grading-settings.deadline.label',
    defaultMessage: 'Срок сдачи с возможностью продления:',
  },
  gracePeriodOnDeadlineDescription: {
    id: 'course-authoring.grading-settings.deadline.description',
    defaultMessage: 'Льгота на сроки сдачи',
  },
  gracePeriodOnDeadlineErrorMsg: {
    id: 'course-authoring.grading-settings.deadline.error.message',
    defaultMessage: 'Срок сдачи должен быть указан в формате {timeFormat}.',
  },
});

export default messages;
