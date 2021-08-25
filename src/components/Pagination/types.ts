export interface PaginationProps {
  activePage: number;
  count: number;
  totalPerPage: number;
  onChange: (page: PaginationState) => void;
}

export interface PaginationState {
  page: number;
  limit: number;
  key: string;
}
