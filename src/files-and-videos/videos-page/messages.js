import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  heading: {
    id: 'course-authoring.video-uploads.heading',
    defaultMessage: 'Видео',
    description: 'Заголовок страницы',
  },
  transcriptSettingsButtonLabel: {
    id: 'course-authoring.video-uploads.transcript-settings.button.toggle',
    defaultMessage: 'Настройки транскрипции',
    description: 'Текст кнопки настроек транскрипции',
  },
  thumbnailAltMessage: {
    id: 'course-authoring.video-uploads.thumbnail.alt',
    defaultMessage: 'Эскиз видео {displayName}',
    description: 'Альтернативный текст для эскиза видео',
  },
  activeCheckboxLabel: {
    id: 'course-authoring.files-and-videos.sort-and-filter.modal.filter.activeCheckbox.label',
    defaultMessage: 'Активные',
    description: 'Подпись для флажка «Активные» в модальном окне сортировки и фильтрации',
  },
  inactiveCheckboxLabel: {
    id: 'course-authoring.files-and-videos.sort-and-filter.modal.filter.inactiveCheckbox.label',
    defaultMessage: 'Неактивные',
    description: 'Подпись для флажка «Неактивные» в модальном окне сортировки и фильтрации',
  },
  transcribedCheckboxLabel: {
    id: 'course-authoring.files-and-videos.sort-and-filter.modal.filter.transcribedCheckbox.label',
    defaultMessage: 'Транскрибированные',
    description: 'Подпись для флажка «Транскрибированные» в модальном окне сортировки и фильтрации',
  },
  notTranscribedCheckboxLabel: {
    id: 'course-authoring.files-and-videos.sort-and-filter.modal.filter.notTranscribedCheckbox.label',
    defaultMessage: 'Не транскрибированные',
    description: 'Подпись для флажка «Не транскрибированные» в модальном окне сортировки и фильтрации',
  },
  processingCheckboxLabel: {
    id: 'course-authoring.files-and-videos.sort-and-filter.modal.filter.processingCheckbox.label',
    defaultMessage: 'В обработке',
    description: 'Подпись для флажка «В обработке» в модальном окне сортировки и фильтрации',
  },
  failedCheckboxLabel: {
    id: 'course-authoring.files-and-videos.sort-and-filter.modal.filter.failedCheckbox.label',
    defaultMessage: 'Не удалось',
    description: 'Подпись для флажка «Не удалось» в модальном окне сортировки и фильтрации',
  },
  videoUploadAlertLabel: {
    id: 'course-authoring.files-and-videos.video-upload-alert',
    defaultMessage: 'Загрузка в процессе. Пожалуйста, дождитесь завершения загрузки, прежде чем покидать эту страницу.',
    description: 'Сообщение об оповещении загрузки видео',
  },
  videoUploadTrackerModalTitle: {
    id: 'course-authoring.files-and-videos.video-upload-tracker-modal.title',
    defaultMessage: 'Загрузка в процессе',
    description: 'Заголовок модального окна отслеживания загрузки',
  },
  videoUploadTrackerAlertTitle: {
    id: 'course-authoring.files-and-videos.video-upload-tracker-alert.title',
    defaultMessage: 'Не закрывайте и не обновляйте эту страницу или вкладку до завершения загрузки',
    description: 'Заголовок оповещения отслеживания загрузки',
  },
  videoUploadTrackerAlertBodyMessage: {
    id: 'course-authoring.files-and-videos.video-upload-tracker-alert.body.message',
    defaultMessage: 'Выход сейчас приведет к удалению всего прогресса загрузки. Это всплывающее окно закроется после успешной загрузки.',
    description: 'Текст тела оповещения отслеживания загрузки',
  },
  videoUploadTrackerAlertEditMessage: {
    id: 'course-authoring.files-and-videos.video-upload-tracker-alert.edit.message',
    defaultMessage: 'Хотите продолжить редактирование в Studio во время этой загрузки?',
    description: 'Сообщение продолжения редактирования для оповещения отслеживания загрузки',
  },
  videoUploadTrackerAlertEditHyperlinkLabel: {
    id: 'course-authoring.files-and-videos.video-upload-tracker-alert.edit-hyperlink.message',
    defaultMessage: 'Открыть новую вкладку Studio',
    description: 'Текст ссылки для открытия новой вкладки',
  },
  videoUploadTrackerModalBody: {
    id: 'course-authoring.files-and-videos.video-upload-tracker-modal.body.message',
    defaultMessage: 'Следующие ({uploadCount}) {uploadCount, plural, one {видео} other {видео}} загружаются:',
    description: 'Сообщение для тела модального окна отслеживания загрузки',
  },
  videoUploadTrackerAlertCancelLabel: {
    id: 'course-authoring.files-and-videos.video-upload-tracker-alert.cancel-button.label',
    defaultMessage: 'Отменить загрузку',
    description: 'Текст кнопки отмены',
  },
});
export default messages;