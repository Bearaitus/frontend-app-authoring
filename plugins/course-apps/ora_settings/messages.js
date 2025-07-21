import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  heading: {
    id: 'course-authoring.pages-resources.ora.heading',
    defaultMessage: 'Configure Flexible Assessment of Work',
    description: 'Заголовок для заголовка модального диалога',
  },
  ORASettingsHelpLink: {
    id: 'course-authoring.pages-resources.ora.flex-peer-grading.link',
    defaultMessage: 'Learn more about open response assessment settings',
    description: 'Описательный текст для гиперссылки на сайт документации',
  },
  enableFlexPeerGradeLabel: {
    id: 'course-authoring.pages-resources.ora.flex-peer-grading.label',
    defaultMessage: 'Flexible Assessment of Work',
    description: 'Метка для переключателя формы',
  },
  enableFlexPeerGradeHelp: {
    id: 'course-authoring.pages-resources.ora.flex-peer-grading.help',
    defaultMessage: 'Enable flexible assessment of work for all open response assessments in the course with peer grading.',
    description: 'Текст помощи, описывающий, что происходит, когда переключатель включен',
  },
  enabledBadgeLabel: {
    id: 'course-authoring.pages-resources.ora.flex-peer-grading.enabled-badge.label',
    defaultMessage: 'Enabled',
    description: 'Метка для значка, показывающего пользователям, что настройка включена',
  },
  cancelLabel: {
    id: 'course-authoring.pages-resources.ora.flex-peer-grading.cancel-button.label',
    defaultMessage: 'Cancel',
    description: 'Метка для кнопки, отменяющей изменения пользователя',
  },
  saveLabel: {
    id: 'course-authoring.pages-resources.ora.flex-peer-grading.save-button.label',
    defaultMessage: 'Save',
    description: 'Метка для кнопки, сохраняющей изменения пользователя',
  },
  pendingSaveLabel: {
    id: 'course-authoring.pages-resources.ora.flex-peer-grading.pending-save-button.label',
    defaultMessage: 'Saving',
    description: 'Метка для кнопки, имеющей_pending запросы на сохранение API',
  },
  errorSavingTitle: {
    id: 'course-authoring.pages-resources.ora.flex-peer-grading.save-error.title',
    defaultMessage: 'Failed to apply your changes.',
  },
  errorSavingMessage: {
    id: 'course-authoring.pages-resources.ora.flex-peer-grading.save-error.message',
    defaultMessage: 'Please review your entries and try again.',
  },
});
export default messages;