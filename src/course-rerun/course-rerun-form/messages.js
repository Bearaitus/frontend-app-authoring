import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  rerunCourseDescription: {
    id: 'course-authoring.course-rerun.form.description',
    defaultMessage: 'Укажите идентифицирующую информацию для этого повторного запуска курса. Оригинальный курс не затрагивается никаким образом повторным запуском. {strong}',
  },
  rerunCourseDescriptionStrong: {
    id: 'course-authoring.course-rerun.form.description.strong',
    defaultMessage: 'Примечание: Вместе организация, номер курса и запуск курса должны уникально идентифицировать этот новый экземпляр курса.',
  },
});

export default messages;
