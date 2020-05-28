import { audio, videos, images, bootPrints as bootPrintImages } from '../assets'

export const paths = {
    home: '/'
}

export const assets = {
    wellies: {
        src: images.yellowWellies,
        alt: 'Yellow Wellies'
    },
    map: {
        src: images.suAsCoMap,
        alt: 'SuAsCo Map',
    },
    guide: {
        src: images.guide,
        alt: 'SuAsCo Map Guide'
    },
    arrows: {
        src: images.arrows,
        alt: 'Arrows Pointing Right'
    },
    duck: {
        src: images.duck,
        alt: 'Duck'
    },
    umbrella: {
        src: images.umbrellaLogo,
        alt: 'The Umbrella Arts Center',
        linkUrl: 'https://theumbrellaarts.org/'
    },
    audio: {
        bootClick: audio.bootClick,
        bootHover: audio.bootHover,
        close: audio.close,
        explore: audio.explore,
        toggle: audio.toggle,
        zoomIn: audio.zoomIn,
        zoomOut: audio.zoomOut,
        river: audio.river,
        quack: audio.quack
    }
}

export const rivers = [
    {
        id: 1,
        name: 'Assabet',
        videoUrl: videos.assabetRiver
    },
    {
        id: 2,
        name: 'Sudbury',
        videoUrl: videos.sudburyRiver
    },
    {
        id: 3,
        name: 'Concord',
        videoUrl: videos.concordRiver
    }
]

export const bootPrints = [
    {
        id: 1,
        name: 'Upper Assabet Report Card',
        photoUrl: bootPrintImages.assabet.A1,
        linkUrl: 'https://ecoreportcard.org/report-cards/sudbury-assabet-concord-rivers/regions/upper-assabet-river/',
        riverId: 1,
        x: 8.4,
        y: 11.2,
        angle: -24
    },
    {
        id: 2,
        name: 'Assabet Headwaters',
        photoUrl: bootPrintImages.assabet.A2,
        linkUrl: 'http://www.oars3rivers.org/river/tributaries/assabet-headwaters',
        riverId: 1,
        x: 11,
        y: 17.9,
        angle: 5
    },
    {
        id: 3,
        name: 'Osprey',
        photoUrl: bootPrintImages.assabet.A3,
        linkUrl: 'https://www.massaudubon.org/learn/nature-wildlife/birds/ospreys',
        riverId: 1,
        x: 8,
        y: 24.3,
        angle: 9
    },
    {
        id: 4,
        name: 'River Access',
        photoUrl: bootPrintImages.assabet.A4,
        linkUrl: 'http://www.oars3rivers.org/river_map/map/1',
        riverId: 1,
        x: 13,
        y: 28,
        angle: 24
    },
    {
        id: 5,
        name: 'Brook Trout',
        photoUrl: bootPrintImages.assabet.A5,
        linkUrl: 'http://www.oars3rivers.org/our-work/monitoring/river-continuity',
        riverId: 1,
        x: 12.2,
        y: 34.1,
        angle: 40
    },
    {
        id: 6,
        name: 'Lower Assabet Report Card',
        photoUrl: bootPrintImages.assabet.A6,
        linkUrl: 'https://ecoreportcard.org/report-cards/sudbury-assabet-concord-rivers/regions/lower-assabet-river/',
        riverId: 1,
        x: 18.8,
        y: 36,
        angle: 42
    },
    {
        id: 7,
        name: 'Great Blue Heron',
        photoUrl: bootPrintImages.assabet.A7,
        linkUrl: 'https://www.massaudubon.org/learn/nature-wildlife/birds/great-blue-herons',
        riverId: 1,
        x: 21.5,
        y: 43.8,
        angle: 58
    },
    {
        id: 8,
        name: 'Trails',
        photoUrl: bootPrintImages.assabet.A8,
        linkUrl: 'http://www.oars3rivers.org/our-work/blue-trails',
        riverId: 1,
        x: 27.7,
        y: 42.6,
        angle: 65
    },
    {
        id: 9,
        name: 'Ben Smith Dam',
        photoUrl: bootPrintImages.assabet.A9,
        linkUrl: 'http://www.oars3rivers.org/threats/sediment-dams',
        riverId: 1,
        x: 31,
        y: 49.4,
        angle: 64
    },
    {
        id: 10,
        name: 'Fish Kill',
        photoUrl: bootPrintImages.assabet.A10,
        linkUrl: 'http://www.oars3rivers.org/fishkill-assabet-2013',
        riverId: 1,
        x: 38.7,
        y: 48,
        angle: 60
    },
    {
        id: 11,
        name: 'River Otters',
        photoUrl: bootPrintImages.assabet.A11,
        linkUrl: 'https://www.mass.gov/service-details/learn-about-river-otters',
        riverId: 1,
        x: 41,
        y: 54.4,
        angle: 57
    },
    {
        id: 12,
        name: 'River Facts',
        photoUrl: bootPrintImages.assabet.A12,
        linkUrl: 'http://www.oars3rivers.org/river/assabet-river-facts',
        riverId: 1,
        x: 48,
        y: 54,
        angle: 68
    },
    {
        id: 13,
        name: 'Wild & Scenic River Stewardship Council',
        photoUrl: bootPrintImages.assabet.A13,
        linkUrl: 'http://www.sudbury-assabet-concord.org/',
        riverId: 1,
        x: 50.4,
        y: 59,
        angle: 69
    },
    {
        id: 14,
        name: 'Upper Sudbury Report Card',
        photoUrl: bootPrintImages.sudbury.S1,
        linkUrl: 'https://ecoreportcard.org/report-cards/sudbury-assabet-concord-rivers/regions/upper-sudbury-river/',
        riverId: 2,
        x: 43.5,
        y: 11,
        angle: 19
    },
    {
        id: 15,
        name: 'Lake Sudbury',
        photoUrl: bootPrintImages.sudbury.S2,
        linkUrl: 'https://www.walden.org/property/fairhaven-bay/',
        riverId: 2,
        x: 49.3,
        y: 13.8,
        angle: 35
    },
    {
        id: 16,
        name: 'Great Meadows National Wildlife Refuge',
        photoUrl: bootPrintImages.sudbury.S3,
        linkUrl: 'https://www.fws.gov/refuge/great_meadows/',
        riverId: 2,
        x: 49.1,
        y: 19.6,
        angle: 27
    },
    {
        id: 17,
        name: 'Water Cycle',
        photoUrl: bootPrintImages.sudbury.S4,
        linkUrl: 'http://www.oars3rivers.org/river/watercycle',
        riverId: 2,
        x: 54.4,
        y: 22,
        angle: 42
    },
    {
        id: 18,
        name: 'Climate Change',
        photoUrl: bootPrintImages.sudbury.S5,
        linkUrl: 'http://www.oars3rivers.org/threats/natural-flow',
        riverId: 2,
        x: 55.1,
        y: 28.1,
        angle: 23
    },
    {
        id: 19,
        name: 'Water Pollution',
        photoUrl: bootPrintImages.sudbury.S6,
        linkUrl: 'http://www.oars3rivers.org/threats/water-pollution',
        riverId: 2,
        x: 59,
        y: 32.3,
        angle: 2
    },
    {
        id: 20,
        name: 'Beaver',
        photoUrl: bootPrintImages.sudbury.S7,
        linkUrl: 'https://www.massaudubon.org/learn/nature-wildlife/mammals/beavers',
        riverId: 2,
        x: 56,
        y: 37.9,
        angle: -5
    },
    {
        id: 21,
        name: 'Invasive Plants',
        photoUrl: bootPrintImages.sudbury.S8,
        linkUrl: 'http://www.oars3rivers.org/threats/invasive',
        riverId: 2,
        x: 59,
        y: 43,
        angle: 9
    },
    {
        id: 22,
        name: 'Black Flies',
        photoUrl: bootPrintImages.sudbury.S9,
        linkUrl: 'https://nabfa-blackfly.org/',
        riverId: 2,
        x: 56.4,
        y: 48,
        angle: -9
    },
    {
        id: 23,
        name: 'River Facts',
        photoUrl: bootPrintImages.sudbury.S10,
        linkUrl: 'http://www.oars3rivers.org/river/sudbury-river-facts',
        riverId: 2,
        x: 59.1,
        y: 51.5,
        angle: 10
    },
    {
        id: 24,
        name: 'Upper Concord Report Card',
        photoUrl: bootPrintImages.concord.C1,
        linkUrl: 'https://ecoreportcard.org/report-cards/sudbury-assabet-concord-rivers/regions/upper-concord-river/',
        riverId: 3,
        x: 53.5,
        y: 54.7,
        angle: 14
    },
    {
        id: 25,
        name: 'Minuteman National Historic Park',
        photoUrl: bootPrintImages.concord.C2,
        linkUrl: 'https://www.nps.gov/mima/index.htm',
        riverId: 3,
        x: 57.9,
        y: 58.2,
        angle: 24
    },
    {
        id: 26,
        name: 'The Old Manse',
        photoUrl: bootPrintImages.concord.C3,
        linkUrl: 'http://www.thetrustees.org/places-to-visit/metro-west/old-manse.html',
        riverId: 3,
        x: 61,
        y: 68.3,
        angle: 26
    },
    {
        id: 27,
        name: 'October Farm',
        photoUrl: bootPrintImages.concord.C4,
        linkUrl: 'https://www.concordma.gov/DocumentCenter/View/6956/October-Farm-Riverfront-Trail-Guide',
        riverId: 3,
        x: 56.3,
        y: 63.3,
        angle: 13  
    },
    {
        id: 28,
        name: 'Squaw Sachem Trail',
        photoUrl: bootPrintImages.concord.C5,
        linkUrl: 'https://www.concordma.gov/DocumentCenter/View/2095/River-Confluence-Trail-Guide',
        riverId: 3,
        x: 58.9,
        y: 72.7,
        angle: 19
    },
    {
        id: 29,
        name: 'Lower Concord Report Card',
        photoUrl: bootPrintImages.concord.C6,
        linkUrl: 'https://ecoreportcard.org/report-cards/sudbury-assabet-concord-rivers/regions/lower-concord-river/',
        riverId: 3,
        x: 64,
        y: 75.7,
        angle: 6
    },
    {
        id: 30,
        name: 'Concord River Greenway',
        photoUrl: bootPrintImages.concord.C7,
        linkUrl: 'https://lowelllandtrust.org/concord-river-greenway/',
        riverId: 3,
        x: 61.8,
        y: 81.1,
        angle: 23
    },
    {
        id: 31,
        name: 'River Facts',
        photoUrl: bootPrintImages.concord.C8,
        linkUrl: 'http://www.oars3rivers.org/river/concord-river-facts',
        riverId: 3,
        x: 67.8,
        y: 84.6,
        angle: 17
    },
    {
        id: 32,
        name: 'Watershed Report Card',
        photoUrl: bootPrintImages.concord.C9,
        linkUrl: 'https://ecoreportcard.org/report-cards/sudbury-assabet-concord-rivers/',
        riverId: 3,
        x: 65.3,
        y: 88.3,
        angle: 3
    }
]

export const ekphrasis = {
    beginning1: 'The Voyage of the Yellow Wellies is a personal journey of river exploration that encourages participation by putting viewers into a canoe with three different canoeists. Explore the rivers by seeing looking at the scenery and clicking through the bootprints left behind by the yellow wellies. The Voyage of the Yellow Wellies also asks you to consider your own ecological footprint. Each boot print links to a resource or activity to help you develop as a river steward. The Assabet, Sudbury, and Concord Rivers are vital to our communities; how will we enjoy and preserve them?',
    beginning2: 'Special thanks to our project sponsor, the ',
    link: 'River Stewardship Council',
    linkUrl: 'https://www.sudbury-assabet-concord.org/',
    end: ', as well as OARS for their online resources, Julia Khorana for her photos and canoe prowess, Dave Witherbee for his photos and local history, Phoebe Clarkson for her canoe ability and tough riddles, the team at the Umbrella Center for the Arts for making this installation go digital, and Corey Angelus for making it look good.'
}