const listingMap = {
    propertyCategory: {
        1: "Residential",
        2: "One/Two storey office building",
        3: "Multi storey office building",
        4: "Multi storey office building with stores",
        5: "Warehouse",
    },

    propertyGrade: {
        1: "Above average",
        2: "Average",
        3: "Below average",
    },

    county: {
        1: "Bomi",
        2: "Lofa",
        3: "Bong",
        4: "Grand Bassa",
        5: "Margibi",
        6: "Nimba",
        7: "Gbarpolu",
        8: "Grand Gedeh",
        9: "Grand Kru",
        10: "Maryland",
        11: "Montserrado",
        12: "River Gee",
        13: "Sinoe",
        14: "Rivercess",
        15: "Grand Cape Mount",
    },

    classType: {
        1: "RRR",
        2: "RRC",
        3: "RCC",
        4: "RCR",
        5: "CCC",
        6: "CCR",
        7: "CRC",
        8: "CRR",
    },

    location: {
        1: "Urban",
        2: "Rural",
    },

    zone: {
        1: "M-1",
        2: "M-2",
        3: "M-3",
        4: "M-4",
        5: "M-5",
        6: "M-6",
        7: "M-7",
        8: "M-8",
        9: "M-9",
        10: "M-10",
        11: "M-11",
        12: "M-12",
        13: "M-13",
        14: "M-14",
        15: "M-15",
        16: "M-16",
    },

    landUse: {
        1: "City/Town Lots",
        2: "Undivided land",
        3: "Farm land",
    },

    typeOfFoundation: {
        1: 'Reinforced Concrete',
        2: 'Regular Concrete',
        3: 'Mixed Type',
        4: 'Other(average)',
        5: 'Other(below average)',
    },

    typeOfFloor: {
        1: 'Marble',
        2: 'Terrazzo',
        3: 'Ceramic',
        4: 'Vinyl/Plastic',
        5: 'Other',
    },

    typeOfElevation: {
        1: '6 in Tile wall',
        2: '6 in Plastered wall',
        3: '4 in Tile wall',
        4: '4 in Plaster wall',
        5: 'Other',
    },

    typeOfSlabCanopy: {
        1: 'Concrete Beam & Latent',
        2: 'Steel Bean & Latent',
        3: 'Block Bean & Latent',
        4: 'Other(average)',
        5: 'Other(below average)',
    },

    typeOfRoofFrame: {
        1: 'Steel',
        2: 'Plank',
        3: 'Round Pole',
        4: 'Bamboo',
        5: 'Other',
    },

    typeOfRoofCover: {
        1: 'Concrete Mixed',
        2: 'Asbestos Clay/Cement Sheet',
        3: 'High Quality Zinc',
        4: 'Average Quality Zinc',
        5: 'Other(below average)',
    },

    typeOfRoofCeiling: {
        1: 'POP(Cement Mixed Ceiling)',
        2: 'Timber & Aluminum Sheet',
        3: 'Plywood',
        4: 'Saw Dust',
        5: 'Other',
    },

    typeOfDoor: {
        1: 'Imported panel',
        2: 'Local Panel',
        3: 'Plywood',
        4: 'Other(average)',
        5: 'Other(below average)',
    },

    typeOfWindow: {
        1: 'Slading',
        2: 'Jalousie',
        3: 'Columber',
        4: 'Wood',
        5: 'Other',
    },

    typeOfWindowBar: {
        1: 'Pipe Bar',
        2: 'Steel Rod Bar',
        3: 'Steel Blade Bar',
        4: 'Other(Average)',
        5: 'Other(Below Average)',
    },

    typeOfDoorGate: {
        1: 'Secure Gate',
        2: 'Local Steel Gate',
        3: 'Steel Rod/Pipe & Sheet',
        4: 'Other(average)',
        5: 'Other(below average)',
    },

    typeOfGarageGate: {
        1: 'Secure Gate',
        2: 'Local Gate',
        3: 'Steel Rod/Pipe & Sheet',
        4: 'Other(average)',
        5: 'Other(below average)',
        6: 'None',
    },

    typeOfPlumbing: {
        1: 'Tile',
        2: 'None Tile',
        3: 'Mixed Type',
        4: 'Other(average)',
        5: 'Other(below average)',
    },

    typeOfElectricity: {
        1: 'Inward Connection',
        2: 'OutWard Connection',
        3: 'Mix Type',
        4: 'Other(average)',
        5: 'Other(below average)',
    },

    typeOfPainting: {
        1: 'Pop Cement(Mixed Paint)',
        2: 'Oil Painting',
        3: 'Water Painting',
        4: 'Whitewash',
        5: 'Other',
        6: 'None',
    },

    proximity: {
        1: 'Main street',
        2: 'Boulevard',
        3: 'Major drive',
        4: 'Highway',
    },

    accessQuality: {
        1: 'Paved road',
        2: 'Feeder road',
    },

    ambience: {
        1: 'Beach',
        2: 'River Front',
        3: 'Hill or Plateau',
        4: 'Mangrove',
    },

    typeOfFence: {
        1: 'Concrete',
        3: 'Steel',
        4: 'Wire fence',
        5: '25% Concrete',
        6: 'Wood bricks',
        7: 'Dirt Bricks',
        8: 'None',
    },

    fenceHeightCover: {
        1: '25%',
        2: '50%',
        3: '75%',
        4: '100%',
        5: '0',
    },

    fencePerimeterCover: {
        1: '25%',
        2: '50%',
        3: '75%',
        4: '100%',
        5: '0',
    },

    typeOfPavement: {
        1: 'Conrete',
        2: 'Bricks',
        3: 'Walk tile',
        4: 'Crush & Bitumen',
        5: 'Wood mixed',
        6: 'Landscape',
        7: 'None',
    },

    pavementAverageDiameter: {
        1: '25%',
        2: '50%',
        3: '75%',
        4: '100%',
        5: '0',
    },

    pavementLotCovered: {
        1: '25%',
        2: '50%',
        3: '75%',
        4: '100%',
        5: '0',
    },
};

module.exports = listingMap;