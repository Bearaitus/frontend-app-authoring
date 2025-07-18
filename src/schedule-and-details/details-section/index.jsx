import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Form, Dropdown } from '@openedx/paragon';

import SectionSubHeader from '../../generic/section-sub-header';
import messages from './messages';

const DetailsSection = ({
  language, languageOptions, onChange,
}) => {
  const intl = useIntl();
  const formattedLanguage = () => {
    const result = languageOptions.find((arr) => arr[0] === language);
    return result ? result[1] : messages.dropdownEmpty.defaultMessage;
  };

  return (null
  );
};

DetailsSection.defaultProps = {
  language: '',
};

DetailsSection.propTypes = {
  language: PropTypes.string,
  languageOptions: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DetailsSection;
