import React from 'react';
import {
  injectIntl,
  intlShape,
} from '@edx/frontend-platform/i18n';
import PropTypes from 'prop-types';
import { Hyperlink } from '@openedx/paragon';
import { getConfig } from '@edx/frontend-platform';

import { HelpSidebar } from '../../generic/help-sidebar';
import { useHelpUrls } from '../../help-urls/hooks';
import messages from './messages';

const ImportSidebar = ({ intl, courseId }) => {
  const { importCourse: importLearnMoreUrl } = useHelpUrls(['importCourse']);
  return (
    <HelpSidebar courseId={courseId}>
      <h4 className="help-sidebar-about-title">{messages.title1.defaultMessage}</h4>
      <p className="help-sidebar-about-descriptions">
        {intl.formatMessage(messages.description1, { studioShortName: getConfig().STUDIO_SHORT_NAME })}
      </p>
      <hr />
      <h4 className="help-sidebar-about-title">{messages.importedContent.defaultMessage}</h4>
      <p className="help-sidebar-about-descriptions">{messages.importedContentHeading.defaultMessage}</p>
      <ul className="px-3">
        <li className="help-sidebar-about-descriptions">{messages.content1.defaultMessage}</li>
        <li className="help-sidebar-about-descriptions">{messages.content2.defaultMessage}</li>
        <li className="help-sidebar-about-descriptions">{messages.content3.defaultMessage}</li>
        <li className="help-sidebar-about-descriptions">{messages.content4.defaultMessage}</li>
        <li className="help-sidebar-about-descriptions">{messages.content5.defaultMessage}</li>
      </ul>
      <p className="help-sidebar-about-descriptions">{messages.notImportedContent.defaultMessage}</p>
      <ul className="px-3">
        <li className="help-sidebar-about-descriptions">{messages.content6.defaultMessage}</li>
        <li className="help-sidebar-about-descriptions">{messages.content7.defaultMessage}</li>
      </ul>
      <hr />
      <h4 className="help-sidebar-about-title">{messages.warningTitle.defaultMessage}</h4>
      <p className="help-sidebar-about-descriptions">{messages.warningDescription.defaultMessage}</p>
      <hr />
      <Hyperlink
        className="small"
        href={importLearnMoreUrl}
        target="_blank"
      >
        {messages.learnMoreButtonTitle.defaultMessage}
      </Hyperlink>
    </HelpSidebar>
  );
};

ImportSidebar.propTypes = {
  intl: intlShape.isRequired,
  courseId: PropTypes.string.isRequired,
};

export default injectIntl(ImportSidebar);
