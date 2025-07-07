import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { useFormikContext } from 'formik';

import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import {
  Button, Card, Form,
} from '@openedx/paragon';

import CollapsableEditor from '../../../../../../generic/CollapsableEditor';
import messages from '../../../messages';
import FieldFeedback from '../../../../../../generic/FieldFeedback';

const TopicItem = ({
  intl,
  index,
  id,
  name,
  onDelete,
  hasError,
  onFocus,
}) => {
  const {
    handleChange, handleBlur, errors,
  } = useFormikContext();
  const [inFocus, setInFocus] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [collapseIsOpen, setCollapseOpen] = useState(!name || hasError);
  const isGeneralTopic = id === 'course';

  useEffect(() => {
    onFocus(hasError);
  }, [inFocus, hasError]);

  const getHeading = (isOpen) => {
    if (isGeneralTopic && isOpen) {
      return (
        <div className="h4 py-2 mr-auto">
          {messages.renameGeneralTopic.defaultMessage}
          <div className="small text-muted mt-2">
            {messages.generalTopicHelp.defaultMessage}
          </div>
        </div>
      );
    } if (isOpen) {
      return (
        <span className="h4 py-2 mr-auto">
          {messages.configureAdditionalTopic.defaultMessage}
        </span>
      );
    }
    return <span className="py-2">{name}</span>;
  };

  const handleToggle = (isOpen) => {
    if (!isOpen && (!name.length || hasError)) {
      return setCollapseOpen(true);
    }
    return setCollapseOpen(isOpen);
  };

  const deleteDiscussionTopic = () => {
    setShowDeletePopup(true);
  };

  const handleFocusOut = (event) => {
    handleBlur(event);
    setInFocus(false);
  };

  const deleteTopicPopup = (
    <Card className="rounded mb-3 px-1">
      <Card.Header
        className="text-primary-500"
        title={messages.discussionTopicDeletionLabel.defaultMessage}
        size="sm"
      />
      <Card.Body>
        <Card.Section className="text-justify text-muted pt-2 pb-3">
          {messages.discussionTopicDeletionHelp.defaultMessage}
        </Card.Section>
        <Card.Footer>
          <Button variant="tertiary" onClick={() => setShowDeletePopup(false)}>
            {messages.cancelButton.defaultMessage}
          </Button>
          <Button
            variant="outline-brand"
            className="ml-2"
            onClick={onDelete}
          >
            {messages.deleteButton.defaultMessage}
          </Button>
        </Card.Footer>
      </Card.Body>
    </Card>
  );

  return showDeletePopup
    ? deleteTopicPopup
    : (
      <CollapsableEditor
        open={collapseIsOpen}
        onToggle={handleToggle}
        title={getHeading(collapseIsOpen)}
        onDelete={isGeneralTopic ? null : deleteDiscussionTopic}
        expandAlt={messages.expandAltText.defaultMessage}
        collapseAlt={messages.collapseAltText.defaultMessage}
        deleteAlt={messages.deleteAltText.defaultMessage}
        data-testid={id}
      >
        <Form.Group
          controlId={`discussionTopics.${index}.name`}
          isInvalid={hasError && !inFocus}
          className="m-2"
        >
          <Form.Control
            floatingLabel="Topic name"
            onChange={handleChange}
            onBlur={(event) => handleFocusOut(event)}
            value={name}
            controlClassName="bg-white"
            onFocus={() => setInFocus(true)}
          />
          <FieldFeedback
            errorCondition={hasError && !inFocus}
            feedbackCondition={inFocus}
            feedbackMessage={messages.addTopicHelpText.defaultMessage}
            errorMessage={errors?.discussionTopics?.[index]?.name || ''}
            transitionClasses="mt-1"
          />
        </Form.Group>
      </CollapsableEditor>
    );
};

TopicItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
  hasError: PropTypes.bool.isRequired,
  onFocus: PropTypes.func.isRequired,
};

export default injectIntl(TopicItem);
