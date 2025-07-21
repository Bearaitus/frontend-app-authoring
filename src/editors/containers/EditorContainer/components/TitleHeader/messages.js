import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  loading: {
    id: 'authoring.texteditor.title.loading',
    defaultMessage: 'Loading...',
    description: 'Message displayed while content is loading',
  },
  cancelChangesLabel: {
    id: 'authoring.texteditor.header.cancelChangesLabel',
    defaultMessage: 'Discard changes and return to learning',
    description: 'Text for screen readers for the return to learning context button icon',
  },
  editTitleLabel: {
    id: 'authoring.texteditor.header.editTitleLabel',
    defaultMessage: 'Edit Title',
    description: 'Text for screen readers for the block title edit button icon',
  },
  cancelTitleEdit: {
    id: 'authoring.texteditor.header.cancelTitleEdit',
    defaultMessage: 'Cancel',
    description: 'Text for screen readers for the block title edit cancel button icon',
  },
  saveTitleEdit: {
    id: 'authoring.texteditor.header.saveTitleEdit',
    defaultMessage: 'Save',
    description: 'Text for screen readers for the block title edit save button icon',
  },
});
export default messages;