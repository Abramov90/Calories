module.exports = function (req, res) {
    res.render('main', { title: 'Main page', facebook: global.user });
};
