export const DATE_FORMAT = 'MM/dd/yyyy';
export const TIME_FORMAT = 'HH:mm';
export const DATE_TIME_FORMAT = 'YYYY-MM-DDTHH:mm:ss\\Z';
export const COMMA_SEPARATED_DATE_FORMAT = 'MMMM D, YYYY';
export const DEFAULT_EMPTY_WYSIWYG_VALUE = '<p>&nbsp;</p>';
export const STATEFUL_BUTTON_STATES = {
  default: 'default',
  pending: 'pending',
  error: 'error',
};

export const USER_ROLES = {
  admin: 'admin',
  staff: 'mentor',
};

export const BADGE_STATES = {
  danger: 'danger',
  secondary: 'secondary',
};

export const NOTIFICATION_MESSAGES = {
  adding: 'Добавление',
  saving: 'Сохранение',
  duplicating: 'Дублирование',
  deleting: 'Удаление',
  copying: 'Копирование',
  pasting: 'Добавление',
  discardChanges: 'Отменить изменение',
  publishing: 'Публикация',
  hidingFromStudents: 'Скрыть от пользователей',
  makingVisibleToStudents: 'Сделать видимым для пользователей',
  empty: '',
};

export const DEFAULT_TIME_STAMP = '00:00';

export const COURSE_CREATOR_STATES = {
  unrequested: 'unrequested',
  pending: 'pending',
  granted: 'granted',
  denied: 'denied',
  disallowedForThisSite: 'disallowed_for_this_site',
};

export const DECODED_ROUTES = {
  COURSE_UNIT: [
    '/container/:blockId/:sequenceId',
    '/container/:blockId',
  ],
};

export const UPLOAD_FILE_MAX_SIZE = 20 * 1024 * 1024; // 100mb

export const COURSE_BLOCK_NAMES = ({
  chapter: { id: 'chapter', name: 'Модуль' },
  sequential: { id: 'sequential', name: 'Часть' },
  vertical: { id: 'vertical', name: 'Страница' },
  component: { id: 'component', name: 'Блок' },
});

export const STUDIO_CLIPBOARD_CHANNEL = 'studio_clipboard_channel';

export const CLIPBOARD_STATUS = {
  loading: 'загрузка',
  ready: 'готов',
  expired: 'занят',
  error: 'ошибка',
};

export const STRUCTURAL_XBLOCK_TYPES = ['vertical', 'sequential', 'chapter', 'course'];

export const REGEX_RULES = {
  specialCharsRule: /^[a-zA-Z0-9_\-.'*~\s]+$/,
  noSpaceRule: /^\S*$/,
};
