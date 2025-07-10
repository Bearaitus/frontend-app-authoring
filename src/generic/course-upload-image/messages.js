import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  uploadImageHelpText: {
    id: 'course-authoring.schedule-section.introducing.upload-image.help-text',
    defaultMessage: 'Пожалуйста, укажите правильный путь и имя вашего {identifierFieldText} (Примечание: поддерживаются только форматы JPEG или PNG)',
  },
  uploadImageFilesAndUploads: {
    id: 'course-authoring.schedule-section.introducing.upload-image.file-and-uploads',
    defaultMessage: 'файлы и загрузки',
  },
  uploadImageDropzoneText: {
    id: 'course-authoring.schedule-section.introducing.upload-image.dropzone-text',
    defaultMessage: 'Перетащите ваш {identifierFieldText} сюда или нажмите для загрузки.',
  },
  uploadImageDropzoneAlt: {
    id: 'course-authoring.schedule-section.introducing.upload-image.dropzone-alt',
    defaultMessage: 'Загруженное изображение для курса',
  },
  uploadImageEmpty: {
    id: 'course-authoring.schedule-section.introducing.upload-image.empty',
    defaultMessage: 'У вашего курса в настоящее время нет изображения. Пожалуйста, загрузите его (формат JPEG или PNG, рекомендуемые минимальные размеры — 375px в ширину и 200px в высоту)',
  },
  uploadImageIconAlt: {
    id: 'course-authoring.schedule-section.introducing.upload-image.icon-alt',
    defaultMessage: 'Иконка загрузки файла',
  },
  uploadImageBodyFilled: {
    id: 'course-authoring.schedule-section.introducing.upload-image.manage',
    defaultMessage: 'Вы можете управлять этим изображением вместе со всеми другими вашими {hyperlink}',
  },
  uploadImageInputPlaceholder: {
    id: 'course-authoring.schedule-section.introducing.upload-image.input.placeholder',
    defaultMessage: 'URL вашего {identifierFieldText}',
  },
});
export default messages;