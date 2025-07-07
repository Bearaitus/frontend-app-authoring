import { useIntl } from '@edx/frontend-platform/i18n';
import {
  Button,
  Form,
  ActionRow,
} from '@openedx/paragon';
import { Formik } from 'formik';
import * as Yup from 'yup';

import messages from './messages';
import FormikControl from '../../generic/FormikControl';
import { EXAMPLE_USER_EMAIL } from './constants';

const AddLibraryTeamMember = ({ onSubmit, onCancel }: {
  onSubmit: ({ email } : { email: string }) => void,
  onCancel: () => void,
}) => {
  const intl = useIntl();

  return (
    <div className="add-user-form" data-testid="add-user-form">
      <Formik
        initialValues={{ email: '' }}
        onSubmit={onSubmit}
        validationSchema={
          Yup.object().shape({
            email: Yup.string().required('Email required').email('Invalid email'),
          })
        }
        validateOnBlur
      >
        {({ handleSubmit, values }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Group size="sm" className="form-field">
              <h3 className="form-title">{messages.addMemberFormTitle.defaultMessage}</h3>
              <FormikControl
                name="email"
                value={values.email}
                label={<Form.Label>{messages.addMemberFormEmailLabel.defaultMessage}</Form.Label>}
                placeholder={intl.formatMessage(messages.addMemberFormEmailPlaceholder, { email: EXAMPLE_USER_EMAIL })}
              />
              <Form.Control.Feedback className="form-helper-text">
                {messages.addMemberFormEmailHelperText.defaultMessage}
              </Form.Control.Feedback>
            </Form.Group>
            <ActionRow>
              <Button variant="tertiary" size="sm" onClick={onCancel}>
                {messages.cancelButton.defaultMessage}
              </Button>
              <Button
                size="sm"
                type="submit"
                disabled={!values.email.length}
              >
                {messages.addMemberFormSubmitButton.defaultMessage}
              </Button>
            </ActionRow>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddLibraryTeamMember;
