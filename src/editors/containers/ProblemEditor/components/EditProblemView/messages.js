import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  saveWarningModalCancelButtonLabel: {
    id: 'authoring.problemEditor.editProblemView.saveWarningModal.cancelButton.label',
    defaultMessage: 'Отмена',
    description: 'Текст для кнопки отмены в модальном окне предупреждения о сохранении',
  },
  saveWarningModalSaveButtonLabel: {
    id: 'authoring.problemEditor.editProblemView.saveWarningModal.saveButton.label',
    defaultMessage: 'ОК',
    description: 'Текст для кнопки сохранения в модальном окне предупреждения о сохранении',
  },
  saveWarningModalBodyQuestion: {
    id: 'authoring.problemEditor.editProblemView.saveWarningModal.body.question',
    defaultMessage: 'Вы уверены, что хотите выйти из редактора?',
    description: 'Вопрос в теле модального окна предупреждения о сохранении',
  },
  noAnswerTitle: {
    id: 'authoring.problemEditor.editProblemView.saveWarningModal.noAnswer.title',
    defaultMessage: 'Ответ не указан',
    description: 'Заголовок модального окна об отсутствии ответа',
  },
  noAnswerBodyExplanation: {
    id: 'authoring.problemEditor.editProblemView.saveWarningModal.noAnswer.body.explanation',
    defaultMessage: 'Правильный ответ не указан.',
    description: 'Пояснение в теле модального окна об отсутствии ответа',
  },
  olxSettingDiscrepancyTitle: {
    id: 'authoring.problemEditor.editProblemView.saveWarningModal.olxSettingDiscrepancy.title',
    defaultMessage: 'Несоответствие настроек OLX',
    description: 'Заголовок модального окна о несоответствии настроек',
  },
  olxSettingDiscrepancyBodyExplanation: {
    id: 'authoring.problemEditor.editProblemView.saveWarningModal.olxSettingDiscrepancy.body.explanation',
    defaultMessage: `Обнаружено несоответствие между настройками, определенными в теге problem OLX, и настройками, выбранными на боковой панели. Настройки, определенные в теге problem OLX, будут сохранены, а соответствующие значения на боковой панели будут отменены.`,
    description: 'Пояснение в теле модального окна о несоответствии настроек',
  },
});
export default messages;