import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  deleteModalTitle: {
    id: 'course-authoring.course-updates.delete-modal.title',
    defaultMessage: 'Вы уверены, что хотите удалить это обновление?',
  },
  deleteModalDescription: {
    id: 'course-authoring.course-updates.delete-modal.description',
    defaultMessage: 'Это действие нельзя отменить.',
  },
  cancelButton: {
    id: 'course-authoring.course-updates.actions.cancel',
    defaultMessage: 'Отмена',
  },
  deleteButton: {
    id: 'course-authoring.course-updates.button.delete',
    defaultMessage: 'Удалить',
  },
});

export default messages;
