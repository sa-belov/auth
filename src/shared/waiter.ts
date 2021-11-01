/** Функция для имитации ожидания ответа от сервера  */
const waiter = async (time = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), time)
  })
}

export default waiter
