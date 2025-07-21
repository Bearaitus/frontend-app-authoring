import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  pacingTitle: {
    id: 'course-authoring.schedule.pacing.title',
    defaultMessage: 'Course Pacing',
  },
  pacingDescription: {
    id: 'course-authoring.schedule.pacing.description',
    defaultMessage: 'Set the pacing for this course',
  },
  pacingRestriction: {
    id: 'course-authoring.schedule.pacing.restriction',
    defaultMessage: 'Course pacing cannot be changed after the course has started',
  },
  pacingTypeInstructorLabel: {
    id: 'course-authoring.schedule.pacing.radio.instructor.label',
    defaultMessage: 'Instructor-Paced Course',
  },
  pacingTypeInstructorDescription: {
    id: 'course-authoring.schedule.pacing.radio.instructor.description',
    defaultMessage:
      'Instructor-paced courses progress at a pace set by the course author. You can set the release dates for course content and assignment deadlines.',
  },
  pacingTypeSelfLabel: {
    id: 'course-authoring.schedule.pacing.radio.self-paced.label',
    defaultMessage: 'Self-Paced Course',
  },
  pacingTypeSelfDescription: {
    id: 'course-authoring.schedule.pacing.radio.self-paced.description',
    defaultMessage: 'Self-paced courses offer suggested due dates for assignments or exams based on the learner’s enrollment date and the expected length of the course. These courses offer learners the flexibility to adjust assignment deadlines as needed.',
  },
});
export default messages;