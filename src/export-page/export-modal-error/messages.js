import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  errorTitle: {
    id: 'course-authoring.export.modal.error.title',
    defaultMessage: 'An error occurred during export.',
  },
  errorDescriptionNotUnit: {
    id: 'course-authoring.export.modal.error.description.not.unit',
    defaultMessage: 'The course could not be exported to XML. There is not enough information to determine the faulty component. Please review your course to find problematic components and try again. Original error message: {errorMessage}',
  },
  errorDescriptionUnit: {
    id: 'course-authoring.export.modal.error.description.unit',
    defaultMessage: 'An error occurred during XML export for at least one component. It is recommended to go to the edit page and fix the error before retrying the export. Make sure all components on the page are valid and do not display any error messages. Original error message: {errorMessage}',
  },
  errorCancelButtonUnit: {
    id: 'course-authoring.export.modal.error.button.cancel.unit',
    defaultMessage: 'Return to Export',
  },
  errorCancelButtonNotUnit: {
    id: 'course-authoring.export.modal.error.button.cancel.not.unit',
    defaultMessage: 'Cancel',
  },
  errorActionButtonNotUnit: {
    id: 'course-authoring.export.modal.error.button.action.not.unit',
    defaultMessage: 'Go to Course Homepage',
  },
  errorActionButtonUnit: {
    id: 'course-authoring.export.modal.error.button.action.unit',
    defaultMessage: 'Fix Faulty Component',
  },
});
export default messages;