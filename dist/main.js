// const render = new render()
const apiManager = new ApiManager()


// const pageLoad = function(){
  
// }

$('.container').on("click", 'i', function(){
  let currentID = this.id
  console.log(currentID)
  // render.renderMood(apiManager.getMoodSet(currentID))
})

// $('.mood-set').on("click", 'save', function(){
//   apiManager.saveSet()
// })

// $('.mood-set').on("click", 'back', function(){
//   apiManager.deleteSet()
// })
