import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({

  title: {
    id: 'authoring.videoeditor.thumbnail.title',
    defaultMessage: 'Миниатюра',
    description: 'Название для виджета миниатюры',
  },
  unavailableSubtitle: {
    id: 'authoring.videoeditor.thumbnail.unavailable.subtitle',
    defaultMessage: 'Недоступно',
    description: 'Подзаголовок для недоступного виджета миниатюры',
  },
  noneSubtitle: {
    id: 'authoring.videoeditor.thumbnail.none.subtitle',
    defaultMessage: 'Нет',
    description: 'Подзаголовок для отсутствия миниатюры в виджете',
  },
  yesSubtitle: {
    id: 'authoring.videoeditor.thumbnail.yes.subtitle',
    defaultMessage: 'Да',
    description: 'Подзаголовок для наличия миниатюры в виджете',
  },
  unavailableMessage: {
    id: 'authoring.videoeditor.thumbnail.unavailable.message',
    defaultMessage:
      'Выберите видео из вашей библиотеки, чтобы включить эту функцию (применимо только к курсам, которые проходят на сайте edx.org).',
    description: 'Сообщение для недоступного виджета миниатюры',
  },
  uploadButtonLabel: {
    id: 'authoring.videoeditor.thumbnail.upload.label',
    defaultMessage: 'Загрузить миниатюру',
    description: 'Метка для кнопки загрузки',
  },
  addThumbnail: {
    id: 'authoring.videoeditor.thumbnail.upload.message',
    defaultMessage: 'Загрузите изображение, которое учащиеся увидят перед воспроизведением видео.',
    description: 'Сообщение для добавления миниатюры',
  },
  aspectRequirements: {
    id: 'authoring.videoeditor.thumbnail.upload.aspectRequirements',
    defaultMessage: 'Изображения должны иметь соотношение сторон 16:9 (рекомендуется 1280x720 пикселей)',
    description: 'Сообщение для требований миниатюры',
  },
  thumbnailAltText: {
    id: 'authoring.videoeditor.thumbnail.altText',
    defaultMessage: 'Изображение, используемое в качестве миниатюры для видео',
    description: 'Альтернативный текст для миниатюры',
  },
  deleteThumbnail: {
    id: 'authoring.videoeditor.thumbnail.deleteThumbnail',
    defaultMessage: 'Удалить',
    description: 'Сообщение, отображаемое пользователю для действия удаления миниатюры',
  },
  fileSizeError: {
    id: 'authoring.videoeditor.thumbnail.error.fileSizeError',
    defaultMessage:
      'Размер файла для миниатюр должен быть больше 2 КБ или меньше 2 МБ. Пожалуйста, уменьшите размер изображения и попробуйте снова.',
    description:
      'Сообщение, отображаемое пользователю при размере файла изображения меньше 2 КБ или больше 2 МБ',
  },
});

export default messages;
