import { useQueryGetClientes } from '../api/queries/getClientes'

export const useUser = (id) => {
  const { data: dataUser } = useQueryGetClientes()

  const user = dataUser.find((user) => user.id === id)

  return user
}
