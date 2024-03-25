import type ZaptimeConfig from './ZaptimeConfig';

export type ConfigWithoutToken = Omit<ZaptimeConfig, 'token'>;

export type Location = {
  label: string;
  value: string;
  default: boolean;
};

export type InitData = {
  configuration: ConfigWithoutToken;
  disabled: boolean;
  locations: Location[];
};

export type Success = InitData;
export type Errors = 'invalidToken';
