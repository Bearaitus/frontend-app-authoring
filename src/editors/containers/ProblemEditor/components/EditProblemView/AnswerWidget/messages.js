import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  answerWidgetTitle: {
    id: 'authoring.answerwidget.answer.answerWidgetTitle',
    defaultMessage: 'Answers',
    description: 'Main title for the answer widget',
  },
  answerHelperText: {
    id: 'authoring.problemEditor.answerWidget.answer.answerHelperText',
    defaultMessage: '{helperText}',
    description: 'Helper text describing how the user should enter answers',
  },
  addAnswerButtonText: {
    id: 'authoring.answerwidget.answer.addAnswerButton',
    defaultMessage: 'Add Answer',
    description: 'Text for the button to add an answer',
  },
  answerTextboxPlaceholder: {
    id: 'authoring.answerwidget.answer.placeholder',
    defaultMessage: 'Enter answer',
    description: 'Placeholder for the answer textbox',
  },
  feedbackPlaceholder: {
    id: 'authoring.answerwidget.feedback.placeholder',
    defaultMessage: 'Feedback Message',
    description: 'Placeholder for the feedback text',
  },
  feedbackToggleIconAltText: {
    id: 'authoring.answerwidget.feedback.icon.alt',
    defaultMessage: 'Toggle Feedback',
    description: 'Alt text for the feedback toggle icon',
  },
  answerDeleteIconAltText: {
    id: 'authoring.answerwidget.answer.delete.icon.alt',
    defaultMessage: 'Delete Answer',
    description: 'Alt text for the delete answer icon',
  },
  selectedFeedbackLabel: {
    id: 'authoring.answerwidget.feedback.selected.label',
    defaultMessage: 'Show following feedback when {answerId} {boldunderline}:',
    description: 'Label for feedback if the variant is selected',
  },
  selectedFeedbackLabelBoldUnderlineText: {
    id: 'authoring.answerwidget.feedback.selected.label.boldunderline',
    defaultMessage: 'is selected',
    description: 'Bold and underlined text for feedback if the variant is selected',
  },
  unSelectedFeedbackLabel: {
    id: 'authoring.answerwidget.feedback.unselected.label',
    defaultMessage: 'Show following feedback when {answerId} {boldunderline}:',
    description: 'Label for feedback if the variant is not selected',
  },
  unSelectedFeedbackLabelBoldUnderlineText: {
    id: 'authoring.answerwidget.feedback.unselected.label.boldunderline',
    defaultMessage: 'is not selected',
    description: 'Bold and underlined text for feedback if the variant is not selected',
  },
  addAnswerRangeButtonText: {
    id: 'authoring.answerwidget.answer.addAnswerRangeButton',
    defaultMessage: 'Add Answer Range',
    description: 'Text for the button to add an answer range',
  },
  answerRangeTextboxPlaceholder: {
    id: 'authoring.answerwidget.answer.answerRangeTextboxPlaceholder',
    defaultMessage: 'Enter answer range',
    description: 'Text to prompt user to add a range of answers in the textbox',
  },
  answerRangeHelperText: {
    id: 'authoring.answerwidget.answer.answerRangeHelperText',
    defaultMessage: 'Enter the minimum and maximum values separated by a comma. Use a bracket to include the number next to it in the range, or a parenthesis to exclude the number. For example, to define correct answers as 5, 6, or 7, but not 8, enter [5,8).',
    description: 'Helper text describing how to use answer ranges',
  },
});
export default messages;