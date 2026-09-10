const relationshipProfile = [
    {
        id: "r001",
        sourceEntity: "Thomas Wayne",
        relationshipType : "PARENT",
        targetEntity : "Bruce Wayne",
        status: "ACTIVE"
    },
        {
        id: "r002",
        sourceEntity: "Martha Wayne",
        relationshipType : "PARENT",
        targetEntity : "Bruce Wayne",
        status: "ACTIVE"
    },
        {
        id: "r003",
        sourceEntity: "Thomas Wayne",
        relationshipType : "HUSBAND",
        targetEntity : "MARTHA Wayne",
        status: "INACTIVE"
    },
           {
        id: "r004",
        sourceEntity: "Martha Wayne",
        relationshipType : "Wife",
        targetEntity : "Thomas Wayne",
        status: "INACTIVE"
    },
           {
        id: "r005",
        sourceEntity: "Alfred PennyWorth",
        relationshipType : "Guardian",
        targetEntity : "Bruce",
        status: "INACTIVE"
    },
               {
        id: "r006",
        sourceEntity: "Alfred PennyWorth",
        relationshipType : "MENTOR",
        targetEntity : "Bruce",
        status: "ACTIVE"
    },
                 {
        id: "r007",
        sourceEntity: "Alfred PennyWorth",
        relationshipType : "MENTOR",
        targetEntity : "Bruce",
        status: "ACTIVE"
    },

]
export default relationshipProfile;