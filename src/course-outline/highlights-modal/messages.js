import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  title: {
    id: 'course-authoring.course-outline.highlights-modal.title',
    defaultMessage: 'Highlight for {title}',
  },
  description: {
    id: 'course-authoring.course-outline.highlights-modal.description',
    defaultMessage: 'Enter 3-5 highlights to include in the email learners will receive for this section (limit 250 characters). For more information and an example email template, read our {documentation}.',
  },
  documentationLink: {
    id: 'course-authoring.course-outline.highlights-modal.documentation-link',
    defaultMessage: 'documentation',
  },
  highlight: {
    id: 'course-authoring.course-outline.highlights-modal.highlight',
    defaultMessage: 'Highlight {index}',
  },
  cancelButton: {
    id: 'course-authoring.course-outline.highlights-modal.button.cancel',
    defaultMessage: 'Cancel',
  },
  saveButton: {
    id: 'course-authoring.course-outline.highlights-modal.button.save',
    defaultMessage: 'Save',
  },
});
export default messages;