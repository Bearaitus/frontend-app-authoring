import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  stepperUploadingTitle: {
    id: 'course-authoring.import.stepper.title.uploading',
    defaultMessage: 'Загрузка',
  },
  stepperUnpackingTitle: {
    id: 'course-authoring.import.stepper.title.unpacking',
    defaultMessage: 'Распаковка',
  },
  stepperVerifyingTitle: {
    id: 'course-authoring.import.stepper.title.verifying',
    defaultMessage: 'Проверка',
  },
  stepperUpdatingTitle: {
    id: 'course-authoring.import.stepper.title.updating',
    defaultMessage: 'Обновление курса',
  },
  stepperSuccessTitle: {
    id: 'course-authoring.import.stepper.title.success',
    defaultMessage: 'Успех',
  },
  stepperUploadingDescription: {
    id: 'course-authoring.import.stepper.description.uploading',
    defaultMessage: 'Передача вашего файла на наши серверы',
  },
  stepperUnpackingDescription: {
    id: 'course-authoring.import.stepper.description.unpacking',
    defaultMessage: 'Распаковка и подготовка структуры папок/файлов (Вы можете безопасно покинуть эту страницу, но избегайте внесения значительных изменений в содержимое до завершения импорта)',
  },
  stepperVerifyingDescription: {
    id: 'course-authoring.import.stepper.description.verifying',
    defaultMessage: 'Проверка семантики, синтаксиса и обязательных данных',
  },
  stepperUpdatingDescription: {
    id: 'course-authoring.import.stepper.description.updating',
    defaultMessage: 'Интеграция импортированного содержимого в этот курс. Этот процесс может занять больше времени для более крупных курсов.',
  },
  stepperSuccessDescription: {
    id: 'course-authoring.import.stepper.description.success',
    defaultMessage: 'Импортированное содержимое теперь интегрировано в этот курс',
  },
  viewOutlineButton: {
    id: 'course-authoring.import.stepper.button.outline',
    defaultMessage: 'Просмотреть обновленный план',
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
