import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({

  titleLabel: {
    id: 'authoring.videoeditor.videoSource.title.label',
    defaultMessage: 'Источник видео',
    description: 'Название для виджета источника видео',
  },
  videoIdLabel: {
    id: 'authoring.videoeditor.videoSource.videoId.label',
    defaultMessage: 'ID видео',
    description: 'Метка для поля ID видео',
  },
  videoIdFeedback: {
    id: 'authoring.videoeditor.videoSource.videoId.feedback',
    defaultMessage: 'Если вам был присвоен ID видео, введите его здесь.',
    description: 'Вспомогательный текст для поля ID видео',
  },
  videoUrlLabel: {
    id: 'authoring.videoeditor.videoSource.videoUrl.label',
    defaultMessage: 'URL видео',
    description: 'Метка для поля URL видео',
  },
  videoUrlFeedback: {
    id: 'authoring.videoeditor.videoSource.videoUrl.feedback',
    defaultMessage: `URL вашего видео. Это может быть URL YouTube или ссылка на файл видео .mp4, .ogg или .webm, размещенный в другом месте в интернете.`,
    description: 'Вспомогательный текст для поля URL видео',
  },
  videoIdChangeAlert: {
    id: 'authoring.videoeditor.videoIdChangeAlert.message',
    defaultMessage: 'Поле ID видео было изменено, пожалуйста, проверьте значения URL видео и запасного URL и обновите их, если необходимо.',
    description: 'Сообщение для предупреждения, которое появляется при изменении ID видео',
  },
  fallbackVideoTitle: {
    id: 'authoring.videoeditor.videoSource.fallbackVideo.title',
    defaultMessage: 'Запасные видео',
    description: 'Название для раздела запасных видео',
  },
  fallbackVideoMessage: {
    id: 'authoring.videoeditor.videoSource.fallbackVideo.message',
    defaultMessage: `Чтобы гарантировать, что все пользователи могут получить доступ к видео, мы рекомендуем предоставлять дополнительные видео в форматах .mp4 и .webm. Первое перечисленное видео, совместимое с устройством учащегося, будет проигрываться.`,
    description: 'Текст, объясняющий причину запасных видео',
  },
  fallbackVideoLabel: {
    id: 'authoring.videoeditor.videoSource.fallbackVideo.label',
    defaultMessage: 'URL видео',
    description: 'Метка для поля URL запасного видео',
  },
  deleteFallbackVideo: {
    id: 'authoring.videoeditor.videoSource.deleteFallbackVideo',
    defaultMessage: 'Удалить',
    description: 'Сообщение, отображаемое пользователю для действия удаления запасного видео',
  },
  allowDownloadCheckboxLabel: {
    id: 'authoring.videoeditor.videoSource.allowDownloadCheckboxLabel',
    defaultMessage: 'Разрешить скачивание видео',
    description: 'Метка для чекбокса разрешения скачивания видео',
  },
  allowDownloadTooltipMessage: {
    id: 'authoring.videoeditor.videoSource.allowDownloadTooltipMessage',
    defaultMessage: `Разрешить учащимся скачивать версии этого видео в разных форматах, если они не могут использовать проигрыватель видео или не имеют доступа к YouTube.`,
    description: 'Сообщение для чекбокса разрешения скачивания видео',
  },
  allowVideoSharingCheckboxLabel: {
    id: 'authoring.videoeditor.videoSource.allowVideoSharingCheckboxLabel',
    defaultMessage: 'Разрешить делиться этим видео в социальных сетях.',
    description: 'Метка для чекбокса разрешения делиться видео',
  },
  allowVideoSharingTooltipMessage: {
    id: 'authoring.videoeditor.videoSource.allowVideoSharingTooltipMessage',
    defaultMessage: `Разрешить учащимся делиться этим видео публично в социальных сетях. Видео будет доступно для всех. Ссылки на страницу курса и на запись в курс будут отображаться рядом с видео.`,
    description: 'Сообщение для чекбокса разрешения делиться видео',
  },
  addButtonLabel: {
    id: 'authoring.videoeditor.videoSource.fallbackVideo.addButtonLabel',
    defaultMessage: 'Добавить URL видео',
    description: 'Метка для кнопки добавления URL видео',
  },
});

export default messages;
