'use client'

import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { useAppStore, Company, User } from '@/store'
import {
  Button
} from '@/components/ui/button'
import {
  Input
} from '@/components/ui/input'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

export default function AdminPage() {
  const {
    users,
    companies,
    addUser,
    updateUser,
    deleteUser,
    addCompany,
    deleteCompany,
  } = useAppStore()

  const [newCompanyName, setNewCompanyName] = useState('')
  const [newUser, setNewUser] = useState<Partial<User>>({ name: '', email: '' })

  return (
    <div className="p-6 grid grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Company</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex gap-2">
            <Input
              placeholder="New company"
              value={newCompanyName}
              onChange={(e) => setNewCompanyName(e.target.value)}
            />
            <Button
              onClick={() => {
                addCompany({ id: uuid(), name: newCompanyName })
                setNewCompanyName('')
              }}
            >
              Add
            </Button>
          </div>
          {companies.map((c) => (
            <div
              key={c.id}
              className="flex justify-between items-center border p-2 rounded"
            >
              <span>{c.name}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => deleteCompany(c.id)}
              >
                Borrar
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Users</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="grid grid-cols-3 gap-2">
            <Input
              placeholder="Name"
              value={newUser.name || ''}
              onChange={(e) =>
                setNewUser((u) => ({ ...u, name: e.target.value }))
              }
            />
            <Input
              placeholder="Email"
              value={newUser.email || ''}
              onChange={(e) =>
                setNewUser((u) => ({ ...u, email: e.target.value }))
              }
            />
            <Select
              onValueChange={(val) =>
                setNewUser((u) => ({ ...u, companyId: val }))
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Company" />
              </SelectTrigger>
              <SelectContent>
                {companies.map((c) => (
                  <SelectItem key={c.id} value={c.id}>
                    {c.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button
            onClick={() => {
              addUser({ id: uuid(), ...newUser } as User)
              setNewUser({ name: '', email: '' })
            }}
          >
            Add user
          </Button>

          {users.map((u) => (
            <div
              key={u.id}
              className="flex justify-between items-center border p-2 rounded"
            >
              <div>
                {u.name} — {u.email}{' '}
                <span className="text-sm text-muted-foreground">
                  ({companies.find((c) => c.id === u.companyId)?.name ||
                    'Whitout company'})
                </span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => deleteUser(u.id)}
              >
                Delete
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
)
}
