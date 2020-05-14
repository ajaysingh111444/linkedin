(function() {
  const DELETE = "Delete";
  const goneFn = () => {
    const timer = setInterval(() => {
      const dropdown = document.querySelector('.msg-thread-actions__control');
      if (!dropdown) return clearInterval(timer);
      dropdown.click(); // Opens Up Menu
      const dropdownItems = document.querySelectorAll('.msg-thread-actions__dropdown-option');
      for (let i = 0; i < dropdownItems.length; i++) {
        let txt = dropdownItems[i].textContent.trim();
        if (txt === DELETE){
          dropdownItems[i].click();
          setTimeout(() => {
            const frame = document.querySelector('.msg-modal-delete-convo');
			setTimeout(() => {
				const delBtn = frame.querySelector('.artdeco-button--primary');
				delBtn.click();
			}, 250);
          }, 500);
        }
      }
	  
    }, 1000);
	setInterval(() => {
		let objDiv = document.querySelector('.msg-conversations-container__conversations-list');
		objDiv.scrollTop = objDiv.scrollHeight - objDev.clientHeight;
	}, 5000);
  };
  goneFn();
})();
