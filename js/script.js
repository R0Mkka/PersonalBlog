window.addEventListener('DOMContentLoaded', function() {

	inactivityTime();

	function inactivityTime() {
	    let timer;

	    window.onload = resetTimer;
	    document.onmousemove = resetTimer;
	    document.onkeypress = resetTimer;

	    function logout() {
	        // location.reload(); // page reload
	        if(!displayBlockShow) {
	        	removeSlicks();
		        toggleClass(displayBlock, 'slick-top');
				displayBlockShow = true;
	        }
	    }

	    function resetTimer() {
	        clearTimeout(timer);
	        timer = setTimeout(logout, 60000);
	    }
	}; 


	let myWorks = document.querySelector('.my-works'),
		sidebar = document.querySelector('.sidebar'),
		myWorksBlock = document.querySelector('.my-works-block'),
		usefulThingsBlock = document.querySelector('.useful-things-block'),
		aboutMeBlock = document.querySelector('.about-me-block'),
		aboutBlogBlock = document.querySelector('.about-blog-block'),
		contactsBlock = document.querySelector('.contacts-block');

	let displayBlock = document.querySelector('.display-block');

	let displayBlockShow = true;

	sidebar.addEventListener('click', function(event) {
		let target = event.target;

		switch(target.className) {
			case 'my-works':
				sidebarClick('my-works');
				break;
			case 'useful-things':
				sidebarClick('useful-things');
				break;
			case 'about-me':
				sidebarClick('about-me');
				break;
			case 'about-blog':
				sidebarClick('about-blog');
				break;
			case 'contacts last':
				sidebarClick('contacts');
				break;
			default: break;
		}
	});

	function sidebarClick(element) {
		removeSlicks();
		if(displayBlockShow){
			toggleClass(displayBlock, 'slick-top');
			displayBlockShow = false;
		}
		toggleSlick(element);
	}

	function removeSlicks() {
		myWorksBlock.classList.remove('slick-left');
		usefulThingsBlock.classList.remove('slick-left');
		aboutMeBlock.classList.remove('slick-left');
		aboutBlogBlock.classList.remove('slick-left');
		contactsBlock.classList.remove('slick-left');
	}

	function toggleClass(element, elClass) {
		if(element.classList.contains(elClass)) {
			element.classList.remove(elClass);
		} else {
			element.classList.add(elClass);
		}
	}

	function toggleSlick(element) {
		let elem = document.querySelector('.' + element + '-block');

		if(elem.classList.contains('slick-left')){
			elem.classList.remove('slick-left');
		} else {
			elem.classList.add('slick-left');
		}
	}

});

