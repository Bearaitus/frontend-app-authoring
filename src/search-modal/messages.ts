import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  searchAllCourses: {
    id: 'course-authoring.course-search.searchAllCourses',
    defaultMessage: 'Все курсы',
    description: 'Опция для получения результатов поиска по всем курсам.',
  },
  searchThisCourse: {
    id: 'course-authoring.course-search.searchThisCourse',
    defaultMessage: 'Только этот курс',
    description: 'Опция для ограничения результатов поиска только текущим курсом.',
  },
  title: {
    id: 'course-authoring.course-search.title',
    defaultMessage: 'Поиск',
    description: 'Заголовок диалогового окна поиска по курсу',
  },
  showMore: {
    id: 'course-authoring.course-search.showMore',
    defaultMessage: 'Показать больше',
    description: 'Показать больше тегов / опций фильтрации',
  },
  showMoreResults: {
    id: 'course-authoring.course-search.showMoreResults',
    defaultMessage: 'Показать больше результатов',
    description: 'Показать больше результатов - кнопка для добавления в список результатов путем загрузки дополнительных данных с сервера',
  },
  loadingMoreResults: {
    id: 'course-authoring.course-search.loadingMoreResults',
    defaultMessage: 'Загрузка дополнительных результатов',
    description: 'Загрузка дополнительных результатов - кнопка показывает это сообщение во время загрузки дополнительных результатов',
  },
  emptySearchTitle: {
    id: 'course-authoring.course-search.emptySearchTitle',
    defaultMessage: 'Начните поиск, чтобы найти контент',
    description: 'Заголовок, отображаемый, когда пользователь еще не ввел ключевое слово',
  },
  emptySearchSubtitle: {
    id: 'course-authoring.course-search.emptySearchSubtitle',
    defaultMessage: 'Найдите разделы, подразделы, модули и компоненты',
    description: 'Подзаголовок, отображаемый, когда пользователь еще не ввел ключевое слово',
  },
  noResultsTitle: {
    id: 'course-authoring.course-search.noResultsTitle',
    defaultMessage: 'По вашему запросу ничего не найдено',
    description: 'Заголовок, отображаемый, когда поиск не дал результатов',
  },
  noResultsSubtitle: {
    id: 'course-authoring.course-search.noResultsSubtitle',
    defaultMessage: 'Пожалуйста, попробуйте другой поисковый запрос или фильтр',
    description: 'Подзаголовок, отображаемый, когда поиск не дал результатов',
  },
  openInNewWindow: {
    id: 'course-authoring.course-search.openInNewWindow',
    defaultMessage: 'Открыть в новом окне',
    description: 'Alt текст для кнопки, которая открывает результат поиска в новом окне',
  },
  searchError: {
    id: 'course-authoring.course-search.searchError',
    defaultMessage: 'Произошла ошибка. Не удалось загрузить результаты поиска.',
    description: 'Сообщение об ошибке, отображаемое, когда поиск не работает.',
  },
});
export default messages;