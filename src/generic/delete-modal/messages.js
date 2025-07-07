import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  title: {
    id: 'course-authoring.course-outline.delete-modal.title',
    defaultMessage: 'Удалить этот {category}?',
  },
  description: {
    id: 'course-authoring.course-outline.delete-modal.description',
    defaultMessage: 'Удаление этого {category} является постоянным и не может быть отменено.',
  },
  deleteButton: {
    id: 'course-authoring.course-outline.delete-modal.button.delete',
    defaultMessage: 'Удалить',
  },
  pendingDeleteButton: {
    id: 'course-authoring.course-outline.delete-modal.button.pending-delete',
    defaultMessage: 'Удаление...',
  },
  cancelButton: {
    id: 'course-authoring.course-outline.delete-modal.button.cancel',
    defaultMessage: 'Отмена',
  },
});

export default messages;
