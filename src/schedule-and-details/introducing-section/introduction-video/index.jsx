import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Card } from '@openedx/paragon';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';

import messages from './messages';

const IntroductionVideo = ({ intl, introVideo, onChange }) => {
  const embedVideoUrl = introVideo
    ? `//www.youtube.com/embed/${introVideo}`
    : '';

  return (
null
  );
};

IntroductionVideo.defaultProps = {
  introVideo: '',
};

IntroductionVideo.propTypes = {
  intl: intlShape.isRequired,
  introVideo: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default injectIntl(IntroductionVideo);
