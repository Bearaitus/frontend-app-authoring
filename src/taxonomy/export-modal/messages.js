import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  exportModalTitle: {
    id: 'course-authoring.taxonomy-list.modal.export.title',
    defaultMessage: 'Выберите формат для экспорта',
  },
  exportModalBodyDescription: {
    id: 'course-authoring.taxonomy-list.modal.export.body',
    defaultMessage: 'Выберите формат файла, в котором вы хотите экспортировать таксономию:',
  },
  exportModalSubmitButtonLabel: {
    id: 'course-authoring.taxonomy-list.modal.export.submit.label',
    defaultMessage: 'Экспорт',
  },
  taxonomyCSVFormat: {
    id: 'course-authoring.taxonomy-list.csv-format',
    defaultMessage: 'CSV файл',
  },
  taxonomyJSONFormat: {
    id: 'course-authoring.taxonomy-list.json-format',
    defaultMessage: 'JSON файл',
  },
  taxonomyModalsCancelLabel: {
    id: 'course-authoring.taxonomy-list.modal.cancel',
    defaultMessage: 'Отмена',
  },
});
export default messages;