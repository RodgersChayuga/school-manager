export type IUser = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
export type INewUser = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
export type Option = {
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
};

export interface DataTableFilterOption<TData> {
  label: string;
  value: keyof TData;
  items: Option[];
}

export interface DataTableSearchableColumn<TData> {
  id: keyof TData;
  title: string;
}

export interface DataTableFilterableColumn<TData>
  extends DataTableSearchableColumn<TData> {
  options: Option[];
}
