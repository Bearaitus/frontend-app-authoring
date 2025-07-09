import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  heading: {
    id: 'course-authoring.files-and-uploads.heading',
    defaultMessage: 'Файлы',
    description: 'Заголовок страницы',
  },
  thumbnailAltMessage: {
    id: 'course-authoring.files-and-uploads.thumbnail.alt',
    defaultMessage: 'Предварительный просмотр файла {displayName}',
    description: 'Альтернативный текст для миниатюры',
  },
  copyStudioUrlTitle: {
    id: 'course-authoring.files-and-uploads.file-info.copyStudioUrl.title',
    defaultMessage: 'URL Copy Studio',
    description: 'Подпись для кнопки URL Copy Studio в информационном модальном окне',
  },
  copyWebUrlTitle: {
    id: 'course-authoring.files-and-uploads.file-info.copyWebUrl.title',
    defaultMessage: 'URL в сети',
    description: 'Подпись для кнопки URL в сети в информационном модальном окне',
  },
  dateAddedTitle: {
    id: 'course-authoring.files-and-uploads.file-info.dateAdded.title',
    defaultMessage: 'Дата добавления',
    description: 'Заголовок раздела с датой добавления в информационном модальном окне',
  },
  fileSizeTitle: {
    id: 'course-authoring.files-and-uploads.file-info.fileSize.title',
    defaultMessage: 'Размер файла',
    description: 'Заголовок раздела с размером файла в информационном модальном окне',
  },
  studioUrlTitle: {
    id: 'course-authoring.files-and-uploads.file-info.studioUrl.title',
    defaultMessage: 'URL Studio',
    description: 'Заголовок раздела с URL Studio в информационном модальном окне',
  },
  webUrlTitle: {
    id: 'course-authoring.files-and-uploads.file-info.webUrl.title',
    defaultMessage: 'Web URL',
    description: 'Заголовок раздела с web URL в информационном модальном окне',
  },
  lockFileTitle: {
    id: 'course-authoring.files-and-uploads.file-info.lockFile.title',
    defaultMessage: 'Заблокировать файл',
    description: 'Подпись для флажка «Заблокировать файл» в информационном модальном окне',
  },
  activeCheckboxLabel: {
    id: 'course-authoring.files-and-videos.file-info.activeCheckbox.label',
    defaultMessage: 'Активные',
    description: 'Подпись для флажка «Активные» в разделе фильтра модального окна сортировки и фильтрации',
  },
  inactiveCheckboxLabel: {
    id: 'course-authoring.files-and-videos.file-info.inactiveCheckbox.label',
    defaultMessage: 'Неактивные',
    description: 'Подпись для флажка «Неактивные» в разделе фильтра модального окна сортировки и фильтрации',
  },
  lockedCheckboxLabel: {
    id: 'course-authoring.files-and-videos.sort-and-filter.modal.filter.lockedCheckbox.label',
    defaultMessage: 'Заблокированные',
    description: 'Подпись для флажка «Заблокированные» в разделе фильтра модального окна сортировки и фильтрации',
  },
  publicCheckboxLabel: {
    id: 'course-authoring.files-and-videos.sort-and-filter.modal.filter.publicCheckbox.label',
    defaultMessage: 'Публичные',
    description: 'Подпись для флажка «Публичные» в разделе фильтра модального окна сортировки и фильтрации',
  },
  codeCheckboxLabel: {
    id: 'course-authoring.files-and-videos.sort-and-filter.modal.filter.codeCheckbox.label',
    defaultMessage: 'Код',
    description: 'Подпись для флажка «Код» в разделе фильтра модального окна сортировки и фильтрации',
  },
  imageCheckboxLabel: {
    id: 'course-authoring.files-and-videos.sort-and-filter.modal.filter.imageCheckbox.label',
    defaultMessage: 'Изображения',
    description: 'Подпись для флажка «Изображения» в разделе фильтра модального окна сортировки и фильтрации',
  },
  documentCheckboxLabel: {
    id: 'course-authoring.files-and-videos.sort-and-filter.modal.filter.documentCheckbox.label',
    defaultMessage: 'Документы',
    description: 'Подпись для флажка «Документы» в разделе фильтра модального окна сортировки и фильтрации',
  },
  audioCheckboxLabel: {
    id: 'course-authoring.files-and-videos.sort-and-filter.modal.filter.audioCheckbox.label',
    defaultMessage: 'Аудио',
    description: 'Подпись для флажка «Аудио» в разделе фильтра модального окна сортировки и фильтрации',
  },
  otherCheckboxLabel: {
    id: 'course-authoring.files-and-videos.sort-and-filter.modal.filter.otherCheckbox.label',
    defaultMessage: 'Другое',
    description: 'Подпись для флажка «Другое» в разделе фильтра модального окна сортировки и фильтрации',
  },
  overwriteConfirmMessage: {
    id: 'course-authoring.files-and-videos.overwrite.modal.confirmation-message',
    defaultMessage: 'Некоторые загруженные файлы уже существуют в этом курсе. Вы хотите перезаписать следующие файлы?',
    description: 'Сообщение, отображаемое в модальном окне при загрузке файлов с существующими именами',
  },
  overwriteModalTitle: {
    id: 'course-authoring.files-and-videos.overwrite.modal.title',
    defaultMessage: 'Перезаписать файлы',
    description: 'Заголовок модального окна для подтверждения перезаписи файлов',
  },
  confirmOverwriteButtonLabel: {
    id: 'course-authoring.files-and-videos.overwrite.modal.overwrite-button.label',
    defaultMessage: 'Перезаписать',
    description: 'Сообщение, отображаемое в кнопке для подтверждения перезаписи файлов',
  },
  cancelOverwriteButtonLabel: {
    id: 'course-authoring.files-and-videos.overwrite.modal.cancel-button.label',
    defaultMessage: 'Отмена',
    description: 'Сообщение, отображаемое в кнопке для отмены загрузки',
  },
  lockFileTooltipContent: {
    id: 'course-authoring.files-and-uploads.file-info.lockFile.tooltip.content',
    defaultMessage: `По умолчанию любой пользователь может получить доступ к загруженному вами файлу,
      если он знает URL в сети, даже если он не зачислен на ваш курс.
      Вы можете предотвратить внешний доступ к файлу, заблокировав его. При
      блокировке файла URL в сети позволит получить доступ к файлу только учащимся,
      зачисленным на ваш курс и прошедшим авторизацию.`,
    description: 'Всплывающая подсказка для значка замка в таблице файлов',
  },
});
export default messages;