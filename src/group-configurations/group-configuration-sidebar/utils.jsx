/**
 * Compiles the sidebar data for the course authoring sidebar.
 *
 * @param {Object} messages - The localized messages.
 * @param {Object} intl - The intl object for formatting messages.
 * @param {boolean} shouldShowExperimentGroups - Flag to include experiment group configuration data.
 * @param {boolean} shouldShowContentGroup - Flag to include content group data.
 * @param {boolean} shouldShowEnrollmentTrackGroup - Flag to include enrollment track group data.
 * @returns {Object[]} The array of sidebar data groups.
 */
const getSidebarData = ({
  messages, intl, shouldShowExperimentGroups, shouldShowContentGroup, shouldShowEnrollmentTrackGroup,
}) => {
  const groups = [];

  if (shouldShowEnrollmentTrackGroup) {
    groups.push({
      urlKey: 'enrollmentTracks',
      title: messages.about_3_title.defaultMessage,
      paragraphs: [
        messages.about_3_description_1.defaultMessage,
        messages.about_3_description_2.defaultMessage,
        messages.about_3_description_3.defaultMessage,
      ],
    });
  }
  if (shouldShowContentGroup) {
    groups.push({
      urlKey: 'contentGroups',
      title: messages.aboutTitle.defaultMessage,
      paragraphs: [
        messages.aboutDescription_1.defaultMessage,
        messages.aboutDescription_2.defaultMessage,
        intl.formatMessage(messages.aboutDescription_3, {
          strongText: <strong>{messages.aboutDescription_3_strong.defaultMessage}</strong>,
          strongText2: <strong>{messages.aboutDescription_strong_edit.defaultMessage}</strong>,
        }),
      ],
    });
  }
  if (shouldShowExperimentGroups) {
    groups.push({
      urlKey: 'groupConfigurations',
      title: messages.about_2_title.defaultMessage,
      paragraphs: [
        messages.about_2_description_1.defaultMessage,
        intl.formatMessage(messages.about_2_description_2, {
          strongText: <strong>{messages.about_2_description_2_strong.defaultMessage}</strong>,
          strongText2: <strong>{messages.aboutDescription_strong_edit.defaultMessage}</strong>,
        }),
      ],
    });
  }
  return groups;
};
// eslint-disable-next-line import/prefer-default-export
export { getSidebarData };
