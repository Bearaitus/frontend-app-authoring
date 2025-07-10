import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  headingTitle: {
    id: 'course-authoring.schedule.heading.title',
    defaultMessage: 'Расписание и детали',
  },
  headingSubtitle: {
    id: 'course-authoring.schedule.heading.subtitle',
    defaultMessage: 'Настройки',
  },
  buttonSaveText: {
    id: 'course-authoring.schedule.alert.button.save',
    defaultMessage: 'Сохранить изменения',
  },
  buttonSavingText: {
    id: 'course-authoring.schedule.alert.button.saving',
    defaultMessage: 'Сохранение',
  },
  buttonCancelText: {
    id: 'course-authoring.schedule.alert.button.cancel',
    defaultMessage: 'Отмена',
  },
  alertWarningAriaLabelledby: {
    id: 'course-authoring.schedule.alert.warning.aria.labelledby',
    defaultMessage: 'notification-warning-title',
  },
  alertWarningAriaDescribedby: {
    id: 'course-authoring.schedule.alert.warning.aria.describedby',
    defaultMessage: 'notification-warning-description',
  },
  alertWarning: {
    id: 'course-authoring.schedule.alert.warning',
    defaultMessage: 'Вы внесли некоторые изменения',
  },
  alertWarningOnSaveWithError: {
    id: 'course-authoring.schedule.alert.warning.save.error',
    defaultMessage: 'Вы внесли некоторые изменения, но есть некоторые ошибки',
  },
  alertWarningDescriptions: {
    id: 'course-authoring.schedule.alert.warning.descriptions',
    defaultMessage: 'Ваши изменения не будут видны до тех пор, пока вы не сохраните изменения.',
  },
  alertWarningDescriptionsOnSaveWithError: {
    id: 'course-authoring.schedule.alert.warning.save.descriptions.error',
    defaultMessage: 'Пожалуйста, устраните ошибки на этой странице сначала, и затем сохраните прогресс.',
  },
  alertSuccessAriaLabelledby: {
    id: 'course-authoring.schedule.alert.success.aria.labelledby',
    defaultMessage: 'alert-confirmation-title',
  },
  alertSuccessAriaDescribedby: {
    id: 'course-authoring.schedule.alert.success.aria.describedby',
    defaultMessage: 'alert-confirmation-description',
  },
  alertSuccess: {
    id: 'course-authoring.schedule.alert.success',
    defaultMessage: 'Ваши изменения были сохранены.',
  },
  alertLoadFailAriaLabelledby: {
    id: 'course-authoring.schedule.alert.load.fail.aria.labelledby',
    defaultMessage: 'alert-confirmation-title',
  },
  alertLoadFailAriaDescribedby: {
    id: 'course-authoring.schedule.alert.load.fail.aria.describedby',
    defaultMessage: 'alert-confirmation-description',
  },
  alertLoadFail: {
    id: 'course-authoring.schedule.alert.load.fail',
    defaultMessage: 'Мы столкнулись с ошибкой при загрузке ваших настроек.',
  },
  alertFailAriaLabelledby: {
    id: 'course-authoring.schedule.alert.fail.aria.labelledby',
    defaultMessage: 'alert-confirmation-title',
  },
  alertFailAriaDescribedby: {
    id: 'course-authoring.schedule.alert.fail.aria.describedby',
    defaultMessage: 'alert-confirmation-description',
  },
  alertFail: {
    id: 'course-authoring.schedule.alert.fail',
    defaultMessage: 'Мы столкнулись с ошибкой при сохранении ваших изменений.',
  },
  errorMessage1: {
    id: 'course-authoring.schedule.schedule-section.error-message-1',
    defaultMessage: 'Поведение отображения сертификатов должно быть \'Дата после окончания курса\' если дата доступности сертификата установлена.',
  },
  errorMessage2: {
    id: 'course-authoring.schedule.schedule-section.error-message-2',
    defaultMessage: 'Дата окончания регистрации не может быть после даты окончания курса.',
  },
  errorMessage3: {
    id: 'course-authoring.schedule.schedule-section.error-message-3',
    defaultMessage: 'Дата начала регистрации не может быть после даты окончания регистрации.',
  },
  errorMessage4: {
    id: 'course-authoring.schedule.schedule-section.error-message-4',
    defaultMessage: 'Дата начала курса должна быть позже даты начала регистрации.',
  },
  errorMessage5: {
    id: 'course-authoring.schedule.schedule-section.error-message-5',
    defaultMessage: 'Дата окончания курса должна быть позже даты начала курса.',
  },
  errorMessage6: {
    id: 'course-authoring.schedule.schedule-section.error-message-6',
    defaultMessage: 'Дата доступности сертификата должна быть позже даты окончания курса.',
  },
  errorMessage7: {
    id: 'course-authoring.schedule.schedule-section.error-message-7',
    defaultMessage: 'Курс должен иметь назначенную дату начала.',
  },
  errorMessage8: {
    id: 'course-authoring.schedule.schedule-section.error-message-8',
    defaultMessage: 'Пожалуйста, введите целое число между %(min)s и %(max)s.',
  },
});

export default messages;
