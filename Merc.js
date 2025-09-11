function scrollToSection(sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }

        // Thêm event listener cho các button
        document.addEventListener('DOMContentLoaded', function() {
            const buttons = document.querySelectorAll('.button-car-type');
            
            buttons.forEach(button => {
                button.addEventListener('click', function() {
                    const buttonText = this.textContent.trim();
                    
                    // Xác định section cần cuộn đến
                    switch(buttonText) {
                        case 'Sedans':
                            scrollToSection('sedans-section');
                            break;
                        case 'Xe địa hình/SUV':
                            scrollToSection('suv-section');
                            break;
                        case 'Xe Coupé':
                            scrollToSection('coupe-section');
                            break;
                        case 'Cabriolet':
                            scrollToSection('cabriolet-section');
                            break;
                    }
                    
                    // Thêm active state cho button
                    buttons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                });
            });
        });