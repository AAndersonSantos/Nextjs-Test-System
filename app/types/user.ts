interface User {
  name: { first: string; last: string };
  email: string;
  picture: { thumbnail: string };
  location: { country: string; city: string };
}

export interface UsersTableProps {
  users: User[];
  page: number;
  onPageChange: (page: number) => void;
}