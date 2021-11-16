const Controller = require('egg').Controller;


class UserController extends Controller {
    async list() {
        const { ctx } = this;
        const userList = await ctx.service.user.searchAll();
        ctx.body = {
            success: true,
            data: userList
        }
    }

    // 登录接口
    async login() {
        const { ctx } = this;
        const data = ctx.request.body;
        console.log('打印', data);
        const resoult = await ctx.service.user.login(data);
        console.log('打印resoult', resoult)
        if (resoult) {
            ctx.body = {
                success: true,
                msg: '登录成功'
            }
        } else {
            ctx.body = {
                success: false,
                msg: '登录失败'
            }
        }
    }

}
module.exports = UserController;