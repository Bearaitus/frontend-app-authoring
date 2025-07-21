import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  deleteModalTitle: {
    id: 'course-authoring.course-team.member.button.remove',
    defaultMessage: 'Remove Course Team Member',
  },
  deleteModalMessage: {
    id: 'course-authoring.course-team.delete-modal.message',
    defaultMessage: 'Are you sure you want to remove {email} from the course team for "{courseName}"?',
  },
  deleteModalDeleteButton: {
    id: 'course-authoring.course-team.delete-modal.button.delete',
    defaultMessage: 'Delete',
  },
  deleteModalCancelButton: {
    id: 'course-authoring.course-team.delete-modal.button.cancel',
    defaultMessage: 'Cancel',
  },
  errorModalTitle: {
    id: 'course-authoring.course-team.error-modal.title',
    defaultMessage: 'Error Adding User',
  },
  errorModalOkButton: {
    id: 'course-authoring.course-team.error-modal.button.ok',
    defaultMessage: 'OK',
  },
  warningModalTitle: {
    id: 'course-authoring.course-team.warning-modal.title',
    defaultMessage: 'Already on Course Team',
  },
  warningModalMessage: {
    id: 'course-authoring.course-team.warning-modal.message',
    defaultMessage: '{email} is already a member of the {courseName} team. Double-check the email address if you wish to add a new member.',
  },
  warningModalReturnButton: {
    id: 'course-authoring.course-team.warning-modal.button.return',
    defaultMessage: 'Return to Team List',
  },
});
export default messages;