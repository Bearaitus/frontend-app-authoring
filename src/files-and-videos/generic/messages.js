import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  rowStatusMessage: {
    id: 'course-authoring.files-and-upload.rowStatus.message',
    defaultMessage: 'Showing {fileCount} of {rowCount}',
    description: 'This message is shown to inform the user of the number of files being displayed',
  },
  apiStatusToastMessage: {
    id: 'course-authoring.files-and-upload.apiStatus.message',
    defaultMessage: '{actionType} {selectedRowCount} {selectedRowCount, plural, one {{fileType}} other {{fileType}s}}',
    description: 'This message is shown in a toast when an action is applied to files',
  },
  apiStatusAddingAction: {
    id: 'course-authoring.files-and-upload.apiStatus.addingAction.message',
    defaultMessage: 'Adding',
    description: 'This message is used in the toast when files are being added',
  },
  apiStatusDeletingAction: {
    id: 'course-authoring.files-and-upload.apiStatus.deletingAction.message',
    defaultMessage: 'Deleting',
    description: 'This message is used in the toast when files are being deleted',
  },
  apiStatusDownloadingAction: {
    id: 'course-authoring.files-and-upload.apiStatus.downloadingAction.message',
    defaultMessage: 'Downloading',
    description: 'This message is used in the toast when files are being downloaded',
  },
  fileSizeError: {
    id: 'course-authoring.files-and-upload.addFiles.error.fileSize',
    defaultMessage: 'Uploaded files must be 20MB or less. Please reduce the file size and try again.',
    description: 'This error message is shown when a user tries to upload a file larger than 20MB',
  },
  noResultsFoundMessage: {
    id: 'course-authoring.files-and-upload.table.noResultsFound.message',
    defaultMessage: 'No results found',
    description: 'This message is shown when no files are found by name',
  },
  addFilesButtonLabel: {
    id: 'course-authoring.files-and-upload.addFiles.button.label',
    defaultMessage: 'Add file',
    description: 'Label for the add file button, title changes depending on page',
  },
  actionsButtonLabel: {
    id: 'course-authoring.files-and-upload.action.button.label',
    defaultMessage: 'Actions',
    description: 'Label for the actions button',
  },
  errorAlertMessage: {
    id: 'course-authoring.files-and-upload.errorAlert.message',
    defaultMessage: '{message}',
    description: 'Wrapper message for the error alert',
  },
  transcriptionErrorMessage: {
    id: 'course-authoring.files-and-uploads.file-info.transcripts.error.alert',
    defaultMessage: 'Transcription failed: "{error}"',
    description: 'Error message for transcription in the info modal',
  },
  usageTitle: {
    id: 'course-authoring.files-and-uploads.file-info.usage.title',
    defaultMessage: 'Usage',
    description: 'Title for the usage section in the info modal',
  },
  usageLoadingMessage: {
    id: 'course-authoring.files-and-uploads.file-info.usage.loading.message',
    defaultMessage: 'Loading',
    description: 'Screen reader text while usage information is loading',
  },
  usageNotInUseMessage: {
    id: 'course-authoring.files-and-uploads.file-info.usage.notInUse.message',
    defaultMessage: 'Currently not in use',
    description: 'Message for the usage section when the file is not used in the course',
  },
  copyVideoIdTitle: {
    id: 'course-authoring.files-and-uploads.cardMenu.copyVideoIdTitle',
    defaultMessage: 'Copy Video ID',
    description: 'Label for the copy video ID button in the card menu',
  },
  copyStudioUrlTitle: {
    id: 'course-authoring.files-and-uploads.cardMenu.copyStudioUrlTitle',
    defaultMessage: 'Copy Studio URL',
    description: 'Label for the copy studio URL button in the card menu',
  },
  copyWebUrlTitle: {
    id: 'course-authoring.files-and-uploads.cardMenu.copyWebUrlTitle',
    defaultMessage: 'Copy Web URL',
    description: 'Label for the copy web URL button in the card menu',
  },
  downloadTitle: {
    id: 'course-authoring.files-and-uploads.cardMenu.downloadTitle',
    defaultMessage: 'Download',
    description: 'Label for the download button in the card menu',
  },
  lockMenuTitle: {
    id: 'course-authoring.files-and-uploads.cardMenu.lockTitle',
    defaultMessage: 'Lock',
    description: 'Label for the lock button in the card menu',
  },
  lockFileTooltipContent: {
    id: 'course-authoring.files-and-uploads.file-info.lockFile.tooltip.content',
    defaultMessage: `By default, anyone can access a file you upload if they know the web URL, even if they are not enrolled in your course.
      You can prevent external access to the file by locking it. When a file is locked, the web URL will only allow access to learners enrolled in and authenticated into your course.`,
    description: 'Tooltip message for the lock icon in the file table view',
  },
  unlockMenuTitle: {
    id: 'course-authoring.files-and-uploads.cardMenu.unlockTitle',
    defaultMessage: 'Unlock',
    description: 'Label for the unlock button in the card menu',
  },
  infoTitle: {
    id: 'course-authoring.files-and-uploads.cardMenu.infoTitle',
    defaultMessage: 'Info',
    description: 'Label for the info button in the card menu',
  },
  downloadEncodingsTitle: {
    id: 'course-authoring.files-and-uploads.cardMenu.downloadEncodingsTitle',
    defaultMessage: 'Download Encodings (.csv)',
    description: 'Label for the download encodings button in the action menu',
  },
  deleteTitle: {
    id: 'course-authoring.files-and-uploads.cardMenu.deleteTitle',
    defaultMessage: 'Delete',
    description: 'Label for the delete button in the card menu',
  },
  deleteConfirmationTitle: {
    id: 'course-authoring.files-and-uploads.deleteConfirmation.title',
    defaultMessage: 'Delete {fileNumber, plural, one {{fileName}} other {{fileNumber} {fileType}s}}',
    description: 'Title for the delete confirmation modal',
  },
  deleteConfirmationMessage: {
    id: 'course-authoring.files-and-uploads.deleteConfirmation.message',
    defaultMessage: `
      Are you sure you want to delete {fileNumber, plural, one {{fileName}} other {{fileNumber} {fileType}s}}?
      This action cannot be undone and may break your course if {fileNumber, plural, one {{fileType} is used} other {{fileType}s are used}}
      in course materials, advanced settings or in schedule and details.
    `,
    description: 'Message presented to the user listing the # of files they are attempting to delete in the delete confirmation modal',
  },
  deleteConfirmationUsageMessage: {
    id: 'course-authoring.files-and-uploads.deleteConfirmation.usage-message',
    defaultMessage: 'The following {fileNumber, plural, one {{fileType} is used} other {{fileType}s are used}} are in use with your course content. Consider updating the content before deleting.',
    description: 'Message listing where the files the user is attempting to delete are used in the course',
  },
  deleteFileButtonLabel: {
    id: 'course-authoring.files-and-uploads.deleteConfirmation.deleteFile.label',
    defaultMessage: 'Delete',
    description: 'Label for the delete button in the delete confirmation modal',
  },
  cancelButtonLabel: {
    id: 'course-authoring.files-and-uploads.cancelButton.label',
    defaultMessage: 'Cancel',
    description: 'Label for the cancel button in the modals',
  },
  sortButtonLabel: {
    id: 'course-authoring.files-and-uploads.sortButton.label',
    defaultMessage: 'Sort & Filter',
    description: 'Label for the button that opens the sort and filter modal',
  },
  sortModalTitleLabel: {
    id: 'course-authoring.files-and-uploads.sortModal.title',
    defaultMessage: 'Sort By',
    description: 'Title for the Sort By section in the sort and filter modal',
  },
  sortByNameAscending: {
    id: 'course-authoring.files-and-uploads.sortByNameAscendingButton.label',
    defaultMessage: 'Name (A-Z)',
    description: 'Label for the radio button to sort by name in ascending order in the sort and filter modal',
  },
  sortByNewest: {
    id: 'course-authoring.files-and-uploads.sortByNewestButton.label',
    defaultMessage: 'Newest',
    description: 'Label for the radio button to sort by date added in descending order in the sort and filter modal',
  },
  sortBySizeDescending: {
    id: 'course-authoring.files-and-uploads.sortBySizeDescendingButton.label',
    defaultMessage: 'File Size (Largest to Smallest)',
    description: 'Label for the radio button to sort by file size in descending order in the sort and filter modal',
  },
  sortByNameDescending: {
    id: 'course-authoring.files-and-uploads.sortByNameDescendingButton.label',
    defaultMessage: 'Name (Z-A)',
    description: 'Label for the radio button to sort by name in descending order in the sort and filter modal',
  },
  sortByOldest: {
    id: 'course-authoring.files-and-uploads.sortByOldestButton.label',
    defaultMessage: 'Oldest',
    description: 'Label for the radio button to sort by date added in ascending order in the sort and filter modal',
  },
  sortBySizeAscending: {
    id: 'course-authoring.files-and-uploads.sortBySizeAscendingButton.label',
    defaultMessage: 'File Size (Smallest to Largest)',
    description: 'Label for the radio button to sort by file size in ascending order in the sort and filter modal',
  },
  applySortButton: {
    id: 'course-authoring.files-and-uploads.applyySortButton.label',
    defaultMessage: 'Apply',
    description: 'Label for the button to apply the sort in the sort and filter modal',
  },
  failedLabel: {
    id: 'course-authoring.files-and-uploads.filter.failed.label',
    defaultMessage: 'Failed',
    description: 'Label for the failed filter button in the sort and filter modal',
  },
  uploadErrorAlertTitle: {
    id: 'course-authoring.files-and-uploads.error.upload.title',
    defaultMessage: 'Upload Error',
    description: 'Title for the upload error alert',
  },
});
export default messages;