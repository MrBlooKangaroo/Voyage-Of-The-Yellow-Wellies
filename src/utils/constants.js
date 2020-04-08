export const paths = {
    home: '/'
}

export const awsUrl = 'https://yellow-wellies-production.s3.amazonaws.com'

export const assets = {
    map: {
        src: `${awsUrl}/assets/SuAsCoMap.png`,
        alt: 'SuAsCo Map',
    },
    guide: {
        src: `${awsUrl}/assets/SuAsCoMapGuide.png`,
        alt: 'SuAsCo Map Guide'
    }
}

export const rivers = [
    {
        id: 1,
        name: 'Assabet',
        videoUrl: `${awsUrl}/rivers/assabet/videos/AssabetRiver.mp4`,
        bootPrints: [
            {
                id: 1,
                name: 'Upper Assabet Report Card',
                photoUrl: `${awsUrl}/rivers/assabet/bootPrints/A1.png`,
                linkUrl: 'https://ecoreportcard.org/report-cards/sudbury-assabet-concord-rivers/regions/upper-assabet-river/',
                x: 8.4,
                y: 11.2,
                angle: -24
            },
            {
                id: 2,
                name: 'Assabet Headwaters',
                photoUrl: `${awsUrl}/rivers/assabet/bootPrints/A2.png`,
                linkUrl: 'http://www.oars3rivers.org/river/tributaries/assabet-headwaters',
                x: 11,
                y: 17.9,
                angle: 5
            },
            {
                id: 3,
                name: 'Osprey',
                photoUrl: `${awsUrl}/rivers/assabet/bootPrints/A3.png`,
                linkUrl: 'https://www.massaudubon.org/learn/nature-wildlife/birds/ospreys',
                x: 8,
                y: 24.3,
                angle: 9
            },
            {
                id: 4,
                name: 'River Access',
                photoUrl: `${awsUrl}/rivers/assabet/bootPrints/A4.png`,
                linkUrl: 'http://www.oars3rivers.org/river_map/map/1',
                x: 13,
                y: 28,
                angle: 24
            },
            {
                id: 5,
                name: 'Brook Trout',
                photoUrl: `${awsUrl}/rivers/assabet/bootPrints/A5.png`,
                linkUrl: 'http://www.oars3rivers.org/our-work/monitoring/river-continuity',
                x: 12.2,
                y: 34.1,
                angle: 40
            },
            {
                id: 6,
                name: 'Lower Assabet Report Card',
                photoUrl: `${awsUrl}/rivers/assabet/bootPrints/A6.png`,
                linkUrl: 'https://ecoreportcard.org/report-cards/sudbury-assabet-concord-rivers/regions/lower-assabet-river/',
                x: 18.8,
                y: 36,
                angle: 42
            },
            {
                id: 7,
                name: 'Great Blue Heron',
                photoUrl: `${awsUrl}/rivers/assabet/bootPrints/A7.png`,
                linkUrl: 'https://www.massaudubon.org/learn/nature-wildlife/birds/great-blue-herons',
                x: 21.5,
                y: 43.8,
                angle: 58
            },
            {
                id: 8,
                name: 'Trails',
                photoUrl: `${awsUrl}/rivers/assabet/bootPrints/A8.png`,
                linkUrl: 'http://www.oars3rivers.org/our-work/blue-trails',
                x: 27.7,
                y: 42.6,
                angle: 65
            },
            {
                id: 9,
                name: 'Ben Smith Dam',
                photoUrl: `${awsUrl}/rivers/assabet/bootPrints/A9.png`,
                linkUrl: 'http://www.oars3rivers.org/threats/sediment-dams',
                x: 31,
                y: 49.4,
                angle: 64
            },
            {
                id: 10,
                name: 'Fish Kill',
                photoUrl: `${awsUrl}/rivers/assabet/bootPrints/A10.png`,
                linkUrl: 'http://www.oars3rivers.org/fishkill-assabet-2013',
                x: 38.7,
                y: 48,
                angle: 60
            },
            {
                id: 11,
                name: 'River Otters',
                photoUrl: `${awsUrl}/rivers/assabet/bootPrints/A11.png`,
                linkUrl: 'https://www.mass.gov/service-details/learn-about-river-otters',
                x: 41,
                y: 54.4,
                angle: 57
            },
            {
                id: 12,
                name: 'River Facts',
                photoUrl: `${awsUrl}/rivers/assabet/bootPrints/A12.png`,
                linkUrl: 'http://www.oars3rivers.org/river/assabet-river-facts',
                x: 48,
                y: 54,
                angle: 68
            },
            {
                id: 13,
                name: 'Wild & Scenic River Stewardship Council',
                photoUrl: `${awsUrl}/rivers/assabet/bootPrints/A13.png`,
                linkUrl: 'http://www.sudbury-assabet-concord.org/',
                x: 50.4,
                y: 59,
                angle: 69
            }
        ]
    },
    {
        id: 2,
        name: 'Sudbury',
        videoUrl: `${awsUrl}/rivers/sudbury/videos/SudburyRiver.mp4`,
        bootPrints: [
            {
                id: 1,
                name: 'Upper Sudbury Report Card',
                photoUrl: `${awsUrl}/rivers/sudbury/bootPrints/S1.png`,
                linkUrl: 'https://ecoreportcard.org/report-cards/sudbury-assabet-concord-rivers/regions/upper-sudbury-river/',
                x: 43.5,
                y: 11,
                angle: 19
            },
            {
                id: 2,
                name: 'Lake Sudbury',
                photoUrl: `${awsUrl}/rivers/sudbury/bootPrints/S2.png`,
                linkUrl: 'https://www.walden.org/property/fairhaven-bay/',
                x: 49.3,
                y: 13.8,
                angle: 35
            },
            {
                id: 3,
                name: 'Great Meadows National Wildlife Refuge',
                photoUrl: `${awsUrl}/rivers/sudbury/bootPrints/S3.png`,
                linkUrl: 'https://www.fws.gov/refuge/great_meadows/',
                x: 49.1,
                y: 19.6,
                angle: 27
            },
            {
                id: 4,
                name: 'Water Cycle',
                photoUrl: `${awsUrl}/rivers/sudbury/bootPrints/S4.png`,
                linkUrl: 'http://www.oars3rivers.org/river/watercycle',
                x: 54.4,
                y: 22,
                angle: 42
            },
            {
                id: 5,
                name: 'Climate Change',
                photoUrl: `${awsUrl}/rivers/sudbury/bootPrints/S5.png`,
                linkUrl: 'http://www.oars3rivers.org/threats/natural-flow',
                x: 55.1,
                y: 28.1,
                angle: 23
            },
            {
                id: 6,
                name: 'Water Pollution',
                photoUrl: `${awsUrl}/rivers/sudbury/bootPrints/S6.png`,
                linkUrl: 'http://www.oars3rivers.org/threats/water-pollution',
                x: 59,
                y: 32.3,
                angle: 2
            },
            {
                id: 7,
                name: 'Beaver',
                photoUrl: `${awsUrl}/rivers/sudbury/bootPrints/S7.png`,
                linkUrl: 'https://www.massaudubon.org/learn/nature-wildlife/mammals/beavers',
                x: 56,
                y: 37.9,
                angle: -5
            },
            {
                id: 8,
                name: 'Invasive Plants',
                photoUrl: `${awsUrl}/rivers/sudbury/bootPrints/S8.png`,
                linkUrl: 'http://www.oars3rivers.org/threats/invasive',
                x: 59,
                y: 43,
                angle: 9
            },
            {
                id: 9,
                name: 'Black Flies',
                photoUrl: `${awsUrl}/rivers/sudbury/bootPrints/S9.png`,
                linkUrl: 'https://nabfa-blackfly.org/',
                x: 56.4,
                y: 48,
                angle: -9
            },
            {
                id: 10,
                name: 'River Facts',
                photoUrl: `${awsUrl}/rivers/sudbury/bootPrints/S10.png`,
                linkUrl: 'http://www.oars3rivers.org/river/sudbury-river-facts',
                x: 59.1,
                y: 51.5,
                angle: 10
            }
        ]
    },
    {
        id: 3,
        name: 'Concord',
        videoUrl: `${awsUrl}/rivers/concord/videos/ConcordRiver.mp4`,
        bootPrints: [
            {
                id: 1,
                name: 'Upper Concord Report Card',
                photoUrl: `${awsUrl}/rivers/concord/bootPrints/C1.png`,
                linkUrl: 'https://ecoreportcard.org/report-cards/sudbury-assabet-concord-rivers/regions/upper-concord-river/',
                x: 53.5,
                y: 54.7,
                angle: 14
            },
            {
                id: 2,
                name: 'Minuteman National Historic Park',
                photoUrl: `${awsUrl}/rivers/concord/bootPrints/C2.png`,
                linkUrl: 'https://www.nps.gov/mima/index.htm',
                x: 57.9,
                y: 58.2,
                angle: 24
            },
            {
                id: 3,
                name: 'The Old Manse',
                photoUrl: `${awsUrl}/rivers/concord/bootPrints/C3.png`,
                linkUrl: 'http://www.thetrustees.org/places-to-visit/metro-west/old-manse.html',
                x: 61,
                y: 68.3,
                angle: 26
            },
            {
                id: 4,
                name: 'October Farm',
                photoUrl: `${awsUrl}/rivers/concord/bootPrints/C4.png`,
                linkUrl: 'https://www.concordma.gov/DocumentCenter/View/6956/October-Farm-Riverfront-Trail-Guide',
                x: 56.3,
                y: 63.3,
                angle: 13
            },
            {
                id: 5,
                name: 'Squaw Sachem Trail',
                photoUrl: `${awsUrl}/rivers/concord/bootPrints/C5.png`,
                linkUrl: 'https://www.concordma.gov/DocumentCenter/View/2095/River-Confluence-Trail-Guide',
                x: 58.9,
                y: 72.7,
                angle: 19
            },
            {
                id: 6,
                name: 'Lower Concord Report Card',
                photoUrl: `${awsUrl}/rivers/concord/bootPrints/C6.png`,
                linkUrl: 'https://ecoreportcard.org/report-cards/sudbury-assabet-concord-rivers/regions/lower-concord-river/',
                x: 64,
                y: 75.7,
                angle: 6
            },
            {
                id: 7,
                name: 'Concord River Greenway',
                photoUrl: `${awsUrl}/rivers/concord/bootPrints/C7.png`,
                linkUrl: 'https://lowelllandtrust.org/concord-river-greenway/',
                x: 61.8,
                y: 81.1,
                angle: 23
            },
            {
                id: 8,
                name: 'River Facts',
                photoUrl: `${awsUrl}/rivers/concord/bootPrints/C8.png`,
                linkUrl: 'http://www.oars3rivers.org/river/concord-river-facts',
                x: 67.8,
                y: 84.6,
                angle: 17
            },
            {
                id: 9,
                name: 'Watershed Report Card',
                photoUrl: `${awsUrl}/rivers/concord/bootPrints/C9.png`,
                linkUrl: 'https://ecoreportcard.org/report-cards/sudbury-assabet-concord-rivers/',
                x: 65.3,
                y: 88.3,
                angle: 3
            }
        ]
    }
]