import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  popoverContentText: {
    id: 'course-authoring.generic.paste-component.popover.content.text',
    defaultMessage: 'Из:',
    description: 'Метка содержимого поповера перед именем курса-источника скопированного контента.',
  },
  pasteButtonWhatsInClipboardText: {
    id: 'course-authoring.generic.paste-component.paste-button.whats-in-clipboard.text',
    defaultMessage: 'Что в моем буфере обмена?',
    description: 'Текст кнопки-поповера с информацией о скопированном контенте.',
  },
});

export default messages;
