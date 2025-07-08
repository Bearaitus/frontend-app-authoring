import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  title: {
    id: 'course-authoring.course-outline.status-bar.modal.title',
    defaultMessage: 'Включить электронные письма с выделением курса',
  },
  description_1: {
    id: 'course-authoring.course-outline.status-bar.modal.description-1',
    defaultMessage: 'Когда вы включите электронные письма с выделением курса, учащиеся автоматически получат электронные сообщения для каждого раздела, который имеет выделение. Вы не сможете отключить выделение после начала отправки писем.',
  },
  description_2: {
    id: 'course-authoring.course-outline.status-bar.modal.description-2',
    defaultMessage: 'Вы уверены, что хотите включить электронные письма с выделением курса?',
  },
  link: {
    id: 'course-authoring.course-outline.status-bar.modal.link',
    defaultMessage: 'Узнать больше',
  },
  cancelButton: {
    id: 'course-authoring.course-outline.status-bar.modal.cancelButton',
    defaultMessage: 'Отмена',
  },
  submitButton: {
    id: 'course-authoring.course-outline.status-bar.modal.submitButton',
    defaultMessage: 'Включить',
  },
});

export default messages;
