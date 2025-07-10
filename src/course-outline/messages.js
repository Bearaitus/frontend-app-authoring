import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  headingTitle: {
    id: 'course-authoring.course-outline.headingTitle',
    defaultMessage: 'Структура курса',
  },
  headingSubtitle: {
    id: 'course-authoring.course-outline.subTitle',
    defaultMessage: 'Контент',
  },
  alertSuccessTitle: {
    id: 'course-authoring.course-outline.reindex.alert.success.title',
    defaultMessage: 'Обновление курса',
  },
  alertSuccessDescription: {
    id: 'course-authoring.course-outline.reindex.alert.success.description',
    defaultMessage: 'Курс успешно обновлен.',
  },
  alertSuccessAriaLabelledby: {
    id: 'course-authoring.course-outline.reindex.alert.success.aria.labelledby',
    defaultMessage: 'alert-confirmation-title',
  },
  alertSuccessAriaDescribedby: {
    id: 'course-authoring.course-outline.reindex.alert.success.aria.describedby',
    defaultMessage: 'alert-confirmation-description',
  },
  newSectionButton: {
    id: 'course-authoring.course-outline.section-list.button.new-section',
    defaultMessage: 'Новый раздел',
  },
  exportTagsCreatingToastMessage: {
    id: 'course-authoring.course-outline.export-tags.toast.creating.message',
    defaultMessage: 'Пожалуйста, подождите. Создается файл экспорта тегов курса...',
    description: 'Сообщение о ходе выполнения в всплывающем уведомлении при экспорте тегов курса',
  },
  exportTagsSuccessToastMessage: {
    id: 'course-authoring.course-outline.export-tags.toast.success.message',
    defaultMessage: 'Теги курса успешно экспортированы',
    description: 'Сообщение об успехе во всплывающем уведомлении при экспорте тегов курса',
  },
  exportTagsErrorToastMessage: {
    id: 'course-authoring.course-outline.export-tags.toast.error.message',
    defaultMessage: 'Произошла ошибка при создании файла',
    description: 'Сообщение об ошибке во всплывающем уведомлении при экспорте тегов курса',
  },
});
export default messages;