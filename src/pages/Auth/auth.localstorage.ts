import { UserWithPassword } from './auth.types'
import { nanoid } from '@reduxjs/toolkit'

const storageKey = 'users'

const getUser = (id: string) => {
  const users = JSON.parse(localStorage.getItem(storageKey)) ?? []

  return users.find((user) => user.id === id)
}

const addUser = (user: UserWithPassword) => {
  const users = JSON.parse(localStorage.getItem(storageKey)) ?? []

  if (users.some((u) => u.email === user.email)) {
    throw new Error('User with this email already exists')
  }

  users.push({ ...user, id: nanoid(10), created_at: Date.now() })

  localStorage.setItem(storageKey, JSON.stringify(users))
}

const findUser = (user: { email: string; password: string }) => {
  const users: UserWithPassword[] = JSON.parse(localStorage.getItem(storageKey)) ?? []

  return users.find((u) => u.email === user.email && u.password === user.password)
}

const updateUser = (user: UserWithPassword) => {
  const users: UserWithPassword[] = JSON.parse(localStorage.getItem(storageKey)) ?? []
  const userIndex = users.findIndex((u) => u.id === user.id)

  users.splice(userIndex, 1, user)
  localStorage.setItem(storageKey, JSON.stringify(users))
}

const authStorage = { addUser, findUser, updateUser, getUser }
export default authStorage
