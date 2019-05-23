document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded!')
  
    let users = []
    const usersURL = 'http://localhost:3000/users'
    const divDropDown = document.querySelector('.dropdown')
    const divUserInfo = document.querySelector('.userInfo')
    const selectTag = document.createElement('select')

    let opTitle = document.createElement('option')
    opTitle.innerText = "Select a User"
    opTitle.selected = true
    opTitle.disabled = true
    selectTag.append(opTitle)

    function fetchingUsers(){
        //request dara from server and call renderUser function for each user
        fetch(usersURL)
        .then(res => res.json())
        .then(data => {
            users = data
            users.forEach(user => renderUser(user))
        })
    }

    function renderUser(user){
        // creating and appending options to the selectTag for each User
        let opt = document.createElement('option')
        opt.innerText = user.name
        // opt.value = user.id
        selectTag.append(opt)
    }

    selectTag.addEventListener('change', (e) => {
        //find a user and Use userInfo class to show user's Info inside 'userInfo' div 
        // let user = users.find(user => user.id == e.target.value )
        divUserInfo.innerHTML = ''
        let user = users.find(user => user.id === e.target.selectedIndex )
        let userInfo = new UserInfo()
        let divInfo = userInfo.renderUserInfo(user)
        divUserInfo.append(divInfo)
        // fetchingUsers()
    })

    divDropDown.append(selectTag)
    fetchingUsers()
  
  })