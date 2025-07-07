import React from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import PropTypes from 'prop-types';

import { Hyperlink } from '@openedx/paragon';
import { HelpSidebar } from '../../generic/help-sidebar';
import messages from './messages';
import { useHelpUrls } from '../../help-urls/hooks';

const TextbookSidebar = ({ courseId }) => {
  const intl = useIntl();
  const { textbooks: textbookUrl } = useHelpUrls(['textbooks']);

  return (
    <HelpSidebar courseId={courseId} className="pt-4">
      <h4 className="help-sidebar-about-title">
        {messages.section_1_title.defaultMessage}
      </h4>
      <p className="help-sidebar-about-descriptions">
        {messages.section_1_descriptions.defaultMessage}
      </p>
      <hr className="my-3.5" />
      <h4 className="help-sidebar-about-title">
        {messages.section_2_title.defaultMessage}
      </h4>
      <p className="help-sidebar-about-descriptions">
        {messages.section_2_descriptions.defaultMessage}
      </p>
      <Hyperlink
        className="small"
        destination={textbookUrl}
        target="_blank"
        showLaunchIcon={false}
      >
        {messages.sectionLink.defaultMessage}
      </Hyperlink>
    </HelpSidebar>
  );
};

TextbookSidebar.propTypes = {
  courseId: PropTypes.string.isRequired,
};

export default TextbookSidebar;
