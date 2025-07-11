import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  stepperPreparingTitle: {
    id: 'course-authoring.export.stepper.title.preparing',
    defaultMessage: 'Подготовка курса',
  },
  stepperExportingTitle: {
    id: 'course-authoring.export.stepper.title.exporting',
    defaultMessage: 'Сборка файлов курса',
  },
  stepperCompressingTitle: {
    id: 'course-authoring.export.stepper.title.compressing',
    defaultMessage: 'Сжатие собранных файлов',
  },
  stepperSuccessTitle: {
    id: 'course-authoring.export.stepper.title.success',
    defaultMessage: 'Экспортировано',
  },
  stepperPreparingDescription: {
    id: 'course-authoring.export.stepper.description.preparing',
    defaultMessage: 'Подготовка к началу экспорта курса',
  },
  stepperExportingDescription: {
    id: 'course-authoring.export.stepper.description.exporting',
    defaultMessage: 'Создание файлов экспорта',
  },
  stepperCompressingDescription: {
    id: 'course-authoring.export.stepper.description.compressing',
    defaultMessage: 'Сжатие экспортированных данных и подготовка их к загрузке',
  },
  stepperSuccessDescription: {
    id: 'course-authoring.export.stepper.description.success',
    defaultMessage: 'Ваш экспортированный курс теперь можно скачать',
  },
  downloadCourseButtonTitle: {
    id: 'course-authoring.export.stepper.download.button.title',
    defaultMessage: 'Скачать экспортированный курс',
  },
  stepperHeaderTitle: {
    id: 'course-authoring.export.stepper.header.title',
    defaultMessage: 'Статус экспорта курса',
  },
});
export default messages;