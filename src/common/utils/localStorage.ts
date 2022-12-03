export function getStateFromLS<T> (key: string, currentState: T ) {
    const stateAsString = localStorage.getItem(key)
    if (stateAsString !== null) currentState = JSON.parse(stateAsString) as T
    return currentState
}

export function saveStateToLS<T>(key: string, state: T) {
    const stateAsString = JSON.stringify(state)
    localStorage.setItem(key, stateAsString)
}