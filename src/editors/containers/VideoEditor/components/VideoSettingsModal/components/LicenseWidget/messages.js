import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  title: {
    id: 'authoring.videoeditor.license.title',
    defaultMessage: 'Лицензия',
    description: 'Заголовок виджета лицензии',
  },
  licenseTypeLabel: {
    id: 'authoring.videoeditor.license.licenseType.label',
    defaultMessage: 'Тип лицензии',
    description: 'Подпись для поля выбора типа лицензии',
  },
  detailsSubsectionTitle: {
    id: 'authoring.videoeditor.license.detailsSubsection.title',
    defaultMessage: 'Детали лицензии',
    description: 'Заголовок раздела с деталями лицензии',
  },
  displaySubsectionTitle: {
    id: 'authoring.videoeditor.license.displaySubsection.title',
    defaultMessage: 'Отображение лицензии',
    description: 'Заголовок раздела отображения лицензии',
  },
  addLicenseButtonLabel: {
    id: 'authoring.videoeditor.license.add.label',
    defaultMessage: 'Добавить лицензию для этого видео',
    description: 'Подпись для кнопки добавления лицензии',
  },
  deleteLicenseSelection: {
    id: 'authoring.videoeditor.license.deleteLicenseSelection',
    defaultMessage: 'Удалить и применить лицензию уровня курса',
    description: 'Сообщение, отображаемое пользователю для удаления выбора лицензии',
  },
  allRightsReservedIconsLabel: {
    id: 'authoring.videoeditor.license.allRightsReservedIcons.label',
    defaultMessage: 'Все права защищены',
    description: 'Подпись для ряда иконок "Все права защищены"',
  },
  creativeCommonsIconsLabel: {
    id: 'authoring.videoeditor.license.creativeCommonsIcons.label',
    defaultMessage: 'Часть прав защищена',
    description: 'Подпись для ряда иконок Creative Commons',
  },
  viewLicenseDetailsLabel: {
    id: 'authoring.videoeditor.license.viewLicenseDetailsLabel.label',
    defaultMessage: 'Посмотреть детали лицензии',
    description: 'Подпись для кнопки просмотра деталей лицензии',
  },
  courseLevelDescription: {
    id: 'authoring.videoeditor.license.courseLevelDescription.helperText',
    defaultMessage: 'Эта лицензия установлена на уровне курса',
    description: 'Всплывающая подсказка для типа лицензии при использовании лицензии курса',
  },
  courseLicenseDescription: {
    id: 'authoring.videoeditor.license.courseLicenseDescription.message',
    defaultMessage: 'Лицензии, установленные на уровне курса, отображаются внизу страниц с материалами курса.',
    description: 'Сообщение, объясняющее, где устанавливаются лицензии уровня курса',
  },
  libraryLevelDescription: {
    id: 'authoring.videoeditor.license.libraryLevelDescription.helperText',
    defaultMessage: 'Эта лицензия установлена на уровне библиотеки',
    description: 'Всплывающая подсказка для типа лицензии при использовании лицензии библиотеки',
  },
  libraryLicenseDescription: {
    id: 'authoring.videoeditor.license.libraryLicenseDescription.message',
    defaultMessage: 'Лицензии, установленные на уровне библиотеки, отображаются в конкретном видео библиотеки.',
    description: 'Сообщение, объясняющее, где устанавливаются лицензии уровня библиотеки',
  },
  defaultLevelDescription: {
    id: 'authoring.videoeditor.license.defaultLevelDescription.helperText',
    defaultMessage: 'Эта лицензия установлена конкретно для этого видео',
    description: 'Всплывающая подсказка для типа лицензии при выборе для конкретного видео',
  },
  defaultLicenseDescription: {
    id: 'authoring.videoeditor.license.defaultLicenseDescription.message',
    defaultMessage: 'Когда у видео есть лицензия, отличная от лицензии курса в целом, учащиеся видят лицензию внизу плеера видео.',
    description: 'Сообщение, объясняющее, где пользователи видят лицензии для конкретных видео',
  },
  attributionCheckboxLabel: {
    id: 'authoring.videoeditor.license.attributionCheckboxLabel',
    defaultMessage: 'Указание авторства',
    description: 'Подпись для поля «Указание авторства»',
  },
  attributionSectionDescription: {
    id: 'authoring.videoeditor.license.attributionSectionDescription',
    defaultMessage: 'Разрешить другим копировать, распространять, отображать и выполнять вашу работу, защищенную авторским правом, но только если они указывают авторство так, как вы этого требуете. В настоящее время этот вариант обязателен.',
    description: 'Раздел карты указания авторства, определяющий лицензию на указание авторства',
  },
  noncommercialCheckboxLabel: {
    id: 'authoring.videoeditor.license.noncommercialCheckboxLabel',
    defaultMessage: 'Некоммерческое использование',
    description: 'Подпись для поля «Некоммерческое использование»',
  },
  noncommercialSectionDescription: {
    id: 'authoring.videoeditor.license.noncommercialSectionDescription',
    defaultMessage: 'Разрешить другим копировать, распространять, отображать и выполнять вашу работу - и производные работы, основанные на ней - только в некоммерческих целях.',
    description: 'Раздел карты некоммерческого использования, определяющий лицензию на некоммерческое использование',
  },
  noDerivativesCheckboxLabel: {
    id: 'authoring.videoeditor.license.noDerivativesCheckboxLabel',
    defaultMessage: 'Без производных работ',
    description: 'Подпись для поля «Без производных работ»',
  },
  noDerivativesSectionDescription: {
    id: 'authoring.videoeditor.license.noDerivativesSectionDescription',
    defaultMessage: 'Разрешить другим копировать, распространять, отображать и выполнять только дословные копии вашей работы, а не производные работы, основанные на ней. Этот вариант несовместим с «Share Alike».',
    description: 'Раздел карты «Без производных работ», определяющий лицензию на «Без производных работ»',
  },
  shareAlikeCheckboxLabel: {
    id: 'authoring.videoeditor.license.shareAlikeCheckboxLabel',
    defaultMessage: 'Share Alike (Одинаковая лицензия)',
    description: 'Подпись для поля «Share Alike»',
  },
  shareAlikeSectionDescription: {
    id: 'authoring.videoeditor.license.shareAlikeSectionDescription',
    defaultMessage: 'Разрешить другим распространять производные работы только на условиях лицензии, идентичной лицензии, регулирующей вашу работу. Этот вариант несовместим с «No Derivatives».',
    description: 'Раздел карты «Share Alike», определяющий лицензию на «Share Alike»',
  },
  allRightsReservedSectionMessage: {
    id: 'authoring.videoeditor.license.allRightsReservedSectionMessage',
    defaultMessage: 'Вы сохраняете все права на свою работу.',
    description: 'Сообщение раздела «Все права защищены»',
  },
});
export default messages;