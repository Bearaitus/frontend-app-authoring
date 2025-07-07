import React from 'react';
import PropTypes from 'prop-types';
import TextareaAutosize from 'react-textarea-autosize';
import {
  Card, Form, Col, Button,
} from '@openedx/paragon';
import { useIntl } from '@edx/frontend-platform/i18n';

import CourseUploadImage from '../../../generic/course-upload-image';
import messages from './messages';

const InstructorContainer = ({
  instructor, idx, onDelete, onChange,
}) => {
  const intl = useIntl();
  return (
    <Card className="p-3.5" key={idx}>
      <Card.Body>
        <Form>
          <Form.Row>
            <Form.Group as={Col} className="form-group-custom">
              <Form.Label>
                {messages.instructorNameLabel.defaultMessage}
              </Form.Label>
              <Form.Control
                value={instructor?.name}
                placeholder={messages.instructorNameInputPlaceholder.defaultMessage}
                onChange={(e) => onChange(e.target.value, idx, 'name')}
              />
              <Form.Text>
                {messages.instructorNameHelpText.defaultMessage}
              </Form.Text>
            </Form.Group>

            <Form.Group as={Col} className="form-group-custom">
              <Form.Label>
                {messages.instructorTitleLabel.defaultMessage}
              </Form.Label>
              <Form.Control
                value={instructor?.title}
                placeholder={messages.instructorTitleInputPlaceholder.defaultMessage}
                onChange={(e) => onChange(e.target.value, idx, 'title')}
              />
              <Form.Text>
                {messages.instructorTitleHelpText.defaultMessage}
              </Form.Text>
            </Form.Group>

            <Form.Group as={Col} className="form-group-custom">
              <Form.Label>
                {messages.instructorOrganizationLabel.defaultMessage}
              </Form.Label>
              <Form.Control
                value={instructor?.organization}
                placeholder={messages.instructorOrganizationInputPlaceholder.defaultMessage}
                onChange={(e) => onChange(e.target.value, idx, 'organization')}
              />
              <Form.Text>
                {messages.instructorOrganizationHelpText.defaultMessage}
              </Form.Text>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} className="form-group-custom">
              <Form.Label>
                {messages.instructorBioLabel.defaultMessage}
              </Form.Label>
              <Form.Control
                as={TextareaAutosize}
                value={instructor?.bio}
                placeholder={messages.instructorBioInputPlaceholder.defaultMessage}
                onChange={(e) => onChange(e.target.value, idx, 'bio')}
              />
              <Form.Text>
                {messages.instructorBioHelpText.defaultMessage}
              </Form.Text>
            </Form.Group>
          </Form.Row>
          <Form.Row className="pl-1 pr-2.5">
            <CourseUploadImage
              label={messages.instructorPhotoLabel.defaultMessage}
              assetImagePath={instructor?.image}
              assetImageField="image"
              customInputPlaceholder={intl.formatMessage(
                messages.instructorPhotoInputPlaceholder,
              )}
              customHelpText={messages.instructorPhotoHelpText.defaultMessage}
              onChange={(value, field) => onChange(value, idx, field)}
            />
          </Form.Row>
        </Form>
      </Card.Body>
      <Card.Divider />
      <Card.Footer className="p-0 mt-2.5">
        <Button variant="outline-primary" onClick={() => onDelete(idx)}>
          {messages.instructorDelete.defaultMessage}
        </Button>
      </Card.Footer>
    </Card>
  );
};

InstructorContainer.defaultProps = {
  instructor: {},
};

InstructorContainer.propTypes = {
  instructor: PropTypes.shape({
    bio: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    organization: PropTypes.string,
    title: PropTypes.string,
  }),
  idx: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InstructorContainer;
