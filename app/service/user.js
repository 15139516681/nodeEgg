const Service = require('egg').Service;

class UserService extends Service {
    async searchAll() {
        const users = await this.app.mysql.get('user', { name: '李四' });
        return { users };
    }

    // 登录
    async login(data) {
        const resoult = await this.app.mysql.get('user', { user: data.user, password: data.password });
        return resoult;
    }
}
module.exports = UserService;

