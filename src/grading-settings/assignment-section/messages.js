import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  assignmentTypeNameTitle: {
    id: 'course-authoring.grading-settings.assignment.type-name.title',
    defaultMessage: 'Тип задания',
  },
  assignmentTypeNameDescription: {
    id: 'course-authoring.grading-settings.assignment.type-name.description',
    defaultMessage: '',
  },
  assignmentTypeNameErrorMessage1: {
    id: 'course-authoring.grading-settings.assignment.type-name.error.message-1',
    defaultMessage: 'Тип задания должен иметь название.',
  },
  assignmentTypeNameErrorMessage2: {
    id: 'course-authoring.grading-settings.assignment.type-name.error.message-2',
    defaultMessage: 'Чтобы оценка работала, вы должны изменить все подразделы {initialAssignmentName} на {value}.',
  },
  assignmentTypeNameErrorMessage3: {
    id: 'course-authoring.grading-settings.assignment.type-name.error.message-3',
    defaultMessage: 'Уже существует другой тип задания с этим названием.',
  },
  abbreviationTitle: {
    id: 'course-authoring.grading-settings.assignment.abbreviation.title',
    defaultMessage: 'Сокращенное название',
  },
  abbreviationDescription: {
    id: 'course-authoring.grading-settings.assignment.abbreviation.description',
    defaultMessage: '',
  },
  weightOfTotalGradeTitle: {
    id: 'course-authoring.grading-settings.assignment.weight-of-total-grade.title',
    defaultMessage: 'Доля модуля в курсе',
  },
  weightOfTotalGradeDescription: {
    id: 'course-authoring.grading-settings.assignment.weight-of-total-grade.description',
    defaultMessage: 'Вес всех заданий этого типа как процент от общей оценки, например, 40. Не включайте символ процента.',
  },
  weightOfTotalGradeErrorMessage: {
    id: 'course-authoring.grading-settings.assignment.weight-of-total-grade.error.message',
    defaultMessage: 'Пожалуйста, введите целое число между 0 и 100.',
  },
  totalNumberTitle: {
    id: 'course-authoring.grading-settings.assignment.total-number.title',
    defaultMessage: 'Общее количество заданий',
  },
  totalNumberDescription: {
    id: 'course-authoring.grading-settings.assignment.total-number.description',
    defaultMessage: 'Количество подразделов в курсе, содержащих задания этого типа.',
  },
  totalNumberErrorMessage: {
    id: 'course-authoring.grading-settings.assignment.total-number.error.message',
    defaultMessage: 'Пожалуйста, введите целое число больше 0.',
  },
  numberOfDroppableTitle: {
    id: 'course-authoring.grading-settings.assignment.number-of-droppable.title',
    defaultMessage: 'Количество отбрасываемых заданий',
  },
  numberOfDroppableDescription: {
    id: 'course-authoring.grading-settings.assignment.number-of-droppable.description',
    defaultMessage: 'Количество заданий этого типа, которые будут отброшены. Самые низкие оценки отбрасываются первыми.',
  },
  numberOfDroppableErrorMessage: {
    id: 'course-authoring.grading-settings.assignment.number-of-droppable.error.message',
    defaultMessage: 'Пожалуйста, введите неотрицательное целое число.',
  },
  numberOfDroppableSecondErrorMessage: {
    id: 'course-authoring.grading-settings.assignment.number-of-droppable.second.error.message',
    defaultMessage: 'Нельзя отбросить больше  заданий, чем назначено.',
  },
  assignmentAlertWarningTitle: {
    id: 'course-authoring.grading-settings.assignment.alert.warning.title',
    defaultMessage: 'Предупреждение: Количество  заданий, определенное здесь, не соответствует текущему количеству  заданий в курсе:',
  },
  assignmentAlertWarningDescription: {
    id: 'course-authoring.grading-settings.assignment.alert.warning.description',
    defaultMessage: 'В курсе нет заданий этого типа.',
  },
  assignmentAlertWarningUsageTitle: {
    id: 'course-authoring.grading-settings.assignment.alert.warning.usage.title',
    defaultMessage: 'Предупреждение: Количество  заданий, определенное здесь, не соответствует текущему количеству  заданий в курсе:',
  },
  assignmentAlertWarningSuccess: {
    id: 'course-authoring.grading-settings.assignment.alert.success.title',
    defaultMessage: 'Количество  заданий в курсе соответствует количеству, определённому здесь.',
  },
  assignmentDeleteButton: {
    id: 'course-authoring.grading-settings.assignment.delete.button',
    defaultMessage: 'Удалить',
  },
});

export default messages;
