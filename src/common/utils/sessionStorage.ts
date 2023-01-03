export function getStateFromSessionStorage<T>(key: string ) {
    const stateAsString = sessionStorage.getItem(key)
    if (stateAsString !== null) return JSON.parse(stateAsString) as T
}

export function saveStateToSessionStorage<T>(key: string, state: T) {
    const stateAsString = JSON.stringify(state)
    sessionStorage.setItem(key, stateAsString)
}