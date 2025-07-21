import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  searchAllCourses: {
    id: 'course-authoring.course-search.searchAllCourses',
    defaultMessage: 'All Courses',
    description: 'Option to receive search results across all courses.',
  },
  searchThisCourse: {
    id: 'course-authoring.course-search.searchThisCourse',
    defaultMessage: 'This Course Only',
    description: 'Option to limit search results to the current course only.',
  },
  title: {
    id: 'course-authoring.course-search.title',
    defaultMessage: 'Search',
    description: 'Title for the course search dialog',
  },
  showMore: {
    id: 'course-authoring.course-search.showMore',
    defaultMessage: 'Show More',
    description: 'Show more tags / filter options',
  },
  showMoreResults: {
    id: 'course-authoring.course-search.showMoreResults',
    defaultMessage: 'Show More Results',
    description: 'Show more results - button shows this when adding to list results loading additional data from server',
  },
  loadingMoreResults: {
    id: 'course-authoring.course-search.loadingMoreResults',
    defaultMessage: 'Loading More Results',
    description: 'Loading more results - button shows this message while loading more results',
  },
  emptySearchTitle: {
    id: 'course-authoring.course-search.emptySearchTitle',
    defaultMessage: 'Start Searching to Find Content',
    description: 'Title displayed when a user has not entered a keyword yet',
  },
  emptySearchSubtitle: {
    id: 'course-authoring.course-search.emptySearchSubtitle',
    defaultMessage: 'Find sections, subsections, modules, and components',
    description: 'Subtitle displayed when a user has not entered a keyword yet',
  },
  noResultsTitle: {
    id: 'course-authoring.course-search.noResultsTitle',
    defaultMessage: 'No Results Found',
    description: 'Title displayed when search returns no results',
  },
  noResultsSubtitle: {
    id: 'course-authoring.course-search.noResultsSubtitle',
    defaultMessage: 'Please try a different search term or filter',
    description: 'Subtitle displayed when search returns no results',
  },
  openInNewWindow: {
    id: 'course-authoring.course-search.openInNewWindow',
    defaultMessage: 'Open in New Window',
    description: 'Alt text for button that opens search result in a new window',
  },
  searchError: {
    id: 'course-authoring.course-search.searchError',
    defaultMessage: 'An error occurred. Failed to load search results.',
    description: 'Error message displayed when search fails.',
  },
});
export default messages;