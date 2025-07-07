import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Form, Dropdown } from '@openedx/paragon';

import { TIME_FORMAT } from '../../constants';
import SectionSubHeader from '../../generic/section-sub-header';
import EntranceExam from './entrance-exam';
import messages from './messages';

const RequirementsSection = ({
  effort,
  errorFields,
  aboutPageEditable,
  preRequisiteCourses,
  entranceExamEnabled,
  isEntranceExamsEnabled,
  possiblePreRequisiteCourses,
  entranceExamMinimumScorePct,
  isPrerequisiteCoursesEnabled,
  onChange,
}) => {
  const intl = useIntl();
  const selectedItem = possiblePreRequisiteCourses?.find(
    (course) => course.courseKey === preRequisiteCourses[0],
  );
  const formattedSelectedItem = selectedItem?.displayName || messages.dropdownEmptyText.defaultMessage;

  const renderPrerequisiteDropdown = () => (
    <Form.Group
      className="form-group-custom dropdown-prerequisite"
      controlId="prerequisiteDropdown"
    >
      <Form.Label>{messages.dropdownLabel.defaultMessage}</Form.Label>
      <Dropdown className="bg-white">
        <Dropdown.Toggle id="prerequisiteDropdown" variant="outline-primary">
          {formattedSelectedItem}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item
            key={messages.dropdownEmptyText.defaultMessage}
            onClick={() => onChange([], 'preRequisiteCourses')}
          >
            {messages.dropdownEmptyText.defaultMessage}
          </Dropdown.Item>
          {possiblePreRequisiteCourses.map((course) => (
            <Dropdown.Item
              key={course.courseKey}
              onClick={() => onChange([course.courseKey], 'preRequisiteCourses')}
            >
              {course.displayName}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <Form.Control.Feedback>
        {messages.dropdownHelpText.defaultMessage}
      </Form.Control.Feedback>
    </Form.Group>
  );

  return (
    <section className="section-container requirements-section">
      <SectionSubHeader
        title={messages.requirementsTitle.defaultMessage}
        description={messages.requirementsDescription.defaultMessage}
      />
      {aboutPageEditable && (
        <Form.Group className="form-group-custom">
          <Form.Label>
            {messages.timepickerLabel.defaultMessage}
          </Form.Label>
          <Form.Control
            value={effort || ''}
            placeholder={TIME_FORMAT.toUpperCase()}
            onChange={(e) => onChange(e.target.value, 'effort')}
          />
          <Form.Control.Feedback>
            {messages.timepickerHelpText.defaultMessage}
          </Form.Control.Feedback>
        </Form.Group>
      )}
      {isPrerequisiteCoursesEnabled && renderPrerequisiteDropdown()}
      {isEntranceExamsEnabled && (
        <EntranceExam
          errorEffort={errorFields?.entranceExamMinimumScorePct}
          isCheckedString={entranceExamEnabled}
          entranceExamMinimumScorePct={entranceExamMinimumScorePct}
          onChange={onChange}
        />
      )}
    </section>
  );
};

const preRequisitesCourse = {
  courseKey: PropTypes.string,
  displayName: PropTypes.string,
  lmsLink: PropTypes.string,
  number: PropTypes.string,
  org: PropTypes.string,
  rerunLink: PropTypes.string,
  run: PropTypes.string,
  url: PropTypes.string,
};

RequirementsSection.defaultProps = {
  effort: '',
  errorFields: {},
  entranceExamEnabled: '',
  preRequisiteCourses: [],
  entranceExamMinimumScorePct: '',
};

RequirementsSection.propTypes = {
  effort: PropTypes.string,
  errorFields: PropTypes.objectOf(PropTypes.string),
  aboutPageEditable: PropTypes.bool.isRequired,
  preRequisiteCourses: PropTypes.arrayOf(PropTypes.string),
  entranceExamEnabled: PropTypes.string,
  isEntranceExamsEnabled: PropTypes.bool.isRequired,
  possiblePreRequisiteCourses: PropTypes.arrayOf(
    PropTypes.shape(preRequisitesCourse),
  ).isRequired,
  entranceExamMinimumScorePct: PropTypes.string,
  isPrerequisiteCoursesEnabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RequirementsSection;
