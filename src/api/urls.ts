const URLs = {
  mswTest: "/todo",
  chat: {
    fetchChatList: (id: string) => `/api/chat/${id}`,
  },
  profile: {
    fetchProfile: `/api/profile`,
    fetchPets: `/api/profile/dog`,
    addPet: `/api/profile/dog`,
    updateProfile: `/api/profile`,
    updateStatusMessage: "/api/profile/status",
    updatePet: (name: string) => `/api/profile/dog/${name}`,
    deletePet: (name: string) => `/api/profile/dog/delete/${name}`,
    withdrawal: `/api/profile/withdraw`,
    logout: "/api/profile/logout",
    fetchPayment: `/api/payment`,
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
    updateCondition: "api/matching/condition",
  },
};

export default URLs;
