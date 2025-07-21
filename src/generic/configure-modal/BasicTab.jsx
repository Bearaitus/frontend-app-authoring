import PropTypes from 'prop-types';
import { Stack, Form } from '@openedx/paragon';
import { FormattedMessage, injectIntl, useIntl } from '@edx/frontend-platform/i18n';
import { DatepickerControl, DATEPICKER_TYPES } from '../datepicker-control';
import messages from './messages';
const BasicTab = ({
  values,
  setFieldValue,
  courseGraders,
  isSubsection,
  isSelfPaced,
}) => {
  const intl = useIntl();
  const {
    releaseDate,
    graderType,
    dueDate,
  } = values;
  const onChangeGraderType = (e) => setFieldValue('graderType', e.target.value);
  const createOptions = () => courseGraders.map((option) => (
    <option key={option} value={option}> {option} </option>
  ));
  return (
    <>
      {!isSelfPaced && (
        <>
          <h5 className="mt-4 text-gray-700"><FormattedMessage {...messages.releaseDateAndTime} /></h5>
          <hr />
          <div data-testid="release-date-stack">
            <Stack className="mt-3" direction="horizontal" gap={5}>
              <DatepickerControl
                type={DATEPICKER_TYPES.date}
                value={releaseDate}
                label={messages.releaseDate.defaultMessage}
                controlName="state-date"
                onChange={(val) => setFieldValue('releaseDate', val)}
              />
              <DatepickerControl
                type={DATEPICKER_TYPES.time}
                value={releaseDate}
                label={messages.releaseTimeUTC.defaultMessage}
                controlName="start-time"
                onChange={(val) => setFieldValue('releaseDate', val)}
              />
            </Stack>
          </div>
        </>
      )}
      {
        isSubsection && (
          <div>
            <h5 className="mt-4 text-gray-700"><FormattedMessage {...messages.grading} /></h5>
            <hr />
            <Form.Group>
              <Form.Label>{messages.gradeAs.defaultMessage}</Form.Label>
              <Form.Control
                as="select"
                defaultValue={graderType}
                onChange={onChangeGraderType}
                data-testid="grader-type-select"
              >
                <option key="notgraded" value="notgraded">
                  {messages.notGradedTypeOption.defaultMessage}
                </option>
                {createOptions()}
              </Form.Control>
            </Form.Group>
            {!isSelfPaced && (
              <div data-testid="due-date-stack">
                <Stack className="mt-3" direction="horizontal" gap={5}>
                  <DatepickerControl
                    type={DATEPICKER_TYPES.date}
                    value={dueDate}
                    label={messages.dueDate.defaultMessage}
                    controlName="state-date"
                    onChange={(val) => setFieldValue('dueDate', val)}
                    data-testid="due-date-picker"
                  />
                  <DatepickerControl
                    type={DATEPICKER_TYPES.time}
                    value={dueDate}
                    label={messages.dueTimeUTC.defaultMessage}
                    controlName="start-time"
                    onChange={(val) => setFieldValue('dueDate', val)}
                  />
                </Stack>
              </div>
            )}
          </div>
        )
      }
    </>
  );
};
BasicTab.propTypes = {
  isSubsection: PropTypes.bool.isRequired,
  values: PropTypes.shape({
    releaseDate: PropTypes.string.isRequired,
    graderType: PropTypes.string.isRequired,
    dueDate: PropTypes.string,
  }).isRequired,
  courseGraders: PropTypes.arrayOf(PropTypes.string).isRequired,
  setFieldValue: PropTypes.func.isRequired,
  isSelfPaced: PropTypes.bool.isRequired,
};
export default injectIntl(BasicTab);