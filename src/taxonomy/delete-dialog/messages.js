import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  deleteDialogTitle: {
    id: 'course-authoring.taxonomy-list.dialog.delete.title',
    defaultMessage: 'Удалить "{taxonomyName}"',
  },
  deleteDialogBody: {
    id: 'course-authoring.taxonomy-list.dialog.delete.body',
    defaultMessage: 'Предупреждение! Вы собираетесь удалить таксономию, содержащую {tagsCount} тегов. Назначенные организации больше не смогут получить доступ к таксономии, и любые примененные к содержимому курса теги будут удалены.',
  },
  deleteDialogConfirmLabel: {
    id: 'course-authoring.taxonomy-list.dialog.delete.confirm.label',
    defaultMessage: 'Введите {deleteLabel}, чтобы подтвердить',
  },
  deleteDialogConfirmDeleteLabel: {
    id: 'course-authoring.taxonomy-list.dialog.delete.confirmDelete.label',
    defaultMessage: 'УДАЛИТЬ',
  },
  deleteDialogCancelLabel: {
    id: 'course-authoring.taxonomy-list.dialog.delete.cancel.label',
    defaultMessage: 'Отмена',
  },
  deleteDialogDeleteLabel: {
    id: 'course-authoring.taxonomy-list.dialog.delete.delete.label',
    defaultMessage: 'Удалить',
  },
});

export default messages;
