import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  uploadImageDropzoneText: {
    id: 'course-authoring.certificates.modal-dropzone.text',
    defaultMessage: 'Перетащите изображение сюда или нажмите для загрузки',
    description: 'Описание блока перетаскивания',
  },
  uploadImageDropzoneAlt: {
    id: 'course-authoring.certificates.modal-dropzone.dropzone-alt',
    defaultMessage: 'Загруженное изображение для сертификата курса',
    description: 'Описание загруженного изображения',
  },
  uploadImageValidationText: {
    id: 'course-authoring.certificates.modal-dropzone.validation.text',
    defaultMessage: 'Можно загружать только файлы типов {types}. Пожалуйста, выберите файл с расширением {extensions} для загрузки.',
    description: 'Сообщение об ошибке при выборе неверного типа файла',
  },
  cancelModal: {
    id: 'course-authoring.certificates.modal-dropzone.cancel.modal',
    defaultMessage: 'Отмена',
    description: 'Текст для кнопки отмены в модальном окне',
  },
  uploadModal: {
    id: 'course-authoring.certificates.modal-dropzone.upload.modal',
    defaultMessage: 'Загрузить',
    description: 'Текст для кнопки загрузки в модальном окне',
  },
  uploadImageDropzoneInvalidSizeMore: {
    id: 'course-authoring.certificates.modal-dropzone.validation.invalid-size-more',
    defaultMessage: 'Размер изображения должен быть меньше {maxSize}MB.',
    description: 'Сообщение об ошибке, когда размер загружаемого изображения превышает лимит',
  },
});
export default messages;