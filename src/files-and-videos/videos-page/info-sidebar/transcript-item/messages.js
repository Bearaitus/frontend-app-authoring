import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  fileSizeError: {
    id: 'course-authoriong.video-uploads.file-info.transcript.error.fileSizeError',
    defaultMessage: 'Размер файла транскрипта превышает максимально допустимый. Пожалуйста, попробуйте снова.',
    description: 'Сообщение, отображаемое пользователю, когда размер файла транскрипта слишком большой',
  },
  deleteTranscript: {
    id: 'course-authoriong.video-uploads.file-info.transcript.deleteTranscript',
    defaultMessage: 'Удалить',
    description: 'Сообщение, отображаемое пользователю для действия удаления транскрипта',
  },
  replaceTranscript: {
    id: 'course-authoriong.video-uploads.file-info.transcript.replaceTranscript',
    defaultMessage: 'Заменить',
    description: 'Сообщение, отображаемое пользователю для действия замены транскрипта',
  },
  downloadTranscript: {
    id: 'course-authoriong.video-uploads.file-info.transcript.downloadTranscript',
    defaultMessage: 'Скачать',
    description: 'Сообщение, отображаемое пользователю для действия скачивания транскрипта',
  },
  languageSelectPlaceholder: {
    id: 'course-authoriong.video-uploads.file-info.transcripts.languageSelectPlaceholder',
    defaultMessage: 'Выберите язык',
    description: 'Плейсхолдер для выпадающего списка, который позволяет пользователям задать язык, связанный с транскриптом',
  },
  cancelDeleteLabel: {
    id: 'course-authoriong.video-uploads.file-info.transcripts.cancelDeleteLabel',
    defaultMessage: 'Отмена',
    description: 'Метка для кнопки, которая позволяет пользователям остановить процесс удаления транскрипта',
  },
  confirmDeleteLabel: {
    id: 'course-authoriong.video-uploads.file-info.transcripts.confirmDeleteLabel',
    defaultMessage: 'Удалить',
    description: 'Метка для кнопки, которая позволяет пользователям подтвердить процесс удаления транскрипта',
  },
  deleteConfirmationMessage: {
    id: 'course-authoriong.video-uploads.file-info.transcripts.deleteConfirmationMessage',
    defaultMessage: 'Вы уверены, что хотите удалить этот транскрипт?',
    description: 'Предупреждение, которое позволяет пользователям выбрать следующий шаг в процессе удаления транскрипта',
  },
  deleteConfirmationHeader: {
    id: 'course-authoriong.video-uploads.file-info.transcripts.deleteConfirmationTitle',
    defaultMessage: 'Удалить этот транскрипт?',
    description: 'Заголовок для предупреждения, которое позволяет пользователям выбрать следующий шаг в процессе удаления транскрипта',
  },
});

export default messages;
