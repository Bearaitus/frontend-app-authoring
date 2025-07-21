import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  configurationErrorTitle: {
    id: 'course-authoring.course-outline.page-alerts.configurationErrorTitle',
    defaultMessage: 'This course was created as a copy. Manual configuration is required.',
    description: 'Title of the configuration error in the course overview.',
  },
  configurationErrorText: {
    id: 'course-authoring.course-outline.page-alerts.configurationErrorText',
    defaultMessage: 'There is currently no visible course content and no enrolled learners. Ensure you have reviewed and reset all dates, including the course start date; configured the course team; checked for outdated material in course updates and other assets; and populated discussions and wikis.',
    description: 'Text of the configuration error in the course overview.',
  },
  discussionNotificationText: {
    id: 'course-authoring.course-outline.page-alerts.discussionNotificationText',
    defaultMessage: 'This course run is using an updated version of the {platformName} discussion forum. Discussion blocks will no longer be visible to learners to show the sidebar.',
    description: 'Text of the notification about the updated version of the discussion forum.',
  },
  discussionNotificationLearnMore: {
    id: 'course-authoring.course-outline.page-alerts.discussionNotificationLearnMore',
    defaultMessage: 'Learn more',
    description: '“Learn more” link in the notification about the updated version of the discussion forum.',
  },
  discussionNotificationFeedback: {
    id: 'course-authoring.course-outline.page-alerts.discussionNotificationFeedback',
    defaultMessage: 'Share feedback',
    description: '“Share feedback” link in the notification about the updated version of the discussion forum.',
  },
  deprecationWarningTitle: {
    id: 'course-authoring.course-outline.page-alerts.deprecationWarningTitle',
    defaultMessage: 'This course uses features that are no longer supported.',
    description: 'Title of the warning about deprecated features used in the course that are no longer supported.',
  },
  deprecationWarningBlocksText: {
    id: 'course-authoring.course-outline.page-alerts.deprecationWarningBlocksText',
    defaultMessage: 'You need to remove or replace the following components.',
    description: 'Text of the warning about deprecated components that need to be removed or replaced.',
  },
  deprecationWarningDeprecatedBlockText: {
    id: 'course-authoring.course-outline.page-alerts.deprecationWarningDeprecatedBlockText',
    defaultMessage: 'To avoid errors, {platformName} strongly recommends removing unsupported features from the course advanced settings. To do this, navigate to {hyperlink}, locate the “Advanced Module List” setting, and remove the following modules from the list.',
    description: 'Text of the warning about deprecated components and how to remove them.',
  },
  advancedSettingLinkText: {
    id: 'course-authoring.course-outline.page-alerts.advancedSettingLinkText',
    defaultMessage: 'Advanced Settings Page',
    description: 'Text of the link to the advanced settings page.',
  },
  deprecatedComponentName: {
    id: 'course-authoring.course-outline.page-alerts.deprecatedComponentName',
    defaultMessage: 'Deprecated Component',
    description: 'Default name of the deprecated component.',
  },
  proctoringErrorTitle: {
    id: 'course-authoring.course-outline.page-alerts.proctoringErrorTitle',
    defaultMessage: 'This course has proctoring settings that are incomplete or invalid.',
    description: 'Title of the proctoring settings error.',
  },
  proctoringErrorText: {
    id: 'course-authoring.course-outline.page-alerts.proctoringErrorText',
    defaultMessage: 'To update these settings, navigate to {hyperlink}.',
    description: 'Text of the proctoring settings error.',
  },
  proctoredSettingsLinkText: {
    id: 'course-authoring.course-outline.page-alerts.proctoredSettingsLinkText',
    defaultMessage: 'Proctoring Settings Page',
    description: 'Text of the link to the proctoring settings page.',
  },
  alertFailedGeneric: {
    id: 'course-authoring.course-outline.page-alert.generic-error.description',
    defaultMessage: 'Unable to {actionName} {type}. Please try again.',
    description: 'Generic error text.',
  },
  newFileAlertTitle: {
    id: 'course-authoring.course-outline.page-alert.paste-alert.new-files.title',
    defaultMessage: 'New {newFilesLen, plural, one {file} other {files}} added to Files.',
    description: 'Title of the notification about adding new files.',
  },
  newFileAlertDesc: {
    id: 'course-authoring.course-outline.page-alert.paste-alert.new-files.description',
    defaultMessage: 'The following required {newFilesLen, plural, one {file} other {files}} have been imported into this course: {newFilesStr}',
    description: 'Text of the notification about adding new files.',
  },
  newFileAlertAction: {
    id: 'course-authoring.course-outline.page-alert.paste-alert.new-files.action',
    defaultMessage: 'View files',
    description: 'Text of the button to view the added files.',
  },
  errorFileAlertTitle: {
    id: 'course-authoring.course-outline.page-alert.paste-alert.error-files.title',
    defaultMessage: 'Some errors occurred',
    description: 'Title of the notification about errors when adding files.',
  },
  errorFileAlertDesc: {
    id: 'course-authoring.course-outline.page-alert.paste-alert.error-files.description',
    defaultMessage: 'The following required {errorFilesLen, plural, one {file} other {files}} could not be added to the course: {errorFilesStr}',
    description: 'Text of the notification about errors when adding files.',
  },
  conflictingFileAlertTitle: {
    id: 'course-authoring.course-outline.page-alert.paste-alert.conflicting-files.title',
    defaultMessage: 'You may need to update {conflictingFilesLen, plural, one {file} other {files}} manually',
    description: 'Title of the notification about conflicting files.',
  },
  conflictingFileAlertDesc: {
    id: 'course-authoring.course-outline.page-alert.paste-alert.new-conflicting.description',
    defaultMessage: 'The following {conflictingFilesLen, plural, one {file} other {files}} already exist in this course but do not match the version used by the component you pasted: {conflictingFilesStr}',
    description: 'Text of the notification about conflicting files.',
  },
  serverErrorAlert: {
    id: 'course-authoring.course-outline.page-alert.server-error.title',
    defaultMessage: 'Studio servers encountered an error',
    description: 'Title of the general server error.',
  },
  serverErrorAlertBody: {
    id: 'course-authoring.course-outline.page-alert.server-error.body',
    defaultMessage: 'An error occurred in Studio, and the page could not be loaded. Please try again in a few moments. We have logged the error, and our team is working to resolve it as quickly as possible.',
    description: 'Text of the general server error.',
  },
  networkErrorAlert: {
    id: 'course-authoring.course-outline.page-alert.network-error.title',
    defaultMessage: 'Network Error',
    description: 'Title of the general network error.',
  },
});
export default messages;