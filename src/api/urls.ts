const URLs = {
  mswTest: "/todo",
  chat: {
    fetchChatList: (id: string) => `/api/chat/${id}`,
  },
  profile: {
    fetchProfile: (id: string) => `/api/profile/${id}`,
    fetchPets: (id: string) => `/api/profile/dog/${id}`,
    addPet: (id: string) => `/api/profile/dog/${id}`,
    updateProfile: (id: string) => `/api/profile/${id}`,
    updateStatusMessage: "/api/profile/status",
    updatePet: (id: string, name: string) => `/api/profile/dog/${id}/${name}`,
    deletePet: (id: string, name: string) =>
      `/api/profile/dog/${id}/delete/${name}`,
    withdrawal: (id: string) => `/api/profile/${id}/withdraw`,
  },
  friends: {
    fetchFriendList: (id: string) => `/api/friend/list/${id}`,
    deleteFriend: (id: string, friendId: string) =>
      `/api/friend/${id}/delete/${friendId}`,
  },
  signup: {
    registUser: "/api/member/createMember",
    registPet: (id: string) => `/api/member/createDog/${id}`,
  },
};

export default URLs;
