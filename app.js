var modDropdown = document.getElementById('model-dropdown'),
    modMenu = document.getElementById('models');


        modDropdown.addEventListener('click', toggleModels);

        function toggleModels(e){

            if (modMenu.style.display === 'none'){
                modMenu.style.display = 'block';
                modMenu.style.transition = '5s';
            }
            else{
                modMenu.style.display = 'none';
            }


            e.preventDefault
        };

