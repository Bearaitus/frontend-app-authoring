// @ts-check
import React, { useContext, useEffect, useState } from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import {
  useToggle,
  ActionRow,
  AlertModal,
  Button,
  Chip,
  Container,
  Form,
  ModalDialog,
  Stack,
} from '@openedx/paragon';
import {
  Close,
  Warning,
} from '@openedx/paragon/icons';
import PropTypes from 'prop-types';

import { useOrganizationListData } from '../../generic/data/apiHooks';
import { TaxonomyContext } from '../common/context';
import { useTaxonomyDetails } from '../data/apiHooks';
import { useManageOrgs } from './data/api';
import messages from './messages';
import './ManageOrgsModal.scss';

const ConfirmModal = ({
  isOpen,
  onClose,
  confirm,
  taxonomyName,
}) => {
  const intl = useIntl();
  return (
    <AlertModal
      title={messages.confirmUnassignTitle.defaultMessage}
      isOpen={isOpen}
      onClose={onClose}
      variant="warning"
      icon={Warning}
      footerNode={(
        <ActionRow>
          <Button variant="tertiary" onClick={onClose}>
            {messages.cancelButton.defaultMessage}
          </Button>
          <Button variant="primary" onClick={confirm}>
            {messages.continueButton.defaultMessage}
          </Button>
        </ActionRow>
      )}
    >
      <p>
        {intl.formatMessage(messages.confirmUnassignText, { taxonomyName })}
      </p>
    </AlertModal>
  );
};

ConfirmModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  confirm: PropTypes.func.isRequired,
  taxonomyName: PropTypes.string.isRequired,
};

const ManageOrgsModal = ({
  taxonomyId,
  isOpen,
  onClose,
}) => {
  const intl = useIntl();
  const { setToastMessage } = useContext(TaxonomyContext);

  const [selectedOrgs, setSelectedOrgs] = useState(/** @type {null|string[]} */(null));
  const [allOrgs, setAllOrgs] = useState(/** @type {null|boolean} */(null));

  const [isConfirmModalOpen, openConfirmModal, closeConfirmModal] = useToggle(false);

  const [isDialogDisabled, disableDialog, enableDialog] = useToggle(false);

  const {
    data: organizationListData,
  } = useOrganizationListData();

  const { data: taxonomy } = useTaxonomyDetails(taxonomyId);

  const manageOrgMutation = useManageOrgs();

  const saveOrgs = async () => {
    disableDialog();
    closeConfirmModal();
    if (selectedOrgs !== null && allOrgs !== null) {
      try {
        await manageOrgMutation.mutateAsync({
          taxonomyId,
          orgs: allOrgs ? undefined : selectedOrgs,
          allOrgs,
        });
        if (setToastMessage) {
          setToastMessage(messages.assignOrgsSuccess.defaultMessage);
        }
      } catch (error) {
        // ToDo: display the error to the user
      } finally {
        enableDialog();
        onClose();
      }
    }
  };

  const confirmSave = async () => {
    if (!selectedOrgs?.length && !allOrgs) {
      openConfirmModal();
    } else {
      await saveOrgs();
    }
  };

  useEffect(() => {
    if (taxonomy) {
      if (selectedOrgs === null) {
        setSelectedOrgs([...taxonomy.orgs]);
      }
      if (allOrgs === null) {
        setAllOrgs(taxonomy.allOrgs);
      }
    }
  }, [taxonomy]);

  useEffect(() => {
    if (selectedOrgs) {
      // This is a hack to force the Form.Autosuggest to clear its value after a selection is made.
      const inputRef = /** @type {null|HTMLInputElement} */ (document.querySelector('.manage-orgs .pgn__form-group input'));
      if (inputRef) {
        //  @ts-ignore value can be null
        inputRef.value = null;
        const event = new Event('change', { bubbles: true });
        inputRef.dispatchEvent(event);
      }
    }
  }, [selectedOrgs]);

  if (!selectedOrgs || !taxonomy) {
    return null;
  }

  return (
    <Container onClick={(e) => e.stopPropagation() /* This prevents calling onClick handler from the parent */}>
      <ModalDialog
        className="manage-orgs"
        title={messages.headerTitle.defaultMessage}
        isOpen={isOpen}
        onClose={onClose}
        size="lg"
        hasCloseButton
        isFullscreenOnMobile
      >
        {isDialogDisabled && (
          // This div is used to prevent the user from interacting with the dialog while it is disabled
          <div className="position-absolute w-100 h-100 d-block zindex-9" />
        )}

        <ModalDialog.Header>
          <ModalDialog.Title>
            {messages.headerTitle.defaultMessage}
          </ModalDialog.Title>
        </ModalDialog.Header>

        <hr className="mx-4" />

        <ModalDialog.Body>
          <Form.Group>
            <Stack>
              <div className="pb-5">{messages.bodyText.defaultMessage}</div>
              <Form.Label>
                <div>{messages.currentAssignments.defaultMessage}</div>
              </Form.Label>
              <div className="col-9 d-inline-box overflow-auto">
                {selectedOrgs.length ? selectedOrgs.map((org) => (
                  <Chip
                    key={org}
                    iconAfter={Close}
                    iconAfterAlt={intl.formatMessage(messages.removeOrg, { org })}
                    onIconAfterClick={() => setSelectedOrgs(selOrgs => (selOrgs || []).filter((o) => o !== org))}
                    disabled={!!allOrgs}
                  >
                    {org}
                  </Chip>
                )) : <span className="text-muted">{messages.noOrganizationAssigned.defaultMessage}</span> }
              </div>
            </Stack>
          </Form.Group>
          <Form.Group>
            <Form.Label>
              {messages.addOrganizations.defaultMessage}
            </Form.Label>
            <Form.Autosuggest
              placeholder={messages.searchOrganizations.defaultMessage}
              onChange={({ selectionValue }) => {
                if (selectionValue) {
                  setSelectedOrgs([...selectedOrgs, selectionValue]);
                }
              }}
              disabled={allOrgs}
            >
              {organizationListData ? organizationListData.filter(o => !selectedOrgs?.includes(o)).map((org) => (
                <Form.AutosuggestOption key={org}>{org}</Form.AutosuggestOption>
              )) : [] }
            </Form.Autosuggest>
          </Form.Group>
          <Form.Checkbox checked={allOrgs} onChange={(e) => setAllOrgs(e.target.checked)}>
            {messages.assignAll.defaultMessage}
          </Form.Checkbox>
        </ModalDialog.Body>

        <hr className="mx-4" />

        <ModalDialog.Footer>
          <ActionRow>
            <ModalDialog.CloseButton onClick={onClose} variant="tertiary">
              {messages.cancelButton.defaultMessage}
            </ModalDialog.CloseButton>
            <Button variant="primary" onClick={confirmSave}>
              {messages.saveButton.defaultMessage}
            </Button>
          </ActionRow>
        </ModalDialog.Footer>
      </ModalDialog>
      <ConfirmModal
        isOpen={isConfirmModalOpen}
        onClose={closeConfirmModal}
        confirm={saveOrgs}
        taxonomyName={taxonomy.name}
      />
    </Container>
  );
};

ManageOrgsModal.propTypes = {
  taxonomyId: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ManageOrgsModal;
