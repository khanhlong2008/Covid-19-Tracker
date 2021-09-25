

let data = [
    
        {
          "country": "Afghanistan",
          "timeline": {
            "9/20/21": 3133227,
            "9/21/21": 3133227,
            "9/22/21": 3133227,
            "9/23/21": 3133227,
            "9/24/21": 3133227
          }
        },
        {
          "country": "Albania",
          "timeline": {
            "9/20/21": 1657595,
            "9/21/21": 1665590,
            "9/22/21": 1674093,
            "9/23/21": 1674093,
            "9/24/21": 1674093
          }
        },
        {
          "country": "Algeria",
          "timeline": {
            "9/20/21": 9989662,
            "9/21/21": 9989662,
            "9/22/21": 9989662,
            "9/23/21": 9989662,
            "9/24/21": 9989662
          }
        },
        {
          "country": "Andorra",
          "timeline": {
            "9/20/21": 93430,
            "9/21/21": 93430,
            "9/22/21": 93430,
            "9/23/21": 93430,
            "9/24/21": 93430
          }
        },
        {
          "country": "Angola",
          "timeline": {
            "9/20/21": 2820134,
            "9/21/21": 2820134,
            "9/22/21": 2820134,
            "9/23/21": 2820134,
            "9/24/21": 2820134
          }
        },
        {
          "country": "Anguilla",
          "timeline": {
            "9/20/21": 18565,
            "9/21/21": 18565,
            "9/22/21": 18565,
            "9/23/21": 18565,
            "9/24/21": 18565
          }
        },
        {
          "country": "Antigua and Barbuda",
          "timeline": {
            "9/20/21": 81915,
            "9/21/21": 81915,
            "9/22/21": 81915,
            "9/23/21": 81915,
            "9/24/21": 81915
          }
        }
  ]

  let new_data = data.map((item)=>{
	let p =[]
	let timeline = item?.timeline 
	if (!timeline){
		return null;
	}
	for (let k in timeline){
	p.push({
        x:k,y:timeline[k]
    })
	}
    p.sort((current,next)=>{
        let c = Date.parse(current.x)
        let n = Date.parse(next.x)
        return( n.valueOf() - c.valueOf())
    })
	let d = {
	...item,
        p
	}
	delete d.timeline;
    
	return d
    
})
console.log(JSON.stringify(new_data))
