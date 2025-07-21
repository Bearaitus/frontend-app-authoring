import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  title: {
    id: 'course-authoring.course-outline.configure-modal.title',
    defaultMessage: '{title} Settings',
  },
  componentTitle: {
    id: 'course-authoring.course-outline.configure-modal.component.title',
    defaultMessage: 'Edit Access for: {title}',
    description: 'Title of the visibility modal for a block',
  },
  basicTabTitle: {
    id: 'course-authoring.course-outline.configure-modal.basic-tab.title',
    defaultMessage: 'Basic Settings',
  },
  notGradedTypeOption: {
    id: 'course-authoring.course-outline.configure-modal.basic-tab.notGradedTypeOption',
    defaultMessage: 'Not Graded',
  },
  releaseDateAndTime: {
    id: 'course-authoring.course-outline.configure-modal.basic-tab.release-date-and-time',
    defaultMessage: 'Release Date and Time',
  },
  releaseDate: {
    id: 'course-authoring.course-outline.configure-modal.basic-tab.release-date',
    defaultMessage: 'Release Date:',
  },
  releaseTimeUTC: {
    id: 'course-authoring.course-outline.configure-modal.basic-tab.release-time-UTC',
    defaultMessage: 'Release Time (UTC):',
  },
  visibilityTabTitle: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.title',
    defaultMessage: 'Visibility',
  },
  visibilitySectionTitle: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.section-visibility',
    defaultMessage: '{visibilityTitle} Visibility',
  },
  unitVisibility: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.unit-visibility',
    defaultMessage: 'Unit Visibility',
  },
  unitAccess: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.unit-access',
    defaultMessage: 'Access to Unit',
  },
  discussionEnabledSectionTitle: {
    id: 'course-authoring.course-outline.configure-modal.discussion-enabled.section-title',
    defaultMessage: 'Discussion',
  },
  discussionEnabledCheckbox: {
    id: 'course-authoring.course-outline.configure-modal.discussion-enabled.checkbox',
    defaultMessage: 'Enable Discussion',
  },
  discussionEnabledDescription: {
    id: 'course-authoring.course-outline.configure-modal.discussion-enabled.description',
    defaultMessage: 'Discussion topics will not be created for unpublished units',
  },
  hideFromLearners: {
    id: 'course-authoring.course-outline.configure-modal.visibility.hide-from-learners',
    defaultMessage: 'Hide from Learners',
  },
  restrictAccessTo: {
    id: 'course-authoring.course-outline.configure-modal.visibility.restrict-access-to',
    defaultMessage: 'Restrict Access To',
  },
  sectionVisibilityWarning: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.section-visibility-warning',
    defaultMessage: 'If you make this section visible to learners, users will be able to see its content after the release date and after the section is published. Only blocks explicitly hidden from learners will remain hidden after you clear this option for the section.',
  },
  unitVisibilityWarning: {
    id: 'course-authoring.course-outline.configure-modal.unit-tab.unit-visibility-warning',
    defaultMessage: 'If a unit has previously been published and released to learners, any changes you make to the unit while it is hidden will now be visible to learners.',
  },
  subsectionVisibilityWarning: {
    id: 'course-authoring.course-outline.configure-modal.unit-tab.subsection-visibility-warning',
    defaultMessage: 'If you choose an option other than “Hide the entire subsection”, published units within this subsection will be accessible to learners.',
  },
  unitSelectGroup: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.unit-select-group',
    defaultMessage: 'Select one or more groups:',
  },
  unitSelectGroupType: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.unit-select-group-type',
    defaultMessage: 'Select group type',
  },
  unitSelectDeletedGroupErrorMessage: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.unit-select-group-deleted-error-message',
    defaultMessage: 'This group no longer exists. Select a different group or remove the access restriction.',
    description: 'Error message for unavailable group',
  },
  unitAllLearnersAndStaff: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.unit-all-learners-staff',
    defaultMessage: 'All Learners and Staff',
  },
  cancelButton: {
    id: 'course-authoring.course-outline.configure-modal.button.cancel',
    defaultMessage: 'Cancel',
  },
  saveButton: {
    id: 'course-authoring.course-outline.configure-modal.button.label',
    defaultMessage: 'Save',
  },
  grading: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.grading',
    defaultMessage: 'Grading',
  },
  gradeAs: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.grade-as',
    defaultMessage: 'Grade As:',
  },
  dueDate: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.due-date',
    defaultMessage: 'Due Date:',
  },
  dueTimeUTC: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.due-time-UTC',
    defaultMessage: 'Due Time (UTC):',
  },
  subsectionVisibility: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.subsection-visibility',
    defaultMessage: 'Subsection Visibility',
  },
  showEntireSubsection: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.show-entire-subsection',
    defaultMessage: 'Show Entire Subsection',
  },
  showEntireSubsectionDescription: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.show-entire-subsection-description',
    defaultMessage: 'Learners will see the published content',
  },
  hideContentAfterDue: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.hide-content-after-due',
    defaultMessage: 'Hide Content After Due',
  },
  hideContentAfterDueDescription: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.hide-content-after-due-description',
    defaultMessage: 'After the subsection’s due date, learners will no longer be able to access its content. The subsection will not contribute to their grade.',
  },
  hideEntireSubsection: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.hide-entire-subsection',
    defaultMessage: 'Hide Entire Subsection',
  },
  hideEntireSubsectionDescription: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.hide-entire-subsection-description',
    defaultMessage: 'Learners will not see the subsection in the course outline. The subsection will not contribute to their grade.',
  },
  reviewRulesLabel: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.reviewRulesLabel',
    defaultMessage: 'Review Rules',
  },
  reviewRulesDescription: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.reviewRulesDescription',
    defaultMessage: 'Specify any rules or exceptions to the rules that the proctoring review team should follow when reviewing the video. For example, you can specify that calculators are allowed. These specified rules are visible to learners before they start the exam.',
  },
  reviewRulesDescriptionWithLink: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.reviewRulesDescriptionWithLink',
    defaultMessage: 'Specify any rules or exceptions to the rules that the proctoring review team should follow when reviewing the video. For example, you can specify that calculators are allowed. These specified rules are visible to learners before they start the exam, along with {hyperlink}.',
  },
  reviewRulesDescriptionLinkText: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.reviewRulesDescriptionLinkText',
    defaultMessage: 'general proctoring exam rules',
  },
});
export default messages;