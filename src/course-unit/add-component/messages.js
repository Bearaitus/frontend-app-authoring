import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  title: {
    id: 'course-authoring.course-unit.add.component.title',
    defaultMessage: 'Добавить новый компонент',
  },
  buttonText: {
    id: 'course-authoring.course-unit.add.component.button.text',
    defaultMessage: 'Добавить компонент:',
  },
  modalBtnText: {
    id: 'course-authoring.course-unit.modal.button.text',
    defaultMessage: 'Выбрать',
  },
  modalContainerTitle: {
    id: 'course-authoring.course-unit.modal.container.title',
    defaultMessage: 'Добавить компонент {componentTitle}',
  },
  modalContainerCancelBtnText: {
    id: 'course-authoring.course-unit.modal.container.cancel.button.text',
    defaultMessage: 'Отмена',
  },
  modalComponentSupportLabelFullySupported: {
    id: 'course-authoring.course-unit.modal.component.support.label.fully-supported',
    defaultMessage: 'Полностью поддерживается',
    description: 'Метка для статуса поддержки расширенного типа задач с полной поддержкой платформы',
  },
  modalComponentSupportLabelProvisionallySupported: {
    id: 'course-authoring.course-unit.modal.component.support.label.provisionally-support',
    defaultMessage: 'Ограниченно поддерживается',
    description: 'Метка для статуса поддержки расширенного типа задач с ограниченной поддержкой платформы',
  },
  modalComponentSupportLabelNotSupported: {
    id: 'course-authoring.course-unit.modal.component.support.label.not-supported',
    defaultMessage: 'Не поддерживается',
    description: 'Метка для статуса поддержки расширенного типа задач без поддержки платформы',
  },
  modalComponentSupportTooltipFullySupported: {
    id: 'course-authoring.course-unit.modal.component.support.tooltip.fully-supported',
    defaultMessage: 'Полностью поддерживаемые инструменты и функции доступны на edX, полностью протестированы, '
      + 'имеют пользовательские интерфейсы, где применимо, и документированы в официальных руководствах edX, '
      + 'доступных на docs.edx.org.',
    description: 'Сообщение для подсказки статуса поддержки для модулей с полной поддержкой платформы',
  },
  modalComponentSupportTooltipNotSupported: {
    id: 'course-authoring.course-unit.modal.component.support.tooltip.not-supported',
    defaultMessage: 'Инструменты без поддержки не обслуживаются edX и могут быть устаревшими в будущем. '
      + 'Их не рекомендуется использовать в курсах из-за несоответствия одному или нескольким базовым требованиям, '
      + 'таким как тестирование, доступность, интернационализация и документация.',
    description: 'Сообщение для подсказки статуса поддержки для модулей, которые не поддерживаются',
  },
  modalComponentSupportTooltipProvisionallySupported: {
    id: 'course-authoring.course-unit.modal.component.support.tooltip.provisionally-support',
    defaultMessage: 'Ограниченно поддерживаемые инструменты могут не иметь необходимой функциональности для ваших курсов. '
      + 'edX не имеет контроля над качеством программного обеспечения или содержимым, которое можно предоставить с помощью этих инструментов. '
      + 'Тщательно протестируйте эти инструменты перед использованием их в вашем курсе, особенно в оценочных разделах. '
      + 'Полная документация может быть недоступна для ограниченно поддерживаемых инструментов или может быть доступна из источников, отличных от edX.',
    description: 'Сообщение для подсказки статуса поддержки для модулей с ограниченной поддержкой платформы',
  },
});

export default messages;
