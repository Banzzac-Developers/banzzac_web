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
    fetchPayment: (id: string) => `/api/payment/${id}`,
    fetchRefund: "/api/payment/refund",
    updateRefund: "/api/payment/refund",
    addRefund: "/api/payment/refund/insert",
    deleteRefund: (orderId: string) => `/api/payment/refund/cancel/${orderId}`,
  },
  friends: {
    fetchFriendList: (id: string) => `/api/friend/list/${id}`,
    deleteFriend: (id: string, friendId: string) =>
      `/api/friend/${id}/delete/${friendId}`,
    fetchFavoriteFriendList: (id: string) => `/api/friend/favoriteList/${id}`,
    addFavoriteFriend: (id: string, friendId: string) =>
      `/api/friend/${id}/friendFavorite/${friendId}`,
    deleteFavoriteFriend: (id: string, friendId: string) =>
      `/api/friend/${id}/friendUnFavorite/${friendId}`,
  },
  signup: {
    registUser: "/api/member/createMember",
    registPet: (id: string) => `/api/member/createDog/${id}`,
  },
  matching: {
    fetchCondition: "api/matching/condition",
  },
};

export default URLs;
