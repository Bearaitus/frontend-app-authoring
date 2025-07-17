import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({

  settingsWidgetTitle: {
    id: 'authoring.problemeditor.settings.settingsWidgetTitle',
    defaultMessage: 'Настройки',
    description: 'Название настроек',
  },
  showAdvanceSettingsButtonText: {
    id: 'authoring.problemeditor.settings.showAdvancedButton',
    defaultMessage: 'Показать расширенные настройки',
    description: 'Текст кнопки для показа расширенных настроек',
  },
  settingsDeleteIconAltText: {
    id: 'authoring.problemeditor.settings.delete.icon.alt',
    defaultMessage: 'Удалить ответ',
    description: 'Альтернативный текст для иконки удаления',
  },
  advancedSettingsLinkText: {
    id: 'authoring.problemeditor.settings.advancedSettingLink.text',
    defaultMessage: 'Установить значение по умолчанию в расширенных настройках',
    description: 'Текст ссылки на расширенные настройки',
  },
  hintSettingTitle: {
    id: 'authoring.problemeditor.settings.hint.title',
    defaultMessage: 'Подсказка',
    description: 'Название настроек совета',
  },
  hintInputLabel: {
    id: 'authoring.problemeditor.settings.hint.inputLabel',
    defaultMessage: 'Подсказка',
    description: 'Метка для поля ввода совета',
  },
  addHintButtonText: {
    id: 'authoring.problemeditor.settings.hint.addHintButton',
    defaultMessage: 'Добавить подсказку',
    description: 'Текст кнопки для добавления совета',
  },
  noHintSummary: {
    id: 'authoring.problemeditor.settings.hint.noHintSummary',
    defaultMessage: 'Нет',
    description: 'Текст суммирования для отсутствия советов',
  },
  hintSummary: {
    id: 'authoring.problemeditor.settings.hint.summary',
    defaultMessage: '{hint} {count, plural, =0 {} other {(+# еще)}}',
    description: 'Текст суммирования для настроек совета',
  },
  resetSettingsTitle: {
    id: 'authoring.problemeditor.settings.reset.title',
    defaultMessage: 'Показать опцию сброса',
    description: 'Название настроек сброса',
  },
  resetSettingsTrue: {
    id: 'authoring.problemeditor.settings.reset.true',
    defaultMessage: 'Да',
    description: 'Опция "Да" для сброса',
  },
  resetSettingsFalse: {
    id: 'authoring.problemeditor.settings.reset.false',
    defaultMessage: 'Нет',
    description: 'Опция "Нет" для сброса',
  },
  resetSettingText: {
    id: 'authoring.problemeditor.settings.reset.text',
    defaultMessage: 'Определяет, показывается ли кнопка "Сброс", чтобы пользователь мог сбросить свой ответ, обычно для использования в практических или формативных оценках.',
    description: 'Текст настроек сброса',
  },
  scoringSettingsTitle: {
    id: 'authoring.problemeditor.settings.scoring.title',
    defaultMessage: 'Оценка',
    description: 'Название настроек оценки',
  },
  scoringAttemptsInputLabel: {
    id: 'authoring.problemeditor.settings.scoring.attempts.inputLabel',
    defaultMessage: 'Попытки',
    description: 'Метка для поля ввода попыток',
  },
  scoringWeightInputLabel: {
    id: 'authoring.problemeditor.settings.scoring.weight.inputLabel',
    defaultMessage: 'Баллы',
    description: 'Метка для поля ввода баллов',
  },
  unlimitedAttemptsSummary: {
    id: 'authoring.problemeditor.settings.scoring.unlimited',
    defaultMessage: 'Неограниченное количество попыток',
    description: 'Текст суммирования для неограниченного количества попыток',
  },
  attemptsSummary: {
    id: 'authoring.problemeditor.settings.scoring.attempts',
    defaultMessage: '{attempts, plural, =1 {# попытка} other {# попыток}}',
    description: 'Текст суммирования для количества попыток',
  },
  unlimitedAttemptsCheckboxLabel: {
    id: 'authoring.problemeditor.settings.scoring.attempts.unlimitedCheckbox',
    defaultMessage: 'Неограниченное количество попыток',
    description: 'Метка для чекбокса неограниченного количества попыток',
  },
  weightSummary: {
    id: 'authoring.problemeditor.settings.scoring.weight',
    defaultMessage: '{weight, plural, =1 {балл} other {# балла}}',
    description: 'Текст суммирования для веса оценки',
  },
  scoringSettingsLabel: {
    id: 'authoring.problemeditor.settings.scoring.label',
    defaultMessage: 'Укажите вес оценки и количество попыток ответа',
    description: 'Описательный текст для настроек оценки',
  },
  attemptsHint: {
    id: 'authoring.problemeditor.settings.scoring.attempts.hint',
    defaultMessage: 'Если значение по умолчанию не установлено в расширенных настройках, разрешается неограниченное количество попыток',
    description: 'Текст суммирования для веса оценки',
  },
  weightHint: {
    id: 'authoring.problemeditor.settings.scoring.weight.hint',
    defaultMessage: 'Если значение не установлено, задача стоит одного балла',
    description: 'Текст суммирования для веса оценки',
  },
  showAnswerSettingsTitle: {
    id: 'authoring.problemeditor.settings.showAnswer.title',
    defaultMessage: 'Показать ответ',
    description: 'Название настроек показа ответа',
  },
  showAnswerAttemptsInputLabel: {
    id: 'authoring.problemeditor.settings.showAnswer.attempts.inputLabel',
    defaultMessage: 'Количество попыток',
    description: 'Метка для поля ввода количества попыток',
  },
  showAnswerSettingText: {
    id: 'authoring.problemeditor.settings.showAnswer.text',
    defaultMessage: 'Определите, когда пользователи могут видеть правильный ответ.',
    description: 'Текст настроек показа ответа',
  },
  timerSettingsTitle: {
    id: 'authoring.problemeditor.settings.timer.title',
    defaultMessage: 'Время между попытками',
    description: 'Название настроек таймера',
  },
  timerSummary: {
    id: 'authoring.problemeditor.settings.timer.summary',
    defaultMessage: '{time} секунд',
    description: 'Текст суммирования для настроек таймера',
  },
  timerSettingText: {
    id: 'authoring.problemeditor.settings.timer.text',
    defaultMessage: 'Секунды, которые студент должен ждать между отправками для задачи с несколькими попытками.',
    description: 'Текст настроек таймера',
  },
  timerInputLabel: {
    id: 'authoring.problemeditor.settings.timer.inputLabel',
    defaultMessage: 'Секунды',
    description: 'Метка для поля ввода таймера',
  },
  typeSettingTitle: {
    id: 'authoring.problemeditor.settings.type.title',
    defaultMessage: 'Тип',
    description: 'Название настроек типа',
  },
  SwitchButtonLabel: {
    id: 'authoring.problemeditor.settings.switchtoadvancededitor.label',
    defaultMessage: 'Переключиться на расширенный редактор',
    description: 'Кнопка для переключения на расширенный режим редактора',
  },
  ConfirmSwitchMessage: {
    id: 'authoring.problemeditor.settings.switchtoadvancededitor.ConfirmSwitchMessage',
    defaultMessage: 'Если вы используете расширенный редактор, эта задача будет преобразована в OLX и вы не сможете вернуться к простому редактору.',
    description: 'Сообщение для подтверждения переключения на расширенный редактор',
  },
  ConfirmSwitchMessageTitle: {
    id: 'authoring.problemeditor.settings.switchtoadvancededitor.ConfirmSwitchMessageTitle',
    defaultMessage: 'Преобразовать в OLX?',
    description: 'Сообщение для подтверждения переключения на расширенный редактор',
  },
  ConfirmSwitchButtonLabel: {
    id: 'authoring.problemeditor.settings.switchtoadvancededitor.ConfirmSwitchButtonLabel',
    defaultMessage: 'Переключиться на расширенный редактор',
    description: 'Сообщение для подтверждения переключения на расширенный редактор',
  },
  explanationInputLabel: {
    id: 'authoring.problemeditor.settings.showAnswer.explanation.inputLabel',
    defaultMessage: 'Объяснение',
    description: 'Метка для поля ввода объяснения',
  },
  explanationSettingText: {
    id: 'authoring.problemeditor.settings.showAnswer.explanation.text',
    defaultMessage: 'Предоставьте объяснение для правильного ответа.',
    description: 'Текст для объяснения решения',
  },
});

export default messages;
