function toggleOptions(selected) {
                document.querySelectorAll('.options').forEach(option => option.style.display = 'none');
                document.getElementById('options-' + selected).style.display = 'block';
                document.getElementById("totalValue").innerText = document.getElementById("unitprice"+selected).innerText;
            }
