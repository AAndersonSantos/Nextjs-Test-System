"use client";

import { useEffect, useState } from "react";
import UsersTable from "../components/UsersTable";

interface User {
  name: { first: string; last: string };
  email: string;
  picture: { thumbnail: string };
  location: { country: string; city: string };
}

export default function UsersTablePage() {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState(1);

  async function loadUsers(pageNumber: number) {
    const res = await fetch(`https://randomuser.me/api/?page=${pageNumber}&results=10&seed=users`);
    const json = await res.json();
    const data = json.results;
    setUsers(data);
  }

  useEffect(() => {
    async function init() {
      await loadUsers(page);
    }

    init();
  }, [page]);

  return (
    <div className="p-8 min-h-screen flex flex-col items-center bg-neutral-200">
     <UsersTable
        users={users}
        page={page}
        onPageChange={(page) => setPage(page)}
      />
    </div>
  );
}
