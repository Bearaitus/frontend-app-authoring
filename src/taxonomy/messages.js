import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  headerTitle: {
    id: 'course-authoring.taxonomy-list.header.title',
    defaultMessage: 'Таксономии',
  },
  downloadTemplateButtonLabel: {
    id: 'course-authoring.taxonomy-list.button.download-template.label',
    defaultMessage: 'Скачать шаблон',
  },
  downloadTemplateButtonCSVLabel: {
    id: 'course-authoring.taxonomy-list.button.download-template.csv.label',
    defaultMessage: 'Шаблон CSV',
  },
  downloadTemplateButtonJSONLabel: {
    id: 'course-authoring.taxonomy-list.button.download-template.json.label',
    defaultMessage: 'Шаблон JSON',
  },
  downloadTemplateButtonHint: {
    id: 'course-authoring.taxonomy-list.button.download-template.hint',
    defaultMessage: 'Скачать пример таксономии',
  },
  importButtonLabel: {
    id: 'course-authoring.taxonomy-list.button.import.label',
    defaultMessage: 'Импорт',
  },
  orgInputSelectDefaultValue: {
    id: 'course-authoring.taxonomy-list.select.org.default',
    defaultMessage: 'Все таксономии',
  },
  orgAllValue: {
    id: 'course-authoring.taxonomy-list.select.org.all',
    defaultMessage: 'Все',
  },
  orgUnassignedValue: {
    id: 'course-authoring.taxonomy-list.select.org.unassigned',
    defaultMessage: 'Не назначено',
  },
  usageLoadingMessage: {
    id: 'course-authoring.taxonomy-list.spinner.loading',
    defaultMessage: 'Загрузка',
  },
  taxonomyDeleteToast: {
    id: 'course-authoring.taxonomy-list.toast.delete',
    defaultMessage: '"{name}" удалено',
  },
  taxonomyDismissLabel: {
    id: 'course-authoring.taxonomy-list.alert.dismiss',
    defaultMessage: 'Отменить',
  },
  importInProgressAlertDescription: {
    id: 'course-authoring.import-tags.prompt.in-progress',
    defaultMessage: 'Пожалуйста, оставьте это окно открытым. Мы сообщим вам, когда всё будет готово.',
    description: 'Сообщение об ошибке, когда импорт таксономии находится в процессе.',
  },
});

export default messages;
