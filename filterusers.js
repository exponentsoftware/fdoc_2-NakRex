function scoresGreaterThan85(users) {
    let newArr = [];
    for (let i = 0; i < users.length; i++){
        if (users[i].scores > 85) {
            newArr.push(users[i].name)
        }
    }
    return newArr;
}

//add user if does not exist
function addUser(users, user) {
    let userExists = false;
    for (let i = 0; i < users.length; i++) { 
        if(users[i].name==user){
            userExists = true;
        }
    }
    if (!userExists) {
        users.push(user)
    }

}

function addUserSkill(users, skill, username) {
    for (let i = 0; i < users.length; i++) { 
        if(users[i].name==username){
            users[i].skills.push(skill)
        }
	}
	return users
}

function editUser(users, nametoreplace, nametoreplacewith) {
	for (let i = 0; i < users.length; i++) {
		if (users[i].name == nametoreplace) {
			users[i].name = nametoreplacewith;
		}
	}
	return users;
}
const users = [
	{
		name:'Brook', 
		scores:75,
		skills:['HTM', 'CSS', 'JS'],
		age:16
	},
	{
		name:'Alex', 
		scores:80,
		skills:['HTM', 'CSS', 'JS'],
		age:18
	}, 
	{
		name:'David', 
		scores:75,
		skills:['HTM', 'CSS'],
		age:22
	}, 
	{
		name:'John', 
		scores:85,
		skills:['HTM'],
		age:25
	},
	{
		name:'Sara',
		scores:95,
		skills:['HTM', 'CSS', 'JS'],
		age: 26
	},
	{
		name:'Martha', 
		scores:80,
		skills:['HTM', 'CSS', 'JS'],
		age:18
	},
	{
		name:'Thomas',
		scores:90,
		skills:['HTM', 'CSS', 'JS'],
		age:20
	}
	];

// console.log(scoresGreaterThan85(users));
// console.log(addUserSkill(users, 'java', 'John' ));
// console.log(editUser(users, 'John', 'Nasim'));