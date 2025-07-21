import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  heading: {
    id: 'authoring.discussions.heading',
    defaultMessage: 'Select a discussion tool for this course',
  },
  supportedFeatures: {
    id: 'authoring.discussions.supportedFeatures',
    defaultMessage: 'Supported Features',
  },
  'supportedFeatureList-mobile-show': {
    id: 'authoring.discussions.supportedFeatureList-mobile-show',
    defaultMessage: 'Show Supported Features',
    description: 'This is used in mobile as the header for the supported features list when closed',
  },
  'supportedFeatureList-mobile-hide': {
    id: 'authoring.discussions.supportedFeatureList-mobile-hide',
    defaultMessage: 'Hide Supported Features',
    description: 'This is used in mobile as the header for the supported features list when open',
  },
  noApps: {
    id: 'authoring.discussions.noApps',
    defaultMessage: 'There are no discussion tool providers available for your course.',
    description: 'Message displayed when no discussion tool providers are available.',
  },
  nextButton: {
    id: 'authoring.discussions.nextButton',
    defaultMessage: 'Next',
    description: 'Button allowing the user to proceed to the second step of discussion configuration.',
  },
  appFullSupport: {
    id: 'authoring.discussions.appFullSupport',
    defaultMessage: 'Full Support',
    description: 'Label indicating the app supports the full set of possible discussion app features.',
  },
  appBasicSupport: {
    id: 'authoring.discussions.appBasicSupport',
    defaultMessage: 'Basic Support',
    description: 'Label indicating the app supports only a subset of the possible discussion app features.',
  },
  selectApp: {
    id: 'authoring.discussions.selectApp',
    defaultMessage: 'Select {appName}',
    description: 'Label for the checkbox allowing the user to select the discussion app they wish to configure.',
  },
  // Legacy
  'appName-legacy': {
    id: 'authoring.discussions.appList.appName-legacy',
    defaultMessage: 'edX',
    description: 'Name of the legacy edX Discussions app.',
  },
  'appDescription-legacy': {
    id: 'authoring.discussions.appList.appDescription-legacy',
    defaultMessage: 'Start conversations with fellow learners, ask questions, and interact with others on the course.',
    description: 'Description of the legacy edX Discussions app.',
  },
  // New provider
  'appName-openedx': {
    id: 'authoring.discussions.appList.appName-openedx',
    defaultMessage: 'edX',
    description: 'Name of the new edX Discussions app.',
  },
  'appDescription-openedx': {
    id: 'authoring.discussions.appList.appDescription-openedx',
    defaultMessage: 'Enable engagement in discussions alongside course content.',
    description: 'Description of the new edX Discussions app.',
  },
  // Piazza
  'appName-piazza': {
    id: 'authoring.discussions.appList.appName-piazza',
    defaultMessage: 'Piazza',
    description: 'Name of the Piazza app.',
  },
  'appDescription-piazza': {
    id: 'authoring.discussions.appList.appDescription-piazza',
    defaultMessage: 'Piazza is designed to connect students, TAs and professors so every student gets the help they need.',
    description: 'Description of the Piazza app.',
  },
  'appDescription-yellowdig': {
    id: 'authoring.discussions.appList.appDescription-yellowdig',
    defaultMessage: 'Yellowdig provides educators with a gamified digital solution to drive student engagement by creating learning communities for any course format.',
    description: 'Description of the Yellowdig app.',
  },
  'appDescription-inscribe': {
    id: 'authoring.discussions.appList.appDescription-inscribe',
    defaultMessage: 'InScribe leverages the power of community and AI to connect people with the answers, resources, and people they need to succeed.',
    description: 'Description of the InScribe app.',
  },
  'appDescription-discourse': {
    id: 'authoring.discussions.appList.appDescription-discourse',
    defaultMessage: 'Discourse is modern forum software for your community. Use it as a mailing list, discussion forum, long-form chat, and more!',
    description: 'Description of the Discourse app.',
  },
  'appDescription-ed-discuss': {
    id: 'authoring.discussions.appList.appDescription-ed-discus',
    defaultMessage: 'Ed Discussion helps scale office hours in a beautiful, intuitive interface. Questions reach and benefit the whole class. Less email, more time saved.',
    description: 'Description of the Ed Discuss app.',
  },
  // Features
  'featureName-discussion-page': {
    id: 'authoring.discussions.featureName-discussion-page',
    defaultMessage: 'Discussion Page',
    description: 'Name of discussion feature.',
  },
  'featureName-embedded-course-sections': {
    id: 'authoring.discussions.featureName-embedded-course-sections',
    defaultMessage: 'Embedded Course Sections',
    description: 'Name of discussion feature.',
  },
  'featureName-advanced-in-context-discussion': {
    id: 'authoring.discussions.featureName-advanced-in-context-discussion',
    defaultMessage: 'Advanced In-Context Discussion',
    description: 'Name of discussion feature.',
  },
  'featureName-anonymous-posting': {
    id: 'authoring.discussions.featureName-anonymous-posting',
    defaultMessage: 'Anonymous Posting',
    description: 'Name of discussion feature.',
  },
  'featureName-automatic-learner-enrollment': {
    id: 'authoring.discussions.featureName-automatic-learner-enrollment',
    defaultMessage: 'Automatic Learner Enrollment',
    description: 'Name of discussion feature.',
  },
  'featureName-blackout-discussion-dates': {
    id: 'authoring.discussions.featureName-blackout-discussion-dates',
    defaultMessage: 'Blackout Discussion Dates',
    description: 'Name of discussion feature.',
  },
  'featureName-community-ta-support': {
    id: 'authoring.discussions.featureName-community-ta-support',
    defaultMessage: 'Community TA Support',
    description: 'Name of discussion feature.',
  },
  'featureName-course-cohort-support': {
    id: 'authoring.discussions.featureName-course-cohort-support',
    defaultMessage: 'Course Cohort Support',
    description: 'Name of discussion feature.',
  },
  'featureName-direct-messages-from-instructors': {
    id: 'authoring.discussions.featureName-direct-messages-from-instructors',
    defaultMessage: 'Direct Messages from Instructors',
    description: 'Name of discussion feature.',
  },
  'featureName-discussion-content-prompts': {
    id: 'authoring.discussions.featureName-discussion-content-prompts',
    defaultMessage: 'Discussion Content Prompts',
    description: 'Name of discussion feature.',
  },
  'featureName-email-notifications': {
    id: 'authoring.discussions.featureName-email-notifications',
    defaultMessage: 'Email Notifications',
    description: 'Name of discussion feature.',
  },
  'featureName-graded-discussions': {
    id: 'authoring.discussions.featureName-graded-discussions',
    defaultMessage: 'Graded Discussions',
    description: 'Name of discussion feature.',
  },
  'featureName-in-platform-notifications': {
    id: 'authoring.discussions.featureName-in-platform-notifications',
    defaultMessage: 'In-Platform Notifications',
    description: 'Name of discussion feature.',
  },
  'featureName-internationalization-support': {
    id: 'authoring.discussions.featureName-internationalization-support',
    defaultMessage: 'Internationalization Support',
    description: 'Name of discussion feature.',
  },
  'featureName-lti-advanced-sharing-mode': {
    id: 'authoring.discussions.featureName-lti-advanced-sharing-mode',
    defaultMessage: 'LTI Advanced Sharing Mode',
    description: 'Name of discussion feature.',
  },
  'featureName-basic-configuration': {
    id: 'authoring.discussions.featureName-basic-configuration',
    defaultMessage: 'Basic Configuration',
    description: 'Name of discussion feature.',
  },
  'featureName-primary-discussion-app-experience': {
    id: 'authoring.discussions.featureName-primary-discussion-app-experience',
    defaultMessage: 'Primary Discussion App Experience',
    description: 'Name of discussion feature.',
  },
  'featureName-question-discussion-support': {
    id: 'authoring.discussions.featureName-question-discussion-support',
    defaultMessage: 'Question Discussion Support',
    description: 'Name of discussion feature.',
  },
  'featureName-report/flag-content-to-moderators': {
    id: 'authoring.discussions.featureName-report/flag-content-to-moderators',
    defaultMessage: 'Report/Flag Content to Moderators',
    description: 'Name of discussion feature.',
  },
  'featureName-research-data-events': {
    id: 'authoring.discussions.featureName-research-data-events',
    defaultMessage: 'Research Data Events',
    description: 'Name of discussion feature.',
  },
  'featureName-simplified-in-context-discussion': {
    id: 'authoring.discussions.featureName-simplified-in-context-discussion',
    defaultMessage: 'Simplified In-Context Discussion',
    description: 'Name of discussion feature.',
  },
  'featureName-user-mentions': {
    id: 'authoring.discussions.featureName-user-mentions',
    defaultMessage: 'User Mentions',
    description: 'Name of discussion feature.',
  },
  'featureName-wcag-2.1': {
    id: 'authoring.discussions.featureName-wcag-2.1',
    defaultMessage: 'WCAG 2.1 Support',
    description: 'Name of discussion feature.',
  },
  'featureName-wcag-2.0-support': {
    id: 'authoring.discussions.wcag-2.0-support',
    defaultMessage: 'WCAG 2.0 Support',
    description: 'Name of discussion feature.',
  },
  'featureType-basic': {
    id: 'authoring.discussions.basic-support',
    defaultMessage: 'Basic',
    description: 'Type of discussion feature.',
  },
  'featureType-partial': {
    id: 'authoring.discussions.partial-support',
    defaultMessage: 'Partial',
    description: 'Type of discussion feature.',
  },
  'featureType-full': {
    id: 'authoring.discussions.full-support',
    defaultMessage: 'Full',
    description: 'Type of discussion feature.',
  },
  'featureType-common': {
    id: 'authoring.discussions.common-support',
    defaultMessage: 'Common',
    description: 'Type of discussion feature.',
  },
  hideDiscussionTab: {
    id: 'authoring.discussions.hide-discussion-tab',
    defaultMessage: 'Hide Discussion Tab',
    description: 'Heading for the hide discussion tab message',
  },
  hideDiscussionTabTitle: {
    id: 'authoring.discussions.hide-tab-title',
    defaultMessage: 'Hide Discussion Tab?',
    description: 'Heading for the hide discussion tab message',
  },
  hideDiscussionTabMessage: {
    id: 'authoring.discussions.hide-tab-message',
    defaultMessage: 'The discussion tab will no longer be visible to learners in the LMS. Additionally, posting to forums will be disabled. Are you sure you want to continue?',
    description: 'Helper message for hiding the discussion tab',
  },
  hideDiscussionOkButton: {
    id: 'authoring.discussions.hide-ok-button',
    defaultMessage: 'OK',
    description: 'OK Button Title',
  },
  hideDiscussionCancelButton: {
    id: 'authoring.discussions.hide-cancel-button',
    defaultMessage: 'Cancel',
    description: 'Cancel Button Title',
  },
});
export default messages;