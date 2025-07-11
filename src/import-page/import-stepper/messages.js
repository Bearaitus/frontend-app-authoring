import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  stepperUploadingTitle: {
    id: 'course-authoring.import.stepper.title.uploading',
    defaultMessage: 'Загрузка архива',
  },
  stepperUnpackingTitle: {
    id: 'course-authoring.import.stepper.title.unpacking',
    defaultMessage: 'Распаковка архива',
  },
  stepperVerifyingTitle: {
    id: 'course-authoring.import.stepper.title.verifying',
    defaultMessage: 'Проверка файлов в архиве',
  },
  stepperUpdatingTitle: {
    id: 'course-authoring.import.stepper.title.updating',
    defaultMessage: 'Обновление курса',
  },
  stepperSuccessTitle: {
    id: 'course-authoring.import.stepper.title.success',
    defaultMessage: 'Импортировано',
  },
  stepperUploadingDescription: {
    id: 'course-authoring.import.stepper.description.uploading',
    defaultMessage: 'Загрузка курса на тренажер PT EdTechLab',
  },
  stepperUnpackingDescription: {
    id: 'course-authoring.import.stepper.description.unpacking',
    defaultMessage: 'Распаковка и подготовка структуры папок/файлов',
  },
  stepperVerifyingDescription: {
    id: 'course-authoring.import.stepper.description.verifying',
    defaultMessage: 'Проверка семантики, синтаксиса и обязательных данных',
  },
  stepperUpdatingDescription: {
    id: 'course-authoring.import.stepper.description.updating',
    defaultMessage: 'Интеграция импортированного содержимого в этот курс',
  },
  stepperSuccessDescription: {
    id: 'course-authoring.import.stepper.description.success',
    defaultMessage: 'Импортирование курса завершено успешно',
  },
  viewOutlineButton: {
    id: 'course-authoring.import.stepper.button.outline',
    defaultMessage: 'Перейти к курсу',
  },
  defaultErrorMessage: {
    id: 'course-authoring.import.stepper.error.default',
    defaultMessage: 'Ошибка импорта курса',
  },
  stepperHeaderTitle: {
    id: 'course-authoring.import.stepper.header.title',
    defaultMessage: 'Статус импорта курса',
  },
});

export default messages;
