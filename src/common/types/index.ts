export type UserType = {
  picture: PictureType;
  name: NameType;
  email: string;
  gender: string;
  phone: string;
  country: string;
  location: LocationType;
};

type PictureType = {
  large: string;
  medium: string;
  thumbnail: string;
};

type NameType = {
  first: string;
  last: string;
  title: string;
};

export type TableType = {
  picture: string;
  name: string;
  email: string;
  gender: string;
  phone: string;
  biggerPicture: string;
  country: string;
};

export type ColumnType = {
  field: string;
};

type LocationType = {
  street: StreetType;
  city: string;
  state: string;
  country: string;
  postcode: string;
  coordinates: CoordinateType;
  timezone: TimezoneType;
};

type CoordinateType = {
  latitude: string;
  longitude: string;
};

type StreetType = {
  number: string;
  name: string;
};

type TimezoneType = {
  offset: string;
  description: string;
};
