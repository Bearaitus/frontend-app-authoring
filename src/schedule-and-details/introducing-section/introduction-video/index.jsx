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
    <Form.Group className="form-group-custom">
      <Form.Label>
        {messages.courseIntroductionVideoLabel.defaultMessage}
      </Form.Label>
      <Card>
        <Card.Body className="embed-video-container">
          <div className="introduction-video">
            <iframe
              title={messages.courseIntroductionVideoLabel.defaultMessage}
              width="618"
              height="350"
              src={embedVideoUrl}
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </Card.Body>
        <Card.Divider />
        <Card.Footer className="p-2.5">
          <Form.Control
            value={introVideo || ''}
            placeholder={messages.courseIntroductionVideoPlaceholder.defaultMessage}
            onChange={(e) => onChange(e.target.value, 'introVideo')}
          />
          <Button
            variant="outline-primary"
            onClick={() => onChange('', 'introVideo')}
            disabled={!introVideo}
          >
            {messages.courseIntroductionVideoDelete.defaultMessage}
          </Button>
        </Card.Footer>
      </Card>
      <Form.Control.Feedback>
        {messages.courseIntroductionVideoHelpText.defaultMessage}
      </Form.Control.Feedback>
    </Form.Group>
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
