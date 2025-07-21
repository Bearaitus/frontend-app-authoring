import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  requirementsTitle: {
    id: 'course-authoring.schedule-section.requirements.title',
    defaultMessage: 'Course Prerequisites',
  },
  requirementsDescription: {
    id: 'course-authoring.schedule-section.requirements.description',
    defaultMessage: 'Expectations of students taking this course',
  },
  timepickerLabel: {
    id: 'course-authoring.schedule-section.requirements.timepicker.label',
    defaultMessage: 'Hours of Effort Per Week',
  },
  timepickerHelpText: {
    id: 'course-authoring.schedule-section.requirements.timepicker.help-text',
    defaultMessage: 'Time spent on all course work',
  },
  dropdownLabel: {
    id: 'course-authoring.schedule-section.requirements.dropdown.label',
    defaultMessage: 'Prerequisite Course',
  },
  dropdownHelpText: {
    id: 'course-authoring.schedule-section.requirements.dropdown.help-text',
    defaultMessage: 'Course that users must complete before starting this course',
  },
  dropdownEmptyText: {
    id: 'course-authoring.schedule-section.requirements.dropdown.empty-text',
    defaultMessage: 'None',
  },
});
export default messages;