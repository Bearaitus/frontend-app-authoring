import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  title: {
    id: 'course-authoring.course-outline.configure-modal.title',
    defaultMessage: '{title} Settings',
  },
  componentTitle: {
    id: 'course-authoring.course-outline.configure-modal.component.title',
    defaultMessage: 'Edit Access For: {title}',
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
    defaultMessage: 'Course Release Date and Time',
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
    defaultMessage: 'Block Visibility',
  },
  unitAccess: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.unit-access',
    defaultMessage: 'Block Access',
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
    defaultMessage: 'Topics will not be created for unpublished blocks.',
  },
  hideFromLearners: {
    id: 'course-authoring.course-outline.configure-modal.visibility.hide-from-learners',
    defaultMessage: 'Hide From Learners',
  },
  restrictAccessTo: {
    id: 'course-authoring.course-outline.configure-modal.visibility.restrict-access-to',
    defaultMessage: 'Restrict Access To',
  },
  sectionVisibilityWarning: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.section-visibility-warning',
    defaultMessage: 'If you make this section visible to learners, users will be able to see its content after the release date and after the section is published. Only blocks that are explicitly hidden from learners will remain hidden after you clear this option for the section.',
  },
  unitVisibilityWarning: {
    id: 'course-authoring.course-outline.configure-modal.unit-tab.unit-visibility-warning',
    defaultMessage: 'If the block was previously published and released to learners, any changes you made to the block while it was hidden will now be visible to learners.',
  },
  subsectionVisibilityWarning: {
    id: 'course-authoring.course-outline.configure-modal.unit-tab.subsection-visibility-warning',
    defaultMessage: 'If you select an option other than "Hide Entire SubSection", published blocks in this subSection will become available to learners unless they are explicitly hidden.',
  },
  unitSelectGroup: {
    id: 'course-authoring.course-outline.configure-modal.unit-tab.unit-select-group',
    defaultMessage: 'Select one or more groups:',
  },
  unitSelectGroupType: {
    id: 'course-authoring.course-outline.configure-modal.unit-tab.unit-select-group-type',
    defaultMessage: 'Select group type',
  },
  unitSelectDeletedGroupErrorMessage: {
    id: 'course-authoring.course-outline.configure-modal.unit-tab.unit-select-group-deleted-error-message',
    defaultMessage: 'This group no longer exists. Select a different group or remove the access restriction.',
    description: 'Error message for unavailable group',
  },
  unitAllLearnersAndStaff: {
    id: 'course-authoring.course-outline.configure-modal.unit-tab.unit-all-learners-staff',
    defaultMessage: 'All learners and staff',
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
    id: 'course-authoring.course-outline.configure-modal.basic-tab.grading',
    defaultMessage: 'Grading',
  },
  gradeAs: {
    id: 'course-authoring.course-outline.configure-modal.basic-tab.grade-as',
    defaultMessage: 'Grade As:',
  },
  dueDate: {
    id: 'course-authoring.course-outline.configure-modal.basic-tab.due-date',
    defaultMessage: 'Due Date:',
  },
  dueTimeUTC: {
    id: 'course-authoring.course-outline.configure-modal.basic-tab.due-time-UTC',
    defaultMessage: 'Due Time (UTC):',
  },
  subsectionVisibility: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.subsection-visibility',
    defaultMessage: 'SubSection Visibility',
  },
  showEntireSubsection: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.show-entire-subsection',
    defaultMessage: 'Show Entire SubSection',
  },
  showEntireSubsectionDescription: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.show-entire-subsection-description',
    defaultMessage: 'Users see the published portion',
  },
  hideContentAfterDue: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.hide-content-after-due',
    defaultMessage: 'Hide Content After Due Date',
  },
  hideContentAfterDueDescription: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.hide-content-after-due-description',
    defaultMessage: 'After the subSection due date passes, users will no longer be able to access its content. The subSection will not be factored into grades.',
  },
  hideEntireSubsection: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.hide-entire-subsection',
    defaultMessage: 'Hide Entire SubSection',
  },
  hideEntireSubsectionDescription: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.hide-entire-subsection-description',
    defaultMessage: 'Users will not see the subSection in the course outline. The subSection will not be factored into grades.',
  },
  assessmentResultsVisibility: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.assessment-results-visibility',
    defaultMessage: 'Assessment Results Visibility',
  },
  alwaysShowAssessmentResults: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.always-show-assessment-results',
    defaultMessage: 'Always Show Assessment Results',
  },
  alwaysShowAssessmentResultsDescription: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.always-show-assessment-results-description',
    defaultMessage: 'When users submit an assessment response, they immediately see whether their answer was correct and their grade.',
  },
  neverShowAssessmentResults: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.never-show-assessment-results',
    defaultMessage: 'Never Show Assessment Results',
  },
  neverShowAssessmentResultsDescription: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.never-show-assessment-results-description',
    defaultMessage: 'Users will never see whether their assessment responses were correct or their grade.',
  },
  showAssessmentResultsPastDue: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.show-assessment-results-past-due',
    defaultMessage: 'Show Assessment Results Past Due Date',
  },
  showAssessmentResultsPastDueDescription: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.show-assessment-results-past-due-description',
    defaultMessage: 'Users will not see whether their assessment responses were correct or their grade until the subSection due date has passed. If the subSection does not have a due date, users will always see their grades when submitting assessment responses.',
  },
  setSpecialExam: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.set-special-exam',
    defaultMessage: 'Set as Special Exam',
  },
  none: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.none',
    defaultMessage: 'None',
  },
  timed: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.timed',
    defaultMessage: 'Timed',
  },
  timedDescription: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.timed-description',
    defaultMessage: 'Use a timed exam to limit the amount of time users can spend on tasks in this subSection. Users must submit before time runs out. You can provide extra time to individual learners through the instructor dashboard.',
  },
  proctoredExam: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.proctoredExam',
    defaultMessage: 'Proctored',
  },
  proctoredExamDescription: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.proctored-exam-description',
    defaultMessage: 'Proctored exams are timed exams that record video of each learner taking the exam. The video is then reviewed to ensure that learners are following all exam rules. Please note that setting this exam to be a proctored exam will change the visibility settings to “Hide Content After Due Date”.',
  },
  onboardingExam: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.onboardingExam',
    defaultMessage: 'Onboarding',
  },
  onboardingExamDescription: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.onboarding-exam-description',
    defaultMessage: 'Use Onboarding to familiarize learners with proctoring, verify their identity, and create an Onboarding profile. Users must complete the Onboarding profile creation step before they can take a proctored exam. Profile verification takes 2+ business days.',
  },
  practiceExam: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.practiceExam',
    defaultMessage: 'Practice Proctored Exam',
  },
  practiceExamDescription: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.practice-exam-description',
    defaultMessage: 'Use a practice proctored exam to familiarize learners with the tools and processes of proctoring. The results of the practice exam do not contribute to a learner’s grade.',
  },
  advancedTabTitle: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.title',
    defaultMessage: 'Advanced Settings',
  },
  timeAllotted: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.time-allotted',
    defaultMessage: 'Time Allotted (HH:MM):',
  },
  timeLimitDescription: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.time-limit-description',
    defaultMessage: 'Select the time allotted for the exam. If it exceeds 24 hours, enter the time amount.  You can provide extra time to individual learners through the instructor dashboard.',
  },
  prereqTitle: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.prereqTitle',
    defaultMessage: 'Use as Prerequisite',
  },
  prereqCheckboxLabel: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.prereqCheckboxLabel',
    defaultMessage: 'Make this subSection available as a prerequisite for other content',
  },
  limitAccessTitle: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.limitAccessTitle',
    defaultMessage: 'Limit Access',
  },
  limitAccessDescription: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.limitAccessDescription',
    defaultMessage: 'Select a prerequisite subSection and enter a minimum grade percentage and minimum completion percentage to restrict access to this subSection. Values from 0 to 100 are allowed',
  },
  noPrerequisiteOption: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.noPrerequisiteOption',
    defaultMessage: 'No Prerequisite',
  },
  prerequisiteSelectLabel: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.prerequisiteSelectLabel',
    defaultMessage: 'Prerequisite:',
  },
  minScoreLabel: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.minScoreLabel',
    defaultMessage: 'Minimum Score:',
  },
  minCompletionLabel: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.minCompletionLabel',
    defaultMessage: 'Minimum Completion:',
  },
  minScoreError: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.minScoreError',
    defaultMessage: 'Minimum grade percentage must be an integer from 0 to 100.',
  },
  minCompletionError: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.minCompletionError',
    defaultMessage: 'Minimum completion percentage must be an integer from 0 to 100.',
  },
  proctoredExamLockedAndisNotProctoredExamAlert: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.proctoredExamLockedAndisNotProctoredExamAlert',
    defaultMessage: 'This subSection has been released to learners as a proctored exam but has been changed back to basic or timed exam.  You cannot set it as a proctored exam now. Contact edX support for assistance.',
  },
  proctoredExamLockedAndisProctoredExamAlert: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.proctoredExamLockedAndisProctoredExamAlert',
    defaultMessage: 'This proctored exam has been released to learners. You cannot convert it into another type of special exam. You may change this subSection back to a basic exam by selecting "None", or to a timed exam, but you will not be able to configure it as a proctored exam in the future.',
  },
  reviewRulesLabel: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.reviewRulesLabel',
    defaultMessage: 'Review Rules',
  },
  reviewRulesDescription: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.reviewRulesDescription',
    defaultMessage: 'Specify any rules or exceptions to the rules that the proctoring review team should follow when reviewing videos. For example, you may state that calculators are allowed. These specified rules are visible to learners before starting the exam.',
  },
  reviewRulesDescriptionWithLink: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.reviewRulesDescriptionWithLink',
    defaultMessage: 'Specify any rules or exceptions to the rules that the proctoring review team should follow when reviewing videos. For example, you may state that calculators are allowed. These specified rules are visible to learners before starting the exam, along with {hyperlink}.',
  },
  reviewRulesDescriptionLinkText: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.reviewRulesDescriptionLinkText',
    defaultMessage: 'general proctored exam rules',
  },
});
export default messages;