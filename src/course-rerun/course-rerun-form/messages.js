import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  rerunCourseDescription: {
    id: 'course-authoring.course-rerun.form.description',
    defaultMessage: 'Provide identifying information for this course rerun. The original course is not affected in any way by the rerun. {strong}',
  },
  rerunCourseDescriptionStrong: {
    id: 'course-authoring.course-rerun.form.description.strong',
    defaultMessage: 'Note: Together, the Course Affiliation, Course Number, and Course Run must uniquely identify this new instance of the course.',
  },
});
export default messages;