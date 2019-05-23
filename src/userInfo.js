class UserInfo{
   
    renderUserInfo(user){
       
        let div = document.createElement('div')

        let pTag = document.createElement('p')
        pTag.innerText = user.name

        let img = document.createElement('img')
        img.src = user.image

        let h4 = document.createElement('h4')
        h4.innerText = `Total Calories: ${user.calories.total_calories}`

        let form = document.createElement('form')

        let input1 = document.createElement('input')
        input1.type = "number" //by default it is a text type
        input1.placeholder = "Enter Calories"

        let input2 = document.createElement('input')
        input2.type = 'submit'
        input2.value = 'add calories'


        form.append(input1, input2)

        form.addEventListener('submit', (e) => {
            e.preventDefault()
            let cal = new Calories(user.calories.total_calories)
            let total_cal = cal.renderCalories(input1.value, user.id)
            h4.innerText = `Total Calories: ${total_cal}`
            user.calories.total_calories = total_cal

        })
        
        let btn = document.createElement('button')
        btn.innerText = 'reset calories'

        btn.addEventListener('click', (e) => {
            e.preventDefault()
            let cal = new Calories(0)
            let total_cal = cal.renderCalories(0, user.id)
            h4.innerText = `Total Calories: ${total_cal}`
            user.calories.total_calories = total_cal
        })

        div.append(pTag, img, h4, form, btn)

        return div
    }


}