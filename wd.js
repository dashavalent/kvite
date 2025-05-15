 function openTab(tabId) {
        // Сховати всі таби
        const allTabs = document.querySelectorAll('.tab-content');
        allTabs.forEach(tab => {
            tab.classList.remove('active');
        });

        // Зняти активність з усіх кнопок
        const allButtons = document.querySelectorAll('.tab-btn');
        allButtons.forEach(btn => {
            btn.classList.remove('active');
        });

        // Показати обраний таб
        const selectedTab = document.getElementById(tabId);
        if (selectedTab) {
            selectedTab.classList.add('active');
        }

        // Зробити активною натиснуту кнопку
        const clickedButton = Array.from(allButtons).find(btn => btn.getAttribute('onclick').includes(tabId));
        if (clickedButton) {
            clickedButton.classList.add('active');
        }

        // Якщо обрано вкладку "Всі квіти", показати всі таби
        if (tabId === 'all') {
            allTabs.forEach(tab => tab.classList.add('active'));
        }
    }