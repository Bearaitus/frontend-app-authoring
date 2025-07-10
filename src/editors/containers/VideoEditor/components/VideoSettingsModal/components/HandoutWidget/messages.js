import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({

  titleLabel: {
    id: 'authoring.videoeditor.handout.title.label',
    defaultMessage: 'Материалы',
    description: 'Название для виджета материалов',
  },
  uploadButtonLabel: {
    id: 'authoring.videoeditor.handout.upload.label',
    defaultMessage: 'Загрузить материалы',
    description: 'Метка для кнопки загрузки',
  },
  addHandoutMessage: {
    id: 'authoring.videoeditor.handout.upload.addHandoutMessage',
    defaultMessage: `Добавьте материалы к этому видео. Пользователи могут скачать
    этот файл, нажав "Скачать материалы" ниже видео.`,
    description: 'Сообщение, отображаемое при загрузке материалов',
  },
  uploadHandoutError: {
    id: 'authoring.videoeditor.handout.error.uploadHandoutError',
    defaultMessage: 'Не удалось загрузить материалы. Пожалуйста, попробуйте снова.',
    description: 'Сообщение, отображаемое пользователю при неудачной загрузке материалов',
  },
  fileSizeError: {
    id: 'authoring.videoeditor.handout.error.fileSizeError',
    defaultMessage: 'Файлы материалов должны быть 20 МБ или меньше. Пожалуйста, уменьшите размер файла и попробуйте снова.',
    description: 'Сообщение, отображаемое пользователю при превышении размера файла материалов',
  },
  handoutHelpMessage: {
    id: 'authoring.videoeditor.handout.handoutHelpMessage',
    defaultMessage: 'Пользователи могут скачать этот файл, нажав "Скачать материалы" ниже видео.',
    description: 'Сообщение, отображаемое пользователю при наличии материалов',
  },
  deleteHandout: {
    id: 'authoring.videoeditor.handout.deleteHandout',
    defaultMessage: 'Удалить',
    description: 'Сообщение, отображаемое пользователю для действия удаления материалов',
  },
  replaceHandout: {
    id: 'authoring.videoeditor.handout.replaceHandout',
    defaultMessage: 'Заменить',
    description: 'Сообщение, отображаемое пользователю для действия замены материалов',
  },
  downloadHandout: {
    id: 'authoring.videoeditor.handout.downloadHandout',
    defaultMessage: 'Скачать',
    description: 'Сообщение, отображаемое пользователю для действия скачивания материалов',
  },
});

export default messages;
