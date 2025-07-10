import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({

  title: {
    id: 'authoring.videoeditor.transcripts.title',
    defaultMessage: 'Транскрипты',
    description: 'Название для виджета транскриптов',
  },
  uploadButtonLabel: {
    id: 'authoring.videoeditor.transcripts.upload.label',
    defaultMessage: 'Добавить транскрипт',
    description: 'Метка для кнопки загрузки',
  },
  addFirstTranscript: {
    id: 'authoring.videoeditor.transcripts.upload.firstTranscriptMessage',
    defaultMessage: 'Добавьте транскрипты видео (.srt файлы только) для улучшения доступности.',
    description: 'Сообщение для добавления первого транскрипта',
  },
  allowDownloadCheckboxLabel: {
    id: 'authoring.videoeditor.transcripts.allowDownloadCheckboxLabel',
    defaultMessage: 'Разрешить скачивание транскрипта',
    description: 'Метка для чекбокса разрешения скачивания транскрипта',
  },
  showByDefaultCheckboxLabel: {
    id: 'authoring.videoeditor.transcripts.upload.showByDefaultCheckboxLabel',
    defaultMessage: 'Показать транскрипт в видеоплеере по умолчанию',
    description: 'Метка для чекбокса показа по умолчанию',
  },
  tooltipMessage: {
    id: 'authoring.videoeditor.transcripts.upload.allowDownloadTooltipMessage',
    defaultMessage: 'Пользователи увидят ссылку на скачивание транскрипта ниже видео.',
    description: 'Сообщение для чекбокса показа по умолчанию',
  },
  transcriptTypeError: {
    id: 'authoring.videoeditor.transcript.error.transcriptTypeError',
    defaultMessage: 'Только файлы SRT можно загрузить',
    description: 'Сообщение, отображаемое пользователю при загрузке файла другого типа',
  },
  uploadTranscriptError: {
    id: 'authoring.videoeditor.transcript.error.uploadTranscriptError',
    defaultMessage: 'Не удалось загрузить транскрипт. Пожалуйста, попробуйте снова.',
    description: 'Сообщение, отображаемое пользователю при неудачной загрузке транскрипта',
  },
  fileSizeError: {
    id: 'authoring.videoeditor.transcript.error.fileSizeError',
    defaultMessage: 'Размер файла транскрипта превышает максимальный. Пожалуйста, попробуйте снова.',
    description: 'Сообщение, отображаемое пользователю при слишком большом размере файла транскрипта',
  },
  deleteTranscript: {
    id: 'authoring.videoeditor.transcript.deleteTranscript',
    defaultMessage: 'Удалить',
    description: 'Сообщение, отображаемое пользователю для действия удаления транскрипта',
  },
  deleteTranscriptError: {
    id: 'authoring.videoeditor.transcript.error.deleteTranscriptError',
    defaultMessage: 'Не удалось удалить транскрипт. Пожалуйста, попробуйте снова.',
    description: 'Сообщение, отображаемое пользователю при неудачном удалении транскрипта',
  },
  replaceTranscript: {
    id: 'authoring.videoeditor.transcript.replaceTranscript',
    defaultMessage: 'Заменить',
    description: 'Сообщение, отображаемое пользователю для действия замены транскрипта',
  },
  downloadTranscript: {
    id: 'authoring.videoeditor.transcript.downloadTranscript',
    defaultMessage: 'Скачать',
    description: 'Сообщение, отображаемое пользователю для действия скачивания транскрипта',
  },
  languageSelectLabel: {
    id: 'authoring.videoeditor.transcripts.languageSelectLabel',
    defaultMessage: 'Языки',
    description: 'Метка для выпадающего списка, который позволяет пользователям установить язык, связанный с транскриптом',
  },
  languageSelectPlaceholder: {
    id: 'authoring.videoeditor.transcripts.languageSelectPlaceholder',
    defaultMessage: 'Выберите язык',
    description: 'Плейсхолдер для выпадающего списка, который позволяет пользователям установить язык, связанный с транскриптом',
  },
  cancelDeleteLabel: {
    id: 'authoring.videoeditor.transcripts.cancelDeleteLabel',
    defaultMessage: 'Отмена',
    description: 'Метка для кнопки, которая позволяет пользователям остановить процесс удаления транскрипта',
  },
  confirmDeleteLabel: {
    id: 'authoring.videoeditor.transcripts.confirmDeleteLabel',
    defaultMessage: 'Удалить',
    description: 'Метка для кнопки, которая позволяет пользователям подтвердить процесс удаления транскрипта',
  },
  deleteConfirmationMessage: {
    id: 'authoring.videoeditor.transcripts.deleteConfirmationMessage',
    defaultMessage: 'Вы уверены, что хотите удалить этот транскрипт?',
    description: 'Предупреждение, которое позволяет пользователям выбрать следующий шаг в процессе удаления транскрипта',
  },
  deleteConfirmationHeader: {
    id: 'authoring.videoeditor.transcripts.deleteConfirmationTitle',
    defaultMessage: 'Удалить этот транскрипт?',
    description: 'Заголовок для предупреждения, которое позволяет пользователям выбрать следующий шаг в процессе удаления транскрипта',
  },
  fileTypeWarning: {
    id: 'authoring.videoeditor.transcripts.fileTypeWarning',
    defaultMessage: 'Только файлы SRT можно загрузить. Пожалуйста, выберите файл, оканчивающийся на .srt, чтобы загрузить.',
    description: 'Сообщение, предупреждающее пользователей загружать только файлы .srt',
  },
  importButtonLabel: {
    id: 'authoring.videoEditor.transcripts.importButton.label',
    defaultMessage: 'Импортировать транскрипт',
    description: 'Метка для кнопки импорта транскрипта из YouTube',
  },
  importHeader: {
    id: 'authoring.videoEditor.transcripts.importCard.header',
    defaultMessage: 'Импортировать транскрипт из YouTube?',
    description: 'Заголовок для карточки импорта транскрипта',
  },
  importMessage: {
    id: 'authoring.videoEditor.transcrtipts.importCard.message',
    defaultMessage: 'Мы нашли транскрипт для этого видео на YouTube. Хотите ли вы импортировать его сейчас?',
    description: 'Сообщение для карточки импорта транскрипта, спрашивающее пользователя, хочет ли он импортировать транскрипт',
  },
});

export default messages;
