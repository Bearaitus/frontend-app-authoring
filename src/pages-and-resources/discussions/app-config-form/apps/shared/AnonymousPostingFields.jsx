import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import FormSwitchGroup from '../../../../../generic/FormSwitchGroup';
import messages from '../../messages';
import AppConfigFormDivider from './AppConfigFormDivider';

const AnonymousPostingFields = ({
  onBlur,
  onChange,
  intl,
  values,
}) => (
  <>
    <h5 className="mt-4 text-gray-500">{messages.anonymousPosting.defaultMessage}</h5>
    <AppConfigFormDivider />
    <FormSwitchGroup
      onChange={onChange}
      onBlur={onBlur}
      id="allowAnonymousPostsPeers"
      checked={values.allowAnonymousPostsPeers}
      label={messages.allowAnonymousPostsPeersLabel.defaultMessage}
      helpText={messages.allowAnonymousPostsPeersHelp.defaultMessage}
    />
  </>
);

AnonymousPostingFields.propTypes = {
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
  values: PropTypes.shape({
    allowAnonymousPostsPeers: PropTypes.bool,
  }).isRequired,
};

export default injectIntl(AnonymousPostingFields);
