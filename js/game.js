let status = 0
let history = []
let correct = 0
let audio = document.createElement('audio')

function clicked(ids) {
	if (status < 2) {
		let value = document.getElementById(ids.id)
		if (value.classList.contains("unselected") === true) {
			value.className = value.className.replace( /(?:^|\s)unselected(?!\S)/g , ' selected' )
			history.push(value.id)
			status = parseInt(status) + 1
			console.log(status)
			console.log(history)
		} else if (value.classList.contains("incorrect") === true) {
			value.className = value.className.replace( /(?:^|\s)incorrect(?!\S)/g , ' selected' )
			history.push(value.id)
			status = parseInt(status) + 1
			console.log(status)
			console.log(history)
		} else if (value.classList.contains("correct") === true) {
			status = status
			history = history
			console.log(status)
			console.log(history)
		} else {
			value.className = value.className.replace( /(?:^|\s)selected(?!\S)/g , ' unselected' )
			status = parseInt(status) - 1
			history.pop(value.id)
			console.log(status)
			console.log(history)
		} 
	} else {
		let undo = document.getElementsByTagName("div")
		let pick1 = undo.namedItem(history[0])
		let pick2 = undo.namedItem(history[1])
		pick1.className = pick1.className.replace( /(?:^|\s)selected(?!\S)/g , ' unselected' )
		pick1.className = pick1.className.replace( /(?:^|\s)incorrect(?!\S)/g , ' unselected' )
		pick2.className = pick2.className.replace( /(?:^|\s)selected(?!\S)/g , ' unselected' )
		pick2.className = pick2.className.replace( /(?:^|\s)incorrect(?!\S)/g , ' unselected' )
		status = 0
		history = []
		let value = document.getElementById(ids.id)
		if (value.classList.contains("unselected") === true) {
			value.className = value.className.replace( /(?:^|\s)unselected(?!\S)/g , ' selected' )
			history.push(value.id)
			status = parseInt(status) + 1
			console.log(status)
			console.log(history)
		} else if (value.classList.contains("incorrect") === true) {
			value.className = value.className.replace( /(?:^|\s)incorrect(?!\S)/g , ' selected' )
			history.push(value.id)
			status = parseInt(status) + 1
			console.log(status)
			console.log(history)
		} else if (value.classList.contains("correct") === true) {
			status = status
			history = history
			console.log(status)
			console.log(history)
		} else {
			value.className = value.className.replace( /(?:^|\s)selected(?!\S)/g , ' unselected' )
			status = parseInt(status) - 1
			history.pop(value.id)
			console.log(status)
			console.log(history)
		} 
	}
}

function checkAnswer() {
	if (history.length == 2) {
		if ((history[0] == 'sam1' || history[0] == 'sam2') && (history[1] == 'sam2' || history[1] == 'sam1')) {
			let access1 = document.getElementById("sam1")
			let access2 = document.getElementById("sam2")
			access1.className = access1.className.replace( /(?:^|\s)selected(?!\S)/g , ' correct' )
			access2.className = access2.className.replace( /(?:^|\s)selected(?!\S)/g , ' correct' )
			correct = parseInt(correct) + 1
			audio.src = './audio/snaps-01.wav'
			audio.play()
		} else if ((history[0] == 'sam3' || history[0] == 'sam4')  && (history[1] == 'sam4' || history[1] == 'sam3')) {
			let access1 = document.getElementById("sam3")
			let access2 = document.getElementById("sam4")
			access1.className = access1.className.replace( /(?:^|\s)selected(?!\S)/g , ' correct' )
			access2.className = access2.className.replace( /(?:^|\s)selected(?!\S)/g , ' correct' )
			correct = parseInt(correct) + 1
			audio.src = './audio/snaps-01.wav'
			audio.play()
		} else if ((history[0] == 'sam5' || history[0] == 'sam6')  && (history[1] == 'sam6' || history[1] == 'sam5')) {
			let access1 = document.getElementById("sam5")
			let access2 = document.getElementById("sam6")
			access1.className = access1.className.replace( /(?:^|\s)selected(?!\S)/g , ' correct' )
			access2.className = access2.className.replace( /(?:^|\s)selected(?!\S)/g , ' correct' )
			correct = parseInt(correct) + 1
			audio.src = './audio/snaps-01.wav'
			audio.play()
		} else if ((history[0] == 'sam7' || history[0] == 'sam8')  && (history[1] == 'sam8' || history[1] == 'sam7')) {
			let access1 = document.getElementById("sam7")
			let access2 = document.getElementById("sam8")
			access1.className = access1.className.replace( /(?:^|\s)selected(?!\S)/g , ' correct' )
			access2.className = access2.className.replace( /(?:^|\s)selected(?!\S)/g , ' correct' )
			correct = parseInt(correct) + 1
			audio.src = './audio/snaps-01.wav'
			audio.play()
		} else {
			let access1 = document.getElementById(history[0])
			let access2 = document.getElementById(history[1])
			access1.className = access1.className.replace( /(?:^|\s)selected(?!\S)/g , ' incorrect' )
			access2.className = access2.className.replace( /(?:^|\s)selected(?!\S)/g , ' incorrect' )
			audio.src = './audio/autistic__error.wav'
			audio.play()
		}
	}

	if (correct == 4) {
		M.toast({html: 'Masyaa Allah betul semua! Jangan lupa dibaca ya!'});
		audio.src = './audio/Cheering.mp3'
		audio.play()
	}
}