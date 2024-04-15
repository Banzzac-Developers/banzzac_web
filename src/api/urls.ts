const URLs = {
  mswTest: "/todo",
  chat: {
    fetchChatList: (id: string) => `/api/chat/${id}`,
  },
  profile: {
    fetchProfile: (id: string) => `/api/profile/${id}`,
    fetchPets: (id: string) => `/api/profile/dog/${id}`,
    updateProfile: (id: string) => `/api/profile/${id}`,
    updatePet: (id: string, name: string) => `/api/profile/dog/${id}/${name}`,
    deletePet: (id: string, name: string) =>
      `/api/profile/dog/${id}/delete/${name}`,
    withdrawal: (id: string) => `/api/profile/${id}/withdraw`,
  },
};

export default URLs;
