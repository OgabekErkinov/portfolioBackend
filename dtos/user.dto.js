module.exports = class UserDto {
    username
    id
    isOnline

    constructor(model){
        this.username = model.username
        this.id = model._id
        this.isOnline = model.isOnline
    }

}