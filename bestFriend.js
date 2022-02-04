// 4 . largest element/name return in an array / bestFriend ||
function bestFriend(friends) {
    let largestName = "";
    for (const friend of friends) {
        if (largestName.length < friend.length) { // I can check string length
            largestName = friend;
        }
    }
    return largestName;
};
const myFriends = ["akkas", "jakkas", "naki", "nabila", "Mr. Abdur Hamid", "nur", "cherag ali", "giyas"];
const myFriend = bestFriend(myFriends);
console.log(myFriend);