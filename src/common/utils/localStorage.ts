export async function getStateFromLS<T> (key: string ) {
    const stateAsString = await localStorage.getItem(key)
    if (stateAsString !== null) return JSON.parse(stateAsString) as T
}

export function saveStateToLS<T>(key: string, state: T) {
    const stateAsString = JSON.stringify(state)
    localStorage.setItem(key, stateAsString)
}