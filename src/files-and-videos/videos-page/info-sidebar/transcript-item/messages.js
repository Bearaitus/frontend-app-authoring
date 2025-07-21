import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  fileSizeError: {
    id: 'course-authoriong.video-uploads.file-info.transcript.error.fileSizeError',
    defaultMessage: 'The transcript file size exceeds the maximum allowed. Please try again.',
    description: 'Message displayed to the user when the transcript file size is too large',
  },
  deleteTranscript: {
    id: 'course-authoriong.video-uploads.file-info.transcript.deleteTranscript',
    defaultMessage: 'Delete',
    description: 'Message displayed to the user for the delete transcript action',
  },
  replaceTranscript: {
    id: 'course-authoriong.video-uploads.file-info.transcript.replaceTranscript',
    defaultMessage: 'Replace',
    description: 'Message displayed to the user for the replace transcript action',
  },
  downloadTranscript: {
    id: 'course-authoriong.video-uploads.file-info.transcript.downloadTranscript',
    defaultMessage: 'Download',
    description: 'Message displayed to the user for the download transcript action',
  },
  languageSelectPlaceholder: {
    id: 'course-authoriong.video-uploads.file-info.transcripts.languageSelectPlaceholder',
    defaultMessage: 'Select Language',
    description: 'Placeholder for the dropdown which allows users to set the language associated with the transcript',
  },
  cancelDeleteLabel: {
    id: 'course-authoriong.video-uploads.file-info.transcripts.cancelDeleteLabel',
    defaultMessage: 'Cancel',
    description: 'Label for the button that allows users to stop the transcript delete process',
  },
  confirmDeleteLabel: {
    id: 'course-authoriong.video-uploads.file-info.transcripts.confirmDeleteLabel',
    defaultMessage: 'Delete',
    description: 'Label for the button that allows users to confirm the transcript delete process',
  },
  deleteConfirmationMessage: {
    id: 'course-authoriong.video-uploads.file-info.transcripts.deleteConfirmationMessage',
    defaultMessage: 'Are you sure you want to delete this transcript?',
    description: 'Alert which allows users to choose the next step in the transcript deletion process',
  },
  deleteConfirmationHeader: {
    id: 'course-authoriong.video-uploads.file-info.transcripts.deleteConfirmationTitle',
    defaultMessage: 'Delete this transcript?',
    description: 'Header for the alert which allows users to choose the next step in the transcript deletion process',
  },
});
export default messages;