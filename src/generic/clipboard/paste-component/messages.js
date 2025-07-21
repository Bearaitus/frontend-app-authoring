import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  popoverContentText: {
    id: 'course-authoring.generic.paste-component.popover.content.text',
    defaultMessage: 'From:',
    description: 'Label for the popover content before the source course name of the copied content.',
  },
  pasteButtonWhatsInClipboardText: {
    id: 'course-authoring.generic.paste-component.paste-button.whats-in-clipboard.text',
    defaultMessage: 'What’s in my clipboard?',
    description: 'Text for the popover button with information about the copied content.',
  },
});
export default messages;