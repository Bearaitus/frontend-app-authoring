import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  settingsWidgetTitle: {
    id: 'authoring.problemeditor.settings.settingsWidgetTitle',
    defaultMessage: 'Settings',
    description: 'Settings Title',
  },
  showAdvanceSettingsButtonText: {
    id: 'authoring.problemeditor.settings.showAdvancedButton',
    defaultMessage: 'Show Advanced Settings',
    description: 'Text for the button to show advanced settings',
  },
  settingsDeleteIconAltText: {
    id: 'authoring.problemeditor.settings.delete.icon.alt',
    defaultMessage: 'Delete Answer',
    description: 'Alt text for the delete icon',
  },
  advancedSettingsLinkText: {
    id: 'authoring.problemeditor.settings.advancedSettingLink.text',
    defaultMessage: 'Set default in advanced settings',
    description: 'Text for link to advanced settings',
  },
  hintSettingTitle: {
    id: 'authoring.problemeditor.settings.hint.title',
    defaultMessage: 'Hint (will be immediately visible to the user)',
    description: 'Title for hint settings',
  },
  hintInputLabel: {
    id: 'authoring.problemeditor.settings.hint.inputLabel',
    defaultMessage: 'Hint',
    description: 'Label for hint input field',
  },
  addHintButtonText: {
    id: 'authoring.problemeditor.settings.hint.addHintButton',
    defaultMessage: 'Add Hint',
    description: 'Text for the button to add a hint',
  },
  noHintSummary: {
    id: 'authoring.problemeditor.settings.hint.noHintSummary',
    defaultMessage: 'None',
    description: 'Summary text for no hints',
  },
  hintSummary: {
    id: 'authoring.problemeditor.settings.hint.summary',
    defaultMessage: '{hint} {count, plural, =0 {} other {(+# more)}}',
    description: 'Summary text for hint settings',
  },
  resetSettingsTitle: {
    id: 'authoring.problemeditor.settings.reset.title',
    defaultMessage: 'Show Reset Option',
    description: 'Title for reset settings',
  },
  resetSettingsTrue: {
    id: 'authoring.problemeditor.settings.reset.true',
    defaultMessage: 'Yes',
    description: '“Yes” option for reset',
  },
  resetSettingsFalse: {
    id: 'authoring.problemeditor.settings.reset.false',
    defaultMessage: 'No',
    description: '“No” option for reset',
  },
  resetSettingText: {
    id: 'authoring.problemeditor.settings.reset.text',
    defaultMessage: 'Determines whether to show a reset button for the user to reset the answer, typically for practice or formative assessments.',
    description: 'Text for the reset settings',
  },
  scoringSettingsTitle: {
    id: 'authoring.problemeditor.settings.scoring.title',
    defaultMessage: 'Scoring',
    description: 'Title for scoring settings',
  },
  scoringAttemptsInputLabel: {
    id: 'authoring.problemeditor.settings.scoring.attempts.inputLabel',
    defaultMessage: 'Attempts',
    description: 'Label for attempts input field',
  },
  scoringWeightInputLabel: {
    id: 'authoring.problemeditor.settings.scoring.weight.inputLabel',
    defaultMessage: 'Points',
    description: 'Label for weight input field',
  },
  unlimitedAttemptsSummary: {
    id: 'authoring.problemeditor.settings.scoring.unlimited',
    defaultMessage: 'Unlimited attempts',
    description: 'Summary text for unlimited attempts',
  },
  attemptsSummary: {
    id: 'authoring.problemeditor.settings.scoring.attempts',
    defaultMessage: '{attempts, plural, =1 {# attempt} other {# attempts}}',
    description: 'Summary text for number of attempts',
  },
  unlimitedAttemptsCheckboxLabel: {
    id: 'authoring.problemeditor.settings.scoring.attempts.unlimitedCheckbox',
    defaultMessage: 'Unlimited attempts',
    description: 'Label for unlimited attempts checkbox',
  },
  weightSummary: {
    id: 'authoring.problemeditor.settings.scoring.weight',
    defaultMessage: '{weight, plural, =1 {1 point} other {# points}}',
    description: 'Summary text for scoring weight',
  },
  scoringSettingsLabel: {
    id: 'authoring.problemeditor.settings.scoring.label',
    defaultMessage: 'Specify the number of points and attempts for the answer.',
    description: 'Descriptive text for scoring settings',
  },
  attemptsHint: {
    id: 'authoring.problemeditor.settings.scoring.attempts.hint',
    defaultMessage: 'If this is set in the advanced settings, this input field will be blank',
    description: 'Summary text for scoring weight',
  },
  weightHint: {
    id: 'authoring.problemeditor.settings.scoring.weight.hint',
    defaultMessage: 'If not set, the question is worth 1 point',
    description: 'Summary text for scoring weight',
  },
  showAnswerSettingsTitle: {
    id: 'authoring.problemeditor.settings.showAnswer.title',
    defaultMessage: 'Show Answer',
    description: 'Title for show answer settings',
  },
  showAnswerAttemptsInputLabel: {
    id: 'authoring.problemeditor.settings.showAnswer.attempts.inputLabel',
    defaultMessage: 'Attempts',
    description: 'Label for attempts input field',
  },
  showAnswerSettingText: {
    id: 'authoring.problemeditor.settings.showAnswer.text',
    defaultMessage: 'Provide an explanation for the correct answer.',
    description: 'Text for show answer settings',
  },
  timerSettingsTitle: {
    id: 'authoring.problemeditor.settings.timer.title',
    defaultMessage: 'Time Between Attempts',
    description: 'Title for timer settings',
  },
  timerSummary: {
    id: 'authoring.problemeditor.settings.timer.summary',
    defaultMessage: '{time} seconds',
    description: 'Summary text for timer settings',
  },
  timerSettingText: {
    id: 'authoring.problemeditor.settings.timer.text',
    defaultMessage: 'Seconds the student must wait between submissions for a multi-attempt question.',
    description: 'Text for timer settings',
  },
  timerInputLabel: {
    id: 'authoring.problemeditor.settings.timer.inputLabel',
    defaultMessage: 'Seconds',
    description: 'Label for timer input field',
  },
  typeSettingTitle: {
    id: 'authoring.problemeditor.settings.type.title',
    defaultMessage: 'Type',
    description: 'Title for type settings',
  },
  SwitchButtonLabel: {
    id: 'authoring.problemeditor.settings.switchtoadvancededitor.label',
    defaultMessage: 'Switch to Advanced Editor',
    description: 'Button to switch to advanced mode editor',
  },
  ConfirmSwitchMessage: {
    id: 'authoring.problemeditor.settings.switchtoadvancededitor.ConfirmSwitchMessage',
    defaultMessage: 'If you use the advanced editor, this problem will be converted to OLX and you will not be able to return to the simple editor.',
    description: 'Message for confirming the switch to the advanced editor',
  },
  ConfirmSwitchMessageTitle: {
    id: 'authoring.problemeditor.settings.switchtoadvancededitor.ConfirmSwitchMessageTitle',
    defaultMessage: 'Convert to OLX?',
    description: 'Message for confirming the switch to the advanced editor',
  },
  ConfirmSwitchButtonLabel: {
    id: 'authoring.problemeditor.settings.switchtoadvancededitor.ConfirmSwitchButtonLabel',
    defaultMessage: 'Switch to Advanced Editor',
    description: 'Message for confirming the switch to the advanced editor',
  },
  explanationInputLabel: {
    id: 'authoring.problemeditor.settings.showAnswer.explanation.inputLabel',
    defaultMessage: 'Explanation',
    description: 'Label for explanation input field',
  },
  explanationSettingText: {
    id: 'authoring.problemeditor.settings.showAnswer.explanation.text',
    defaultMessage: 'Provide an explanation for the correct answer.',
    description: 'Text for show answer settings',
  },
});
export default messages;