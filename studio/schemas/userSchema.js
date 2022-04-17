export const userSchema ={
    name: 'users',
    title: 'Users',
    type: 'document',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'walletAddress',
            type: 'string',
            title: 'Wallet Address'
        },
        {
            name: 'profileImage',
            type: 'image',
            title: 'Profile Image'
        },
        {
            name: 'stack',
            type: 'array',
            title: 'Stack',
            of:[{type: 'string'}]
        },
        {
            name: 'likes',
            type: 'array',
            title: 'Likes',
            of:[{type: 'reference', to:{type: 'users'}}]
        },


    ],
}