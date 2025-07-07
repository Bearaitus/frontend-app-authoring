import React, { useEffect } from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import {
  Button,
  Tab,
  Tabs,
  Stack,
} from '@openedx/paragon';
import {
  CheckBoxIcon,
  CheckBoxOutlineBlank,
} from '@openedx/paragon/icons';

import { SidebarAdditionalActions, useLibraryContext } from '../common/context';
import ComponentMenu from '../components';
import { canEditComponent } from '../components/ComponentEditorModal';
import ComponentDetails from './ComponentDetails';
import ComponentManagement from './ComponentManagement';
import ComponentPreview from './ComponentPreview';
import messages from './messages';
import { getBlockType } from '../../generic/key-utils';
import { useLibraryBlockMetadata, usePublishComponent } from '../data/apiHooks';
import { ToastContext } from '../../generic/toast-context';

const AddComponentWidget = () => {
  const intl = useIntl();

  const {
    sidebarComponentInfo,
    componentPickerMode,
    onComponentSelected,
    addComponentToSelectedComponents,
    removeComponentFromSelectedComponents,
    selectedComponents,
  } = useLibraryContext();

  const usageKey = sidebarComponentInfo?.id;

  // istanbul ignore if: this should never happen
  if (!usageKey) {
    throw new Error('usageKey is required');
  }

  if (!componentPickerMode) {
    return null;
  }

  if (componentPickerMode === 'single') {
    return (
      <Button
        variant="outline-primary"
        className="m-1 text-nowrap flex-grow-1"
        onClick={() => {
          onComponentSelected({ usageKey, blockType: getBlockType(usageKey) });
        }}
      >
        {messages.componentPickerSingleSelect.defaultMessage}
      </Button>
    );
  }

  if (componentPickerMode === 'multiple') {
    const isChecked = selectedComponents.some((component) => component.usageKey === usageKey);
    const handleChange = () => {
      const selectedComponent = {
        usageKey,
        blockType: getBlockType(usageKey),
      };
      if (!isChecked) {
        addComponentToSelectedComponents(selectedComponent);
      } else {
        removeComponentFromSelectedComponents(selectedComponent);
      }
    };

    return (
      <Button
        variant="outline-primary"
        iconBefore={isChecked ? CheckBoxIcon : CheckBoxOutlineBlank}
        onClick={handleChange}
      >
        {messages.componentPickerMultipleSelect.defaultMessage}
      </Button>
    );
  }

  // istanbul ignore next: this should never happen
  return null;
};

const ComponentInfo = () => {
  const intl = useIntl();

  const {
    sidebarComponentInfo,
    readOnly,
    openComponentEditor,
    resetSidebarAdditionalActions,
  } = useLibraryContext();

  const jumpToCollections = sidebarComponentInfo?.additionalAction === SidebarAdditionalActions.JumpToAddCollections;
  // Show Manage tab if JumpToAddCollections action is set in sidebarComponentInfo
  const [tab, setTab] = React.useState(jumpToCollections ? 'manage' : 'preview');
  useEffect(() => {
    if (jumpToCollections) {
      setTab('manage');
    }
  }, [jumpToCollections]);

  useEffect(() => {
    // This is required to redo actions.
    if (tab !== 'manage') {
      resetSidebarAdditionalActions();
    }
  }, [tab]);

  const usageKey = sidebarComponentInfo?.id;
  // istanbul ignore if: this should never happen
  if (!usageKey) {
    throw new Error('usageKey is required');
  }

  const canEdit = canEditComponent(usageKey);

  const publishComponent = usePublishComponent(usageKey);
  const { data: componentMetadata } = useLibraryBlockMetadata(usageKey);
  // Only can be published when the component has been modified after the last published date.
  const canPublish = (new Date(componentMetadata?.modified ?? 0)) > (new Date(componentMetadata?.lastPublished ?? 0));
  const { showToast } = React.useContext(ToastContext);

  const publish = React.useCallback(() => {
    publishComponent.mutateAsync()
      .then(() => {
        showToast(messages.publishSuccessMsg.defaultMessage);
      }).catch(() => {
        showToast(messages.publishErrorMsg.defaultMessage);
      });
  }, [publishComponent, showToast, intl]);

  return (
    <Stack>
      {!readOnly && (
        <div className="d-flex flex-wrap">
          <Button
            {...(canEdit ? { onClick: () => openComponentEditor(usageKey) } : { disabled: true })}
            variant="outline-primary"
            className="m-1 text-nowrap flex-grow-1"
          >
            {messages.editComponentButtonTitle.defaultMessage}
          </Button>
          <Button disabled={publishComponent.isLoading || !canPublish} onClick={publish} variant="outline-primary" className="m-1 text-nowrap flex-grow-1">
            {messages.publishComponentButtonTitle.defaultMessage}
          </Button>
          <ComponentMenu usageKey={usageKey} />
        </div>
      )}
      <AddComponentWidget />
      <Tabs
        variant="tabs"
        className="my-3 d-flex justify-content-around"
        activeKey={tab}
        onSelect={(k: string) => setTab(k)}
      >
        <Tab eventKey="preview" title={messages.previewTabTitle.defaultMessage}>
          <ComponentPreview />
        </Tab>
        <Tab eventKey="manage" title={messages.manageTabTitle.defaultMessage}>
          <ComponentManagement />
        </Tab>
        <Tab eventKey="details" title={messages.detailsTabTitle.defaultMessage}>
          <ComponentDetails />
        </Tab>
      </Tabs>
    </Stack>
  );
};

export default ComponentInfo;
