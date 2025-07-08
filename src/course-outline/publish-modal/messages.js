import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  title: {
    id: 'course-authoring.course-outline.publish-modal.title',
    defaultMessage: 'Опубликовать {title}',
  },
  description: {
    id: 'course-authoring.course-outline.publish-modal.description',
    defaultMessage: 'Опубликовать все неопубликованные изменения для этого {category}?',
  },
  cancelButton: {
    id: 'course-authoring.course-outline.publish-modal.button.cancel',
    defaultMessage: 'Отмена',
  },
  publishButton: {
    id: 'course-authoring.course-outline.publish-modal.button.label',
    defaultMessage: 'Опубликовать',
  },
});

export default messages;
