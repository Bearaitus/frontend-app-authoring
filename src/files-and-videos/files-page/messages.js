import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  heading: {
    id: 'course-authoring.files-and-uploads.heading',
    defaultMessage: 'Files',
    description: 'Page heading',
  },
  thumbnailAltMessage: {
    id: 'course-authoring.files-and-uploads.thumbnail.alt',
    defaultMessage: 'File Preview: {displayName}',
    description: 'Alt text for thumbnail',
  },
  copyStudioUrlTitle: {
    id: 'course-authoring.files-and-uploads.file-info.copyStudioUrl.title',
    defaultMessage: 'Copy Studio URL',
    description: 'Label for the Copy Studio URL button in the info modal',
  },
  copyWebUrlTitle: {
    id: 'course-authoring.files-and-uploads.file-info.copyWebUrl.title',
    defaultMessage: 'Web URL',
    description: 'Label for the Web URL button in the info modal',
  },
  dateAddedTitle: {
    id: 'course-authoring.files-and-uploads.file-info.dateAdded.title',
    defaultMessage: 'Date Added',
    description: 'Heading for the date added section in the info modal',
  },
  fileSizeTitle: {
    id: 'course-authoring.files-and-uploads.file-info.fileSize.title',
    defaultMessage: 'File Size',
    description: 'Heading for the file size section in the info modal',
  },
  studioUrlTitle: {
    id: 'course-authoring.files-and-uploads.file-info.studioUrl.title',
    defaultMessage: 'Studio URL',
    description: 'Heading for the Studio URL section in the info modal',
  },
  webUrlTitle: {
    id: 'course-authoring.files-and-uploads.file-info.webUrl.title',
    defaultMessage: 'Web URL',
    description: 'Heading for the web URL section in the info modal',
  },
  lockFileTitle: {
    id: 'course-authoring.files-and-uploads.file-info.lockFile.title',
    defaultMessage: 'Lock File',
    description: 'Label for the Lock File checkbox in the info modal',
  },
  activeCheckboxLabel: {
    id: 'course-authoring.files-and-videos.file-info.activeCheckbox.label',
    defaultMessage: 'Active',
    description: 'Label for the Active checkbox in the sort and filter modal',
  },
  inactiveCheckboxLabel: {
    id: 'course-authoring.files-and-videos.file-info.inactiveCheckbox.label',
    defaultMessage: 'Inactive',
    description: 'Label for the Inactive checkbox in the sort and filter modal',
  },
  lockedCheckboxLabel: {
    id: 'course-authoring.files-and-videos.sort-and-filter.modal.filter.lockedCheckbox.label',
    defaultMessage: 'Locked',
    description: 'Label for the Locked checkbox in the sort and filter modal',
  },
  publicCheckboxLabel: {
    id: 'course-authoring.files-and-videos.sort-and-filter.modal.filter.publicCheckbox.label',
    defaultMessage: 'Public',
    description: 'Label for the Public checkbox in the sort and filter modal',
  },
  codeCheckboxLabel: {
    id: 'course-authoring.files-and-videos.sort-and-filter.modal.filter.codeCheckbox.label',
    defaultMessage: 'Code',
    description: 'Label for the Code checkbox in the sort and filter modal',
  },
  imageCheckboxLabel: {
    id: 'course-authoring.files-and-videos.sort-and-filter.modal.filter.imageCheckbox.label',
    defaultMessage: 'Images',
    description: 'Label for the Images checkbox in the sort and filter modal',
  },
  documentCheckboxLabel: {
    id: 'course-authoring.files-and-videos.sort-and-filter.modal.filter.documentCheckbox.label',
    defaultMessage: 'Documents',
    description: 'Label for the Documents checkbox in the sort and filter modal',
  },
  audioCheckboxLabel: {
    id: 'course-authoring.files-and-videos.sort-and-filter.modal.filter.audioCheckbox.label',
    defaultMessage: 'Audio',
    description: 'Label for the Audio checkbox in the sort and filter modal',
  },
  otherCheckboxLabel: {
    id: 'course-authoring.files-and-videos.sort-and-filter.modal.filter.otherCheckbox.label',
    defaultMessage: 'Other',
    description: 'Label for the Other checkbox in the sort and filter modal',
  },
  overwriteConfirmMessage: {
    id: 'course-authoring.files-and-videos.overwrite.modal.confirmation-message',
    defaultMessage: 'Some uploaded files already exist in this course. Do you want to overwrite the following files?',
    description: 'Message displayed in the modal when uploading files with existing names',
  },
  overwriteModalTitle: {
    id: 'course-authoring.files-and-videos.overwrite.modal.title',
    defaultMessage: 'Overwrite Files',
    description: 'Title of the modal for confirming file overwrites',
  },
  confirmOverwriteButtonLabel: {
    id: 'course-authoring.files-and-videos.overwrite.modal.overwrite-button.label',
    defaultMessage: 'Overwrite',
    description: 'Message displayed in the button for confirming file overwrites',
  },
  cancelOverwriteButtonLabel: {
    id: 'course-authoring.files-and-videos.overwrite.modal.cancel-button.label',
    defaultMessage: 'Cancel',
    description: 'Message displayed in the button for cancelling the upload',
  },
  lockFileTooltipContent: {
    id: 'course-authoring.files-and-uploads.file-info.lockFile.tooltip.content',
    defaultMessage: `By default, anyone can access a file you upload if they know the web URL, even if they are not enrolled in your course.
      You can prevent external access to the file by locking it. When a file is locked, the web URL will only allow access to learners enrolled in and authenticated into your course.`,
    description: 'Tooltip for the lock icon in the file table',
  },
});
export default messages;