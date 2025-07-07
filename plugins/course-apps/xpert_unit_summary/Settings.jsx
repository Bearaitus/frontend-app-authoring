import React, { useCallback, useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { PagesAndResourcesContext } from 'CourseAuthoring/pages-and-resources/PagesAndResourcesProvider';
import { useNavigate } from 'react-router-dom';

import SettingsModal from './settings-modal/SettingsModal';
import messages from './messages';

import { fetchXpertSettings } from './data/thunks';

const XpertUnitSummarySettings = ({ intl }) => {
  const { path: pagesAndResourcesPath, courseId } = useContext(PagesAndResourcesContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchXpertSettings(courseId));
  }, [courseId]);

  const handleClose = useCallback(() => {
    navigate(pagesAndResourcesPath);
  }, [pagesAndResourcesPath]);

  return (
    <SettingsModal
      appId="xpert-unit-summary"
      title={messages.heading.defaultMessage}
      enableAppHelp={messages.enableXpertUnitSummaryHelp.defaultMessage}
      helpPrivacyText={messages.enableXpertUnitSummaryHelpPrivacyLink.defaultMessage}
      enableAppLabel={messages.enableXpertUnitSummaryLabel.defaultMessage}
      learnMoreText={messages.enableXpertUnitSummaryLink.defaultMessage}
      allUnitsEnabledText={messages.allUnitsEnabledByDefault.defaultMessage}
      noUnitsEnabledText={messages.noUnitsEnabledByDefault.defaultMessage}
      onClose={handleClose}
    />
  );
};

XpertUnitSummarySettings.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(XpertUnitSummarySettings);
