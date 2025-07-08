import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  cancel: {
    id: 'course-authoring.pages-resources.app-settings-modal.button.cancel',
    defaultMessage: 'Отмена',
  },
  save: {
    id: 'course-authoring.pages-resources.app-settings-modal.button.save',
    defaultMessage: 'Сохранить',
  },
  saving: {
    id: 'course-authoring.pages-resources.app-settings-modal.button.saving',
    defaultMessage: 'Сохранение',
  },
  saved: {
    id: 'course-authoring.pages-resources.app-settings-modal.button.saved',
    defaultMessage: 'Сохранено',
  },
  retry: {
    id: 'course-authoring.pages-resources.app-settings-modal.button.retry',
    defaultMessage: 'Повторить',
  },
  enabled: {
    id: 'course-authoring.pages-resources.app-settings-modal.badge.enabled',
    defaultMessage: 'Включено',
  },
  disabled: {
    id: 'course-authoring.pages-resources.app-settings-modal.badge.disabled',
    defaultMessage: 'Выключено',
  },
  resetAllUnits: {
    id: 'course-authoring.pages-resources.app-settings-modal.reset-all-units',
    defaultMessage: 'Сбросить все блоки',
  },
  resetAllUnitsTooltipChecked: {
    id: 'course-authoring.pages-resources.app-settings-modal.reset-all-units-tooltip.checked',
    defaultMessage: 'Немедленно сбросить любые изменения на уровне блоков и включить "Включить сводки" для всех блоков.',
  },
  resetAllUnitsTooltipUnchecked: {
    id: 'course-authoring.pages-resources.app-settings-modal.reset-all-units-tooltip.unchecked',
    defaultMessage: 'Немедленно сбросить любые изменения на уровне блоков и выключить "Включить сводки" для всех блоков.',
  },
  reset: {
    id: 'course-authoring.pages-resources.app-settings-modal.reset',
    defaultMessage: 'Сбросить',
  },
  errorSavingTitle: {
    id: 'course-authoring.pages-resources.app-settings-modal.save-error.title',
    defaultMessage: 'Не удалось применить ваши изменения.',
  },
  errorSavingMessage: {
    id: 'course-authoring.pages-resources.app-settings-modal.save-error.message',
    defaultMessage: 'Пожалуйста, проверьте ваши записи и попробуйте еще раз.',
  },
});

export default messages;
