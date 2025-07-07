import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  blockAltButtonEdit: {
    id: 'course-authoring.course-unit.xblock.button.edit.alt',
    defaultMessage: 'Редактировать',
    description: 'Текст кнопки редактирования xblock',
  },
  blockActionsDropdownAlt: {
    id: 'course-authoring.course-unit.xblock.button.actions.alt',
    defaultMessage: 'Действия',
    description: 'Альтернативный текст выпадающего меню xblock',
  },
  blockLabelButtonCopy: {
    id: 'course-authoring.course-unit.xblock.button.copy.label',
    defaultMessage: 'Копировать',
    description: 'Текст кнопки копирования xblock',
  },
  blockLabelButtonDuplicate: {
    id: 'course-authoring.course-unit.xblock.button.duplicate.label',
    defaultMessage: 'Дублировать',
    description: 'Текст кнопки дублирования xblock',
  },
  blockLabelButtonMove: {
    id: 'course-authoring.course-unit.xblock.button.move.label',
    defaultMessage: 'Переместить',
    description: 'Текст кнопки перемещения xblock',
  },
  blockLabelButtonCopyToClipboard: {
    id: 'course-authoring.course-unit.xblock.button.copyToClipboard.label',
    defaultMessage: 'Копировать в буфер обмена',
  },
  blockLabelButtonManageAccess: {
    id: 'course-authoring.course-unit.xblock.button.manageAccess.label',
    defaultMessage: 'Управлять доступом',
    description: 'Текст кнопки управления доступом xblock',
  },
  blockLabelButtonDelete: {
    id: 'course-authoring.course-unit.xblock.button.delete.label',
    defaultMessage: 'Удалить',
    description: 'Текст кнопки удаления xblock',
  },
  visibilityMessage: {
    id: 'course-authoring.course-unit.xblock.visibility.message',
    defaultMessage: 'Доступ ограничен для: {selectedGroupsLabel}',
    description: 'Текст доступности видимости группы для xblock',
  },
  validationSummary: {
    id: 'course-authoring.course-unit.xblock.validation.summary',
    defaultMessage: 'Этот компонент имеет проблемы с валидацией.',
    description: 'Текст предупреждения о проблемах с валидацией видимости',
  },
});

export default messages;
