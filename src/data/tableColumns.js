const PERSON = [
  { field: "personId", label: "PERSON_ID" },
  { field: "displayName", label: "DISPLAY_NAME" },
  { field: "birthName", label: "BIRTH_NAME" },
  { field: "title", label: "TITLE" },
  { field: "status", label: "STATUS" },
  { field: "threatLevel", label: "THREAT_LEVEL" }
]
const LOCATION = [
  { field: "locationId", label: "LOCATION_ID" },
  { field: "displayName", label: "DISPLAY_NAME" },
  { field: "locationType", label: "LOCATION_TYPE" },
  { field: "status", label: "STATUS" }
]

const ORGANIZATION = [
  { field: "organizationId", label: "ORGANIZATION_ID" },
  { field: "displayName", label: "DISPLAY_NAME" },
  { field: "organizationType", label: "ORGANIZATION_TYPE" },
  { field: "status", label: "STATUS" }
]

const RELATIONSHIP = [
  { field: "relationshipId", label: "RELATIONSHIP_ID" },
  { field: "sourceEntity", label: "SOURCE_ENTITY" },
  { field: "relationshipType", label: "RELATIONSHIP_TYPE" },
  { field: "targetEntity", label: "TARGET_ENTITY" },
  { field: "status", label: "STATUS" }
]

const INCIDENT = [
  { field: "incidentId", label: "INCIDENT_ID" },
  { field: "incidentName", label: "INCIDENT_NAME" },
  { field: "incidentType", label: "INCIDENT_TYPE" },
  { field: "status", label: "STATUS" }
]

const CLAIM = [
  { field: "claimId", label: "CLAIM_ID" },
  { field: "subjectEntity", label: "SUBJECT_ENTITY" },
  { field: "claimText", label: "CLAIM_TEXT" },
  { field: "confidenceLevel", label: "CONFIDENCE_LEVEL" },
  { field: "status", label: "STATUS" }
]

const EVIDENCE = [
  { field: "evidenceId", label: "EVIDENCE_ID" },
  { field: "evidenceType", label: "EVIDENCE_TYPE" },
  { field: "description", label: "DESCRIPTION" },
  { field: "status", label: "STATUS" }
]

const EQUIPMENT = [
  { field: "equipmentId", label: "EQUIPMENT_ID" },
  { field: "displayName", label: "DISPLAY_NAME" },
  { field: "equipmentType", label: "EQUIPMENT_TYPE" },
  { field: "status", label: "STATUS" }
]

const VEHICLE = [
  { field: "vehicleId", label: "VEHICLE_ID" },
  { field: "displayName", label: "DISPLAY_NAME" },
  { field: "vehicleClass", label: "VEHICLE_CLASS" },
  { field: "currentStatus", label: "CURRENT_STATUS" }
]

const VEHICLE_STATUS_HISTORY = [
  { field: "historyId", label: "HISTORY_ID" },
  { field: "vehicleId", label: "VEHICLE_ID" },
  { field: "status", label: "STATUS" },
  { field: "statusDate", label: "STATUS_DATE" }
]

const TIMELINE_EVENT = [
  { field: "eventId", label: "EVENT_ID" },
  { field: "eventSequence", label: "EVENT_SEQUENCE" },
  { field: "eventName", label: "EVENT_NAME" },
  { field: "eventDate", label: "EVENT_DATE" },
  { field: "dateBasis", label: "DATE_BASIS" }
]

const EVENT_PARTICIPANT = [
  { field: "eventParticipantId", label: "EVENT_PARTICIPANT_ID" },
  { field: "eventId", label: "EVENT_ID" },
  { field: "entityId", label: "ENTITY_ID" },
  { field: "role", label: "ROLE" }
]

const THREAT_ASSESSMENT = [
  { field: "threatAssessmentId", label: "THREAT_ASSESSMENT_ID" },
  { field: "assessmentName", label: "ASSESSMENT_NAME" },
  { field: "description", label: "DESCRIPTION" }
]

const SYSTEM_USER = [
  { field: "userId", label: "USER_ID" },
  { field: "displayName", label: "DISPLAY_NAME" },
  { field: "role", label: "ROLE" },
  { field: "status", label: "STATUS" }
]

const RECORD_AUDIT = [
  { field: "auditId", label: "AUDIT_ID" },
  { field: "entityType", label: "ENTITY_TYPE" },
  { field: "entityId", label: "ENTITY_ID" },
  { field: "actionType", label: "ACTION_TYPE" },
  { field: "userId", label: "USER_ID" }
]


const INCIDENT_PARTICIPANT =  [
  { field: "incidentParticipantId", label: "INCIDENT_PARTICIPANT_ID" },
  { field: "incidentId", label: "INCIDENT_ID" },
  { field: "entityId", label: "ENTITY_ID" },
  { field: "role", label: "ROLE" }
]

const CLAIM_EVIDENCE = [
  { field: "claimEvidenceId", label: "CLAIM_EVIDENCE_ID" },
  { field: "claimId", label: "CLAIM_ID" },
  { field: "evidenceId", label: "EVIDENCE_ID" }
]

const INVENTORY_ITEM = [
  { field: "inventoryId", label: "INVENTORY_ID" },
  { field: "equipmentId", label: "EQUIPMENT_ID" },
  { field: "serialNumber", label: "SERIAL_NUMBER" },
  { field: "currentLocationId", label: "CURRENT_LOCATION_ID" },
  { field: "assignedEntityId", label: "ASSIGNED_ENTITY_ID" },
  { field: "quantity", label: "QUANTITY" },
  { field: "status", label: "STATUS" }
]


export {
  PERSON,
  LOCATION,
  ORGANIZATION,
  RELATIONSHIP,
  INCIDENT,
  INCIDENT_PARTICIPANT,
  CLAIM,
  EVIDENCE,
  CLAIM_EVIDENCE,
  TIMELINE_EVENT,
  EVENT_PARTICIPANT,
  EQUIPMENT,
  INVENTORY_ITEM,
  VEHICLE,
  VEHICLE_STATUS_HISTORY,
  THREAT_ASSESSMENT,
  SYSTEM_USER,
  RECORD_AUDIT
};




// const ENTITY = [
// {field: "entityId",
// label: "ENTITY_ID"},
// {field: "universeId",
// label: "UNIVERSE_ID"},
// {field: "entityType",
// label: "ENTITY_TYPE"},
// {field: "primaryName",
// label: "PRIMARY_NAME"},
// {field: "displayName",
// label: "DISPLAY_NAME"},
// {field: "classification",
// label : "CLASSIFICATION"},
// {field: "recordStatus",
// label: "RECORD_STATUS"},
// {field: "currentStatus",
// label: "CURRENT_STATUS"},
// {field: "summary",
// label: "SUMMARY"},
// {field: "createdBy",
// label :"CREATED_BY"}]

// const PERSON_PROFILE = [
// {field: "entityId",
// label: "ENTITY_ID"},
// {field: "legalName",
// label: "LEGAL_NAME"},
// {field: "birthName",
// label: "BIRTH_NAME"},
// {field: "givenName",
// label: "GIVEN_NAME"},
// {field: "middleName",
// label: "MIDDLE_NAME"},
// {field: "familyName",
// label: "FAMILY_NAME"},
// {field: "professionalTitle",
// label: "PROFESSIONAL_TITLE"},
// {field: "gender",
// label: "GENDER"},
// {field: "citizenship",
// label: "CITIZENSHIP"},
// {field: "maritalStatus",
// label: "MARITAL_STATUS"},
// {field: "occupation",
// label: "OCCUPATION"},
// {field: "secondaryOccupations",
// label: "SECONDARY_OCCUPATIONS"},
// {field: "physicalDesc",
// label: "PHYSICAL_DESCRIPTION"},
// {field: "",
// label: "BIOGRAPH_SUMMARY"},
// {field: "",
// label: "BIRTH_DATE"},
// {field: "",
// label: "BIRTH_DATE_PRECISION"},
// {field: "",
// label: "DEATH_DATE"},
// {field: "",
// label: "DEATH_DATE_PERCISION"}]

// const ENTITY_ALIAS = [
// {field: "",
// label: "ALIAS_ID"},
// {field: "entityId",
// label: "ENTITY_ID"},
// {field: "",
// label: "ALIAS_NAME"},
// {field: "",
// label: "ALIAS_TYPE"},
// {field: "",
// label: "CONFIDENCE_LEVEL"},
// {field: "",
// label: "ACTIVE_FLAG"},
// {field: "",
// label: "NOTES"}]

// const RELATIONSHIP =[
// {field: "",
// label: "REALTIONSHIP_ID"},
// {field: "",
// label: "SOURCE_ENTITY_ID"},
// {field: "",
// label: "REALTIONSHIP_TYPE"},
// {field: "",
// label: "TARGET_ENTITY_ID"},
// {field: "",
// label: "REALTIONSHIP_STATUS"},
// {field: "",
// label: "CONFIDENCE_LEVEL"},
// {field: "",
// label: "START_DATE"},
// {field: "",
// label: "END_DATE"},
// {field: "datePrecision",
// label: "DATE_PRECISION"},
// {field: "visibilityLevel",
// label: "VISIBILITY_LEVEL"},
// {field: "description",
// label: "DESCRIPTION"}]

// const ORGANIZATION_PROFILE = [
// {field: "entityId",
// label: "ENTITY_ID"},
// {field: "organizatioName",
// label: "ORGANIZATION_NAME"},
// {field: "oranizationType",
// label: "ORGANIZATION_TYPE"},
// {field: "legalStatus",
// label: "LEGAL_STATUS"},
// {field: "headEntityId",
// label: "HEADQUARTERS_ENTITY_ID"},
// {field: "formationDate",
// label: "FORMATION_DATE"},
// {field: "dissolutionDate",
// label: "DISSOLUTION_DATE"},
// {field: "operationalStatus",
// label: "OPERATIONAL_STATUS"},
// {field: "description",
// label: "DESCRIPTION"}]

// const LOCATION_PROFILE = [
// {field: "entityId",
// label: "ENTITY_ID"},
// {field: "locationName",
// label: "LOCATION_NAME"},
// {field: "locationType",
// label: "LOCATION_TYPE"},
// {field: "parentLocationId",
// label: "PARENT_LOCATION_ID"},
// {field: "streetAddress",
// label: "STREET_ADDRESS"},
// {field: "district",
// label: "DISTRICT"},
// {field: "city",
// label: "CITY"},
// {field: "stateRegion",
// label: "STATE_REGION"},
// {field: "country",
// label: "COUNTRY"},
// {field: "latit",
// label: "LATITUDE"},
// {field: "long",
// label: "LONGITUDE"},
// {field: "accessStatus",
// label: "ACCESS_STATUS"},
// {field: "accessStatus",
// label: "OPERATIONAL_STATUS"},
// {field: "descShow",
// label: "DESCRIPTION_SHOW"}]

// const INCIDENT = [
// {field: "incidentId",
// label: "INCIDENT_ID"},
// {field: "universeId",
// label: "UNIVERSE_ID"},
// {field: "incidentCOde",
// label: "INCIDENT_CODE"},
// {field: "incidentName",
// label: "INCIDENT_NAME"},
// {field: "incidentType",
// label: "INCIDENT_TYPE"},
// {field: "summary",
// label: "SUMMARY"},
// {field: "StartDate",
// label: "START_DATE"},
// {field: "endDate",
// label: "END_DATE"},
// {field: "datePrecision",
// label: "DATE_PRECISION"},
// {field: "primaryLocationId",
// label: "PRIMARY_LOCATION_ID"},
// {field: "incidentStatus",
// label: "INCIDENT_STATUS"},
// {field: "severityLevel",
// label: "SEVERITY_LEVEL"},
// {field: "publicKnowledgeStatus",
// label: "PUBLIC_KNOWLEDGE_STATUS"}]

// const INCIDENT_ENTRY = [
// {field: "incidentEntityId",
// label: "INCIDENT_ENTITY_ID"},
// {field: "incidentId",
// label: "INCIDENT_ID"},
// {field: "entityId",
// label: "ENTITY_ID"},
// {field: "participationRole",
// label: "PARTICIPATION_ROLE"},
// {field: "involvementStatus",
// label: "INVOLVEMENT_STATUS"},
// {field: "confidenceLevel",
// label: "CONFIDENCE_LEVEL"},
// {field: "description",
// label: "DESCRIPTION"}]

// const TIMELINE_ENTRY = [
// {field: "timelineEntryId",
// label: "TIMELINE_ENTRY_ID"},
// {field: "entityId",
// label: "ENTITY_ID"},
// {field: "eventDate",
// label: "EVENT_DATE"},
// {field: "datePrecision",
// label: "DATE_PRECISION"},
// {field: "EntryType",
// label: "ENTRY_TYPE"},
// {field: "title",
// label: "TITLE"},
// {field: "description",
// label: "DESCRIPTION"},
// {field: "incidentId",
// label: "INCIDENT_ID"},
// {field: "confidenceLevel",
// label: "CONFIDENCE_LEVEL"},
// {field: "visibilityLevel",
// label: "VISIBILITY_LEVEL"}]

// const CLAIM = [
// {field: "claimId",
// label: "CLAIM_ID"},
// {field: "subjectEntityId",
// label: "SUBJECT_ENTITY_ID"},
// {field: "predicate",
// label: "PREDICATE"},
// {field: "objectEntityId",
// label: "OBJECT_ENTITY_ID"},
// {field: "objectValue",
// label: "OBJECT_VALUE"},
// {field: "claimStatus",
// label: "CLAIM_STATUS"},
// {field: "confidenceLevel",
// label: "CONFIDENCE_LEVEL"},
// {field: "firstRecordedDate",
// label: "FIRST_RECRODED_DATE"},
// {field: "lastReviewedDate",
// label: "LAST_REVIEWED_DATE"},
// {field: "investigatorAssessment",
// label: "INVESTIGATOR_ASSESSMENT"},
// {field: "visibiltyLevel",
// label: "VISIBILITY_LEVEL"}]

// const THREAT_ASSESSMENT = [
// {field: "AssessmentId",
// label: "ASSESSMENT_ID"},
// {field: "entityId",
// label: "ENTITY_ID"},
// {field: "assessmentDate",
// label: "ASSESSMENT_DATE"},
// {field: "overallThreat",
// label: "OVERALL_THREAT_LEVEL"},
// {field: "physicalThreat",
// label: "PHYSICAL_THREAT_LEVEL"},
// {field: "stratThreat",
// label: "STRATEGIC_THREAT_LEVEL"},
// {field: "techThreat",
// label: "TECHNOLOGICAL_THREAT_LEVEL"},
// {field: "psyThreat",
// label: "PSYCHOLOGICAL_THREAT_LEVEL"},
// {field: "monitoringStatus",
// label: "MONITORING_STATUS"},
// {field: "recommendedResponse",
// label: "RECOMMENDED_RESPONSE"},
// {field: "assessmentSummary",
// label: "ASSESSMENT_SUMMARY"},
// {field: "currentFlag",
// label: "CURRENT_FLAG"}]

// const INVESTIGATOR_NOTE = [
// {field: "noteId",
// label: "NOTE_ID"},
// {field: "recordType",
// label: "RECORD_TYPE"},
// {field: "recordId",
// label: "RECORD_ID"},
// {field: "authorEntityId",
// label: "AUTHOR_ENTITY_ID"},
// {field: "noteType",
// label: "NOTE_TYPE"},
// {field: "noteText",
// label: "NOTE_TEXT"},
// {field: "visibilityLevel",
// label: "VISIBILITY_LEVEL"},
// {field: "classificationLevel",
// label: "CLASSIFICATION_LEVEL"},
// {field: "createdDate",
// label: "CREATED_DATE"},
// {field: "lastUpdatedDate",
// label: "LAST_UPDATED_DATE"}]






