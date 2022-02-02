import create from 'zustand';

const useStore = create(set => ({
    profiles: {},
    setProfile: (payload) => set(() => ({
        profiles: payload
    })),
    removeProfile: (payload) => set(state => ({
        profiles: mutRemoteProfile(state.profiles, payload)
    }))
}))

const mutRemoteProfile = (data) => {
    let dataFilter = data.filter(d => d.id !== payload.id)

    return dataFilter
}

export default useStore