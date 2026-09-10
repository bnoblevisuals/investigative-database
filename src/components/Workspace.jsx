import {useEffect, useState} from "react";
import AboutSystemWindow from "../windows/AboutSystemWindow";
import ClaimEvidenceProfileWindow from "../windows/ClaimEvidenceProfileWindow";
import ClaimProfileWindow from "../windows/ClaimProfileWIndow";
import EquipmentProfileWindow from "../windows/EquipmentProfileWindow";
import EventParticipantProfileWindow from "../windows/EventParticipantWindow";
import EvidenceProfileWindow from "../windows/EvidenceProfileWindow";
import IncidentParticipantProfileWindow from "../windows/IncidentParticipantProfileWindow";
import IncidentProfileWindow from "../windows/IncidentProfileWIndow";
import InventoryItemProfileWindow from "../windows/InventoryItemProfileWindow";
import LocationProfileWindow from "../windows/LocationProfileWindow";
import OrganizationProfileWindow from "../windows/OrganizationProfileWindow";
import PersonProfileWindow from "../windows/PersonProfileWindow";
import RecordAuditProfileWindow from "../windows/RecordAuditProfileWindow"
import RelationshipProfileWindow from "../windows/RelationshipProfileWindow";
import SystemUserProfileWindow from "../windows/RelationshipProfileWindow";
import ThreatAssessmentProfileWindow from "../windows/ThreatAssessmentProfileWindow";
import TimelineEventProfileWindow from "../windows/TimelineEventProfileWindow";
import VehicleProfileWindow from "../windows/VehicleProfileWindow";
import VehicleStatusHistoryProfileWindow from "../windows/VehicleStatusHistoryProfileWindow";
import COMMAND_TYPES from "../data/commandTypes";
import WINDOW_REGISTRY from "../data/windowRegistry";


const COMMAND_WINDOWS = {
    [COMMAND_TYPES.OPEN_ABOUT_SYSTEM]:WINDOW_REGISTRY.W001.id,
    [COMMAND_TYPES.OPEN_PERSON_PROFILE]:WINDOW_REGISTRY.W002.id,
    [COMMAND_TYPES.OPEN_LOCATION_PROFILE]:WINDOW_REGISTRY.W003.id,
    [COMMAND_TYPES.OPEN_INCIDENT_PROFILE]:WINDOW_REGISTRY.W004.id,
    [COMMAND_TYPES.OPEN_ORGANIZATION_PROFILE]:WINDOW_REGISTRY.W005.id,
    [COMMAND_TYPES.OPEN_RELATIONSHIP_PROFILE]:WINDOW_REGISTRY.W006.id,
    [COMMAND_TYPES.OPEN_CLAIM_PROFILE]:WINDOW_REGISTRY.W007.id,
    [COMMAND_TYPES.OPEN_EVIDENCE_PROFILE]:WINDOW_REGISTRY.W008.id,
    [COMMAND_TYPES.OPEN_EQUIPMENT_PROFILE]:WINDOW_REGISTRY.W009.id,
    [COMMAND_TYPES.OPEN_VEHICLE_PROFILE]:WINDOW_REGISTRY.W010.id,
    [COMMAND_TYPES.OPEN_VEHICLE_STATUS_PROFILE]:WINDOW_REGISTRY.W011.id,
    [COMMAND_TYPES.OPEN_TIMELINE_EVENT_PROFILE]:WINDOW_REGISTRY.W012.id,
    [COMMAND_TYPES.OPEN_EVENT_PARTICIPANT_PROFILE]:WINDOW_REGISTRY.W013.id,
    [COMMAND_TYPES.OPEN_THREAT_ASSESMENT_PROFILE]:WINDOW_REGISTRY.W014.id,
    [COMMAND_TYPES.OPEN_SYSTEM_USER_PROFILE]:WINDOW_REGISTRY.W015.id,
    [COMMAND_TYPES.OPEN_RECORD_AUDIT_PROFILE]:WINDOW_REGISTRY.W016.id,
    [COMMAND_TYPES.OPEN_INCIDENT_PARTICIPANT_PROFILE]:WINDOW_REGISTRY.W017.id,
    [COMMAND_TYPES.OPEN_CLAIM_EVIDENCE_PROFILE]:WINDOW_REGISTRY.W018.id,
    [COMMAND_TYPES.OPEN_INVENTORY_ITEM_PROFILE]:WINDOW_REGISTRY.W019.id  
  };

const WINDOW_COMPONENTS = {
  [WINDOW_REGISTRY.W001.id]: AboutSystemWindow,
  [WINDOW_REGISTRY.W002.id]: PersonProfileWindow,
  [WINDOW_REGISTRY.W003.id]: LocationProfileWindow,
  [WINDOW_REGISTRY.W004.id]: IncidentProfileWindow,
  [WINDOW_REGISTRY.W005.id]: OrganizationProfileWindow,
  [WINDOW_REGISTRY.W006.id]: RelationshipProfileWindow,
  [WINDOW_REGISTRY.W007.id]: ClaimProfileWindow,
  [WINDOW_REGISTRY.W008.id]: EvidenceProfileWindow,
  [WINDOW_REGISTRY.W009.id]: EquipmentProfileWindow,
  [WINDOW_REGISTRY.W010.id]: VehicleProfileWindow,
  [WINDOW_REGISTRY.W011.id]: VehicleStatusHistoryProfileWindow,
  [WINDOW_REGISTRY.W012.id]: TimelineEventProfileWindow,
  [WINDOW_REGISTRY.W013.id]: EventParticipantProfileWindow,
  [WINDOW_REGISTRY.W014.id]: ThreatAssessmentProfileWindow,
  [WINDOW_REGISTRY.W015.id]: SystemUserProfileWindow,
  [WINDOW_REGISTRY.W016.id]: RecordAuditProfileWindow,
  [WINDOW_REGISTRY.W017.id]: IncidentParticipantProfileWindow,
  [WINDOW_REGISTRY.W018.id]: ClaimEvidenceProfileWindow,
  [WINDOW_REGISTRY.W019.id]: InventoryItemProfileWindow
};

function Workspace({command, onStatusChange}) {
    
    const [openWindows, setOpenWindows] = useState({
        [WINDOW_REGISTRY.W001.id]: true,
        [WINDOW_REGISTRY.W002.id]: false,
        [WINDOW_REGISTRY.W003.id]: false,
        [WINDOW_REGISTRY.W004.id]: false,
        [WINDOW_REGISTRY.W005.id]: false,
        [WINDOW_REGISTRY.W006.id]: false,
        [WINDOW_REGISTRY.W007.id]: false,
        [WINDOW_REGISTRY.W008.id]: false,
        [WINDOW_REGISTRY.W009.id]: false,
        [WINDOW_REGISTRY.W010.id]: false,
        [WINDOW_REGISTRY.W011.id]: false,
        [WINDOW_REGISTRY.W012.id]: false,
        [WINDOW_REGISTRY.W013.id]: false,
        [WINDOW_REGISTRY.W014.id]: false,
        [WINDOW_REGISTRY.W015.id]: false,
        [WINDOW_REGISTRY.W016.id]: false,
        [WINDOW_REGISTRY.W017.id]: false,
        [WINDOW_REGISTRY.W018.id]: false,
        [WINDOW_REGISTRY.W019.id]: false,

    });

    useEffect(() => {
        if(!command) {
            return;
        }

       const windowId = COMMAND_WINDOWS[command.type];

       if (windowId) {
        openWindow(windowId);
       }
    
    },[command]);

    
   const openWindow = (windowId) => {
    setOpenWindows((current) => ({
        ...current,
        [windowId]:true
    }));
    const windowTitle = WINDOW_REGISTRY[windowId].title;
    onStatusChange(`${windowTitle} OPENED`)
   };

   const closeWindow = (windowId) => {
    setOpenWindows((current) => ({
        ...current,
        [windowId]:false
    }));
    const windowTitle = WINDOW_REGISTRY[windowId].title;
        onStatusChange(`${windowTitle} CLOSED`)
   };

    return (
  <main className="workspace">
    {Object.entries(openWindows).map(([windowId, isOpen]) => {
      if (!isOpen) {
        return null;
      }

      const WindowComponent = WINDOW_COMPONENTS[windowId];

      if (!WindowComponent) {
        return null;
      }

      return (
        <WindowComponent
          key={windowId}
          onStatusChange={onStatusChange}
          onClose={() => closeWindow(windowId)}
        />
      );
    })}
  </main>
);
}

export default Workspace;