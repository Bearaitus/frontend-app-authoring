import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  formTitle: {
    id: 'course-authoring.course-team.form.title',
    defaultMessage: 'Add User to Course Team',
  },
  formLabel: {
    id: 'course-authoring.course-team.form.label',
    defaultMessage: 'User Email Address',
  },
  formPlaceholder: {
    id: 'course-authoring.course-team.form.placeholder',
    defaultMessage: 'e.g., {email}',
  },
  formHelperText: {
    id: 'course-authoring.course-team.form.helperText',
    defaultMessage: 'Enter the email address of the user you want to add as staff.',
  },
  addUserButton: {
    id: 'course-authoring.course-team.form.button.addUser',
    defaultMessage: 'Add User',
  },
  cancelButton: {
    id: 'course-authoring.course-team.form.button.cancel',
    defaultMessage: 'Cancel',
  },
});
export default messages;