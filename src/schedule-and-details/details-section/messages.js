import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  detailsTitle: {
    id: 'course-authoring.schedule-section.details.title',
    defaultMessage: 'Course Details',
  },
  detailsDescription: {
    id: 'course-authoring.schedule-section.details.description',
    defaultMessage: 'Provide helpful information about your course',
  },
  dropdownLabel: {
    id: 'course-authoring.schedule-section.details.dropdown.label',
    defaultMessage: 'Course Language',
  },
  dropdownHelpText: {
    id: 'course-authoring.schedule-section.details.dropdown.help-text',
    defaultMessage: 'Specify the course language here. This is used to help users find courses that are taught in a specific language. This is also used to localize the \'From\' field in bulk emails.',
  },
  dropdownEmpty: {
    id: 'course-authoring.schedule-section.details.dropdown.empty',
    defaultMessage: 'Select a language',
  },
});
export default messages;