chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setTimeout(function() {
	if (document.readyState === "complete") {
		// clearInterval(readyStateCheckInterval);
		const database = []
		if(window.location.href!=="https://www.fiverr.com/users/aniesdigital/requests"){
			window.location.href="https://www.fiverr.com/users/aniesdigital/requests"
		}else{
			console.log('am in')
			// for (x in [...Array(20)]){
			// 	window.scrollTo({behavior: 'smooth', top: window.innerHeight})
			// 	document.querySelector(".db-load-more a").click()
			// }

			fetch("https://www.fiverr.com/users/aniesdigital/requests?current_filter=active&page=2&per_page=150&_=1621353432620", {
			"headers": {
				"accept": "text/javascript",
				"accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
				"cache-control": "no-cache",
				"pragma": "no-cache",
				"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
				"sec-ch-ua-mobile": "?0",
				"sec-fetch-dest": "empty",
				"sec-fetch-mode": "cors",
				"sec-fetch-site": "same-origin",
				"x-csrf-token": "1622563032.cn8Pu9dyRiSAFD29Ha+1zzPdC6grzQuHKA5fVtfhG7s=",
				"x-requested-with": "XMLHttpRequest"
			},
			"referrer": "https://www.fiverr.com/users/aniesdigital/requests",
			"referrerPolicy": "strict-origin-when-cross-origin",
			"body": null,
			"method": "GET",
			"mode": "cors",
			"credentials": "include"
			}).then((response)=>response.json())
			.then((result)=>{
				console.log("data recieves",result)
			})
			.catch(console.error)


			let rows = document.querySelectorAll("tbody tr")

			

			for(x in rows){
				try{

					/**
					 * id of the post request
					 */
					let id = rows[x]?.dataset?.id

					/**
					 * date the projects was posted
					 */
					let date = rows[x]?.querySelector('td.date > span')?.innerText
	
					/**
					 * name of the buyer who posted the request
					 */
					let buyerName = rows[x]?.querySelector('td.profile-40 > .user-pict-40 img')?.alt
					
	
					/**
					 * buyer profile image url
					 */
					let buyerUrl = rows[x]?.querySelector('td.profile-40 > .user-pict-40 img')?.src
					
	
					/**
					 * details of the pojects
					 */
					let seeMoreBtn = rows[x].querySelector('td.see-more > .text-wrap a.btn-see-more')
					if(seeMoreBtn)seeMoreBtn.click()
					let details = rows[x].querySelector('td.see-more > .text-wrap span')?.innerText
	
					/**
					 * list of project tags
					 */
					let tagElements = rows[x]?.querySelector('td.see-more .tags-standard')
	
					let tags
	
					if(tagElements){
						tags = [tagElements.querySelectorAll('span')].map(tag=>tag.innerText)
	
					}else{
						tags = []
					}
	
					/**
					 * number of offers submitted by sellers
					 */
					let offerSubmitted = rows[x]?.querySelector('td.applications')?.innerText
	
					/**
					 * expected duration for the project to be completed
					 */
					let durations = rows[x]?.querySelector('td.hidden-action.t-a-center.with-text .hover-hide')?.innerText
	
					/**
					 * budget of the project
					 */
					let budget = rows[x]?.querySelectorAll('td.hidden-action.t-a-center.with-text')[1].querySelector('.hover-hide')?.innerText
	
	
					
					database.push({
						id,
						buyerName,
						buyerUrl,
						date,
						details,
						tags,
						offerSubmitted,
						durations,
						budget
					})
				}catch(error){
					console.error(error)
				}

			}


			console.log("database",database)
			
		}

		
		
		}
	}, 3000);




});