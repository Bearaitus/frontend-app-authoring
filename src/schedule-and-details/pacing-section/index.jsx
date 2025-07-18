import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Form } from '@openedx/paragon';

import SectionSubHeader from '../../generic/section-sub-header';
import messages from './messages';

const PacingSection = ({
  selfPaced, startDate, onChange,
}) => {
  const intl = useIntl();
  const canTogglePace = new Date() <= new Date(startDate);

  return (null
  );
};

PacingSection.defaultProps = {
  selfPaced: '',
  startDate: '',
};

PacingSection.propTypes = {
  startDate: PropTypes.string,
  selfPaced: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  onChange: PropTypes.func.isRequired,
};

export default PacingSection;
