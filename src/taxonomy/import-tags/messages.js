// @ts-check
import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  importWizardButtonCancel: {
    id: 'course-authoring.import-tags.wizard.button.cancel',
    defaultMessage: 'Отмена',
  },
  importWizardButtonNext: {
    id: 'course-authoring.import-tags.wizard.button.next',
    defaultMessage: 'Далее',
  },
  importWizardButtonPrevious: {
    id: 'course-authoring.import-tags.wizard.button.previous',
    defaultMessage: 'Назад',
  },
  importWizardButtonImport: {
    id: 'course-authoring.import-tags.wizard.button.import',
    defaultMessage: 'Импортировать',
  },
  importWizardButtonContinue: {
    id: 'course-authoring.import-tags.wizard.button.continue',
    defaultMessage: 'Продолжить',
  },
  importWizardButtonConfirm: {
    id: 'course-authoring.import-tags.wizard.button.confirm',
    defaultMessage: 'Да, импортировать файл',
  },
  importWizardStepExportTitle: {
    id: 'course-authoring.import-tags.wizard.step-export.title',
    defaultMessage: 'Обновить "{name}"',
  },
  importWizardStepExportBody: {
    id: 'course-authoring.import-tags.wizard.step-export.body',
    defaultMessage: 'Чтобы обновить эту таксономию, необходимо импортировать новый CSV или JSON файл. Текущая таксономия будет полностью заменена содержимым импортированного файла (например, если метки в текущей таксономии нет в импортированном файле, она будет удалена - как из таксономии, так и из любого контента курса, к которому она была применена).'
      + '{br}Возможно, вам захочется экспортировать таксономию в текущем состоянии перед импортом нового файла.',
  },
  importWizardStepExportCSVButton: {
    id: 'course-authoring.import-tags.wizard.step-export.button-csv',
    defaultMessage: 'CSV файл',
  },
  importWizardStepExportJSONButton: {
    id: 'course-authoring.import-tags.wizard.step-export.button-json',
    defaultMessage: 'JSON файл',
  },
  importWizardStepUploadTitle: {
    id: 'course-authoring.import-tags.wizard.step-upload.title',
    defaultMessage: 'Загрузить файл',
  },
  importWizardStepUploadClearFile: {
    id: 'course-authoring.import-tags.wizard.step-upload.clear-file',
    defaultMessage: 'Очистить файл',
  },
  importWizardStepUploadBody: {
    id: 'course-authoring.import-tags.wizard.step-upload.body',
    defaultMessage: 'Вы можете загрузить CSV или JSON файл для создания новой таксономии. Для создания файла, который вы хотите импортировать, вы можете использовать любой инструмент для работы с электронными таблицами (для CSV файлов) или любой текстовый редактор (для JSON файлов).'
    + '{br}Для примера требуемого формата загрузите {csvTemplateUrl} или {jsonTemplateUrl}.'
    + '{br}Как только файл будет готов к импорту, перетащите его в область ниже или нажмите, чтобы загрузить.',
  },
  importWizardStepReuploadBody: {
    id: 'course-authoring.import-tags.wizard.step-reupload.body',
    defaultMessage: 'Вы можете использовать любой инструмент для работы с электронными таблицами (для CSV файлов) или любой текстовый редактор (для JSON файлов) для создания '
    + 'файла, который вы хотите импортировать.'
    + '{br}Как только файл будет готов к импорту, перетащите его в область ниже или нажмите, чтобы загрузить.',
  },
  csvTemplateTitle: {
    id: 'course-authoring.import-tags.wizard.step-upload.csv-template',
    defaultMessage: 'Шаблон CSV',
  },
  jsonTemplateTitle: {
    id: 'course-authoring.import-tags.wizard.step-upload.json-template',
    defaultMessage: 'Шаблон JSON',
  },
  importWizardStepPopulateTitle: {
    id: 'course-authoring.import-tags.wizard.step-populate.title',
    defaultMessage: 'Заполнить информацию о таксономии',
  },
  importWizardStepPopulateTaxonomyName: {
    id: 'course-authoring.import-tags.wizard.step-populate.name',
    defaultMessage: 'Название таксономии',
  },
  importWizardStepPopulateTaxonomyDesc: {
    id: 'course-authoring.import-tags.wizard.step-populate.desc',
    defaultMessage: 'Описание таксономии',
  },
  importWizardStepPlanTitle: {
    id: 'course-authoring.import-tags.wizard.step-plan.title',
    defaultMessage: 'Изменения в файлах',
  },
  importWizardStepPlanBody: {
    id: 'course-authoring.import-tags.wizard.step-plan.body',
    defaultMessage: 'Импорт этого файла внесет {changeCount} изменений в существующую таксономию. '
    + 'Содержимое импортированного файла заменит все существующие значения, которые не соответствуют новым значениям.'
    + '{br}Импорт этого файла приведет к следующим обновлениям:',
  },
  importWizardStepPlanNoChanges: {
    id: 'course-authoring.import-tags.wizard.step-plan.no-changes',
    defaultMessage: 'Нет изменений',
  },
  importWizardStepConfirmTitle: {
    id: 'course-authoring.import-tags.wizard.step-confirm.title',
    defaultMessage: 'Импорт и заменить теги',
  },
  importWizardStepConfirmBody: {
    id: 'course-authoring.import-tags.wizard.step-confirm.body',
    defaultMessage: 'Внимание! Вы собираетесь внести {changeCount} изменений в существующую таксономию. Любые теги, примененные '
    + 'к контенту курса, будут обновлены или удалены. Это действие нельзя отменить.'
    + '{br}Вы уверены, что хотите продолжить импорт этого файла?',
  },
  promptTaxonomyName: {
    id: 'course-authoring.import-tags.prompt.taxonomy-name',
    defaultMessage: 'Введите название для новой таксономии',
  },
  promptTaxonomyNameRequired: {
    id: 'course-authoring.import-tags.prompt.taxonomy-name.required',
    defaultMessage: 'Вы должны ввести название для новой таксономии',
  },
  promptTaxonomyExportId: {
    id: 'course-authoring.import-tags.prompt.taxonomy-export-id',
    defaultMessage: "Введите ID экспорта для новой таксономии. Должны использоваться только буквенно-цифровые символы или '_' '-' '.'",
  },
  promptTaxonomyExportIdRequired: {
    id: 'course-authoring.import-tags.prompt.taxonomy-export-id.required',
    defaultMessage: 'Вы должны ввести ID экспорта для новой таксономии.',
  },
  promptTaxonomyExportIdInvalid: {
    id: 'course-authoring.import-tags.prompt.taxonomy-export-id.invalid',
    defaultMessage: "Некорректный ID экспорта. Должны использоваться только буквенно-цифровые символы или '_' '-' '.'",
  },
  promptTaxonomyDescription: {
    id: 'course-authoring.import-tags.prompt.taxonomy-description',
    defaultMessage: 'Введите описание для новой таксономии',
  },
  importTaxonomySuccess: {
    id: 'course-authoring.import-tags.success',
    defaultMessage: 'Таксономия успешно импортирована',
  },
  importTaxonomyError: {
    id: 'course-authoring.import-tags.error',
    defaultMessage: 'Импорт не удался - ознакомьтесь с подробностями в консоли браузера',
  },
  importNewTaxonomyToast: {
    id: 'course-authoring.import-tags.new.toast.success',
    defaultMessage: '"{name}" импортирована',
  },
  importTaxonomyToast: {
    id: 'course-authoring.import-tags.toast.success',
    defaultMessage: '"{name}" обновлена',
  },
  importTaxonomyErrorAlert: {
    id: 'course-authoring.import-tags.error-alert.title',
    defaultMessage: 'Ошибка импорта',
  },
});
export default messages;