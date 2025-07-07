import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  pacingTitle: {
    id: 'course-authoring.schedule.pacing.title',
    defaultMessage: 'Темп курса',
  },
  pacingDescription: {
    id: 'course-authoring.schedule.pacing.description',
    defaultMessage: 'Установите темп для этого курса',
  },
  pacingRestriction: {
    id: 'course-authoring.schedule.pacing.restriction',
    defaultMessage: 'Темп курса не может быть изменен после начала курса',
  },
  pacingTypeInstructorLabel: {
    id: 'course-authoring.schedule.pacing.radio.instructor.label',
    defaultMessage: 'Курс с темпом, установленным преподавателем',
  },
  pacingTypeInstructorDescription: {
    id: 'course-authoring.schedule.pacing.radio.instructor.description',
    defaultMessage:
      'Курсы с темпом, установленным преподавателем, проходят в темпе, который устанавливает автор курса. Вы можете настроить даты выпуска контента курса и сроки выполнения заданий.',
  },
  pacingTypeSelfLabel: {
    id: 'course-authoring.schedule.pacing.radio.self-paced.label',
    defaultMessage: 'Самостоятельный курс',
  },
  pacingTypeSelfDescription: {
    id: 'course-authoring.schedule.pacing.radio.self-paced.description',
    defaultMessage: 'Самостоятельные курсы предлагают рекомендуемые сроки выполнения заданий или экзаменов на основе даты зачисления учащегося и ожидаемой продолжительности курса. Эти курсы предлагают учащимся гибкость для изменения сроков заданий по мере необходимости.',
  },
});

export default messages;
