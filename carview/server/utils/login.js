let getUserInfo = (req) => {
    console.log(req.session.userInfo)
    return req.session.userInfo;
};
module.exports = {
    getUserInfo
};