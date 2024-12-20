// Type Signature

type User= {
    id: number;
    name: string;
    nickname?: string;
    birth: string;
    location: string;
}

let user: User = {
    id: 1,
    name: 'Chris',
    birth: '1992-01-01',
    location: 'Seoul'
}

let user2: User = {
    id: 2,
    name: 'Tom',
    birth: '1993-01-01',
    location: 'Busan'
}

type CountryCodes = {
    [key: string]: string;
};

let countryCodes: CountryCodes = {
    Korea: 'ko',
    UnitedStates: 'us',
    UnitedKingdom: 'uk'
}

// Index Signature
type CountryNumberCodes = {
    [key: string]: number;
}

let countryNumberCodes: CountryNumberCodes = {
    Korea: 82,
    UnitedStates: 1,
    UnitedKingdom: 44
}