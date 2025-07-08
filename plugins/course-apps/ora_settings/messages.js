import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  heading: {
    id: 'course-authoring.pages-resources.ora.heading',
    defaultMessage: 'Настройка гибкой системы оценки работ',
    description: 'Заголовок для заголовка модального диалога',
  },
  ORASettingsHelpLink: {
    id: 'course-authoring.pages-resources.ora.flex-peer-grading.link',
    defaultMessage: 'Узнать больше о настройках оценки открытых ответов',
    description: 'Описательный текст для гиперссылки на сайт документации',
  },
  enableFlexPeerGradeLabel: {
    id: 'course-authoring.pages-resources.ora.flex-peer-grading.label',
    defaultMessage: 'Гибкая система оценки работ',
    description: 'Метка для переключателя формы',
  },
  enableFlexPeerGradeHelp: {
    id: 'course-authoring.pages-resources.ora.flex-peer-grading.help',
    defaultMessage: 'Включить гибкую систему оценки работ для всех оценок открытых ответов в курсе с оценкой со стороны сверстников.',
    description: 'Текст помощи, описывающий, что происходит, когда переключатель включен',
  },
  enabledBadgeLabel: {
    id: 'course-authoring.pages-resources.ora.flex-peer-grading.enabled-badge.label',
    defaultMessage: 'Включено',
    description: 'Метка для значка, показывающего пользователям, что настройка включена',
  },
  cancelLabel: {
    id: 'course-authoring.pages-resources.ora.flex-peer-grading.cancel-button.label',
    defaultMessage: 'Отмена',
    description: 'Метка для кнопки, отменяющей изменения пользователя',
  },
  saveLabel: {
    id: 'course-authoring.pages-resources.ora.flex-peer-grading.save-button.label',
    defaultMessage: 'Сохранить',
    description: 'Метка для кнопки, сохраняющей изменения пользователя',
  },
  pendingSaveLabel: {
    id: 'course-authoring.pages-resources.ora.flex-peer-grading.pending-save-button.label',
    defaultMessage: 'Сохранение',
    description: 'Метка для кнопки, имеющей_pending запросы на сохранение API',
  },
  errorSavingTitle: {
    id: 'course-authoring.pages-resources.ora.flex-peer-grading.save-error.title',
    defaultMessage: 'Не удалось применить ваши изменения.',
  },
  errorSavingMessage: {
    id: 'course-authoring.pages-resources.ora.flex-peer-grading.save-error.message',
    defaultMessage: 'Пожалуйста, проверьте ваши записи и попробуйте еще раз.',
  },
});

export default messages;
