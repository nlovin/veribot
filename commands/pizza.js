module.exports = {
    name: 'pizza',
    description: 'Hello Pizza',
    execute(message, args){

        if(message.member.roles.cache.has('349640672237715468')){
            message.author.send('cat!');
        }
    }
}


