import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  title: {
    id: 'authoring.videoeditor.transcripts.title',
    defaultMessage: 'Transcripts',
    description: 'Title for the transcripts widget',
  },
  uploadButtonLabel: {
    id: 'authoring.videoeditor.transcripts.upload.label',
    defaultMessage: 'Add Transcript',
    description: 'Label for the upload button',
  },
  addFirstTranscript: {
    id: 'authoring.videoeditor.transcripts.upload.firstTranscriptMessage',
    defaultMessage: 'Add video transcripts (.srt files only) to improve accessibility.',
    description: 'Message for adding the first transcript',
  },
  allowDownloadCheckboxLabel: {
    id: 'authoring.videoeditor.transcripts.allowDownloadCheckboxLabel',
    defaultMessage: 'Allow transcript download',
    description: 'Label for the allow transcript download checkbox',
  },
  showByDefaultCheckboxLabel: {
    id: 'authoring.videoeditor.transcripts.upload.showByDefaultCheckboxLabel',
    defaultMessage: 'Show transcript in video player by default',
    description: 'Label for the show by default checkbox',
  },
  tooltipMessage: {
    id: 'authoring.videoeditor.transcripts.upload.allowDownloadTooltipMessage',
    defaultMessage: 'Users will see a download link for the transcript below the video.',
    description: 'Message for the show by default checkbox',
  },
  transcriptTypeError: {
    id: 'authoring.videoeditor.transcript.error.transcriptTypeError',
    defaultMessage: 'Only SRT files can be uploaded',
    description: 'Message displayed to the user when uploading a different file type',
  },
  uploadTranscriptError: {
    id: 'authoring.videoeditor.transcript.error.uploadTranscriptError',
    defaultMessage: 'Failed to upload transcript. Please try again.',
    description: 'Message displayed to the user when the transcript upload fails',
  },
  fileSizeError: {
    id: 'authoring.videoeditor.transcript.error.fileSizeError',
    defaultMessage: 'Transcript file size exceeds the maximum allowed. Please try again.',
    description: 'Message displayed to the user when the transcript file size is too large',
  },
  deleteTranscript: {
    id: 'authoring.videoeditor.transcript.deleteTranscript',
    defaultMessage: 'Delete',
    description: 'Message displayed to the user for the delete transcript action',
  },
  deleteTranscriptError: {
    id: 'authoring.videoeditor.transcript.error.deleteTranscriptError',
    defaultMessage: 'Failed to delete transcript. Please try again.',
    description: 'Message displayed to the user when the transcript deletion fails',
  },
  replaceTranscript: {
    id: 'authoring.videoeditor.transcript.replaceTranscript',
    defaultMessage: 'Replace',
    description: 'Message displayed to the user for the replace transcript action',
  },
  downloadTranscript: {
    id: 'authoring.videoeditor.transcript.downloadTranscript',
    defaultMessage: 'Download',
    description: 'Message displayed to the user for the download transcript action',
  },
  languageSelectLabel: {
    id: 'authoring.videoeditor.transcripts.languageSelectLabel',
    defaultMessage: 'Languages',
    description: 'Label for the dropdown that allows users to set the language associated with the transcript',
  },
  languageSelectPlaceholder: {
    id: 'authoring.videoeditor.transcripts.languageSelectPlaceholder',
    defaultMessage: 'Select language',
    description: 'Placeholder for the dropdown that allows users to set the language associated with the transcript',
  },
  cancelDeleteLabel: {
    id: 'authoring.videoeditor.transcripts.cancelDeleteLabel',
    defaultMessage: 'Cancel',
    description: 'Label for the button to allow users to stop the transcript deletion process',
  },
  confirmDeleteLabel: {
    id: 'authoring.videoeditor.transcripts.confirmDeleteLabel',
    defaultMessage: 'Delete',
    description: 'Label for the button to allow users to confirm the transcript deletion process',
  },
  deleteConfirmationMessage: {
    id: 'authoring.videoeditor.transcripts.deleteConfirmationMessage',
    defaultMessage: 'Are you sure you want to delete this transcript?',
    description: 'Prompt to allow users to choose next steps in the transcript deletion process',
  },
  deleteConfirmationHeader: {
    id: 'authoring.videoeditor.transcripts.deleteConfirmationTitle',
    defaultMessage: 'Delete this transcript?',
    description: 'Header for the prompt to allow users to choose next steps in the transcript deletion process',
  },
  fileTypeWarning: {
    id: 'authoring.videoeditor.transcripts.fileTypeWarning',
    defaultMessage: 'Only .srt files can be uploaded. Please choose a file ending in .srt to upload.',
    description: 'Message warning users to only upload files that are of type .srt',
  },
  importButtonLabel: {
    id: 'authoring.videoEditor.transcripts.importButton.label',
    defaultMessage: 'Import Transcript',
    description: 'Label for button to import transcript from Youtube',
  },
  importHeader: {
    id: 'authoring.videoEditor.transcripts.importCard.header',
    defaultMessage: 'Import Transcript from YouTube?',
    description: 'Header for the import transcript card',
  },
  importMessage: {
    id: 'authoring.videoEditor.transcrtipts.importCard.message',
    defaultMessage: 'We found a transcript for this video on YouTube.  Would you like to import it now?',
    description: 'Message for the import transcript card asking user if they want to import the transcript',
  },
});
export default messages;