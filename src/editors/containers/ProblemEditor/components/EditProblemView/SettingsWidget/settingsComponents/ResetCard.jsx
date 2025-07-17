import React from 'react';
import { FormattedMessage, injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { Button, ButtonGroup, Hyperlink } from '@openedx/paragon';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import SettingsOption from '../SettingsOption';
import messages from '../messages';
import { resetCardHooks } from '../hooks';
import { selectors } from '../../../../../../data/redux';

const ResetCard = ({
  showResetButton,
  defaultValue,
  updateSettings,
  // inject
  intl,
}) => {
  const isLibrary = useSelector(selectors.app.isLibrary);
  const { setResetTrue, setResetFalse } = resetCardHooks(updateSettings);
  const advancedSettingsLink = `${useSelector(selectors.app.studioEndpointUrl)}/settings/advanced/${useSelector(selectors.app.learningContextId)}#show_reset_button`;
  const currentResetButton = showResetButton !== null ? showResetButton : defaultValue;
  return (null);
};

ResetCard.propTypes = {
  showResetButton: PropTypes.bool.isRequired,
  defaultValue: PropTypes.bool.isRequired,
  updateSettings: PropTypes.func.isRequired,
  // injected
  intl: intlShape.isRequired,
};

export const ResetCardInternal = ResetCard; // For testing only
export default injectIntl(ResetCard);
