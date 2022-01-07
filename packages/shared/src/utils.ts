export function sleep(timeout: number): Promise<any> {
  function createSleepPromise(timeout: number) {
    const timeoutFunction = setTimeout

    return new Promise((resolve) => {
      timeoutFunction(resolve, timeout)
    })
  }
  return createSleepPromise(timeout)
}
