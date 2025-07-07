import React from 'react';
import { StudioFooter } from '@edx/frontend-component-footer';
import { useIntl } from '@edx/frontend-platform/i18n';
import {
  Container,
  Form,
  Button,
  StatefulButton,
  ActionRow,
} from '@openedx/paragon';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { REGEX_RULES } from '../../constants';
import Header from '../../header';
import FormikControl from '../../generic/FormikControl';
import FormikErrorFeedback from '../../generic/FormikErrorFeedback';
import AlertError from '../../generic/alert-error';
import { useOrganizationListData } from '../../generic/data/apiHooks';
import SubHeader from '../../generic/sub-header/SubHeader';
import { useCreateLibraryV2 } from './data/apiHooks';
import messages from './messages';

const CreateLibrary = () => {
  const intl = useIntl();
  const navigate = useNavigate();

  const { noSpaceRule, specialCharsRule } = REGEX_RULES;
  const validSlugIdRegex = /^[a-zA-Z\d]+(?:[\w-]*[a-zA-Z\d]+)*$/;

  const {
    mutate,
    data,
    isLoading,
    isError,
    error,
  } = useCreateLibraryV2();

  const {
    data: organizationListData,
    isLoading: isOrganizationListLoading,
  } = useOrganizationListData();

  const handleOnClickCancel = () => {
    navigate('/libraries');
  };

  if (data) {
    navigate(`/library/${data.id}`);
  }

  return (
    <>
      <Header isHiddenMainMenu />
      <Container size="xl" className="p-4 mt-3">
        <SubHeader
          title={messages.createLibrary.defaultMessage}
        />
        <Formik
          initialValues={{
            title: '',
            org: '',
            slug: '',
          }}
          validationSchema={
            Yup.object().shape({
              title: Yup.string()
                .required(messages.requiredFieldError.defaultMessage),
              org: Yup.string()
                .required(messages.requiredFieldError.defaultMessage)
                .matches(
                  specialCharsRule,
                  messages.disallowedCharsError.defaultMessage,
                )
                .matches(noSpaceRule, messages.noSpaceError.defaultMessage),
              slug: Yup.string()
                .required(messages.requiredFieldError.defaultMessage)
                .matches(
                  validSlugIdRegex,
                  messages.invalidSlugError.defaultMessage,
                ),
            })
          }
          onSubmit={(values) => mutate(values)}
        >
          {(formikProps) => (
            <Form onSubmit={formikProps.handleSubmit}>
              <FormikControl
                name="title"
                label={<Form.Label>{messages.titleLabel.defaultMessage}</Form.Label>}
                value={formikProps.values.title}
                placeholder={messages.titlePlaceholder.defaultMessage}
                help={messages.titleHelp.defaultMessage}
                className=""
                controlClasses="pb-2"
              />
              <Form.Group>
                <Form.Label>{messages.orgLabel.defaultMessage}</Form.Label>
                <Form.Autosuggest
                  name="org"
                  isLoading={isOrganizationListLoading}
                  onChange={(event) => formikProps.setFieldValue('org', event.selectionId)}
                  placeholder={messages.orgPlaceholder.defaultMessage}
                >
                  {organizationListData ? organizationListData.map((org) => (
                    <Form.AutosuggestOption key={org} id={org}>{org}</Form.AutosuggestOption>
                  )) : []}
                </Form.Autosuggest>
                <FormikErrorFeedback name="org">
                  <Form.Text>{messages.orgHelp.defaultMessage}</Form.Text>
                </FormikErrorFeedback>
              </Form.Group>
              <FormikControl
                name="slug"
                label={<Form.Label>{messages.slugLabel.defaultMessage}</Form.Label>}
                value={formikProps.values.slug}
                placeholder={messages.slugPlaceholder.defaultMessage}
                help={messages.slugHelp.defaultMessage}
                className=""
                controlClasses="pb-2"
              />
              <ActionRow className="justify-content-start">
                <Button
                  variant="outline-primary"
                  onClick={handleOnClickCancel}
                >
                  {messages.cancelCreateLibraryButton.defaultMessage}
                </Button>
                <StatefulButton
                  type="submit"
                  variant="primary"
                  className="action btn-primary"
                  state={isLoading ? 'disabled' : 'enabled'}
                  disabledStates={['disabled']}
                  labels={{
                    enabled: messages.createLibraryButton.defaultMessage,
                    disabled: messages.createLibraryButtonPending.defaultMessage,
                  }}
                />
              </ActionRow>
            </Form>
          )}
        </Formik>
        {isError && (<AlertError error={error} />)}
      </Container>
      <StudioFooter />
    </>
  );
};

export default CreateLibrary;
