import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  deleteModalTitle: {
    id: 'course-authoring.course-team.member.button.remove',
    defaultMessage: 'Удалить участника команды курса',
  },
  deleteModalMessage: {
    id: 'course-authoring.course-team.delete-modal.message',
    defaultMessage: 'Вы уверены, что хотите удалить {email} из команды курса для "{courseName}"?',
  },
  deleteModalDeleteButton: {
    id: 'course-authoring.course-team.delete-modal.button.delete',
    defaultMessage: 'Удалить',
  },
  deleteModalCancelButton: {
    id: 'course-authoring.course-team.delete-modal.button.cancel',
    defaultMessage: 'Отмена',
  },
  errorModalTitle: {
    id: 'course-authoring.course-team.error-modal.title',
    defaultMessage: 'Ошибка добавления пользователя',
  },
  errorModalOkButton: {
    id: 'course-authoring.course-team.error-modal.button.ok',
    defaultMessage: 'Ок',
  },
  warningModalTitle: {
    id: 'course-authoring.course-team.warning-modal.title',
    defaultMessage: 'Уже является участником команды курса',
  },
  warningModalMessage: {
    id: 'course-authoring.course-team.warning-modal.message',
    defaultMessage: '{email} уже является участником команды {courseName}. Проверьте адрес электронной почты, если вы хотите добавить нового участника.',
  },
  warningModalReturnButton: {
    id: 'course-authoring.course-team.warning-modal.button.return',
    defaultMessage: 'Вернуться к списку команды',
  },
});

export default messages;
