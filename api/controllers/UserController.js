/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    'new': function(req, res) {
        res.view();
    },
    'create': function(req, res) {
        var params = req.params.all();

        User.create(params, function(err, user) {
            if (err) {
                console.log(err)
            }
        });
        res.redirect('/user/view');
    },
    'view': function(req, res) {
        var users = User.findAll({
            attributes: ['id', 'name', 'email']
        }).then(function(data) {
            res.view({
                users: data
            });
        });
        // res.view({
        //     users: users
        // });

    },
    'edit': function(req, res) {
        var param=req.params.all();
        var users = User.findAll({
            where: {
                id:param.id
            }
        }).then(function(data) {
            res.view({
                user: data[0].dataValues
            });
        });

    },
    'update': function(req, res) {
        var params = req.params.all();

        User.update({name:params.name,email:params.name,password:params.password,cpassword:params.cpassword},{where:{id:params.id}}).then(function(data){
            console.log(data);
            res.redirect('/user/view');
        })
        // res.view({
        //     users: users
        // });

    },
     'delete': function(req, res) {
        var param=req.params.all();
        var users = User.destroy({
            where: {
                id:param.id
            }
        }).then(function(data) {
            
                res.redirect('/user/view');
        });

    },
};