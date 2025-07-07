import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  rowStatusMessage: {
    id: 'course-authoring.files-and-upload.rowStatus.message',
    defaultMessage: 'Показано {fileCount} из {rowCount}',
    description: 'Это сообщение показано, чтобы уведомить пользователя о количестве файлов, которые отображаются',
  },
  apiStatusToastMessage: {
    id: 'course-authoring.files-and-upload.apiStatus.message',
    defaultMessage: '{actionType} {selectedRowCount} {selectedRowCount, plural, one {{fileType}} other {{fileType}s}}',
    description: 'Это сообщение показано в тосте, когда действие применяется к файлам',
  },
  apiStatusAddingAction: {
    id: 'course-authoring.files-and-upload.apiStatus.addingAction.message',
    defaultMessage: 'Добавление',
    description: 'Это сообщение используется в тосте, когда файлы добавляются',
  },
  apiStatusDeletingAction: {
    id: 'course-authoring.files-and-upload.apiStatus.deletingAction.message',
    defaultMessage: 'Удаление',
    description: 'Это сообщение используется в тосте, когда файлы удаляются',
  },
  apiStatusDownloadingAction: {
    id: 'course-authoring.files-and-upload.apiStatus.downloadingAction.message',
    defaultMessage: 'Скачивание',
    description: 'Это сообщение используется в тосте, когда файлы скачиваются',
  },
  fileSizeError: {
    id: 'course-authoring.files-and-upload.addFiles.error.fileSize',
    defaultMessage: 'Загруженные файлы должны быть 20 МБ или меньше. Пожалуйста, уменьшите размер файла и попробуйте снова.',
    description: 'Это сообщение об ошибке показано, когда пользователь пытается загрузить файл больше 20 МБ',
  },
  noResultsFoundMessage: {
    id: 'course-authoring.files-and-upload.table.noResultsFound.message',
    defaultMessage: 'Нет результатов',
    description: 'Это сообщение показано, когда нет файлов, найденных по имени',
  },
  addFilesButtonLabel: {
    id: 'course-authoring.files-and-upload.addFiles.button.label',
    defaultMessage: 'Добавить {fileType}s',
    description: 'Метка для кнопки добавления файлов, название меняется в зависимости от страницы',
  },
  actionsButtonLabel: {
    id: 'course-authoring.files-and-upload.action.button.label',
    defaultMessage: 'Действия',
    description: 'Метка для кнопки действий',
  },
  errorAlertMessage: {
    id: 'course-authoring.files-and-upload.errorAlert.message',
    defaultMessage: '{message}',
    description: 'Оболочка сообщения для предупреждения об ошибке',
  },
  transcriptionErrorMessage: {
    id: 'course-authoring.files-and-uploads.file-info.transcripts.error.alert',
    defaultMessage: 'Транскрипт не удался: "{error}"',
    description: 'Сообщение об ошибке транскрипта в информационном модальном окне',
  },
  usageTitle: {
    id: 'course-authoring.files-and-uploads.file-info.usage.title',
    defaultMessage: 'Использование',
    description: 'Название для раздела информации об использовании в информационном модальном окне',
  },
  usageLoadingMessage: {
    id: 'course-authoring.files-and-uploads.file-info.usage.loading.message',
    defaultMessage: 'Загрузка',
    description: 'Текст для экрана чтения при загрузке информации об использовании',
  },
  usageNotInUseMessage: {
    id: 'course-authoring.files-and-uploads.file-info.usage.notInUse.message',
    defaultMessage: 'В настоящее время не используется',
    description: 'Сообщение для раздела информации об использовании, когда файл не используется в курсе',
  },
  copyVideoIdTitle: {
    id: 'course-authoring.files-and-uploads.cardMenu.copyVideoIdTitle',
    defaultMessage: 'Скопировать ID видео',
    description: 'Метка для кнопки копирования ID видео в меню карточки',
  },
  copyStudioUrlTitle: {
    id: 'course-authoring.files-and-uploads.cardMenu.copyStudioUrlTitle',
    defaultMessage: 'Скопировать URL студии',
    description: 'Метка для кнопки копирования URL студии в меню карточки',
  },
  copyWebUrlTitle: {
    id: 'course-authoring.files-and-uploads.cardMenu.copyWebUrlTitle',
    defaultMessage: 'Скопировать URL веб-страницы',
    description: 'Метка для кнопки копирования URL веб-страницы в меню карточки',
  },
  downloadTitle: {
    id: 'course-authoring.files-and-uploads.cardMenu.downloadTitle',
    defaultMessage: 'Скачать',
    description: 'Метка для кнопки скачивания в меню карточки',
  },
  lockMenuTitle: {
    id: 'course-authoring.files-and-uploads.cardMenu.lockTitle',
    defaultMessage: 'Заблокировать',
    description: 'Метка для кнопки блокировки в меню карточки',
  },
  lockFileTooltipContent: {
    id: 'course-authoring.files-and-uploads.file-info.lockFile.tooltip.content',
    defaultMessage: `По умолчанию, любой может получить доступ к файлу, который вы загружаете, если он знает URL веб-страницы, даже если он не записан на ваш курс.
      Вы можете предотвратить внешний доступ к файлу, заблокировав его. Когда вы блокируете файл, URL веб-страницы позволяет только учащимся, записанным на ваш курс и авторизованным, получить доступ к файлу.`,
    description: 'Сообщение подсказки для иконки блокировки в представлении таблицы файлов',
  },
  unlockMenuTitle: {
    id: 'course-authoring.files-and-uploads.cardMenu.unlockTitle',
    defaultMessage: 'Разблокировать',
    description: 'Метка для кнопки разблокировки в меню карточки',
  },
  infoTitle: {
    id: 'course-authoring.files-and-uploads.cardMenu.infoTitle',
    defaultMessage: 'Информация',
    description: 'Метка для кнопки информации в меню карточки',
  },
  downloadEncodingsTitle: {
    id: 'course-authoring.files-and-uploads.cardMenu.downloadEncodingsTitle',
    defaultMessage: 'Скачать список видео (.csv)',
    description: 'Метка для кнопки скачивания списка видео в меню действий',
  },
  deleteTitle: {
    id: 'course-authoring.files-and-uploads.cardMenu.deleteTitle',
    defaultMessage: 'Удалить',
    description: 'Метка для кнопки удаления в меню карточки',
  },
  deleteConfirmationTitle: {
    id: 'course-authoring.files-and-uploads.deleteConfirmation.title',
    defaultMessage: 'Удалить {fileNumber, plural, one {{fileName}} other {{fileNumber} {fileType}s}}',
    description: 'Название для модального окна подтверждения удаления',
  },
  deleteConfirmationMessage: {
    id: 'course-authoring.files-and-uploads.deleteConfirmation.message',
    defaultMessage: `
      Вы уверены, что хотите удалить {fileNumber, plural, one {{fileName}} other {{fileNumber} {fileType}s}}?
      Это действие нельзя отменить и может повредить ваш курс, если {fileNumber, plural, one {{fileType} используется} other {{fileType}s используются}}
      в содержании курса, расширенных настройках, обновлениях или расписании и деталях.
    `,
    description: 'Сообщение, представленное пользователю, перечисляющее количество файлов, которые он пытается удалить, в модальном окне подтверждения удаления',
  },
  deleteConfirmationUsageMessage: {
    id: 'course-authoring.files-and-uploads.deleteConfirmation.usage-message',
    defaultMessage: 'Следующие {fileNumber, plural, one {{fileType} используется} other {{fileType}s используются}} используются в содержании курса. Рассмотрите возможность обновления содержания перед удалением.',
    description: 'Сообщение, перечисляющее, где файлы, которые пользователь пытается удалить, используются в курсе',
  },
  deleteFileButtonLabel: {
    id: 'course-authoring.files-and-uploads.deleteConfirmation.deleteFile.label',
    defaultMessage: 'Удалить',
    description: 'Метка для кнопки удаления в модальном окне подтверждения удаления',
  },
  cancelButtonLabel: {
    id: 'course-authoring.files-and-uploads.cancelButton.label',
    defaultMessage: 'Отмена',
    description: 'Метка для кнопки отмены в модальных окнах',
  },
  sortButtonLabel: {
    id: 'course-authoring.files-and-uploads.sortButton.label',
    defaultMessage: 'Сортировать и фильтровать',
    description: 'Метка для кнопки, которая открывает модальное окно сортировки и фильтрации',
  },
  sortModalTitleLabel: {
    id: 'course-authoring.files-and-uploads.sortModal.title',
    defaultMessage: 'Сортировать по',
    description: 'Название для раздела "Сортировать по" в модальном окне сортировки и фильтрации',
  },
  sortByNameAscending: {
    id: 'course-authoring.files-and-uploads.sortByNameAscendingButton.label',
    defaultMessage: 'Имя (А-Я)',
    description: 'Метка для радиокнопки сортировки по имени в алфавитном порядке в модальном окне сортировки и фильтрации',
  },
  sortByNewest: {
    id: 'course-authoring.files-and-uploads.sortByNewestButton.label',
    defaultMessage: 'Самые новые',
    description: 'Метка для радиокнопки сортировки по дате добавления в порядке убывания в модальном окне сортировки и фильтрации',
  },
  sortBySizeDescending: {
    id: 'course-authoring.files-and-uploads.sortBySizeDescendingButton.label',
    defaultMessage: 'Размер файла (От большего к меньшему)',
    description: 'Метка для радиокнопки сортировки по размеру файла в порядке убывания в модальном окне сортировки и фильтрации',
  },
  sortByNameDescending: {
    id: 'course-authoring.files-and-uploads.sortByNameDescendingButton.label',
    defaultMessage: 'Имя (Я-А)',
    description: 'Метка для радиокнопки сортировки по имени в обратном алфавитном порядке в модальном окне сортировки и фильтрации',
  },
  sortByOldest: {
    id: 'course-authoring.files-and-uploads.sortByOldestButton.label',
    defaultMessage: 'Самые старые',
    description: 'Метка для радиокнопки сортировки по дате добавления в порядке возрастания в модальном окне сортировки и фильтрации',
  },
  sortBySizeAscending: {
    id: 'course-authoring.files-and-uploads.sortBySizeAscendingButton.label',
    defaultMessage: 'Размер файла (От меньшего к большему)',
    description: 'Метка для радиокнопки сортировки по размеру файла в порядке возрастания в модальном окне сортировки и фильтрации',
  },
  applySortButton: {
    id: 'course-authoring.files-and-uploads.applyySortButton.label',
    defaultMessage: 'Применить',
    description: 'Метка для кнопки применения сортировки в модальном окне сортировки и фильтрации',
  },
  failedLabel: {
    id: 'course-authoring.files-and-uploads.filter.failed.label',
    defaultMessage: 'Не удалось',
    description: 'Метка для кнопки сортировки по неудачным файлам в модальном окне сортировки и фильтрации',
  },
  uploadErrorAlertTitle: {
    id: 'course-authoring.files-and-uploads.error.upload.title',
    defaultMessage: 'Ошибка загрузки',
    description: 'Название для предупреждения об ошибке загрузки',
  },
});

export default messages;
