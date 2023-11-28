export type UserType = {
  picture: PictureType;
  name: NameType;
  email: string;
  gender: string;
  phone: string;
};

export type PictureType = {
  large: string;
  medium: string;
  thumbnail: string;
};

export type NameType = {
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
};

export type ColumnType = {
  field: string;
};
