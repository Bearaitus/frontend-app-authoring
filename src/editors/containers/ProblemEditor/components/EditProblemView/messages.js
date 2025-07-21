import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  saveWarningModalCancelButtonLabel: {
    id: 'authoring.problemEditor.editProblemView.saveWarningModal.cancelButton.label',
    defaultMessage: 'Cancel',
    description: 'Text for the cancel button in the save warning modal',
  },
  saveWarningModalSaveButtonLabel: {
    id: 'authoring.problemEditor.editProblemView.saveWarningModal.saveButton.label',
    defaultMessage: 'OK',
    description: 'Text for the save button in the save warning modal',
  },
  saveWarningModalBodyQuestion: {
    id: 'authoring.problemEditor.editProblemView.saveWarningModal.body.question',
    defaultMessage: 'Are you sure you want to exit the editor?',
    description: 'Question in the body of the save warning modal',
  },
  noAnswerTitle: {
    id: 'authoring.problemEditor.editProblemView.saveWarningModal.noAnswer.title',
    defaultMessage: 'No Answer Provided',
    description: 'Title of the modal for no answer provided',
  },
  noAnswerBodyExplanation: {
    id: 'authoring.problemEditor.editProblemView.saveWarningModal.noAnswer.body.explanation',
    defaultMessage: 'A correct answer was not provided.',
    description: 'Explanation in the body of the modal for no answer provided',
  },
  olxSettingDiscrepancyTitle: {
    id: 'authoring.problemEditor.editProblemView.saveWarningModal.olxSettingDiscrepancy.title',
    defaultMessage: 'OLX Setting Discrepancy',
    description: 'Title of the modal for setting discrepancy',
  },
  olxSettingDiscrepancyBodyExplanation: {
    id: 'authoring.problemEditor.editProblemView.saveWarningModal.olxSettingDiscrepancy.body.explanation',
    defaultMessage: `A discrepancy was found between the settings defined in the problem OLX tag and the settings selected in the sidebar. The settings defined in the problem OLX tag will be saved, and the corresponding values in the sidebar will be discarded.`,
    description: 'Explanation in the body of the modal for setting discrepancy',
  },
});
export default messages;