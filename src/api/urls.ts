const URLs = {
  mswTest: "/todo",
  chat: {
    fetchChatList: (id: string) => `/api/chat/${id}`,
  },
  profile: {
    fetchProfile: (id: string) => `/api/profile/${id}`,
    fetchPets: (id: string) => `/api/profile/dog/${id}`,
  },
};

export default URLs;
