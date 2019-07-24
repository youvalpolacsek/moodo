class ApiManager{
  
  constructor(){
    this.userMoodSet 
    this.username
  }
  
   async userLogin(name){
    let data = await $.post(`/user`, {name: name})
    this.username = data.name
    return data
  }

  async getMoodSet(mood){
    let moodSet
    await $.get(`/moods/${mood}`, function(data){
      moodSet = data
    })
    // test if 'this.userMoodSet = moodSet' works
    return this.userMoodSet = moodSet
  }

  async getUserData(){
    let userData = await $.get(`/user/${this.username}`)
    return userData
  }

  saveSet(){
    let userDataToSave = this.userMoodSet
    userDataToSave.username = this.username
    $.post('/moods', userDataToSave)
  }

  deleteSet(moodToDel){
    moodToDel.username = this.username
    $.ajax({
      url: '/moods',
      data: moodToDel,
      type: 'DELETE',
      success: () => console.log(`delete ${moodToDel.mood}`)  
    })
  }
}