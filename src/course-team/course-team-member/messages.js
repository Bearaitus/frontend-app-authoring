import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  roleAdmin: {
    id: 'course-authoring.course-team.member.role.admin',
    defaultMessage: 'Администратор',
  },
  roleStaff: {
    id: 'course-authoring.course-team.member.role.staff',
    defaultMessage: 'Персонал',
  },
  roleYou: {
    id: 'course-authoring.course-team.member.role.you',
    defaultMessage: 'Вы!',
  },
  hint: {
    id: 'course-authoring.course-team.member.hint',
    defaultMessage: 'Повысьте другого участника до администратора, чтобы удалить свои права администратора',
  },
  addButton: {
    id: 'course-authoring.course-team.member.button.add',
    defaultMessage: 'Добавить доступ администратора',
  },
  removeButton: {
    id: 'course-authoring.course-team.member.button.remove-admin-access',
    defaultMessage: 'Удалить доступ администратора',
  },
  deleteUserButton: {
    id: 'course-authoring.course-team.member.button.delete',
    defaultMessage: 'Удалить пользователя',
  },
});

export default messages;
