export function getStateFromLocalStorage<T>(key: string) {
    const stateAsString = localStorage.getItem(key)
    if (stateAsString !== null) return JSON.parse(stateAsString) as T
}

export function saveStateToLocalStorage<T>(key: string, state: T) {
    const stateAsString = JSON.stringify(state)
    localStorage.setItem(key, stateAsString)
}