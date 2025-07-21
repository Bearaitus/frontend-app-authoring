import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  configurationChangeConsequence: {
    id: 'authoring.discussions.configurationChangeConsequences',
    defaultMessage:
      'Users will lose access to any active or previous'
      + ' discussions in your course.',
    description:
      'Describes that as a result of the configuration change'
      + ' users will lose access to posts in the course.',
  },
  configureApp: {
    id: 'authoring.discussions.configure.app',
    defaultMessage: 'Configure {name}',
  },
  configure: {
    id: 'authoring.discussions.configure',
    defaultMessage: 'Configure Discussions',
  },
  ok: {
    id: 'authoring.discussions.ok',
    defaultMessage: 'OK',
    description: 'Button allowing the user to confirm the provider change.',
  },
  cancel: {
    id: 'authoring.discussions.cancel',
    defaultMessage: 'Cancel',
    description: 'Button allowing the user to return to the discussion provider configurations.',
  },
  confirm: {
    id: 'authoring.discussions.confirm',
    defaultMessage: 'Confirm',
    description: 'Button allowing the user to confirm the confirmation.',
  },
  confirmConfigurationChange: {
    id: 'authoring.discussions.confirmConfigurationChange',
    defaultMessage: 'Are you sure you want to change the discussion settings?',
    description: 'Asks the user if they really want to change the settings.',
  },
  confirmEnableDiscussionsLabel: {
    id: 'authoring.discussions.confirmEnableDiscussionsLabel',
    defaultMessage: 'Enable discussions on units in graded sub-sections?',
    description: 'Asks the user if they really want to enable discussions on units in graded sub-sections.',
  },
  cancelEnableDiscussionsLabel: {
    id: 'authoring.discussions.cancelEnableDiscussionsLabel',
    defaultMessage: 'Disable discussions on units in graded sub-sections?',
    description: 'Asks the user if they really want to disable discussions on units in graded sub-sections.',
  },
  confirmEnableDiscussions: {
    id: 'authoring.discussions.confirmEnableDiscussions',
    defaultMessage: 'Enabling this toggle will automatically enable discussion on all units in graded sub-sections that are not timed exams.',
    description: 'Asks the user if they really want to enable discussions on units in graded sub-sections.',
  },
  cancelEnableDiscussions: {
    id: 'authoring.discussions.cancelEnableDiscussions',
    defaultMessage: 'Disabling this toggle will automatically disable discussion on all units in graded sub-sections. Discussion topics containing at least one thread will be listed and available in the “Archive” section of the discussion page.',
    description: 'Asks the user if they really want to disable discussions on units in graded sub-sections.',
  },
  backButton: {
    id: 'authoring.discussions.backButton',
    defaultMessage: 'Back',
    description: 'Button allowing the user to return to the discussion application selection.',
  },
  saveButton: {
    id: 'authoring.discussions.saveButton',
    defaultMessage: 'Save',
    description: 'Button allowing the user to submit their discussion configuration.',
  },
  savingButton: {
    id: 'authoring.discussions.savingButton',
    defaultMessage: 'Saving',
    description: 'Button label while submitting the discussion configuration.',
  },
  savedButton: {
    id: 'authoring.discussions.savedButton',
    defaultMessage: 'Saved',
    description: 'Button label when the discussion configuration has been successfully submitted.',
  },
  // App names
  'appName-piazza': {
    id: 'authoring.discussions.appConfigForm.appName-piazza',
    defaultMessage: 'Piazza',
    description: 'Piazza application name.',
  },
  'appName-yellowdig': {
    id: 'authoring.discussions.appConfigForm.appName-yellowdig',
    defaultMessage: 'Yellowdig',
    description: 'Yellowdig application name.',
  },
  'appName-inscribe': {
    id: 'authoring.discussions.appConfigForm.appName-inscribe',
    defaultMessage: 'InScribe',
    description: 'Inscribe application name.',
  },
  'appName-discourse': {
    id: 'authoring.discussions.appConfigForm.appName-discourse',
    defaultMessage: 'Discourse',
    description: 'Discourse application name.',
  },
  'appName-ed-discuss': {
    id: 'authoring.discussions.appConfigForm.appName-ed-discuss',
    defaultMessage: 'Ed Discussion',
    description: 'Ed Discussion application name.',
  },
  'appName-legacy': {
    id: 'authoring.discussions.appConfigForm.appName-legacy',
    defaultMessage: 'edX',
    description: 'Legacy edX Discussions application name.',
  },
  'appName-openedx': {
    id: 'authoring.discussions.appConfigForm.appName-openedx',
    defaultMessage: 'edX (new)',
    description: 'New edX Discussions application name.',
  },
  divisionByGroup: {
    id: 'authoring.discussions.builtIn.divisionByGroup',
    defaultMessage: 'Cohorts',
  },
  divideByCohortsLabel: {
    id: 'authoring.discussions.builtIn.divideByCohorts.label',
    defaultMessage: 'Divide discussions by cohorts',
    description: 'Label for the toggle that enables dividing discussions by cohorts. allowDivisionByUnit, divideCourseWideTopics, divideGeneralTopic, and divideQuestionsForTAs are only used if this setting is set to true.',
  },
  divideByCohortsHelp: {
    id: 'authoring.discussions.builtIn.divideByCohorts.help',
    defaultMessage: 'Users will only be able to view and respond to discussions posted by members of their cohort.',
    description: 'Help information for the toggle that enables dividing discussions by cohorts.',
  },
  divideCourseTopicsByCohortsLabel: {
    id: 'authoring.discussions.builtIn.divideCourseTopicsByCohorts.label',
    defaultMessage: 'Divide course topics by cohorts',
    description: 'Label for the toggle that enables dividing course topics by cohorts.',
  },
  divideCourseTopicsByCohortsHelp: {
    id: 'authoring.discussions.builtIn.divideCourseTopicsByCohorts.help',
    defaultMessage: 'Select which of your general course topics you want to divide by cohort.',
    description: 'Help information asking the user to select which course topics to divide by cohorts.',
  },
  divideGeneralTopic: {
    id: 'authoring.discussions.builtIn.divideGeneralTopic.label',
    defaultMessage: 'General',
  },
  divideQuestionsForTAsTopic: {
    id: 'authoring.discussions.builtIn.divideQuestionsForTAsTopic.label',
    defaultMessage: 'Questions for TAs',
  },
  cohortsEnabled: {
    id: 'authoring.discussions.builtIn.cohortsEnabled.label',
    defaultMessage: 'To configure these settings, enable cohorts on the',
    description: 'Label text informing the user about enabling cohorts',
  },
  instructorDashboard: {
    id: 'authoring.discussions.builtIn.instructorDashboard.label',
    defaultMessage: 'instructor dashboard',
    description: 'Label text for the instructor dashboard',
  },
  // In-context discussion fields
  visibilityInContext: {
    id: 'authoring.discussions.builtIn.visibilityInContext',
    defaultMessage: 'Visibility of discussions in context',
  },
  gradedUnitPagesLabel: {
    id: 'authoring.discussions.builtIn.gradedUnitPages.label',
    defaultMessage: 'Enable discussions on units in graded sub-sections',
  },
  gradedUnitPagesHelp: {
    id: 'authoring.discussions.builtIn.gradedUnitPages.help',
    defaultMessage: 'Allow learners to interact with discussions on all graded unit pages, excluding timed exams.',
  },
  groupInContextSubsectionLabel: {
    id: 'authoring.discussions.builtIn.groupInContextSubsection.label',
    defaultMessage: 'Group discussions in context at the sub-section level',
  },
  groupInContextSubsectionHelp: {
    id: 'authoring.discussions.builtIn.groupInContextSubsection.help',
    defaultMessage: 'Users will be able to view any post in the sub-section, regardless of the unit page they are viewing. While not recommended, if your course has short learning sequences or low engagement, grouping can increase participation.',
  },
  // Anonymous posting fields
  anonymousPosting: {
    id: 'authoring.discussions.builtIn.anonymousPosting',
    defaultMessage: 'Anonymous Posting',
  },
  allowAnonymousPostsLabel: {
    id: 'authoring.discussions.builtIn.allowAnonymous.label',
    defaultMessage: 'Allow anonymous posts in discussions',
  },
  allowAnonymousPostsHelp: {
    id: 'authoring.discussions.builtIn.allowAnonymous.help',
    defaultMessage: 'If enabled, users will be able to create posts that are anonymous to all users.',
  },
  allowAnonymousPostsPeersLabel: {
    id: 'authoring.discussions.builtIn.allowAnonymousPeers.label',
    defaultMessage: 'Allow anonymous posts in discussions for peers',
  },
  allowAnonymousPostsPeersHelp: {
    id: 'authoring.discussions.builtIn.allowAnonymousPeers.help',
    defaultMessage: 'Users will be able to post anonymously to other peers, however, all posts will be visible to course staff.',
  },
  // Reported Email Notifications
  reportedContentEmailNotifications: {
    id: 'authoring.discussions.builtIn.reportedContentEmailNotifications',
    defaultMessage: 'Notifications',
  },
  reportedContentEmailNotificationsLabel: {
    id: 'authoring.discussions.builtIn.reportedContentEmailNotifications.label',
    defaultMessage: 'Email notifications of reported content',
  },
  reportedContentEmailNotificationsHelp: {
    id: 'authoring.discussions.builtIn.reportedContentEmailNotifications.help',
    defaultMessage: 'Discussion administrators, moderators, instructors, and group instructors (only for their cohort) will receive an email notification when content is reported.',
  },
  // Discussion Topics
  discussionTopics: {
    id: 'authoring.discussions.discussionTopics',
    defaultMessage: 'Discussion Topics',
  },
  discussionTopicsLabel: {
    id: 'authoring.discussions.discussionTopics.label',
    defaultMessage: 'General discussion topics',
    description: 'Label for the section to add a new topic',
  },
  discussionTopicsHelp: {
    id: 'authoring.discussions.discussionTopics.help',
    defaultMessage: 'Discussions can include general topics that are not linked to the course structure. All courses have a default general topic.',
    description: 'Help information for adding new discussion topics in the general topic section.',
  },
  discussionTopicRequired: {
    id: 'authoring.discussions.discussionTopic.required',
    defaultMessage: 'Topic name is a required field',
    description: 'Informs the user that the topic name field is required and must have a value.',
  },
  discussionTopicNameAlreadyExist: {
    id: 'authoring.discussions.discussionTopic.alreadyExistError',
    defaultMessage: 'It appears that name is already taken',
    description: 'Informs the user that the discussion topic name is already in use and must be unique.',
  },
  addTopicButton: {
    id: 'authoring.discussions.addTopicButton',
    defaultMessage: 'Add Topic',
    description: 'Label for the button when adding a new discussion topic.',
  },
  deleteButton: {
    id: 'authoring.discussions.deleteButton',
    defaultMessage: 'Delete',
    description: 'Label for the button when deleting a discussion topic in the confirmation card.',
  },
  cancelButton: {
    id: 'authoring.discussions.cancelButton',
    defaultMessage: 'Cancel',
    description: 'Label for the button when canceling the deletion of a discussion topic.',
  },
  discussionTopicDeletionHelp: {
    id: 'authoring.discussions.discussionTopicDeletion.help',
    defaultMessage: 'edX recommends that you do not delete discussion topics after the course has started.',
    description: 'Help information for deleting a discussion topic from the discussion topics section.',
  },
  discussionTopicDeletionLabel: {
    id: 'authoring.discussions.discussionTopicDeletion.label',
    defaultMessage: 'Delete this topic?',
    description: 'Label for the confirmation card to delete a discussion topic, allowing the user to delete the topic.',
  },
  renameGeneralTopic: {
    id: 'authoring.discussions.builtIn.renameGeneralTopic.label',
    defaultMessage: 'Rename general topic',
    description: 'Label for the default topic, allowing the user to rename the general topic.',
  },
  generalTopicHelp: {
    id: 'authoring.discussions.generalTopicHelp.help',
    defaultMessage: 'This is the default discussion topic for your course.',
    description: 'Help information for the general discussion topic in the collapsible card.',
  },
  configureAdditionalTopic: {
    id: 'authoring.discussions.builtIn.configureAdditionalTopic.label',
    defaultMessage: 'Configure topic',
    description: 'Label for the additional topic, allowing the user to configure the additional topic.',
  },
  addTopicHelpText: {
    id: 'authoring.discussions.addTopicHelpText',
    defaultMessage: 'Choose a unique name for your topic',
    description: 'Help information for the input field when adding a discussion topic.',
  },
  // Restricted dates
  restrictedStartDateHelp: {
    id: 'authoring.restrictedDates.start.date',
    defaultMessage: 'Enter the start date, e.g., 12/10/2023',
  },
  restrictedStartTimeHelp: {
    id: 'authoring.restrictedDates.start.time',
    defaultMessage: 'Enter the start time, e.g., 09:00',
  },
  restrictedEndDateHelp: {
    id: 'authoring.restrictedDates.end.date',
    defaultMessage: 'Enter the end date, e.g., 12/17/2023',
  },
  restrictedEndTimeHelp: {
    id: 'authoring.restrictedDates.end.time',
    defaultMessage: 'Enter the end time, e.g., 17:00',
  },
  discussionRestrictionLabel: {
    id: 'authoring.discussions.builtIn.discussionRestriction.label',
    defaultMessage: 'Discussion restrictions',
  },
  discussionRestrictionHelp: {
    id: 'authoring.discussions.builtIn.discussionRestriction.help',
    defaultMessage: 'If enabled, users will not be able to post in discussions.',
  },
  discussionRestrictionDatesHelp: {
    id: 'authoring.discussions.builtIn.discussionRestrictionDates.help',
    defaultMessage: 'If added, users will not be able to post in discussions between these dates.',
  },
  addRestrictedDatesButton: {
    id: 'authoring.discussions.addRestrictedDatesButton',
    defaultMessage: 'Add restricted dates',
  },
  configureRestrictedDates: {
    id: 'authoring.discussions.builtIn.configureRestrictedDates.label',
    defaultMessage: 'Configure restricted date range',
  },
  activeRestrictedDatesDeletionLabel: {
    id: 'authoring.discussions.activeRestrictedDatesDeletion.label',
    defaultMessage: 'Delete active restricted dates?',
  },
  activeRestrictedDatesDeletionHelp: {
    id: 'authoring.discussions.activeRestrictedDatesDeletion.help',
    defaultMessage: 'These restricted dates are currently active. If deleted, users will be able to post to discussions during these dates. Are you sure you want to continue?',
  },
  completeRestrictedDatesDeletionHelp: {
    id: 'authoring.discussions.completeRestrictedDatesDeletion.help',
    defaultMessage: 'Are you sure you’d like to delete these restricted dates?',
  },
  restrictedDatesDeletionLabel: {
    id: 'authoring.discussions.restrictedDatesDeletion.label',
    defaultMessage: 'Delete restricted dates?',
  },
  restrictedDatesDeletionHelp: {
    id: 'authoring.discussions.restrictedDatesDeletion.help',
    defaultMessage: 'If deleted, users will be able to post to discussions during these dates.',
  },
  discussionRestrictionOffLabelHelpText: {
    id: 'authoring.discussions.discussionRestrictionOff.label',
    defaultMessage: 'If enabled, users will be able to post in discussions',
  },
  discussionRestrictionOnLabelHelpText: {
    id: 'authoring.discussions.discussionRestrictionOn.label',
    defaultMessage: 'If enabled, users will not be able to post in discussions',
  },
  discussionRestrictionScheduledLabelHelpText: {
    id: 'authoring.discussions.discussionRestrictionScheduled.label',
    defaultMessage: 'If added, users will not be able to post in discussions between these dates.',
  },
  enableRestrictedDatesConfirmationLabel: {
    id: 'authoring.discussions.enableRestrictedDatesConfirmation.label',
    defaultMessage: 'Enable restricted dates?',
  },
  enableRestrictedDatesConfirmationHelp: {
    id: 'authoring.discussions.enableRestrictedDatesConfirmation.help',
    defaultMessage: 'Users will not be able to post to discussions.',
  },
  deleteAltText: {
    id: 'authoring.topics.delete',
    defaultMessage: 'Delete topic',
  },
  expandAltText: {
    id: 'authoring.topics.expand',
    defaultMessage: 'Expand',
  },
  collapseAltText: {
    id: 'authoring.topics.collapse',
    defaultMessage: 'Collapse',
  },
  startDateLabel: {
    id: 'authoring.restrictedDates.start.date',
    defaultMessage: 'Start Date',
  },
  startTimeLabel: {
    id: 'authoring.restrictedDates.start.time',
    defaultMessage: 'Start Time (optional)',
  },
  endDateLabel: {
    id: 'authoring.restrictedDates.end.date',
    defaultMessage: 'End Date',
  },
  endTimeLabel: {
    id: 'authoring.restrictedDates.end.time',
    defaultMessage: 'End Time (optional)',
  },
});
export default messages;