class instagram
{
    constructor(userName,followers,following,posts,relationshipStatus)
    {
        this.userName = userName;
        this.followers = followers;
        this.following = following;
        this.posts = posts;
        this.relationshipStatus = relationshipStatus;
    }

    //methods

    fullDetails = () => `the user name is ${this.userName} who has ${this.followers} and following ${this.following} peoples and currently user is ${this.relationshipStatus}`

    userActivity = () =>
    {
        if(this.posts <= 100)
        {
            console.log("user is inactive"); // return `user is inactive`
        }
        else if(this.posts > 100 && this.posts <= 500) // else if (this.post > 500)
        {                                               // return `user is addicted`
            console.log("user is active");              // else
        }                                                // user is active
        else
        {
            console.log("user is addicted");
        }
    }

    status = () =>
    {
        if(this.relationshipStatus == 'Single')
        {
            return this.fullDetails();
        }
        else{
            return `never mind`
        }
    }
}

let user1 = new instagram("Abhi",29,98,19,"Single");
console.log(user1);
user1.fullDetails();
user1.userActivity();
console.log(user1.status());