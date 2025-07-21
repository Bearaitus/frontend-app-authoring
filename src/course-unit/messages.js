import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  alertFailedGeneric: {
    id: 'course-authoring.course-unit.general.alert.error.description',
    defaultMessage: 'Failed to {actionName} {type}. Please try again.',
  },
  alertUnpublishedVersion: {
    id: 'course-authoring.course-unit.general.alert.unpublished-version.description',
    defaultMessage: 'Note: The latest published version of this block is currently live. Publishing changes will modify the student experience.',
  },
  pasteButtonText: {
    id: 'course-authoring.course-unit.paste-component.btn.text',
    defaultMessage: 'Paste Component',
  },
});
export default messages;