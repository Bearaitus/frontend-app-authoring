import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  answerWidgetTitle: {
    id: 'authoring.answerwidget.answer.answerWidgetTitle',
    defaultMessage: 'Ответы',
    description: 'Основное название для виджета ответов',
  },
  answerHelperText: {
    id: 'authoring.problemEditor.answerWidget.answer.answerHelperText',
    defaultMessage: '{helperText}',
    description: 'Помощный текст, описывающий, как пользователь должен вводить ответы',
  },
  addAnswerButtonText: {
    id: 'authoring.answerwidget.answer.addAnswerButton',
    defaultMessage: 'Добавить ответ',
    description: 'Текст кнопки для добавления ответа',
  },
  answerTextboxPlaceholder: {
    id: 'authoring.answerwidget.answer.placeholder',
    defaultMessage: 'Введите ответ',
    description: 'Плейсхолдер для текстового поля ответа',
  },
  feedbackPlaceholder: {
    id: 'authoring.answerwidget.feedback.placeholder',
    defaultMessage: 'Сообщение обратной связи',
    description: 'Плейсхолдер для текста обратной связи',
  },
  feedbackToggleIconAltText: {
    id: 'authoring.answerwidget.feedback.icon.alt',
    defaultMessage: 'Переключить обратную связь',
    description: 'Альтернативный текст для иконки переключения обратной связи',
  },
  answerDeleteIconAltText: {
    id: 'authoring.answerwidget.answer.delete.icon.alt',
    defaultMessage: 'Удалить ответ',
    description: 'Альтернативный текст для иконки удаления ответа',
  },
  selectedFeedbackLabel: {
    id: 'authoring.answerwidget.feedback.selected.label',
    defaultMessage: 'Показать следующую обратную связь, когда {answerId} {boldunderline}:',
    description: 'Метка для обратной связи, если вариант выбран',
  },
  selectedFeedbackLabelBoldUnderlineText: {
    id: 'authoring.answerwidget.feedback.selected.label.boldunderline',
    defaultMessage: 'выбран',
    description: 'Жирный и подчеркнутый текст для обратной связи, если вариант выбран',
  },
  unSelectedFeedbackLabel: {
    id: 'authoring.answerwidget.feedback.unselected.label',
    defaultMessage: 'Показать следующую обратную связь, когда {answerId} {boldunderline}:',
    description: 'Метка для обратной связи, если вариант не выбран',
  },
  unSelectedFeedbackLabelBoldUnderlineText: {
    id: 'authoring.answerwidget.feedback.unselected.label.boldunderline',
    defaultMessage: 'не выбран',
    description: 'Жирный и подчеркнутый текст для обратной связи, если вариант не выбран',
  },
  addAnswerRangeButtonText: {
    id: 'authoring.answerwidget.answer.addAnswerRangeButton',
    defaultMessage: 'Добавить диапазон ответов',
    description: 'Текст кнопки для добавления диапазона ответов',
  },
  answerRangeTextboxPlaceholder: {
    id: 'authoring.answerwidget.answer.answerRangeTextboxPlaceholder',
    defaultMessage: 'Введите диапазон ответов',
    description: 'Текст для подсказки пользователя о добавлении диапазона ответов в текстовое поле',
  },
  answerRangeHelperText: {
    id: 'authoring.answerwidget.answer.answerRangeHelperText',
    defaultMessage: 'Введите минимальное и максимальное значения, разделенные запятой. Используйте скобку, чтобы включить число рядом с ним в диапазон, или круглую скобку, чтобы исключить число. Например, чтобы определить правильные ответы как 5, 6 или 7, но не 8, укажите [5,8).',
    description: 'Помощный текст, описывающий использование диапазонов ответов',
  },
});

export default messages;
