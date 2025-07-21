import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  hasConflictingErrorsTitle: {
    id: 'course-authoring.course-unit.paste-notification.has-conflicting-errors.title',
    defaultMessage: 'Files Need Manual Updates',
    description: 'Title for the notification indicating that files need to be manually updated due to a paste conflict.',
  },
  hasConflictingErrorsDescription: {
    id: 'course-authoring.course-unit.paste-notification.has-conflicting-errors.description',
    defaultMessage: 'The following files need to be manually updated for components to function properly:',
    description: 'Description of the notification indicating which files need to be manually updated due to a paste conflict.',
  },
  hasConflictingErrorsButtonText: {
    id: 'course-authoring.course-unit.paste-notification.has-conflicting-errors.button.text',
    defaultMessage: 'Upload Files',
    description: 'Button text offering users to upload files to resolve the paste conflict.',
  },
  hasErrorsTitle: {
    id: 'course-authoring.course-unit.paste-notification.has-errors.title',
    defaultMessage: 'Some Errors Occurred',
    description: 'Title for the notification indicating that some errors occurred, likely related to file conflicts.',
  },
  hasErrorsDescription: {
    id: 'course-authoring.course-unit.paste-notification.has-errors.description',
    defaultMessage: 'The following required files failed to be added to the course:',
    description: 'Description of the notification indicating which required files failed to be added to the course due to errors.',
  },
  hasNewFilesTitle: {
    id: 'course-authoring.course-unit.paste-notification.has-new-files.title',
    defaultMessage: 'New File(s) Added to Files & Uploads',
    description: 'Title for the notification indicating that new files were added to the Files & Uploads section.',
  },
  hasNewFilesDescription: {
    id: 'course-authoring.course-unit.paste-notification.has-new-files.description',
    defaultMessage: 'The following required files were imported into this course:',
    description: 'Description of the notification indicating which required files were imported into the course.',
  },
  hasNewFilesButtonText: {
    id: 'course-authoring.course-unit.paste-notification.has-new-files.button.text',
    defaultMessage: 'View Files',
    description: 'Button text offering users to view the new files imported into the course.',
  },
});
export default messages;