"use client";

import Image from "next/image";

import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  Typography,
  Pagination,
  Stack,
} from "@mui/material";

import { UsersTableProps } from "../types/user";

export default function UsersTablePage({ users, page, onPageChange }: UsersTableProps) {
  return (
    <>
      <Typography variant="h4">Lista de Usuários</Typography>

      <TableContainer component={Paper} className="w-full max-w-4xl shadow-lg mt-12">
        <Table>
          <TableHead
            sx={{
              backgroundColor: (theme) => theme.palette.purpleTheme.main, "& .MuiTableCell-root": { color: (theme) => theme.palette.purpleTheme.contrastText,
                fontWeight: 600,
                fontSize: "1.1rem",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
              },
            }}
          >
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>E-mail</TableCell>
              <TableCell>Localização</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {users.map((user, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Image
                    src={user.picture.thumbnail}
                    width={50}
                    height={50}
                    alt="User"
                    className="rounded-full"
                  />
                </TableCell>

                <TableCell> {user.name.first} {user.name.last} </TableCell>

                <TableCell>{user.email}</TableCell>

                <TableCell>{user.location.city}, {user.location.country}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Stack spacing={2} className="mt-6">
        <Pagination
          count={10}
          page={page}
          onChange={(_, newPage) => onPageChange(newPage)}
          color="purpleTheme"
          sx={{ "& .MuiPaginationItem-root": { fontFamily: "var(--font-inter)",
              fontWeight: 700,
              fontSize: "1rem",
            },
          }}
        />
      </Stack>
    </>
  );
}
