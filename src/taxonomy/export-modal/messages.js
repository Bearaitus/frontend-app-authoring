import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  exportModalTitle: {
    id: 'course-authoring.taxonomy-list.modal.export.title',
    defaultMessage: 'Select a Format to Export',
  },
  exportModalBodyDescription: {
    id: 'course-authoring.taxonomy-list.modal.export.body',
    defaultMessage: 'Select a file format to export the taxonomy:',
  },
  exportModalSubmitButtonLabel: {
    id: 'course-authoring.taxonomy-list.modal.export.submit.label',
    defaultMessage: 'Export',
  },
  taxonomyCSVFormat: {
    id: 'course-authoring.taxonomy-list.csv-format',
    defaultMessage: 'CSV File',
  },
  taxonomyJSONFormat: {
    id: 'course-authoring.taxonomy-list.json-format',
    defaultMessage: 'JSON File',
  },
  taxonomyModalsCancelLabel: {
    id: 'course-authoring.taxonomy-list.modal.cancel',
    defaultMessage: 'Cancel',
  },
});
export default messages;