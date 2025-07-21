import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  cancelConfirmTitle: {
    id: 'authoring.editorContainer.cancelConfirm.title',
    defaultMessage: 'Exit Editor?',
    description: 'Title for the exit confirmation modal',
  },
  cancelConfirmDescription: {
    id: 'authoring.editorContainer.cancelConfirm.description',
    defaultMessage: 'Are you sure you want to exit the editor? Any unsaved changes will be lost.',
    description: 'Description text for the exit confirmation modal',
  },
  exitButtonAlt: {
    id: 'authoring.editorContainer.exitButton.alt',
    defaultMessage: 'Exit Editor',
    description: 'Alt text for the exit button',
  },
  okButtonLabel: {
    id: 'authoring.editorContainer.okButton.label',
    defaultMessage: 'OK',
    description: 'Text for the OK button',
  },
  modalTitle: {
    id: 'authoring.editorContainer.accessibleTitle',
    defaultMessage: 'Editor Dialog',
    description: 'Text displayed to screen readers to identify the editor modal',
  },
  contentSaveFailed: {
    id: 'authoring.editorfooter.save.error',
    defaultMessage: 'Error: Failed to save content. Please review your recent changes and try again.',
    description: 'Error message displayed when content saving fails.',
  },
  cancelButtonAriaLabel: {
    id: 'authoring.editorfooter.cancelButton.ariaLabel',
    defaultMessage: 'Discard changes and return to learning context',
    description: 'Text for screen readers for the Cancel button',
  },
  cancelButtonLabel: {
    id: 'authoring.editorfooter.cancelButton.label',
    defaultMessage: 'Cancel',
    description: 'Text for the Cancel button',
  },
  saveButtonAriaLabel: {
    id: 'authoring.editorfooter.savebutton.ariaLabel',
    defaultMessage: 'Save changes and return to learning context',
    description: 'Text for screen readers for the Save button',
  },
  saveButtonLabel: {
    id: 'authoring.editorfooter.savebutton.label',
    defaultMessage: 'Save',
    description: 'Text for the Save button',
  },
});
export default messages;