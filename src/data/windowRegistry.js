import { VEHICLE_STATUS_HISTORY } from "./tableColumns";

const defineWindow = (id, config) => ({
    id,...config});

const WINDOW_REGISTRY = {
    W001: defineWindow("W001", {
        title: "ABOUT BWC/4D",
        top: 20,
        left: 20
    }),

    W002: defineWindow("W002", {
        title: "PERSON_PROFILE",
        top: 200,
        left: 300
    }),

    W003: defineWindow("W003", {
        title: "LOCATION_PROFILE",
        top:250,
        left: 450
    }),
    W004: defineWindow("W004", {
        title: "INCIDENT_PROFILE",
        top: 300,
        left: 500
    }),
    W005: defineWindow("W005",{
        title:"ORGANIZATION_PROFILE",
        top: 275,
        left: 250
    }),
    W006: defineWindow("W006",{
        title:"RELATIONSHIP_PROFILE",
        top: 240,
        left: 400
    }),
    W007: defineWindow("W007",{
        title: "CLAIM_PROFILE",
        top: 220,
        left: 260
    }),
    W008: defineWindow("W008",{
        title: "EVIDENCE_PROFILE",
        top: 220,
        left: 260
    }),
    W009: defineWindow("W009",{
        title: "EQUIPMENT_PROFILE",
        top: 250,
        left: 354
    }),
    W010: defineWindow("W010",{
        title: "VEHICLE_PROFILE",
        top: 200,
        left: 300
    }),
    W011: defineWindow("W011",{
        title: "VEHICLE_STATUS_HISTORY_PROFILE",
        top: 250,
        left: 300
    }),
    W012: defineWindow("W012", {
        title: "TIMELINE_EVENT_PROFILE",
        top: 250,
        left: 300
    }),
    W013: defineWindow("W013", {
        title: "EVENT_PARTICIPANT_PROFILE",
        top: 250,
        left: 300
    }),
    W014: defineWindow("W014", {
        title: "THREAT_ASSESSMENT_PROFILE",
        top: 250,
        left: 300
    }),
    W015: defineWindow("W015",{
        title: "SYSTEM_USER_PROFILE",
        top: 250,
        left: 300
    }),
    W016: defineWindow("W016",{
        title: "RECORD_AUDIT_PROFILE",
        top: 250,
        left: 300
    }),
    W017: defineWindow("W017", {
        title: "INCIDENT_PARTICIPANT_PROFILE",
        top: 250,
        left: 300
    }),
    W018: defineWindow("W018", {
        title: "CLAIM_EVIDENCE_PROFILE",
        top: 250,
        left: 300
    }),
    W019: defineWindow("W019", {
        title: "INVENTORY_ITEM_PROFILE"
    })
    

};

export default WINDOW_REGISTRY;