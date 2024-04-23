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
    deleteRefund: (orderId: Number) => `/api/payment/refund/cancel/${orderId}`,
  },
  friends: {
    fetchFriendList: `/api/friend/list`,
    deleteFriend: (friendId: string) => `/api/friend/delete/${friendId}`,
    fetchFavoriteFriendList: `/api/friend/favoriteList`,
    addFavoriteFriend: (friendId: string) =>
      `/api/friend/friendFavorite/${friendId}`,
    deleteFavoriteFriend: (friendId: string) =>
      `/api/friend/friendUnFavorite/${friendId}`,
    fetchBlockFriendList: `/api/friend/blockList`,
    addBlockFriend: (friendId: string) => `/api/friend/friendBlock/${friendId}`,
    deleteBlockFriend: (friendId: string) =>
      `/api/friend/friendUnBlock/${friendId}`,
  },
  signup: {
    registUser: "/api/member/createMember",
    registPet: (id: string) => `/api/member/createDog`,
  },
  matching: {
    fetchCondition: "api/matching/condition",
    updateCondition: "api/matching/condition",
  },
  search: {
    searchMember: "/api/search/members",
  },
};

export default URLs;
