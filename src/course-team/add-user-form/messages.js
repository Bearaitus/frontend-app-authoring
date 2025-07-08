import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  formTitle: {
    id: 'course-authoring.course-team.form.title',
    defaultMessage: 'Добавить пользователя в команду курса',
  },
  formLabel: {
    id: 'course-authoring.course-team.form.label',
    defaultMessage: 'Адрес электронной почты пользователя',
  },
  formPlaceholder: {
    id: 'course-authoring.course-team.form.placeholder',
    defaultMessage: 'например: {email}',
  },
  formHelperText: {
    id: 'course-authoring.course-team.form.helperText',
    defaultMessage: 'Укажите адрес электронной почты пользователя, которого вы хотите добавить в качестве персонала',
  },
  addUserButton: {
    id: 'course-authoring.course-team.form.button.addUser',
    defaultMessage: 'Добавить пользователя',
  },
  cancelButton: {
    id: 'course-authoring.course-team.form.button.cancel',
    defaultMessage: 'Отмена',
  },
});

export default messages;
